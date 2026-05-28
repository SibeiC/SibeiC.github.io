// Trip page scripts:
//   1. Theme toggle (session-only override of prefers-color-scheme, no localStorage)
//   2. Thousand-separator formatting for .fmt-num spans
//   3. Auto-scroll to today's day-section if today falls within trip dates
//   4. Per-day weather chips via Open-Meteo (no API key; gated to a window
//      around the trip dates; one batched request; 6h localStorage cache)
//
// Loaded via `<script src="..." defer>` from _layouts/trip.html so all
// IIFEs run after DOM parse but before the load event.

(function () {
  // Theme toggle
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function effective() {
    var forced = document.documentElement.getAttribute('data-theme');
    return forced || (mq.matches ? 'dark' : 'light');
  }
  function updateIcon() {
    btn.textContent = effective() === 'dark' ? '🌞' : '🌙';
  }
  btn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-theme', effective() === 'dark' ? 'light' : 'dark');
    updateIcon();
  });
  mq.addEventListener('change', updateIcon);
  updateIcon();
})();

(function () {
  // Thousand-separator formatting — locale from <html lang="...">
  var locale = document.documentElement.lang || 'zh-CN';
  document.querySelectorAll('.fmt-num').forEach(function (el) {
    var match = el.textContent.match(/^(.*?)(-?\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    var n = parseFloat(match[2]);
    if (isNaN(n)) return;
    el.textContent = match[1] + n.toLocaleString(locale, { maximumFractionDigits: 2 }) + match[3];
  });
})();

(function () {
  // Today-jump — highlight and scroll to today's day-section if in range
  var sections = document.querySelectorAll('.day-section[data-date]');
  if (!sections.length) return;
  var today = new Date();
  var todayStr = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].getAttribute('data-date') === todayStr) {
      if (!window.location.hash) {
        sections[i].scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      sections[i].style.boxShadow = '0 0 0 3px var(--day-color, #c0392b)';
      sections[i].style.borderRadius = '12px';
      sections[i].style.padding = '8px';
      break;
    }
  }
})();

(function () {
  // Per-day weather chips via Open-Meteo. No API key needed (free, CORS-OK).
  //
  // Abuse-curbing: the API call only fires when today is within
  // [tripStart - 14 days, tripEnd + 2 days]. Outside that window the
  // placeholders stay empty and `fetch` is never called.
  //
  // One batched multi-location request covers the whole trip, then results
  // are cached in localStorage for 6h (also rate-limits repeat visits).
  var els = document.querySelectorAll('.day-weather[data-lat][data-lon][data-date]');
  if (!els.length) return;

  var dates = [];
  var points = [];           // [{lat, lon}] unique
  var pointIndex = {};       // "lat,lon" -> index in points
  els.forEach(function (el) {
    dates.push(el.getAttribute('data-date'));
    var key = el.getAttribute('data-lat') + ',' + el.getAttribute('data-lon');
    if (!(key in pointIndex)) {
      pointIndex[key] = points.length;
      points.push({
        lat: parseFloat(el.getAttribute('data-lat')),
        lon: parseFloat(el.getAttribute('data-lon'))
      });
    }
  });

  dates.sort();              // ISO YYYY-MM-DD sorts lexically
  var tripStart = new Date(dates[0] + 'T00:00:00');
  var tripEnd = new Date(dates[dates.length - 1] + 'T00:00:00');
  var today = new Date(); today.setHours(0, 0, 0, 0);

  var windowStart = new Date(tripStart); windowStart.setDate(windowStart.getDate() - 14);
  var windowEnd = new Date(tripEnd); windowEnd.setDate(windowEnd.getDate() + 2);
  if (today < windowStart || today > windowEnd) return;

  // Open-Meteo forecast horizon is ~16 days; cap the request range there.
  var apiHorizon = new Date(today); apiHorizon.setDate(apiHorizon.getDate() + 15);
  var reqStart = today > tripStart ? today : tripStart;
  var reqEnd = tripEnd < apiHorizon ? tripEnd : apiHorizon;
  if (reqEnd < reqStart) return;

  function fmtDate(d) {
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  var startStr = fmtDate(reqStart);
  var endStr = fmtDate(reqEnd);
  var cacheKey = 'weather:' + location.pathname + ':' + startStr + ':' + endStr;
  var cacheTTL = 6 * 60 * 60 * 1000;
  var now = Date.now();

  // WMO weather code → emoji (matches the site's emoji aesthetic).
  var iconFor = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️',
    51: '🌦️', 53: '🌦️', 55: '🌦️', 56: '🌦️', 57: '🌦️',
    61: '🌧️', 63: '🌧️', 65: '🌧️', 66: '🌧️', 67: '🌧️',
    71: '❄️', 73: '❄️', 75: '❄️', 77: '❄️',
    80: '🌦️', 81: '🌧️', 82: '🌧️',
    85: '🌨️', 86: '🌨️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };

  function render(locs) {
    els.forEach(function (el) {
      var date = el.getAttribute('data-date');
      var key = el.getAttribute('data-lat') + ',' + el.getAttribute('data-lon');
      var loc = locs[pointIndex[key]];
      if (!loc || !loc.daily || !loc.daily.time) return;
      var di = loc.daily.time.indexOf(date);
      if (di < 0) return;
      var code = loc.daily.weather_code[di];
      var hi = loc.daily.temperature_2m_max[di];
      var lo = loc.daily.temperature_2m_min[di];
      if (hi == null || lo == null) return;
      el.innerHTML =
        '<span class="wx-icon" aria-hidden="true">' + (iconFor[code] || '🌡️') + '</span>' +
        '<span class="wx-temp">' + Math.round(hi) + '°/' + Math.round(lo) + '°</span>';
      el.classList.add('loaded');
    });
  }

  try {
    var raw = localStorage.getItem(cacheKey);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && parsed.t && (now - parsed.t) < cacheTTL && parsed.data) {
        render(parsed.data);
        return;
      }
    }
  } catch (e) { /* localStorage unavailable — fall through to fetch */ }

  var lats = points.map(function (p) { return p.lat; }).join(',');
  var lons = points.map(function (p) { return p.lon; }).join(',');
  var url = 'https://api.open-meteo.com/v1/forecast' +
    '?latitude=' + lats +
    '&longitude=' + lons +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min' +
    '&timezone=auto' +
    '&start_date=' + startStr +
    '&end_date=' + endStr;

  fetch(url).then(function (r) {
    if (!r.ok) throw new Error('weather fetch ' + r.status);
    return r.json();
  }).then(function (data) {
    var normalized = Array.isArray(data) ? data : [data];
    try { localStorage.setItem(cacheKey, JSON.stringify({ t: now, data: normalized })); } catch (e) {}
    render(normalized);
  }).catch(function () { /* silent — empty placeholders stay hidden */ });
})();
