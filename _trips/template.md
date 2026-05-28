---
# ─────────────────────────────────────────────────────────────────────────────
# TRIP DATA TEMPLATE — SCHEMA REFERENCE & AI GENERATION GUIDE
# ─────────────────────────────────────────────────────────────────────────────
#
# AI WORKFLOW (read this first — you are the agent generating a new trip):
#
# Input: the user pastes/uploads a trip plan from one of:
#   • Wanderlog public link or text export
#   • TripIt itinerary
#   • A loose collection of bookings (flights, hotels, attractions list)
#
# Output: a new file at `_trips/<slug>.md` (kebab-case slug → URL path).
#
# Language: set `lang: zh-CN` (default) or `lang: en-US` in the front matter
# below. Each trip is MONOLINGUAL — the layout renders all chrome (card
# titles, chip labels, footer, weekday fallbacks) in the declared language,
# pulling strings from `_data/trip_i18n.yml`. Authored content (day titles,
# details, notes, labels) must be written in the same language — the layout
# does not translate user content. Tone is informative and slightly
# enthusiastic — match `_trips/taiwan-2026.md` (zh-CN) as the reference.
#
# Each comment below is tagged to tell you what to do with that field:
#
#   [FROM SOURCE]   — copy directly from the user's input. Don't make up.
#   [AI:RESEARCH]   — look up via web/knowledge: prices, official URLs,
#                     alternative train/bus times, opening hours, currency
#                     rate as of today, etc. Cite "as of YYYY-MM" if uncertain.
#   [AI:INFER]      — compose from context: descriptions, must-eat lists,
#                     time estimates, transit categorization, day colors, etc.
#   [AI:COMPUTE]    — derive mechanically: today's date, duration math, slug.
#   [USER:CONFIRM]  — flag values you're unsure about and ask the user before
#                     finalizing (estimated hotel prices, fuzzy ticket costs,
#                     speculative restaurant picks).
#
# Things the layout handles automatically — DO NOT pre-compute these:
#   • Cost group subtotals AND grand total (Liquid sums all `amount` fields,
#     converts via `rate`). You only enter raw amounts + `in: primary|secondary`.
#   • Thousand-separator formatting on all `.fmt-num` spans (JS at runtime).
#   • Joining `subtitle` and `cost.notes` arrays with " · " separators.
#   • Today-jump scroll: layout reads `days[].date` and jumps on page load.
#
# Conventions in field comments below:
#   [REQUIRED] / [OPTIONAL]    — whether layout breaks if missing
#   <type>                     — string | number | array | object | bool
#   {a|b|c}                    — enum: only these literal values accepted
#
# File-level rules:
#   • Slug → URL: `_trips/japan-2027.md` → `/trips/japan-2027/`
#   • Avoid leading underscore in filename (Jekyll skips those).
#   • Add `published: false` at top-level while drafting (excludes from build).
#   • YAML FLOW-MAPPING TRAP: inside `{ key: val, key: val }`, any unquoted
#     comma acts as a separator. So `value: NT$ 2,500` is parsed as
#     `value: NT$ 2` + a stray `500: null` key. ALWAYS double-quote values that
#     contain commas, brackets, colons, or `#`:
#         BAD  → { tag: X, value: NT$ 2,500 }
#         GOOD → { tag: X, value: "NT$ 2,500" }
#     (`amount:` in cost items uses raw numbers without commas, so it's safe.)
#   • For multi-line `detail`/`note`/`hotels_note` use YAML `|` block scalar.
#     Inline HTML is allowed (<strong>, <br><br>, <a>, <em>).
#   • REUSABILITY — if the same URL appears 2+ times in this file (typically
#     once in a day's `links:` chip and once in `booking_channels`), declare
#     it ONCE under a top-level `urls:` map with a YAML anchor, then reference
#     via alias at each use site. Saves edits when a URL changes and makes
#     intent explicit. Example:
#         urls:
#           klook_101: &url_klook_101 "https://www.klook.com/zh-CN/activity/1659-…/"
#         # … later in a day item:
#         - { type: ticket, label: Klook, url: *url_klook_101 }
#         # … and in booking_channels:
#         - name: 台北 101 观景台
#           links: [{ label: Klook, url: *url_klook_101 }]
#     YAML anchors do NOT interpolate inside quoted strings — if a URL is
#     embedded in HTML prose (a `note:` block scalar with <a href="…">), leave
#     that one inline. See `_trips/taiwan-2026.md` for a worked example.
# ─────────────────────────────────────────────────────────────────────────────
published: false

