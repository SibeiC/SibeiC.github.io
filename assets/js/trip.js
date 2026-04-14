// Trip page scripts:
//   1. Theme toggle (session-only override of prefers-color-scheme, no localStorage)
//   2. Thousand-separator formatting for .fmt-num spans
//   3. Auto-scroll to today's day-section if today falls within trip dates
//
// Loaded via `<script src="..." defer>` from _layouts/trip.html so all three
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
