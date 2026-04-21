---
layout: trip
lang: zh-CN
title: 台湾九日环岛行程
subtitle:
  - 台北
  - 日月潭
  - 阿里山
  - 台南
  - 花莲
date_range: 2026/5/28 – 6/6
duration: 共 9 天 8 夜
last_updated: 2026/4/20

# Repeated URLs — declared once, referenced via YAML anchors (*url_xxx) below.
# Only URLs used ≥ 2× across this file live here; one-off URLs stay inline at
# their use site for readability.
urls:
  tymetro:     &url_tymetro      "https://www.tymetro.com.tw/tymetro-new/tc/"
  thsrc:       &url_thsrc        "https://www.thsrc.com.tw/"
  railway:     &url_railway      "https://www.railway.gov.tw/tra-tip-web/tip?lang=ZH_TW"
  bus_6670d:   &url_bus_6670d    "http://www.ntbus.com.tw/hsr6.html"
  bus_6739:    &url_bus_6739     "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=67390&rn=1775391077195&lan=C"
  afrts:       &url_afrts        "https://afrts.forest.gov.tw/OT01_1.aspx"
  nantoubus:   &url_nantoubus    "https://www.nantoubus.com.tw/"
  klook_nine:  &url_klook_nine   "https://www.klook.com/zh-CN/activity/33027-formosa-aboriginal-cultural-village-ticket-sun-moon-lake-boat-pass/"
  kkday_nine:  &url_kkday_nine   "https://www.kkday.com/zh-cn/product/18440-taiwan-formosan-aboriginal-culture-village-sun-moon-lake-ropeway-ticket"
  klook_whale: &url_klook_whale  "https://www.klook.com/zh-CN/activity/697-hualien-whale-watching-rafting-hualien/"
  turumoan:    &url_turumoan     "https://www.turumoan.com.tw/"
  klook_npm:   &url_klook_npm    "https://www.klook.com/zh-CN/activity/10136-national-palace-museum-ticket-package-taipei/"
  npm:         &url_npm          "https://www.npm.gov.tw/"
  bus_6670d_ticket: &url_bus_6670d_ticket "https://ntbus.welcometw.com/tour/MvmY"
  bus_6739_ticket:  &url_bus_6739_ticket  "https://ylbus-shop.fontour.com/tour/NOyj"
  boat_sml_ticket:  &url_boat_sml_ticket  "https://ntbus.welcometw.com/tour/WY09"
  afrts_1150_down:  &url_afrts_1150_down  "https://forestpass.welcometw.com/tour/y1ZP"
  funcard_nine_combo: &url_funcard_nine_combo "https://centraltw.funcard.com.tw/tour/j6xD"

cost:
  primary: NT$
  secondary: SGD
  rate: 24.89 
  rate_note: 2026 年 4 月 12 日
  notes:
    - 每日餐饮
    - 夜市小吃
    - 小电驴租金
    - 机场伴手礼
    - 悠游卡押金
    - 汇率浮动
  groups:
    - name: 国际机票
      icon: ✈️
      items:
        - { label: "Scoot TR 874 + TR 875（往返）", amount: 254.79, in: secondary }

    - name: 住宿（8 晚）
      icon: 🏨
      items:
        - { label: "citizenM Taipei（2 晚）", amount: 6104, in: primary }
        - { label: "水沙连大饭店（2 晚）", amount: 195.18, in: secondary }
        - { label: "青山别馆（1 晚）", amount: 2840, in: primary }
        - { label: "禧榕轩大饭店（2 晚）", amount: 228.78, in: secondary }
        - { label: "S.E.A. 民宿（1 晚）", amount: 3510, in: primary }

    - name: 交通
      icon: 🚆
      items:
        - { label: "高铁 1321 台北→台中（Klook BOGO）", amount: 24.15, in: secondary }
        - { label: "好行 6670D 台中→水社", amount: 193, in: primary }
        - { label: "好行 6739 日月潭→阿里山", amount: 329, in: primary }
        - { label: "林铁本线 阿里山→嘉义（首选）", amount: 600, in: primary }
        - { label: "台铁 嘉义→台南", amount: 107, in: primary }
        - { label: "台铁自强号 台南→花莲", amount: 962, in: primary }
        - { label: "台铁 花莲→台北", amount: 440, in: primary }
        - { label: "机场捷运（往返）", amount: 300, in: primary }
        - { label: "单日租车 5/29（固得租車）", amount: 1371, in: primary }

    - name: 门票与体验
      icon: 🎫
      items:
        - { label: "故宫博物院 全票（trip.com）", amount: 12.71, in: secondary }
        - { label: "故宫 语音导览子机（定时导览必租）", amount: 30, in: primary }
        - { label: "九族 + 游湖套票（中台湾好玩卡）", amount: 1050, in: primary }
        - { label: "阿里山入园（大众运输票）+ 支线 ×2", amount: 350, in: primary }
        - { label: "安平树屋 + 古堡", amount: 70, in: primary }
        - { label: "多罗满赏鲸（含免费接送）", amount: 900, in: primary }

flights:
  - airline: TR
    number: 874
    date: 2026/5/28 周四
    duration: 约 4h 45m
    from: { code: SIN, time: "09:30" }
    to:   { code: TPE, time: "14:15" }
  - airline: TR
    number: 875
    date: 2026/6/6 周六
    duration: 约 4h 25m
    note: 红眼，6/5 晚登机
    from: { code: TPE, time: "00:55" }
    to:   { code: SIN, time: "05:20" }

hotels:
  - name: citizenM Taipei North Gate
    nights: 2
    dates: 5/28 (四) – 5/30 (六)
    address: 台北市中正区中华路一段 3 号
    map_query: citizenM Taipei North Gate
  - name: 水沙连大饭店 Shui Sha Lian Hotel
    nights: 2
    dates: 5/30 (六) – 6/1 (一)
    address: 南投县鱼池乡民生街 5 号（日月潭水社）
    map_query: Shui Sha Lian Hotel 水沙连大饭店
  - name: 青山别馆 Chin Shan Villa
    nights: 1
    dates: 6/1 (一) – 6/2 (二)
    address: 嘉义县阿里山乡 42 号
    map_query: Chin Shan Villa Alishan 青山别馆
  - name: 禧榕轩大饭店 Grand Banyan Hotel
    nights: 2
    dates: 6/2 (二) – 6/4 (四)
    address: 台南北区成功路 28 号
    map_query: Grand Banyan Hotel Tainan
  - name: S.E.A. 民宿
    nights: 1
    dates: 6/4 (四) – 6/5 (五)
    address: 花莲市海滨街 72 号
    map_query: S.E.A. 民宿 花莲海滨街 72 号

hotels_note: |
  <strong>⚠️ 6/5 (五) 夜晚：</strong>回程航班为 6/6 凌晨 00:55，6/5 当日需从花莲移动至桃园机场。尚未预订 6/5 住宿 → 建议直接搭车到台北寄放行李，当天返程桃园机场候机。