# ── Page identity ────────────────────────────────────────────────────────────
layout: trip                          # [REQUIRED] always literal "trip"
lang: zh-CN                           # [USER:CONFIRM] {zh-CN|en-US} default zh-CN. Drives UI chrome language and data lookups (airline/airport names). Each trip is monolingual.
title: 行程标题                        # [REQUIRED][AI:INFER] <string> compose from destination + duration, e.g. "日本九州七日行"
favicon: /assets/images/favicon.ico   # [OPTIONAL] <string> path; defaults to site favicon. Override only if user requests a custom one.

# ── Hero strip (the dark banner at top) ──────────────────────────────────────
subtitle:                             # [OPTIONAL][AI:INFER] <array<string>> list main destinations/cities in visit order; layout joins with " · "
  - 第一站
  - 第二站
  - 第三站
date_range: 2027/1/1 – 1/10           # [OPTIONAL][FROM SOURCE][AI:COMPUTE] derive from earliest/latest source date
duration: 共 N 天 N 夜                 # [OPTIONAL][AI:COMPUTE] count days + nights from date_range
last_updated: 2027/1/1                # [OPTIONAL][AI:COMPUTE] today's date when generating this file

# ── Cost card (auto-totaled) ─────────────────────────────────────────────────
# Layout sums every item in primary currency, then displays grand total in
# both currencies using `rate`. Group subtotals are also auto-computed.
# Omit the entire `cost:` block to hide the card.
cost:
  primary: JPY                        # [REQUIRED if cost present][AI:INFER] <string> DESTINATION (local) currency code
  secondary: SGD                      # [REQUIRED if cost present] <string> traveler's HOME currency — defaults to SGD unless user says otherwise
  rate: 110                           # [REQUIRED if cost present][AI:RESEARCH] <number> 1 secondary = N primary (e.g. "1 SGD ≈ 110 JPY"). Look up current rate.
  rate_note: 2027 年 1 月              # [OPTIONAL][AI:COMPUTE] when rate was sampled — use today's YYYY 年 M 月
  notes:                              # [OPTIONAL][AI:INFER] <array<string>> common exclusions: 每日餐饮 / 小费 / 购物 / 汇率浮动 etc.
    - 每日餐饮
    - 小费
  groups:                             # [REQUIRED if cost present] <array<object>> typical groups: 国际机票 / 住宿 / 交通 / 门票与体验
    - name: 类别名（住宿 / 交通 / 门票 等）  # [REQUIRED] <string>
      icon: 🏨                         # [OPTIONAL] <string> single emoji
      items:                          # [REQUIRED] <array<object>> — at least one
        # [FROM SOURCE] for booking confirmations (hotels, flights, train tickets the user already has)
        # [AI:RESEARCH] for attractions/experiences without explicit prices in source — look up current rates
        # Each item: amount is a RAW NUMBER (no symbols, no commas).
        # `in` MUST be exactly "primary" (local currency) or "secondary" (home currency).
        #   • Most local expenses → in: primary (paid in destination currency)
        #   • Pre-booked-from-home (flights, some hotels) → in: secondary
        # `note` appends "(note)" after the label. Use "估算" for AI:RESEARCH'd values.
        - { label: 当地酒店一晚, amount: 12000, in: primary }
        - { label: 出发国预订的机票, amount: 350, in: secondary, note: 估算 }

# ── Flight card ──────────────────────────────────────────────────────────────
# Omit `flights:` to hide the card entirely.
#
# Airline identity is resolved at BUILD TIME from `_data/airlines.yml`.
# You only supply the IATA 2-char `airline` code + `number` — the layout
# automatically generates:
#   • Display name from `_data/airlines.yml` entry (e.g. "Scoot 酷航 TR 874")
#   • 🔗 管理订票 chip from airline's manage_booking URL
#   • 📡 实时状态 chip as "flightaware.com/live/flight/<ICAO><number>"
#   • The page heading "✈️ 航班信息 · <carrier>" also defaults to first flight's airline name
#
# If the carrier is NOT in `_data/airlines.yml`:
#   → OPEN `_data/airlines.yml` and add it (preferred — benefits all future trips).
#   → Required fields: name, icao (3-char), manage_booking (URL).
#   → AI:RESEARCH the ICAO and current manage-booking URL from airline's official site.
flight_carrier: 航空公司中文名          # [OPTIONAL] only set to override the auto-generated heading carrier name
flights:                              # [OPTIONAL][FROM SOURCE] usually present in TripIt; for Wanderlog look in "Reservations"
  - airline: SQ                       # [REQUIRED][FROM SOURCE] IATA 2-char code (e.g., SQ, TR, JL, CX, EK)
    number: 12                        # [REQUIRED][FROM SOURCE] <number> flight number only, no prefix
    date: 2027/1/1 周四                # [REQUIRED][FROM SOURCE+AI:COMPUTE] add weekday
    duration: 约 7h                    # [OPTIONAL][AI:COMPUTE] from departure→arrival
    from: { code: SIN, time: "09:00" }   # [REQUIRED][FROM SOURCE] code=IATA 3-char; city auto-resolves from _data/airports.yml
    to:   { code: NRT, time: "17:00" }   # [REQUIRED][FROM SOURCE] omit `city:` unless airport is missing from _data/airports.yml
    # If an airport is not in _data/airports.yml: either add it there (preferred),
    # or pass an inline override like: { code: XXX, city: "城市 机场名", time: "..." }
    note: 备注一句                      # [OPTIONAL] e.g. "红眼，前一晚登机"
    links:                            # [OPTIONAL] any ADDITIONAL custom links (manage_booking + FlightAware are auto-added)
      - { icon: 🔗, label: 自定义链接, url: "https://..." }

# ── Hotel card ───────────────────────────────────────────────────────────────
# Lists all booked stays. Auto-renders Google Maps chip if `map_query` set.
hotels:                               # [OPTIONAL][FROM SOURCE] <array<object>>
  - name: 酒店中英文名                  # [REQUIRED][FROM SOURCE]
    nights: 1                         # [REQUIRED][AI:COMPUTE] count from check-in/out dates
    dates: M/D – M/D                  # [REQUIRED][AI:COMPUTE] format as "M/D (周N) – M/D (周N)" for legibility
    address: 完整地址                   # [OPTIONAL][FROM SOURCE] full street address from booking confirmation
    map_query: 关键词                   # [OPTIONAL][AI:INFER] hotel English name + city, optionally + Chinese name
    # map_url: "https://maps.google.com/?q=..."   # [OPTIONAL] alternative: provide direct map URL instead
hotels_note: |                        # [OPTIONAL][AI:INFER] flag any unbooked night, gap between stays, late checkout etc.
  <strong>⚠️ 提示：</strong>例如 "X 月 X 日尚未预订住宿" 或 "需早退房存包" 等

# ── Overview grid (top-of-page summary cells) ────────────────────────────────
overview:                             # [OPTIONAL][AI:INFER] <array<object>> ~6 cells summarizing trip phases (DAY 1-3 = 城市 A 探索 / DAY 4-5 = 城市 B etc.)
  - { label: DAY 1–N, text: 这一段行程的主题描述 }