overview:
  - { label: DAY 1–3, text: 台北市区深度游 }
  - { label: DAY 4–6, text: 日月潭 · 阿里山 · 嘉义 }
  - { label: DAY 7,   text: 台南古都一日 }
  - { label: DAY 8,   text: 花莲赏鲸 }
  - { label: DAY 9,   text: 花莲→桃园返程 }
  - { label: 主要交通, text: 高铁 · 台铁 · 森林小火车 }

days:
  - num: 1
    color: "#8e44ad"
    date: 2026-05-28
    title: 抵达台北 · 赤峰街 · 士林夜市
    date_label: 5月28日（周四）
    location: 台北市区
    toc_label: 5/28 抵台 · 台北
    items:
      - time: 14:15 抵达
        title: ✈️ 桃园机场 TPE → 台北市区
        transit: true
        detail: |
          Scoot TR 874 14:15 落地桃园机场第一航厦。搭乘桃园机场捷运（MRT）直达台北车站，车程：直达车 35 分钟 / 普通车 50 分钟。
        links:
          - { type: ticket, label: 机场捷运官网, url: *url_tymetro }
          - { type: map, label: 机场捷运 A12, query: Taoyuan Airport MRT Terminal 1 }

      - time: 16:00 – 17:00
        title: 🏨 citizenM Taipei North Gate · Check-in
        detail: 台北车站步行约 8 分钟，邻近北门捷运站。放行李换装。
        links:
          - { type: map, label: 地图, query: citizenM Taipei North Gate }
          - { label: 酒店官网, url: "https://www.citizenm.com/hotels/asia/taipei/taipei-north-gate-hotel" }

      - time: 18:30 – 19:30
        title: ☕ 赤峰街 Chifeng St（大同区）
        detail: 老街改造的文青聚落，巷弄里藏着老五金行、复古咖啡馆与选物店。日落后光影最美，适合慢慢散步、拍照、逛独立小店。搭捷运中山站 1/4 号出口即达。
        links:
          - { type: map, label: 赤峰街, query: 赤峰街 大同区 }

      - time: 20:00 – 22:30
        title: 🍜 士林夜市 Shilin Night Market
        detail: 台北最具代表性的大型夜市，小吃、服饰、杂货一应俱全。必吃：豪大大鸡排、生炒花枝、士林大香肠、青蛙下蛋、阿辉面线。搭捷运至「剑潭站」1 号出口，勿搭到「士林站」。
        links:
          - { type: map, label: 士林夜市, query: 士林夜市 }
          - { type: map, label: 剑潭站, query: 剑潭站 }
    stay:
      hotel: citizenM Taipei North Gate
      label: 第 1 晚 / 共 3 晚

  - num: 2
    color: "#2980b9"
    date: 2026-05-29
    title: 故宫博物院 · 阳明山国家公园
    date_label: 5月29日（周五）
    location: 台北近郊
    toc_label: 5/29 故宫 / 阳明山
    items:
      - time: 09:00 – 09:30
        title: 🚗 固得租車 台北车站店 · 取车
        transit: true
        detail: |
          单日租车，方便当日跨故宫博物院（士林）、阳明山国家公园（北投）两个景点 — 公车换乘需近 2 小时，自驾约 40 分钟。已预订经济款五人座（随机车型），取还车都在台北车站店，取车 09:00 / 还车 20:30 前。
          <br><br>
          <strong>⚠️ 取车时带齐：国际驾照 + 原本国驾照 + 护照。</strong>还车无需加油 — 按行驶里程计费 NT$ 3.1/km。
        tickets:
          - { tag: 已订, value: "NT$ 1,371", note: 经济款五人座 · 随机车型 }
          - { tag: 取还车, value: 09:00 取 / 20:30 前还 }
        links:
          - { type: map, label: 取车门市, query: 固得租車 台北車站店 }
          - { type: ticket, label: GoodCars 官网预订, url: "https://www.goodcars.tw/" }

      - time: 10:00 – 13:30
        title: 🏛️ 国立故宫博物院
        detail: |
          世界四大博物馆之一，收藏近 70 万件中华艺术珍品，包括翠玉白菜、肉形石、毛公鼎等镇馆之宝。建议 3–4 小时细看。
          <br><br>
          <strong>🎧 免费定时导览（需预约）：</strong>中文场每日两场，<strong>上午 10:30 / 下午 14:30</strong>，每场 20 人，1 F 服务台集合，约 1.5 小时，跟导览解说入门比自己瞎看效率高很多。到故宫官方报名系统（signup.npm.edu.tw）网上预约，<strong>最迟参观前 3 天</strong>（含当日）截止，热门时段会被抢光 — 愈早订愈稳。参加者另需租用<strong>语音导览子机 NT$30/人</strong>（自 2023 年起实施）。英文 / 日文场时段官网当日公告，可现场询问。
          <br><br>
          <strong>自驾：</strong>从台北车站出发约 25 分钟，馆区有停车场（小型车 NT$50/小时）。
        tickets:
          - { tag: trip.com 已订, value: "SGD 12.71", note: 全票 }
          - { tag: 子机租金, value: NT$30, note: 参加定时导览者每人必租 }
          - { tag: 开放, value: 09:00–17:00（周一休馆） }
          - { tag: 免费导览, value: 10:30 / 14:30 · 参观前 3 天截止预约 }
        links:
          - { type: map, label: 地图, query: National Palace Museum Taipei }
          - { type: ticket, label: 故宫官网, url: *url_npm }
          - { type: ticket, label: 免费导览预约, url: "https://signup.npm.edu.tw/Advice.aspx?ActivityId=6&LangId=1" }
          - { type: ticket, label: Klook 预约, url: *url_klook_npm }

      - time: 13:30 – 14:30
        title: 🍱 午餐 · 故宫晶华 或 士林老街
        detail: 故宫内的晶华餐厅有「国宝宴」菜色，可吃到翠玉白菜、肉形石造型料理。预算有限可开车下山到士林吃铭传大学周边小吃。
        links:
          - { type: map, label: 故宫晶华, query: 故宫晶华 }

      - time: 14:45 – 18:45
        title: 🌋 阳明山国家公园
        detail: |
          台湾最大休眠火山群，有温泉、硫磺喷气口、花季步道。推荐路线：小油坑（火山地貌）→ 冷水坑（牛奶湖）→ 擎天岗（大草原、水牛）→ 竹子湖（季节限定海芋／绣球花）。
          <br><br>
          <strong>自驾：</strong>从故宫约 30 分钟经阳金公路上山。各景点停车场多为免费，周末车位紧张建议早上进山。
        links:
          - { type: map, label: 阳明山, query: Yangmingshan National Park }
          - { type: map, label: 小油坑, query: 小油坑 Xiaoyoukeng }
          - { type: map, label: 冷水坑, query: 冷水坑 }
          - { type: map, label: 擎天岗, query: 擎天岗 }
          - { type: map, label: 竹子湖, query: 竹子湖 阳明山 }

      - time: 19:30 – 20:00
        title: 🚗 固得租車 台北车站店 · 还车
        transit: true
        detail: 按里程计费（NT$ 3.1/km），无需加油。最晚 20:30 前到店还车，20:00 前更宽松。
        links:
          - { type: map, label: 还车门市, query: 固得租車 台北車站店 }
    stay:
      hotel: citizenM Taipei North Gate
      label: 第 2 晚

  - num: 3
    color: "#16a085"
    date: 2026-05-30
    title: 中正纪念堂 · 市府彩虹起点 · 西门町 · 南下日月潭
    date_label: 5月30日（周六）
    location: 台北 → 日月潭
    toc_label: 5/30 台北 → 水社
    items:
      - time: 09:00 – 09:30
        title: 🎒 citizenM · 退房 + 寄放行李
        detail: 今天下午要南下台中，先退房但把大件行李寄存在 citizenM 柜台（一般免费，直到下午取走），轻装出门玩。午后回来拿行李直接走去台北车站。

      - time: 09:30 – 11:30
        title: 🏛️ 中正纪念堂
        detail: 以「中正」与「正气」为名的大型纪念建筑。每小时整点可观看三军仪队交接仪式，动作整齐划一，为必看亮点。周边有国家戏剧院、音乐厅、蓝顶白墙建筑群，摄影绝佳。
        tickets:
          - { tag: 入场, value: 免费 }
          - { tag: 交接仪式, value: 每日 09:00–17:00 整点 }
        links:
          - { type: map, label: 地图, query: Chiang Kai-shek Memorial Hall }

      - time: 11:30 – 13:00
        title: 🍜 午餐 · 鼎泰丰 信义店
        detail: 米其林推荐小笼包名店，信义 101 分店排队比永康街总店快。必点：小笼包、蟹粉小笼、豆沙包。
        links:
          - { type: map, label: 鼎泰丰 信义店, query: 鼎泰丰 信义店 }

      - time: 13:00 – 13:30
        title: 🌈 市府彩虹起点（Rainbow Starting Line）
        detail: 捷运市政府站 2 号出口旁的地面彩虹人行道，以 101 大楼为背景的免费打卡点。只拍照不上楼 — 不进 89F 观景台、不做 Skyline 460。
        tickets:
          - { tag: 门票, value: 免费 }
        links:
          - { type: map, label: 市府彩虹起点, query: Rainbow Starting Line Taipei City Hall }
          - { type: map, label: Taipei 101（作背景）, query: Taipei 101 }

      - time: 13:45 – 15:15
        title: 🛍️ 西门町 Ximending
        detail: 台北最热闹的年轻潮流商圈，有「台北原宿」之称。以西门红楼为中心，潮牌、电影院、刺青街、小吃林立。推荐：阿宗面线、鸭肉扁、老天禄卤味。<strong>彩虹 Six 斑马线</strong>就在 6 号出口旁，2019 年首条彩虹人行道，顺路打卡。板南线 1 站到台北车站取行李。
        links:
          - { type: map, label: 西门町, query: 西门町 Ximending }
          - { type: map, label: 西门红楼, query: 西门红楼 }
          - { type: map, label: 彩虹六号斑马线, query: Rainbow Six Ximending }

      - time: 15:30 – 16:00
        title: 🎒 citizenM 取行李 · 走去台北高铁站
        detail: 回 citizenM 拿回寄存的大行李，步行约 8 分钟到台北高铁站（地下 B1 月台层）。务必 15:45 前到站进月台。

      - time: 16:01 – 16:54
        title: 🚅 高铁 1321 · 台北 → 台中
        transit: true
        detail: |
          南下对号 1321 次，<strong>台北 16:01 发车 → 台中 16:54 抵达</strong>，约 53 分钟（途经南港→台北→桃园→台中 停站）。该车次运行日：一/二/三/四/六，周六 5/30 有车。
          <br><br>
          抵达台中高铁后直接在站内 / 附近吃晚餐，吃完回到 1F 台湾好行站牌搭 6670D 南下日月潭水社 — 当晚住水沙连。
        tickets:
          - { tag: Klook BOGO 已订, value: "SGD 24.15", note: 标准车厢对号 · 买一送一 }
        links:
          - { type: ticket, label: 台湾高铁官网, url: *url_thsrc }
          - { type: ticket, label: Klook 高铁票, url: "https://www.klook.com/zh-CN/activity/73749-thsr-one-way-ticket-taipei/" }
          - { type: map, label: 台北高铁站, query: HSR Taipei Station }
          - { type: map, label: 台中高铁站, query: HSR Taichung Station }

      - time: 17:00 – 18:45
        title: 🍢 台中高铁站周边晚餐
        detail: |
          抵达台中高铁后先解决晚餐，吃完直接回 1F 台湾好行站牌上 6670D 南下水社。控制在 18:50 前回到站（20 分钟规则），别错过 19:10 首选班次。
          <br><br>
          <strong>HSR 站内懒人版：</strong>台中高铁 1F / B1 有餐饮街 — 牛肉面、日式拉面、汉堡、便利店等，最省事。
          <br><br>
          <strong>HSR 周边小吃：</strong>新乌日车站一带步行可达几家在地面线 / 肉圆店，吃完再走回高铁 1F。
          <br><br>
          <strong>进市中心（需预留时间）：</strong>搭免费高铁接驳车或台铁 1 站到台中车站，第二市场百年老市场（山河鲁肉饭 / 颜记肉包 / 李海鲁肉饭）。多数 22:00 前打烊，来回含吃饭需 90 分钟以上 — 吃完折返高铁较赶，建议只当备选。
        links:
          - { type: map, label: 台中高铁站美食街, query: 台中高铁站 美食 }
          - { type: map, label: 台中第二市场, query: 台中第二市场 }

      - time: 19:10 – 20:30
        title: 🚌 台湾好行 6670D · 高铁台中 → 日月潭水社
        transit: true
        detail: |
          <strong>搭 6670D 直达班次</strong>（D = 直达，高铁台中 → 埔里 → 水社，不停暨南 / 九族）。<strong>首选 19:10 发车 → 20:30 抵达水社</strong>，约 80 分钟。吃饱上车小睡正好到酒店。
          <br><br>
          <strong>备选 20:10 → 21:30（仅周五~日行驶，5/30 周六可搭）：</strong>留晚餐更多时间，但到店晚、行李整理偏赶。
          <br><br>
          <strong>取票：</strong>南投客运线上预购的纸本票到高铁台中站 1F 柜台换取，20 分钟规则 → 最晚 18:50 到站。
        transit_route:
          preferred: 6670D 19:10 高铁台中 → 20:30 水社
          alternatives: ["6670D 20:10 → 21:30（仅周五~日）", "6670D 18:10 → 19:30（若想早到）"]
        tickets:
          - { tag: 单程, value: NT$193, note: 高铁台中 → 水社 }
          - { tag: 悠游卡, value: 约 88 折 }
        links:
          - { type: ticket, label: 6670D 时刻表, url: *url_bus_6670d }
          - { type: ticket, label: 购票（南投客运）, url: *url_bus_6670d_ticket }
          - { type: ticket, label: 台湾好行日月潭线, url: "https://www.taiwantrip.com.tw/line/11" }
          - { type: map, label: 高铁台中站 好行站牌, query: 台中高铁站 台湾好行 }
          - { type: map, label: 水社游客中心, query: 水社游客中心 日月潭 }

      - time: 20:30 – 21:00
        title: 🎒 水沙连大饭店 · 到店 check-in
        detail: 水社下车步行 3 分钟到水沙连，柜台办入住，早点休息 — 明天九族文化村 + 游湖 + 缆车走一整天。
        links:
          - { type: map, label: 水沙连大饭店, query: Shui Sha Lian Hotel 水沙连大饭店 }
    stay:
      hotel: 水沙连大饭店 Shui Sha Lian Hotel
      label: 第 1 晚

  - num: 4
    color: "#2e86ab"
    date: 2026-05-31
    title: 日月潭 · 九族文化村
    date_label: 5月31日（周日）
    location: 日月潭
    toc_label: 5/31 日月潭
    items:
      - time: 07:30 – 09:30
        title: 🌅 水社晨间漫步 + 早餐
        detail: |
          昨晚已到水社、行李在房，今早先在水沙连吃早餐（含在房费里），再沿水社码头 → 水社亲水步道散步 30–40 分钟，清晨湖面雾气特别出片。吃饱喝足，今天要走一整天（九族 + 游湖 2 段 + 缆车 2 次）。
        links:
          - { type: map, label: 水社码头, query: 水社码头 }
          - { type: map, label: 水社亲水步道, query: 水社亲水步道 日月潭 }

      - time: 10:30 – 11:15
        title: ⛵ 日月潭游湖船（段 1+2）· 水社 → 玄光寺 → 伊达邵
        transit: true
        detail: |
          水社码头右边入口 1 号浮排登船。一日票 NT$250 限搭一圈（水社 → 玄光寺 → 伊达邵 → 水社）— 今天会完整用掉这一圈：<strong>出发把段 1+2 用掉到伊达邵，晚上回程再用段 3 回水社</strong>。每半小时一班，乘客下船后由工作人员派发到下一班。
          <br><br>
          玄光寺只是中转，无需在此停留（可留到回程顺道拍照）；直接衔接下一班到伊达邵。
        tickets:
          - { tag: 一日票, value: "NT$250（限搭一圈，今日用满 3 段）" }
          - { tag: 营运时间, value: "09:00 – 17:00（末班 17:00 伊达邵开船）" }
          - { tag: 班次, value: 每半小时一班 }
        links:
          - { type: map, label: 水社码头, query: 水社码头 }
          - { type: map, label: 玄光寺, query: 玄光寺 日月潭 }
          - { type: map, label: 伊达邵码头, query: 伊达邵码头 }
          - { type: ticket, label: 购票（南投客运）, url: *url_boat_sml_ticket }
          - { type: ticket, label: 游湖船 Klook, url: "https://www.klook.com/zh-CN/activity/10687-sun-moon-lake-boat-ticket-taichung/" }
          - { type: ticket, label: 水社海官网, url: "https://www.boat.com.tw/ticket_order_detail.php" }

      - time: 11:15 – 12:00
        title: 🍱 伊达邵码头午餐 · 邵族小吃
        detail: 阿婆香菇茶叶蛋、邵族麻糬、山猪肉串、总统鱼。码头周边摊贩集中，快吃完上缆车。
        links:
          - { type: map, label: 伊达邵老街, query: 伊达邵老街 }

      - time: 12:00 – 12:15
        title: 🚡 日月潭缆车 · 伊达邵 → 九族文化村
        transit: true
        detail: |
          缆车站就在伊达邵码头步行 5 分钟。单程约 7 分钟飞越山脊直达九族。<strong>缆车往返含在九族门票中</strong>，当日不限次数。从水社方向进九族是「反向进园」，上午反而人少。
        links:
          - { type: map, label: 日月潭缆车, query: Sun Moon Lake Ropeway }
          - { label: 缆车官网, url: "https://www.ropeway.com.tw/" }

      - time: 12:15 – 16:00
        title: 🎢 九族文化村
        detail: 一票玩到底 — 原住民九族文化展示、欧洲花园主题乐园、UFO 自由落体、加勒比海盗船。推荐：马雅探险、西班牙海岸大漩涡、原住民歌舞表演。反向进园从缆车站那头开逛，路线更顺。
        tickets:
          - { tag: 套票, value: "NT$1,050", note: "含日月潭缆车 + 游湖船（中台湾好玩卡）" }
          - { tag: 营业时间, value: 09:30–17:00 }
        links:
          - { type: map, label: 九族文化村, query: Formosan Aboriginal Culture Village }
          - { type: ticket, label: 九族官网, url: "https://www.nine.com.tw/" }
          - { type: ticket, label: 中台湾好玩卡, url: *url_funcard_nine_combo }
          - { type: ticket, label: Klook, url: *url_klook_nine }
          - { type: ticket, label: KKday, url: *url_kkday_nine }

      - time: 16:00 – 16:15
        title: 🚡 日月潭缆车 · 九族 → 伊达邵（返程）
        transit: true
        detail: |
          <strong>末班缆车约 16:00–16:30，不可拖延。</strong>回伊达邵后直奔码头赶末班船回水社。
        links:
          - { type: map, label: 伊达邵码头, query: 伊达邵码头 }

      - time: 16:30 – 16:50
        title: ⛵ 日月潭游湖船（段 3）· 伊达邵 → 水社（返程）
        transit: true
        detail: |
          使用上午同一张一日票的最后一段。<strong>末班船 17:00 整点从伊达邵开 — 务必 16:30 前到码头 check-in。</strong>伊达邵 → 水社 约 20 分钟。错过末班就只能打车（一圈湖路约 30–40 分钟 NT$500+）。
        tickets:
          - { tag: 用票, value: 上午购的一日票最后一段 }
        links:
          - { type: map, label: 水社码头, query: 水社码头 }

      - time: "17:00 – 19:30"
        title: 🏨 水沙连大饭店 · 休整 + 觅食
        detail: 回房间冲个澡、换衣服，再出门吃晚餐（水社码头周边小吃摊 / 邵族料理），顺路把脏衣服带去洗衣店。

      - time: 19:30 – 21:30
        title: 🧺 招茗自助洗衣店 · 行程过半补给
        detail: |
          行程正好过半，趁今晚在日月潭把衣服一口气洗了 — 阿里山、花莲两站停留都短，错过这次就得拖到台南 Day 6。24 小时自助投币（或刷悠游卡），洗 + 烘一次约 NT$150–200。扔进去、去吃宵夜或回饭店，烘完再去拿。
        tickets:
          - { tag: 洗 + 烘, value: "NT$150–200" }
          - { tag: 营业, value: 24 小时自助 }
        links:
          - { type: map, label: 招茗自助洗衣店, query: 招茗自助洗衣店 日月潭 }
    note: |
      <strong>💡 为什么住 2 晚水沙连：</strong>5/30 晚从台中高铁搭 6670D 直上水社，隔天九族 + 游湖不用起早赶车；6/1 早上从水社 08:00 上 6739 直达阿里山，全程一次到位。
    stay:
      hotel: 水沙连大饭店 Shui Sha Lian Hotel
      label: 第 2 晚

  - num: 5
    color: "#27ae60"
    date: 2026-06-01
    title: 日月潭 → 阿里山
    date_label: 6月1日（周一）
    location: 高山公路
    toc_label: 6/1 阿里山
    items:
      - time: 08:00 – 12:00
        title: 🚌 台湾好行 6739 · 日月潭水社 → 阿里山
        transit: true
        detail: |
          从日月潭水社站出发，途经头社、信义乡、神木村、夫妻树、塔塔加，最终抵达阿里山转运站。<strong>全台海拔最高的高山公路路线</strong>，沿途风景壮阔，堪称绝美公车旅程。全程约 4 小时。
          <br><br>
          <strong>⚠️ 每日仅两班车，务必提前预约！</strong>
        transit_route:
          preferred: 08:00 出发 → 12:00 抵达阿里山
          alternatives: ["08:30 出发"]
        tickets:
          - { tag: 现金票价, value: NT$329 }
          - { tag: 悠游卡, value: 约 88 折 }
        links:
          - { type: ticket, label: 6739 时刻表, url: *url_bus_6739 }
          - { type: ticket, label: 购票（员林客运）, url: *url_bus_6739_ticket }
          - { type: ticket, label: 南投客运预约, url: *url_nantoubus }
          - { type: map, label: 水社站, query: 水社 Shuishe Sun Moon Lake }
          - { type: map, label: 阿里山入口, query: Alishan National Forest Recreation Area Entrance }

      - time: 12:00 – 12:20
        title: 🎒 青山别馆 · 行李寄存
        detail: |
          下了好行公车步行约 5 分钟到青山别馆（园区内住宿）。正式 check-in 时间下午 14:00 后，但柜台可先收行李 — 把大件扔在行李房、轻装出门玩一下午，晚上回来再办正式入住。
          <br><br>
          <strong>⚠️ 园区内晚上 7 点后几乎无餐厅营业</strong>，记得下山前在车站 / 沼平周边买点夜宵带回去。
        links:
          - { type: map, label: 青山别馆, query: Chin Shan Villa 青山别馆 阿里山 }

      - time: 12:30 – 13:20
        title: 🎫 阿里山入园 · 午餐
        detail: |
          车站/转运站周边购买入园门票 + 简易午餐。搭 6739 台湾好行直达抵达适用<strong>大众运输优惠票 NT$150</strong> — 购票时出示当日 6739 车票票根即可，比一般全票便宜。
          <br><br>
          <strong>🏨 住宿在园区内青山别馆，一张票即可 —</strong> 当日入园后不出园，隔日直接从阿里山车站搭林铁下山，全程无需二次购票。
        tickets:
          - { tag: 大众运输优惠票, value: NT$150, note: 出示当日 6739 车票票根 }
          - { tag: 非假日全票, value: NT$200 }
          - { tag: 假日全票, value: NT$300 }
        links:
          - { type: ticket, label: 阿里山国家风景区（周边资讯）, url: "https://www.ali-nsa.net/" }

      - time: 13:20 – 16:45
        title: 🌲 阿里山森林游乐区 · 神木线 + 沼平线
        detail: |
          <strong>推荐路线：</strong><br>
          ① 搭小火车神木线至神木站（10 分钟，NT$100），漫步巨木群栈道<br>
          ② 步行至姐妹潭、受镇宫<br>
          ③ 搭沼平线至沼平站（6 分钟，NT$100），走沼平天空步道、樱之道<br>
          ④ 回到阿里山车站
          <br><br>
          <strong>🎫 支线票建议提前在 7-11 / 全家 ibon 机台买纸本票</strong>：支线座位有限，假日上午山上售票窗口排队久，买过的班次也容易满。ibon 代售（ticket.ibon.com.tw）可提前几天买指定车次的纸本票，锁定座位，到站直接进月台。现场窗口排到之前可能已经售罄下一班。
        tickets:
          - { tag: 神木线, value: NT$100, note: 单程 }
          - { tag: 沼平线, value: NT$100, note: 单程 }
          - { tag: 推荐购票, value: 全家/7-11 ibon 代售纸本票 }
        links:
          - { type: map, label: 阿里山车站, query: 阿里山车站 }
          - { type: map, label: 神木站, query: Sacred Tree Station Alishan }
          - { type: map, label: 姐妹潭, query: 姐妹潭 阿里山 }
          - { type: map, label: 沼平站, query: 沼平站 }
          - { type: ticket, label: 林铁支线订票, url: *url_afrts }

      - time: "17:00"
        title: 🏨 青山别馆 Chin Shan Villa · Check-in
        detail: 沼平线下山回阿里山车站，步行 3 分钟到青山别馆办正式入住（行李中午已先寄存）。园区内住宿，方便隔日搭森林铁路下山。
        links:
          - { type: map, label: 酒店位置, query: Chin Shan Villa 青山别馆 阿里山 }

      - time: 可选 19:30 – 21:30
        title: ✨ 观星 / 追流星（可选）
        detail: |
          阿里山海拔 2,200m + 光害低，是全台顶级观星点。官方首推<strong>小笠原山观景台</strong>（沼平线底站徒步约 10 分钟，有无障碍步道 360° 无遮挡），<strong>祝山观景台</strong>为备选。
          <br><br>
          <strong>🌠 6/1 流星机会：</strong><a href="https://earthsky.org/astronomy-essentials/arietids-daytime-meteor-shower-peaks/" target="_blank">白羊座流星雨（Arietids）</a> 活跃期 5/22–7/3，峰值 6/10，虽以日间流星为主，但<strong>破晓前最后一小时的暗空窗口</strong>可能抓到几颗。6/1 非峰值，仅可期待零星，且当日月相为下弦至新月之间（6/8 下弦月），6/1 深夜后有一定月光干扰。
          <br><br>
          <strong>官方导览：</strong>林业保育署嘉义分署 + 嘉义市天文协会每年 4–6 月办<a href="https://www.facebook.com/AlishanForest/posts/952736067010416/" target="_blank">「春星斯麦尔」6 梯次 2 天 1 夜观星生态营</a>（小笠原平台专业望远镜 + 星座解说），但需提前报名。check-in 时问柜台当晚是否恰好有梯次、或酒店 / 在地业者有无夜间观星团。
          <br><br>
          <strong>⚠️ 完全看天：</strong>阿里山 5–6 月常云雾缭绕，云多就直接放弃回房间早睡。
          <br><br>
          <strong>装备：</strong>头灯 / 手电（红光最佳，不影响暗适应）、薄羽绒或厚外套（入夜 10–15°C）、防蚊液、星图 App（Sky Guide / Stellarium）。
        tickets:
          - { tag: 自助前往, value: 免费 }
          - { tag: 导览团（若酒店开团）, value: "NT$500–800/人", note: 视当晚天气与报名人数 }
        links:
          - { type: map, label: 小笠原山观景台, query: 小笠原山观景台 阿里山 }
          - { type: map, label: 祝山观景台, query: 祝山观景台 }
          - { label: Arietids 流星雨 (EarthSky), url: "https://earthsky.org/astronomy-essentials/arietids-daytime-meteor-shower-peaks/" }
          - { label: 春星斯麦尔官方梯次, url: "https://www.facebook.com/AlishanForest/posts/952736067010416/" }
    note: |
      <strong>💡 观星替代日出：</strong>放弃传统 4:30 赶祝山观日出火车，改把阿里山高海拔 + 低光害的优势用在当晚观星上 — check-in 时先跟青山别馆柜台问当晚天气 / 有否开观星团。隔日睡饱再退房也更从容。
    stay:
      hotel: 青山别馆 Chin Shan Villa

  - num: 6
    color: "#c0392b"
    date: 2026-06-02
    title: 阿里山 → 嘉义 → 台南
    date_label: 6月2日（周二）
    location: 百年林铁 · 古都入城
    toc_label: 6/2 阿里山→台南
    items:
      - time: 10:30 – 11:30
        title: 🎒 青山别馆 · check-out + 走去阿里山车站
        detail: 11:00 前退房拿回行李，步行约 3 分钟到阿里山车站月台。有时间在车站周边买个便当/饭团当午餐带上车，林铁沿途没有餐车。

      - time: 11:50 – 15:45
        title: 🚂 阿里山林铁本线 · 阿里山 → 嘉义
        transit: true
        detail: |
          百年蒸汽林铁下山，阿里山车站 11:50 发车，约 3h55m 抵达<strong>嘉义车站（TRA 普通站，非高铁站）</strong>。沿途经奋起湖、竹崎等站，山岚林海风景绝佳。<strong>已订票 NT$600。</strong>
        tickets:
          - { tag: 林铁本线, value: "NT$600", note: 已订 }
        links:
          - { type: ticket, label: 林铁官网, url: *url_afrts }
          - { type: map, label: 嘉义车站（TRA）, query: Chiayi TRA Station }

      - time: 16:00 – 17:30
        title: 🍜 嘉义市区晚餐 · 鸡肉饭巡礼
        detail: |
          林铁下车即嘉义 TRA 站，步行或短程计程车即可抵达市区老店。必吃：林聪明沙锅鱼头、刘里长鸡肉饭、桃城豆花、嘉义喷水鸡肉饭。
          <br><br>
          <strong>🎒 不想拖行李：</strong>嘉义 TRA 站地下一楼有投币置物柜，小柜 NT$20 / 时、大柜 NT$50 / 时 — 夕阳前寄存，吃完饭回来取，省得拖着跑鸡肉饭老店。
        links:
          - { type: map, label: 林聪明沙锅鱼头, query: 林聪明沙锅鱼头 }
          - { type: map, label: 刘里长鸡肉饭, query: 刘里长鸡肉饭 }

      - time: 17:45 – 18:30
        title: 🚆 台铁 · 嘉义 → 台南（约 40 分钟）
        transit: true
        detail: 林铁终点就是嘉义 TRA 站，直接转台铁自强号/区间车至台南车站，车程 35–45 分钟，步行或计程车约 15 分钟即可抵达禧榕轩大饭店。
        tickets:
          - { tag: 台铁自强, value: "NT$107" }
        links:
          - { type: ticket, label: 台铁订票, url: *url_railway }

      - time: "19:00"
        title: 🏨 禧榕轩大饭店 Grand Banyan Hotel · Check-in
        detail: 位于台南北区成功路，邻近台南公园与台南火车站。check-in 后可在附近吃宵夜、逛神农街。
        links:
          - { type: map, label: 酒店位置, query: Grand Banyan Hotel Tainan }
    stay:
      hotel: 禧榕轩大饭店 Grand Banyan Hotel
      label: 第 1 晚 / 共 2 晚

  - num: 7
    color: "#e67e22"
    date: 2026-06-03
    title: 台南古都一日 · 安平树屋 · 神农街
    date_label: 6月3日（周三）
    location: 台南文化漫游
    toc_label: 6/3 台南
    items:
      - time: 推荐
        title: 🛵 WeMo 共享电动机车
        detail: 台南景点分散、巷弄多、单行道多，市区到安平骑车 15 分钟左右；共享电动机车是最灵活的移动方式。用 WeMo App 扫码取车，按分钟计费，停车不用找位还能直接还车。<strong>需持国际驾照 + 原本国驾照 + 护照。</strong>建议出发前下载 App 注册好、上传驾照审核通过。
        links:
          - { type: ticket, icon: 🛵, label: WeMo, url: "https://www.wemoscooter.com/" }

      - time: 09:00 – 11:00
        title: 📚 国立台湾文学馆
        detail: 台湾第一座国家级文学博物馆。建筑为 1916 年日治时期台南州厅，巴洛克风格古蹟，内部展出台湾百年文学演变。
        tickets:
          - { tag: 入场, value: 免费 }
          - { tag: 开放, value: 09:00–18:00（周一休） }
        links:
          - { type: map, label: 地图, query: National Museum of Taiwan Literature }
          - { label: 官网, url: "https://www.nmtl.gov.tw/" }

      - time: 11:30 – 13:00
        title: 🍜 国华街小吃集散地 · 午餐
        detail: 推荐：金得春卷、富盛号碗粿、邱家小卷米粉、修安扁担豆花、江水号绿豆汤。国华街短短 300 米集合了台南数十家老店，排队值得。
        links:
          - { type: map, label: 国华街, query: 国华街 台南 }
          - { type: map, label: 金得春卷, query: 金得春卷 }

      - time: 13:30 – 16:00
        title: 🌳 安平树屋 + 安平古堡
        detail: 安平树屋原为德记洋行仓库，百年榕树盘根错节、穿墙破顶，与红砖老屋共生，被 CNN 誉为「全球最美 10 大树屋」之一。隔壁为荷兰人建造的安平古堡（热兰遮城），台湾最早城堡。
        tickets:
          - { tag: 联票, value: NT$70, note: 树屋+古堡 }
        links:
          - { type: map, label: 安平树屋, query: Anping Tree House }
          - { type: map, label: 安平古堡, query: Anping Old Fort }
          - { type: ticket, label: Klook 门票, url: "https://www.klook.com/zh-CN/activity/40974-anping-tree-house-ticket-district-taiwan/" }

      - time: 16:00 – 17:30
        title: 🍧 安平老街
        detail: 推荐：周氏虾卷、陈家蚵卷、同记安平豆花（招牌花生豆花）、林永泰兴蜜饯行（百年老店）。
        links:
          - { type: map, label: 安平老街, query: 安平老街 }

      - time: 18:00 – 20:30
        title: 🏮 神农街 Shennong Street
        detail: 清代遗留的古老街道，两旁保留大量清末民初老屋，如今转型为文青酒吧、独立书店、选物店、老派咖啡馆聚落。傍晚灯笼亮起最有味道，是台南最美的一条老街。
        links:
          - { type: map, label: 神农街, query: 神农街 台南 }
          - { type: map, label: 水仙宫, query: 台南水仙宫 }
          - { type: map, label: 赤崁楼, query: 赤崁楼 台南 }

      - time: 21:00 起
        title: 🌃 夜宵 · 保安路小吃
        detail: 6/3 为周三，台南花园夜市/大东夜市均未开市，可到保安路一带：阿村牛肉汤、阿明猪心、阿龙香肠熟肉、叶家小卷米粉（24 小时）。
        links:
          - { type: map, label: 保安路, query: 保安路小吃 台南 }
    stay:
      hotel: 禧榕轩大饭店 Grand Banyan Hotel
      label: 第 2 晚

  - num: 8
    color: "#1abc9c"
    date: 2026-06-04
    title: 台南 → 花莲 · 多罗满赏鲸
    date_label: 6月4日（周四）
    location: 东海岸出海
    toc_label: 6/4 花莲赏鲸
    items:
      - time: 06:30 – 10:59
        title: 🚆 台铁自强号 301 · 台南 → 花莲
        transit: true
        detail: |
          <strong>全程约 4.5 小时直达</strong>（自强号 3000 系列 301 次）。此为南回线顺时针绕半岛东岸的直达班次，沿途高雄、枋寮、台东、瑞穗、花莲，风景极佳（右侧座位看海）。
          <br><br>
          <strong>⚠️ 座位紧俏</strong>，务必提前 14 天上台铁官网抢票（06:30 开抢）。车票费用 NT$962。
        transit_route:
          preferred: 06:30 台南 → 10:59 花莲（自强 301）
          alternatives: ["普悠玛/太鲁阁号（需转车北回线，约 5.5h）"]
        tickets:
          - { tag: 自强 301, value: NT$962 }
          - { tag: 提早 14 天, value: 开放订票 }
        links:
          - { type: ticket, label: 台铁官网, url: *url_railway }
          - { type: ticket, label: 台铁时刻查询, url: "https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip123/query" }
          - { type: map, label: 台南车站, query: Tainan Station 台南车站 }
          - { type: map, label: 花莲车站, query: Hualien Station }

      - time: 11:30 – 14:30
        title: 🎒 S.E.A. 民宿 · 行李寄存 + 花莲午餐 + 下午休整
        detail: |
          下午 16:00 赏鲸，所以到了花莲先把背包扔民宿（正式 check-in 通常 15:00 后，柜台先帮忙存即可）然后慢慢吃午餐 + 逛花莲市区。花莲必吃：公正包子、蒋记公正包子、戴记扁食、液香扁食。
          <br><br>
          赏鲸出船前有空档可以在民宿小睡，或者附近咖啡馆歇脚 — 下午 15:20 前 check-in 完接驳车即可。
        links:
          - { type: map, label: S.E.A. 民宿, query: S.E.A. 民宿 花莲海滨街 72 号 }
          - { type: map, label: 公正包子, query: 公正包子 }

      - time: 15:20 接驳 · 16:00 出船
        title: 🐋 多罗满赏鲸 Turumoan Whale Watching（含花莲市区免费接送）
        detail: |
          花莲外海黑潮经过，全年可观赏飞旋海豚、花纹海豚、伪虎鲸，运气好还能看到抹香鲸、大翅鲸。多罗满为在地老牌业者，船长与解说员皆有海洋生态背景。
          <br><br>
          <strong>选含接送方案（NT$900）：</strong>花莲市区指定接驳点或民宿免费接送 → 海矿馆集合 → 出海约 2 小时 → 送回市区。订票时填写 S.E.A. 民宿地址即可，接驳时间 15:20 左右（出船前 40 分钟，以多罗满当日通知为准）。
          <br><br>
          <strong>行程时长：</strong>约 2 小时（16:00 出船，约 18:00 回港）<br>
          <strong>集合点备案：</strong>多罗满赏鲸海矿馆 · 花莲市华东 15 号
        tickets:
          - { tag: 含接送方案, value: "NT$900" }
          - { tag: 标准方案（无接送）, value: "NT$800" }
          - { tag: 出船时段, value: 06:30 / 08:30 / 10:30 / 14:00 / 16:00 }
          - { tag: 携带, value: 防晒 · 晕船药 · 薄外套 }
        links:
          - { type: map, label: 集合地点, query: 多罗满赏鲸 花莲市华东15号 }
          - { type: ticket, label: Klook 订票, url: *url_klook_whale }
          - { label: 多罗满官网, url: *url_turumoan }

      - time: 18:30 – 22:00
        title: 🍢 东大门夜市
        detail: 花莲最大夜市，四大主题街区：福町夜市、各省一条街、原住民一条街、自强夜市。必吃：官财板、炸蛋葱油饼、第一家烤肉串、蒋记公正包子。赏鲸送回市区后直接过去最顺。
        links:
          - { type: map, label: 东大门夜市, query: Dongdamen Night Market }
          - { type: map, label: 花莲文创园区, query: 花莲文创园区 }
    stay:
      hotel: S.E.A. 民宿

  - num: 9
    color: "#34495e"
    date: 2026-06-05
    title: 花莲 → 桃园机场 · 红眼返程
    date_label: 6月5日（周五）
    location: 归国日（6/6 00:55 航班）
    toc_label: 6/5 返程日
    items:
      - time: 09:00 – 09:30
        title: 🏨 S.E.A. 民宿 · check-out + 携带行李出发
        detail: 今天全程带着行李走 — check-out 后不再回民宿。计程车或租借大件行李寄放服务可考虑，但最省事还是一路拖着到车站锁柜。

      - time: 09:30 – 11:30
        title: 🌊 七星潭 · 最后的太平洋（可选）
        detail: 花莲市区 20 分钟车程可达，鹅卵石月牙湾海滩，太平洋最美蓝。拖着行李搭计程车单程约 NT$250，行李留车上或直接抱着下车短停拍照。不想多折腾可跳过，直接去车站吃午餐 + 寄物。
        links:
          - { type: map, label: 七星潭, query: Qixingtan Beach Hualien }
          - { type: map, label: 松园别馆, query: 松园别馆 }

      - time: 12:00 – 13:30
        title: 🍱 花莲车站附近午餐
        detail: 回花莲车站周边吃最后一餐花莲小吃（戴记扁食、液香扁食、蓝蜻蜓炸鸡），吃完直接进站不用绕回民宿。<strong>🎒 行李：</strong>车站地下有投币置物柜，若在用餐前还想去其他景点可先锁柜；否则直接带到月台候车。

      - time: 14:00 – 16:30
        title: 🚆 台铁 · 花莲 → 台北（约 2.5 小时）
        transit: true
        detail: 花莲车站搭普悠玛/太鲁阁号/自强号至台北车站。非连续假期通常座位充足，仍建议 14 天开放订票后尽快买好 — 普悠玛/太鲁阁较紧，若满了 自强号班次多、一般抢得到。
        transit_route:
          preferred: 普悠玛号 · 14:xx 花莲 → 16:xx 台北
          alternatives: ["太鲁阁号", "自强号（车程 3h）"]
        tickets:
          - { tag: 普悠玛, value: NT$440 }
        links:
          - { type: ticket, label: 台铁订票, url: *url_railway }
          - { type: map, label: 台北车站, query: Taipei Main Station }

      - time: 17:30 – 18:10
        title: 🚇 机场捷运 · 台北 A1 → 桃园机场 A12/A13
        transit: true
        detail: 台北车站地下 B1 机场捷运，直达车约 35 分钟到 T1，普通车 50 分钟。建议直达车。
        tickets:
          - { tag: 机场捷运, value: NT$150 }
        links:
          - { type: ticket, label: 机场捷运官网, url: *url_tymetro }
          - { type: ticket, label: Klook 车票, url: "https://www.klook.com/zh-CN/activity/11346-taoyuan-airport-mrt-ticket-taipei/" }

      - time: 18:30 – 22:55
        title: ✈️ 桃园国际机场 TPE · 晚餐 + 候机
        detail: |
          Scoot 航站位于 T1。红眼航班 00:55 起飞，建议 22:55 前完成值机（起飞前 2 小时）。机场设有 24 小时微热山丘、星巴克、佳德凤梨酥专柜。T1 出境后有免税店与观景台。
          <br><br>
          <strong>伴手礼：</strong>凤梨酥（微热山丘/佳德/犁记）、乌龙茶、高粱酒、Mr. Brown 咖啡、乖乖、方块酥。
        links:
          - { type: map, label: 桃园机场 T1, query: Taiwan Taoyuan International Airport Terminal 1 }
          - { label: 机场官网, url: "https://www.taoyuan-airport.com/" }

      - time: 6/6 00:55
        title: ✈️ Scoot TR 875 · TPE → SIN
        transit: true
        detail: 00:55 起飞，05:20 抵达新加坡樟宜机场。红眼航班建议穿宽松衣物、带颈枕与眼罩。
    note: |
      <strong>💡 Day 9 Plan B · 花莲 → 松山 → 桃园：</strong>若台铁抢不到票，可改搭立荣/华信航空花莲→松山机场（30 分钟），再搭国道客运 1960/1961 松山→桃园（约 1 小时）。费用较高但时间可控。

booking_channels:
  - name: 台湾高铁 HSR
    links: [{ label: thsrc.com.tw, url: *url_thsrc }]
    note: 提前 29 天购票 · T-EX App
  - name: 台铁 / 普悠玛 / 自强号
    links: [{ label: railway.gov.tw, url: *url_railway }]
    note: 提前 14 天 06:30 开售
  - name: 机场捷运
    links: [{ label: tymetro.com.tw, url: *url_tymetro }]
    note: 悠游卡直刷
  - name: 台湾好行 6670D（台中-日月潭水社 直达）
    links:
      - { label: 6670D 时刻表, url: *url_bus_6670d }
      - { label: 南投客运购票, url: *url_bus_6670d_ticket }
    note: 亦可现场购票
  - name: 日月潭游湖船（南投客运）
    links:
      - { label: 购票, url: *url_boat_sml_ticket }
    note: NT$250 一日票
  - name: 台湾好行 6739（日月潭-阿里山）
    links:
      - { label: 时刻表, url: *url_bus_6739 }
      - { label: 员林客运购票, url: *url_bus_6739_ticket }
      - { label: 南投客运, url: *url_nantoubus }
    note: 需电话或 APP 预约
  - name: 阿里山森林铁路
    links:
      - { label: afrts.forest.gov.tw（官方）, url: *url_afrts }
      - { label: 11:50 下行备用, url: *url_afrts_1150_down }
    note: 官方提前 14 天早上开放订票，订位即付款
  - name: 九族文化村 + 日月潭缆车
    links:
      - { label: 中台湾好玩卡, url: *url_funcard_nine_combo }
      - { label: Klook, url: *url_klook_nine }
      - { label: KKday, url: *url_kkday_nine }
    note: "套票 NT$1,050 含九族 + 日月潭游湖船 + 缆车（日月潭线）"
  - name: 多罗满赏鲸
    links:
      - { label: Klook, url: *url_klook_whale }
      - { label: 官网, url: *url_turumoan }
  - name: 故宫博物院
    links:
      - { label: 官网, url: *url_npm }
      - { label: Klook, url: *url_klook_npm }
  - name: Scoot 航班管理
    links: [{ label: flyscoot.com, url: "https://www.flyscoot.com/en/manage-booking" }]