# ── Day-by-day itinerary (the main content) ──────────────────────────────────
# Each entry becomes a colored section. The `date` field (YYYY-MM-DD) drives
# the "auto-jump to today" behavior on page load.
days:                                 # [REQUIRED] <array<object>>
  - num: 1                            # [REQUIRED][AI:COMPUTE] day number 1..N
    color: "#8e44ad"                  # [REQUIRED][AI:INFER] hex color, vary across days. Suggested 9-color palette:
                                      #   #8e44ad #2980b9 #16a085 #2e86ab #27ae60 #c0392b #e67e22 #1abc9c #34495e
    date: 2027-01-01                  # [REQUIRED for today-jump][FROM SOURCE] strict YYYY-MM-DD
    lat: 35.6812                      # [OPTIONAL][AI:INFER] <number> latitude of the day's main location (4 decimals ≈ 11 m precision is plenty). Set lat+lon to enable the auto weather chip on this day's header — pulled from Open-Meteo at runtime, no API key, cached 6h, fetch only fires when today is within [trip_start - 14d, trip_end + 2d]. Pick the spot where the traveller spends the most outdoor time (e.g. afternoon activity, evening city); skip on pure transit days where it'd be misleading.
    lon: 139.7671                     # [OPTIONAL] <number> longitude — must be paired with lat. Omit both to suppress the chip for this day.
    title: 这一天的标题                  # [REQUIRED][AI:INFER] compose from main activities/cities of the day
    date_label: 1月1日（周几）            # [OPTIONAL][AI:COMPUTE] format "M月D日（周N）" — compute weekday
    location: 城市/区域                  # [OPTIONAL][AI:INFER] one short phrase capturing the day's vibe
    toc_label: TOC 简短文字              # [OPTIONAL][AI:INFER] very short label for the top TOC chip — typically "M/D 主题"
    items:                            # [REQUIRED][FROM SOURCE+AI:INFER] timeline of the day
      # ITEMS = source itinerary entries + reasonable additions (meals, transit between attractions).
      # If the source only lists 3 attractions, you may infer 5-7 items (transit, meal, attraction, meal, attraction, ...)
      # but ASK USER to confirm any added items not in their original plan.
      - time: HH:MM – HH:MM           # [OPTIONAL][AI:INFER] sensible time window based on attraction type/distance
        title: 该时段标题（建议带 emoji）   # [REQUIRED] always prefix with a context emoji: ✈️🚄🚌🚆🚇 transit · 🏨 hotel · 🛍️🍜🍢🍱 food/shopping · 🏛️🌋🌳🌊🐋🎢 attractions
        transit: false                # [OPTIONAL][AI:INFER] true for ANY travel leg (flight, train, bus, boat, ferry, taxi if long)
        detail: |                     # [REQUIRED][AI:INFER if absent] 2-4 sentence description with cultural context, must-knows, must-eat tips. HTML allowed (<br><br>, <strong>).
          段落 1
          <br><br>
          段落 2 with <strong>bold</strong>
        transit_route:                # [OPTIONAL][AI:RESEARCH] ONLY for transit:true items where there are alternative scheduled departures (trains, buses, ferries)
          preferred: 首选时间段说明        # match `time` above
          alternatives: ["备选 1", "备选 2"]  # other scheduled departures from official timetables
        tickets:                      # [OPTIONAL][AI:RESEARCH] price tags for the activity / transit. Look up current official rates.
          - { tag: 票种, value: 价格或时间, note: 附注 }
        links:                        # [REQUIRED in spirit][AI:RESEARCH] always add: a 📍 map chip; a 🎫 ticket/official chip if applicable
          - { type: map,    label: 地图标签, query: 地图搜索关键词 }       # query = English name + city (best Maps results)
          - { type: ticket, label: 购票链接, url: "https://..." }        # official site preferred; Klook/KKday as alternative
    note: |                           # [OPTIONAL][AI:INFER] yellow callout for important warnings (抢票提醒, 季节限制, 交通衔接风险). HTML allowed.
      <strong>💡 提示：</strong>这一天的总结性提醒
    stay:                             # [OPTIONAL] References an entry in top-level `hotels:` list
      hotel: 酒店名                      # [REQUIRED inside stay] MUST match a `hotels[].name` exactly.
                                      # Layout auto-pulls address + map_query from the matched hotel and
                                      # renders the hotel name as a clickable Google Maps link.
      label: 第 N 晚 / 共 N 晚            # [OPTIONAL][AI:COMPUTE] e.g. "第 1 晚 / 共 3 晚" if multi-night stay