checklist:
  - '<strong>悠游卡 EasyCard</strong>：机场、捷运站可购（NT$100 押金），台北捷运、公车、台铁、便利店、台湾好行均可用。<strong>建议初始储值 NT$1,000</strong>（机捷往返约 NT$300 + 台北捷运 / 公车 NT$300 + 便利店 & 备用 NT$400），不够随时到 7-11 / 全家加值即可'
  - '<strong>网络</strong>：桃园机场 Chunghwa Telecom 柜台办 8 天无限流量 SIM 约 NT$500，或 eSIM（Airalo/Saily）'
  - '<strong>国际驾照</strong>：台南租机车必备，出发前在当地监理所办理'
  - '<strong>防晒 & 薄外套</strong>：5–6 月台湾平地 28–32°C，阿里山海拔 2,200m 早晚 10–15°C，日夜温差大'
  - '<strong>梅雨季</strong>：5–6 月台湾进入梅雨，备好雨具，阿里山湿滑需防滑鞋'
  - '<strong>现金</strong>：老店小摊仅收现金，建议备 NT$3,000–5,000'
  - '<strong>插座</strong>：台湾电压 110V，与美国同型，中国/新加坡电器需转接头'
  - '<strong>抢票提醒</strong>：台铁（提前 14 天 06:30）· 林铁（提前 14 天 06:00）· 高铁（提前 29 天）'
---