# ── Booking channels (订票渠道汇总) ──────────────────────────────────────────
# [AI:RESEARCH] Compile all booking platforms touched in `flights[].links`,
# `hotels[]`, and `days[].items[].links`. One row per channel.
#
# Two formats are accepted by the layout; PREFER the structured `links:` form:
#
# PREFERRED — structured (clean, DRY-friendly with YAML anchors):
#   - name: 渠道名
#     links:
#       - { label: 官网,  url: *url_anchor_if_repeated }
#       - { label: Klook, url: "https://..." }
#     note: 中文说明（提前 N 天开售 / 是否需注册 / 等）
#
# LEGACY — raw HTML prose (only use when the note mixes links and text in a
# way the structured form can't express; duplicates URL strings → avoid):
#   - { name: 渠道名, detail: '<a href="..." target="_blank">链接</a> 说明' }
#
# Separator rendering in the structured form: " / " between multiple links,
# " · " between the last link and the note.
booking_channels:                     # [OPTIONAL] <array<object>> bottom card
  - name: 渠道名
    links:
      - { label: 官网, url: "https://..." }
    note: 中文说明（提前 N 天开售 / 是否需注册 / 等）

# ── Pre-trip checklist (行前须知) ────────────────────────────────────────────
# [AI:INFER] Synthesize a destination-specific checklist. Always cover:
#   • Local transit card (e.g., 悠游卡, Suica, Octopus, Oyster)
#   • SIM/eSIM provider recommendation
#   • Visa / entry requirements (if non-trivial)
#   • Driving license needs (if renting vehicles/scooters)
#   • Weather + clothing for the season + altitude variations
#   • Cash vs. card customs (Japan/Taiwan still cash-heavy in old shops)
#   • Plug type & voltage
#   • Booking-window reminders (HSR, popular trains, must-book attractions)
#   • Common scams or local etiquette specific to destination
checklist:                            # [OPTIONAL] <array<string>> each line gets a ✅ prefix
  - '<strong>关键词</strong>：详细说明（HTML 允许，注意 YAML 字符串里的引号）'

# ─────────────────────────────────────────────────────────────────────────────
# Link object schema (used by flights[].links, hotels (via map_query/map_url),
# days[].items[].links):
#
#   label: <string>  visible text on the chip
#   type:  {ticket | map | <omit>}
#          • ticket → red chip (purchase / booking links) — default icon 🎫
#          • map    → green chip (location pins) — default icon 📍
#          • omit   → blue chip (generic info / official sites) — default icon 🔗
#   url:   <string>  full URL — use for any non-map link
#   query: <string>  Google Maps search keyword — auto-generates the maps URL.
#                    Use INSTEAD of `url` for map chips. Ignored if `url` present.
#   icon:  <string>  OPTIONAL emoji override — omit for standard map/ticket/no-type
#                    links (the include auto-fills from type). Only specify when a
#                    link genuinely needs a non-default emoji, e.g. 🛵 for scooter
#                    rental, 🎒 for luggage, 🏨 for hotel-specific booking.
# ─────────────────────────────────────────────────────────────────────────────
---

<!--
  Free-form markdown body below the front-matter `---` is rendered inside
  an extra card at the bottom of the page. Leave empty if not needed.
  The layout strips empty content so you won't see a blank card.
-->
