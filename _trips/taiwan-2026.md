---
layout: trip
title: 台湾九日环岛行程
subtitle:
  - 台北
  - 日月潭
  - 阿里山
  - 台南
  - 花莲
date_range: 2026/5/28 – 6/6
duration: 共 9 天 8 夜
last_updated: 2026/4/12

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
        - { label: "citizenM Taipei（3 晚）", amount: 9275, in: primary }
        - { label: "水沙连大饭店（1 晚）", amount: 2800, in: primary, note: 估算 }
        - { label: "青山别馆（1 晚）", amount: 2500, in: primary, note: 估算 }
        - { label: "大榕树酒店（2 晚）", amount: 228.78, in: secondary }
        - { label: "S.E.A. 民宿（1 晚）", amount: 3510, in: primary }

    - name: 交通
      icon: 🚆
      items:
        - { label: "高铁 台北→台中", amount: 700, in: primary }
        - { label: "好行 6670A 台中→九族", amount: 229, in: primary }
        - { label: "好行 6739 日月潭→阿里山", amount: 329, in: primary }
        - { label: "好行 7329A 阿里山→嘉义", amount: 283, in: primary }
        - { label: "高铁 嘉义→台南", amount: 410, in: primary }
        - { label: "台铁自强号 台南→花莲", amount: 962, in: primary }
        - { label: "台铁 花莲→台北", amount: 440, in: primary }
        - { label: "机场捷运（往返）", amount: 300, in: primary }
        - { label: "单日租车 5/29（固得租車）", amount: 2500, in: primary, note: 估算 · 未预订 }

    - name: 门票与体验
      icon: 🎫
      items:
        - { label: 故宫博物院, amount: 350, in: primary }
        - { label: "台北 101（89F）", amount: 600, in: primary }
        - { label: "九族文化村（含缆车）", amount: 900, in: primary }
        - { label: "阿里山入园 + 支线 ×2", amount: 400, in: primary }
        - { label: "安平树屋 + 古堡", amount: 70, in: primary }
        - { label: 多罗满赏鲸, amount: 800, in: primary }

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
    nights: 3
    dates: 5/28 (四) – 5/31 (日)
    address: 台北市中正区中华路一段 3 号
    map_query: citizenM Taipei North Gate
  - name: 水沙连大饭店 Shui Sha Lian Hotel
    nights: 1
    dates: 5/31 (日) – 6/1 (一)
    address: 南投县鱼池乡民生街 5 号（日月潭水社）
    map_query: Shui Sha Lian Hotel 水沙连大饭店
  - name: 青山别馆 Chinshan Hotel
    nights: 1
    dates: 6/1 (一) – 6/2 (二)
    address: 嘉义县阿里山乡 42 号
    map_query: Chinshan Hotel Alishan 青山别馆
  - name: 大榕树酒店 Grand Banyan Hotel
    nights: 2
    dates: 6/2 (二) – 6/4 (四)
    address: 台南北区成功路 28 号
    map_query: Grand Banyan Hotel Tainan
  - name: S.E.A. 民宿
    nights: 1
    dates: 6/4 (四) – 6/5 (五)
    address: 花莲市海滨街 72 号
    map_query: S.E.A Hostel Hualien 花莲海滨街72号

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
    title: 抵达台北 · 西门町 · 士林夜市
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
          - { type: ticket, icon: 🎫, label: 机场捷运官网, url: "https://www.tymetro.com.tw/tymetro-new/tc/" }
          - { type: map,    icon: 📍, label: 机场捷运 A12, query: Taoyuan Airport MRT Terminal 1 }

      - time: 16:00 – 17:00
        title: 🏨 citizenM Taipei North Gate · Check-in
        detail: 台北车站步行约 8 分钟，邻近北门捷运站。放行李换装。
        links:
          - { type: map, icon: 📍, label: 地图, query: citizenM Taipei North Gate }
          - { icon: 🔗, label: 酒店官网, url: "https://www.citizenm.com/hotels/asia/taipei/taipei-north-gate-hotel" }

      - time: 17:00 – 18:30
        title: 🛍️ 西门町 Ximending
        detail: 台北最热闹的年轻潮流商圈，有「台北原宿」之称。以西门红楼为中心，步行街内潮牌、电影院、刺青街、小吃林立。推荐：阿宗面线、鸭肉扁、老天禄卤味。
        links:
          - { type: map, icon: 📍, label: 西门町, query: 西门町 Ximending }
          - { type: map, icon: 📍, label: 西门红楼, query: 西门红楼 }

      - time: 18:30 – 19:30
        title: ☕ 赤峰街 Chifeng St（大同区）
        detail: 老街改造的文青聚落，巷弄里藏着老五金行、复古咖啡馆与选物店。日落后光影最美，适合慢慢散步、拍照、逛独立小店。搭捷运中山站 1/4 号出口即达。
        links:
          - { type: map, icon: 📍, label: 赤峰街, query: 赤峰街 大同区 }

      - time: 20:00 – 22:30
        title: 🍜 士林夜市 Shilin Night Market
        detail: 台北最具代表性的大型夜市，小吃、服饰、杂货一应俱全。必吃：豪大大鸡排、生炒花枝、士林大香肠、青蛙下蛋、阿辉面线。搭捷运至「剑潭站」1 号出口，勿搭到「士林站」。
        links:
          - { type: map, icon: 📍, label: 士林夜市, query: 士林夜市 }
          - { type: map, icon: 📍, label: 剑潭站, query: 剑潭站 }
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
      - time: 08:00 – 08:30
        title: 🚗 固得租車 台北车站店 · 取车
        transit: true
        detail: |
          单日租车，方便当日跨故宫博物院（士林）、阳明山国家公园（北投）两个景点 — 公车换乘需近 2 小时，自驾约 40 分钟。
          <br><br>
          <strong>⚠️ 需国际驾照 + 原本国驾照 + 护照。</strong>预订时留意保险（建议加购 CDW 全险）与还车时油量要求。
        tickets:
          - { tag: 预估, value: "NT$ 2,500", note: 含基础险 · 未预订 }
          - { tag: 还车, value: 当日 20:00 前 }
        links:
          - { type: map,    icon: 📍, label: 取车门市, query: 固得租車 台北車站店 }
          - { type: ticket, icon: 🎫, label: GoodCars 官网预订, url: "https://www.goodcars.tw/" }

      - time: 09:00 – 12:30
        title: 🏛️ 国立故宫博物院
        detail: |
          世界四大博物馆之一，收藏近 70 万件中华艺术珍品，包括翠玉白菜、肉形石、毛公鼎等镇馆之宝。建议 3–4 小时细看。
          <br><br>
          <strong>自驾：</strong>从台北车站出发约 25 分钟，馆区有停车场（小型车 NT$50/小时）。
        tickets:
          - { tag: 全票, value: NT$350 }
          - { tag: 开放, value: 09:00–17:00（周一休馆） }
        links:
          - { type: map,    icon: 📍, label: 地图, query: National Palace Museum Taipei }
          - { type: ticket, icon: 🎫, label: 故宫官网, url: "https://www.npm.gov.tw/" }
          - { type: ticket, icon: 🎫, label: Klook 预约, url: "https://www.klook.com/zh-CN/activity/1573-national-palace-museum-taipei/" }

      - time: 12:30 – 14:00
        title: 🍱 午餐 · 故宫晶华 或 士林老街
        detail: 故宫内的晶华餐厅有「国宝宴」菜色，可吃到翠玉白菜、肉形石造型料理。预算有限可开车下山到士林吃铭传大学周边小吃。
        links:
          - { type: map, icon: 📍, label: 故宫晶华, query: 故宫晶华 }

      - time: 14:30 – 18:30
        title: 🌋 阳明山国家公园
        detail: |
          台湾最大休眠火山群，有温泉、硫磺喷气口、花季步道。推荐路线：小油坑（火山地貌）→ 冷水坑（牛奶湖）→ 擎天岗（大草原、水牛）→ 竹子湖（季节限定海芋／绣球花）。
          <br><br>
          <strong>自驾：</strong>从故宫约 30 分钟经阳金公路上山。各景点停车场多为免费，周末车位紧张建议早上进山。
        links:
          - { type: map, icon: 📍, label: 阳明山, query: Yangmingshan National Park }
          - { type: map, icon: 📍, label: 小油坑, query: 小油坑 Xiaoyoukeng }
          - { type: map, icon: 📍, label: 冷水坑, query: 冷水坑 }
          - { type: map, icon: 📍, label: 擎天岗, query: 擎天岗 }
          - { type: map, icon: 📍, label: 竹子湖, query: 竹子湖 阳明山 }

      - time: "19:00"
        title: ♨️ 可选加码 · 北投温泉
        detail: 阳明山下山顺路到北投泡汤，推荐「瀧乃汤」或「泷野温泉」，百年日式老汤屋，入浴 NT$150 起。温泉区周边停车场不多，建议短停。
        links:
          - { type: map, icon: 📍, label: 瀧乃汤, query: 瀧乃汤 Beitou }

      - time: 19:30 – 20:00
        title: 🚗 固得租車 台北车站店 · 还车
        transit: true
        detail: 还车前记得加满油（取车时的油表刻度为准）。门市营业至 22:00，20:00 前到店较宽松。
        links:
          - { type: map, icon: 📍, label: 还车门市, query: 固得租車 台北車站店 }
    stay:
      hotel: citizenM Taipei North Gate
      label: 第 2 晚

  - num: 3
    color: "#16a085"
    date: 2026-05-30
    title: 中正纪念堂 · 台北 101 · 饶河夜市
    date_label: 5月30日（周六）
    location: 台北市区
    toc_label: 5/30 中正 / 101
    items:
      - time: 09:30 – 11:30
        title: 🏛️ 中正纪念堂
        detail: 以「中正」与「正气」为名的大型纪念建筑。每小时整点可观看三军仪队交接仪式，动作整齐划一，为必看亮点。周边有国家戏剧院、音乐厅、蓝顶白墙建筑群，摄影绝佳。
        tickets:
          - { tag: 入场, value: 免费 }
          - { tag: 交接仪式, value: 每日 09:00–17:00 整点 }
        links:
          - { type: map, icon: 📍, label: 地图, query: Chiang Kai-shek Memorial Hall }

      - time: 12:00 – 14:00
        title: 🍜 午餐 · 鼎泰丰 信义店
        detail: 米其林推荐小笼包名店，信义 101 分店排队比永康街总店快。必点：小笼包、蟹粉小笼、豆沙包。
        links:
          - { type: map, icon: 📍, label: 鼎泰丰 信义店, query: 鼎泰丰 信义店 }

      - time: 14:30 – 18:00
        title: 🌈 台北 101 · 彩虹天空步道
        detail: |
          世界级地标，2004 年完工时曾是世界第一高楼。89 楼观景台视野全市；101 楼「Skyline 460」户外步道可俯瞰整个台北盆地，2024 年新推出的彩虹天空桥夜景绝美。
          <br><br>
          信义商圈周边可逛 A11、A13、微风南山、诚品信义旗舰店。
        tickets:
          - { tag: 89F 观景台, value: NT$600 }
          - { tag: Skyline 460, value: "NT$3,000（含 89F）" }
        links:
          - { type: map,    icon: 📍, label: 地图, query: Taipei 101 }
          - { type: ticket, icon: 🎫, label: 101 官网, url: "https://www.taipei-101.com.tw/" }
          - { type: ticket, icon: 🎫, label: Klook, url: "https://www.klook.com/zh-CN/activity/76-taipei-101-observatory/" }
          - { type: ticket, icon: 🎫, label: KKday, url: "https://www.kkday.com/zh-cn/product/21257" }

      - time: 19:00 – 22:30
        title: 🍢 饶河街观光夜市
        detail: |
          与士林齐名的台北双雄夜市，单一直线街道 600 米，吃完不走回头路。必吃：福州世祖胡椒饼（入口牌坊旁、排队名物）、陈董药炖排骨、东发蚵仔面线、红绿灯东山鸭头。
          <br><br>
          搭捷运至「松山站」5 号出口即达。夜市旁就是慈佑宫，百年妈祖庙也顺路参拜。
        links:
          - { type: map, icon: 📍, label: 饶河夜市, query: 饶河街观光夜市 }
          - { type: map, icon: 📍, label: 松山慈祐宫, query: 松山慈祐宫 }
    stay:
      hotel: citizenM Taipei North Gate
      label: 第 3 晚

  - num: 4
    color: "#2e86ab"
    date: 2026-05-31
    title: 台北 → 台中 → 九族文化村 → 日月潭
    date_label: 5月31日（周日）
    location: 中部大移动
    toc_label: 5/31 日月潭
    items:
      - time: 07:31 – 08:18
        title: 🚅 高铁 · 台北 → 台中（约 47 分钟）
        transit: true
        detail: 从 citizenM 步行 8 分钟至台北高铁站。南下列车班次密集，周日上午每 15 分钟一班。
        transit_route:
          preferred: 07:31 出发 → 08:18 抵达台中
          alternatives: ["08:11 – 09:15", "08:31 – 09:18"]
        tickets:
          - { tag: 标准车厢, value: NT$700 }
          - { tag: 早鸟 65 折, value: NT$455, note: 提前 5–28 天 }
        links:
          - { type: ticket, icon: 🎫, label: 台湾高铁官网, url: "https://www.thsrc.com.tw/" }
          - { type: ticket, icon: 🎫, label: Klook 高铁票, url: "https://www.klook.com/zh-CN/activity/2011-taiwan-high-speed-rail-ticket/" }
          - { type: map,    icon: 📍, label: 台北高铁站, query: HSR Taipei Station }
          - { type: map,    icon: 📍, label: 台中高铁站, query: HSR Taichung Station }

      - time: 08:45 – 09:30
        title: 🚌 台湾好行 6670A · 台中高铁站 → 九族文化村
        transit: true
        detail: 高铁台中站 1 楼 5 号出口搭乘台湾好行 6670A（经九族）。车程约 45 分钟直达九族文化村。
        transit_route:
          preferred: 08:45 出发 → 09:30 抵达
          alternatives: ["07:45", "09:45", "15:45"]
        tickets:
          - { tag: 单程, value: NT$229, note: 高铁站起 }
          - { tag: 悠游卡, value: 约 88 折 }
        links:
          - { type: ticket, icon: 🎫, label: 6670A 时刻表, url: "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=6670A&rn=1775391353552&lan=C" }
          - { type: ticket, icon: 🎫, label: 台湾好行日月潭线, url: "https://www.taiwantrip.com.tw/line/11" }

      - time: 09:30 – 15:30
        title: 🎢 九族文化村
        detail: 一票玩到底，包含原住民九族文化展示、欧洲花园主题乐园、UFO 自由落体、加勒比海盗船、以及可俯瞰日月潭的「日月缆车」。推荐：马雅探险、西班牙海岸大漩涡、原住民歌舞表演。最后搭日月潭缆车前往日月潭。
        tickets:
          - { tag: 全票, value: NT$900, note: 含日月潭缆车 }
          - { tag: 线上购票, value: 约 NT$780–830 }
          - { tag: 营业时间, value: 09:30–17:00 }
        links:
          - { type: map,    icon: 📍, label: 九族文化村, query: Formosan Aboriginal Culture Village }
          - { type: ticket, icon: 🎫, label: 九族官网, url: "https://www.nine.com.tw/" }
          - { type: ticket, icon: 🎫, label: Klook, url: "https://www.klook.com/zh-CN/activity/574-formosan-aboriginal-culture-village-nantou/" }
          - { type: ticket, icon: 🎫, label: KKday, url: "https://www.kkday.com/zh-cn/product/4180" }

      - time: 15:30 – 16:00
        title: 🚡 日月潭缆车 · 九族 → 伊达邵
        transit: true
        detail: |
          从九族文化村搭缆车约 7 分钟直达日月潭缆车站（伊达邵）。<strong>缆车已含在九族门票中。</strong>注意末班缆车时间（约 16:00–16:30），务必提早搭乘。
          <br><br>
          抵达伊达邵后需搭轮渡到水沙连大饭店（水社码头）。
        links:
          - { type: map, icon: 📍, label: 日月潭缆车, query: Sun Moon Lake Ropeway }
          - { icon: 🔗, label: 缆车官网, url: "https://www.ropeway.com.tw/" }

      - time: 16:00 – 18:30
        title: ⛵ 日月潭游湖 · 伊达邵 → 水社
        detail: 搭游湖船从伊达邵码头 → 玄光寺 → 水社码头（三段式游湖船票 NT$300，当日不限次数）。伊达邵必吃：阿婆香菇茶叶蛋、总统鱼、邵族麻糬、山猪肉串。
        links:
          - { type: map,    icon: 📍, label: 伊达邵码头, query: 伊达邵码头 }
          - { type: map,    icon: 📍, label: 玄光寺, query: 玄光寺 日月潭 }
          - { type: map,    icon: 📍, label: 水社码头, query: 水社码头 }
          - { type: ticket, icon: 🎫, label: 游湖船 Klook, url: "https://www.klook.com/zh-CN/activity/2015-sun-moon-lake-boat-tour/" }
    note: |
      <strong>💡 Day 4 建议：</strong>住日月潭水社比住台中更有效率 — 隔天 08:00 从水社出发搭台湾好行去阿里山，避免再花 1.5 小时从台中赶回日月潭。
    stay:
      hotel: 水沙连大饭店 Shui Sha Lian Hotel

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
          - { type: ticket, icon: 🎫, label: 6739 时刻表, url: "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=67390&rn=1775391077195&lan=C" }
          - { type: ticket, icon: 🎫, label: 南投客运预约, url: "https://www.nantoubus.com.tw/" }
          - { type: map,    icon: 📍, label: 水社站, query: 水社 Shuishe Sun Moon Lake }
          - { type: map,    icon: 📍, label: 阿里山入口, query: Alishan National Forest Recreation Area Entrance }

      - time: 12:00 – 13:00
        title: 🎫 阿里山入园 · 午餐
        detail: 抵达阿里山转运站后购买入园门票，简易午餐。6/1 为周一，适用非假日票价 NT$200。转运站有厕所与行李寄放处。
        tickets:
          - { tag: 全票, value: NT$200, note: 非假日 }
          - { tag: 假日, value: NT$300 }
        links:
          - { type: ticket, icon: 🎫, label: 阿里山国家风景区, url: "https://www.ali-nsa.net/" }

      - time: 13:00 – 17:00
        title: 🌲 阿里山森林游乐区 · 神木线 + 沼平线
        detail: |
          <strong>推荐路线：</strong><br>
          ① 搭小火车神木线至神木站（10 分钟，NT$100），漫步巨木群栈道<br>
          ② 步行至姐妹潭、受镇宫<br>
          ③ 搭沼平线至沼平站（6 分钟，NT$100），走沼平天空步道、樱之道<br>
          ④ 回到阿里山车站
        tickets:
          - { tag: 神木线, value: NT$100, note: 单程 }
          - { tag: 沼平线, value: NT$100, note: 单程 }
        links:
          - { type: map,    icon: 📍, label: 阿里山车站, query: 阿里山车站 }
          - { type: map,    icon: 📍, label: 神木站, query: Sacred Tree Station Alishan }
          - { type: map,    icon: 📍, label: 姐妹潭, query: 姐妹潭 阿里山 }
          - { type: map,    icon: 📍, label: 沼平站, query: 沼平站 }
          - { type: ticket, icon: 🎫, label: 林铁支线订票, url: "https://afrts.forest.gov.tw/" }

      - time: "17:30"
        title: 🏨 青山别馆 Chinshan Hotel · Check-in
        detail: 阿里山园区内住宿，靠近阿里山车站，方便隔日搭森林铁路下山。<strong>园区晚上 7 点后几乎无餐厅营业，建议提早用餐。</strong>
        links:
          - { type: map, icon: 📍, label: 酒店位置, query: Chinshan Hotel 青山别馆 阿里山 }
    note: |
      <strong>💡 Day 5 看日出选择：</strong>若想看日出，可于隔天清晨（6/2）搭乘祝山线观日出火车（NT$150），发车时间依日出当日 4:30 公告，通常约 04:30–05:00 发车。在 Chinshan Hotel 柜台或阿里山车站购票。
    stay:
      hotel: 青山别馆 Chinshan Hotel

  - num: 6
    color: "#c0392b"
    date: 2026-06-02
    title: 阿里山 → 嘉义 → 台南
    date_label: 6月2日（周二）
    location: 百年林铁 · 古都入城
    toc_label: 6/2 阿里山→台南
    items:
      - time: 可选 04:30
        title: 🌅 祝山线观日出（可选）
        detail: 前一天下午在阿里山车站或酒店柜台购票。搭观日出火车至祝山站 → 看日出 → 原路返回，约 2 小时。
        tickets:
          - { tag: 祝山线, value: NT$150 }
        links:
          - { type: map, icon: 📍, label: 祝山站, query: 祝山观日楼 }

      - time: 10:10 – 13:10
        title: 🚌 台湾好行 7329A · 阿里山 → 嘉义高铁站
        transit: true
        detail: |
          从阿里山转运站直达嘉义高铁站，约 3 小时，沿途经石桌、奋起湖、竹崎。
          <br><br>
          <strong>注：</strong>原本打算搭阿里山森林铁路本线下山，但由于本线需提前 14 天抢票且有时段限制，改搭台湾好行公车，时间更弹性。若想体验林铁，仍建议提前 14 天上官网抢票。
        transit_route:
          preferred: 10:10 出发 → 13:10 抵达嘉义高铁
          alternatives: ["12:00", "13:30", "14:40", "16:40"]
        tickets:
          - { tag: 票价, value: NT$283 }
        links:
          - { type: ticket, icon: 🎫, label: 7329A 时刻表, url: "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=7329A&rn=1775391545330&lan=C" }
          - { type: ticket, icon: 🎫, label: 73290（慢车版）, url: "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=73290&rn=1775222496370&lan=C" }
          - { type: ticket, icon: 🎫, label: 林铁官网（备选）, url: "https://afrts.forest.gov.tw/" }
          - { type: map,    icon: 📍, label: 嘉义高铁站, query: Chiayi HSR Station }

      - time: 13:30 – 15:00
        title: 🍜 嘉义市区午餐 · 鸡肉饭巡礼
        detail: 嘉义高铁站搭 BRT（凭高铁票免费）或台铁至嘉义市区，约 25 分钟。必吃：林聪明沙锅鱼头、刘里长鸡肉饭、桃城豆花、嘉义喷水鸡肉饭。
        links:
          - { type: map, icon: 📍, label: 林聪明沙锅鱼头, query: 林聪明沙锅鱼头 }
          - { type: map, icon: 📍, label: 刘里长鸡肉饭, query: 刘里长鸡肉饭 }

      - time: 15:30 – 15:45
        title: 🚄 高铁 · 嘉义 → 台南（约 13 分钟）
        transit: true
        detail: 嘉义高铁直达台南高铁站 13 分钟，再转乘台铁沙仑线至台南市区（25 分钟），或直接搭计程车到大榕树酒店（约 30 分钟）。
        tickets:
          - { tag: 高铁, value: NT$410 }
          - { tag: 沙仑线, value: NT$25 }
        links:
          - { type: ticket, icon: 🎫, label: 台湾高铁, url: "https://www.thsrc.com.tw/" }
          - { type: ticket, icon: 🎫, label: 台铁订票, url: "https://www.railway.gov.tw/tra-tip-web/tip?lang=ZH_TW" }

      - time: "17:00"
        title: 🏨 大榕树酒店 Grand Banyan Hotel · Check-in
        detail: 位于台南北区成功路，邻近台南公园与台南火车站。check-in 后可在附近吃晚餐 + 神农街夜逛。
        links:
          - { type: map, icon: 📍, label: 酒店位置, query: Grand Banyan Hotel Tainan }
    note: |
      <strong>💡 Day 6 林铁 vs 公车：</strong>此行程改搭台湾好行 7329A 公车下山（现买即走），并非阿里山森林铁路本线。若想坐百年林铁（阿里山→嘉义 约 NT$600，3h55m），务必出发前 14 天上官网 <a href="https://afrts.forest.gov.tw" target="_blank">afrts.forest.gov.tw</a> 抢票（订位即付款，2026 年新制，逾时取消）。
    stay:
      hotel: 大榕树酒店 Grand Banyan Hotel
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
        title: 🛵 租一台电动机车（小电驴）
        detail: 台南景点分散，市区与安平距离 15 分钟车程，巷弄多、单行道多。推荐租电动机车（GoShare / WeMo / iRent），自由度高。<strong>需持国际驾照。</strong>
        links:
          - { type: ticket, icon: 🛵, label: GoShare, url: "https://www.goshare.com.tw/" }
          - { type: ticket, icon: 🛵, label: WeMo, url: "https://www.wemoscooter.com/" }
          - { type: ticket, icon: 🛵, label: iRent, url: "https://www.irentcar.com.tw/" }

      - time: 09:00 – 11:00
        title: 📚 国立台湾文学馆
        detail: 台湾第一座国家级文学博物馆。建筑为 1916 年日治时期台南州厅，巴洛克风格古蹟，内部展出台湾百年文学演变。
        tickets:
          - { tag: 入场, value: 免费 }
          - { tag: 开放, value: 09:00–18:00（周一休） }
        links:
          - { type: map,    icon: 📍, label: 地图, query: National Museum of Taiwan Literature }
          - { type: ticket, icon: 🔗, label: 官网, url: "https://www.nmtl.gov.tw/" }

      - time: 11:30 – 13:00
        title: 🍜 国华街小吃集散地 · 午餐
        detail: 推荐：金得春卷、富盛号碗粿、邱家小卷米粉、修安扁担豆花、江水号绿豆汤。国华街短短 300 米集合了台南数十家老店，排队值得。
        links:
          - { type: map, icon: 📍, label: 国华街, query: 国华街 台南 }
          - { type: map, icon: 📍, label: 金得春卷, query: 金得春卷 }

      - time: 13:30 – 16:00
        title: 🌳 安平树屋 + 安平古堡
        detail: 安平树屋原为德记洋行仓库，百年榕树盘根错节、穿墙破顶，与红砖老屋共生，被 CNN 誉为「全球最美 10 大树屋」之一。隔壁为荷兰人建造的安平古堡（热兰遮城），台湾最早城堡。
        tickets:
          - { tag: 联票, value: NT$70, note: 树屋+古堡 }
        links:
          - { type: map,    icon: 📍, label: 安平树屋, query: Anping Tree House }
          - { type: map,    icon: 📍, label: 安平古堡, query: Anping Old Fort }
          - { type: ticket, icon: 🎫, label: Klook 门票, url: "https://www.klook.com/zh-CN/activity/53574-anping-tree-house-tainan/" }

      - time: 16:00 – 17:30
        title: 🍧 安平老街
        detail: 推荐：周氏虾卷、陈家蚵卷、同记安平豆花（招牌花生豆花）、林永泰兴蜜饯行（百年老店）。
        links:
          - { type: map, icon: 📍, label: 安平老街, query: 安平老街 }

      - time: 18:00 – 20:30
        title: 🏮 神农街 Shennung Street
        detail: 清代遗留的古老街道，两旁保留大量清末民初老屋，如今转型为文青酒吧、独立书店、选物店、老派咖啡馆聚落。傍晚灯笼亮起最有味道，是台南最美的一条老街。
        links:
          - { type: map, icon: 📍, label: 神农街, query: 神农街 台南 }
          - { type: map, icon: 📍, label: 水仙宫, query: 台南水仙宫 }
          - { type: map, icon: 📍, label: 赤崁楼, query: 赤崁楼 台南 }

      - time: 21:00 起
        title: 🌃 夜宵 · 保安路小吃
        detail: 6/3 为周三，台南花园夜市/大东夜市均未开市，可到保安路一带：阿村牛肉汤、阿明猪心、阿龙香肠熟肉、叶家小卷米粉（24 小时）。
        links:
          - { type: map, icon: 📍, label: 保安路, query: 保安路小吃 台南 }
    stay:
      hotel: 大榕树酒店 Grand Banyan Hotel
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
        title: 🚆 台铁自强号 301 · 国军福利站台南 → 花莲
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
          - { type: ticket, icon: 🎫, label: 台铁官网, url: "https://www.railway.gov.tw/tra-tip-web/tip?lang=ZH_TW" }
          - { type: ticket, icon: 🎫, label: 台铁时刻查询, url: "https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip123/query" }
          - { type: map,    icon: 📍, label: 国军福利站 台南站, query: 国军福利站 台南店 }
          - { type: map,    icon: 📍, label: 花莲车站, query: Hualien Station }

      - time: 11:30 – 13:30
        title: 🏨 S.E.A. 民宿 Check-in · 花莲午餐
        detail: 放行李后午餐。花莲必吃：公正包子、蒋记公正包子、戴记扁食、液香扁食。
        links:
          - { type: map, icon: 📍, label: S.E.A. 民宿, query: S.E.A. Hostel Hualien }
          - { type: map, icon: 📍, label: 公正包子, query: 公正包子 }

      - time: 13:20 集合 · 14:00 出船
        title: 🐋 多罗满赏鲸 Duoloman Whale Watching
        detail: |
          花莲外海黑潮经过，全年可观赏飞旋海豚、花纹海豚、伪虎鲸，运气好还能看到抹香鲸、大翅鲸。多罗满为在地老牌业者，船长与解说员皆有海洋生态背景。
          <br><br>
          <strong>集合地点：</strong>多罗满赏鲸海矿馆 · 花莲市华东 15 号<br>
          <strong>集合时间：</strong>14:00 发船（请提前 40 分钟抵达）<br>
          <strong>行程时长：</strong>约 2 小时
        tickets:
          - { tag: 费用, value: CN¥183 / NT$800 }
          - { tag: 出船时段, value: 06:30 / 08:30 / 10:30 / 14:00 / 16:00 }
          - { tag: 携带, value: 防晒 · 晕船药 · 薄外套 }
        links:
          - { type: map,    icon: 📍, label: 集合地点, query: 多罗满赏鲸 花莲市华东15号 }
          - { type: ticket, icon: 🎫, label: Klook 订票, url: "https://www.klook.com/zh-CN/activity/697-hualien-whale-watching-rafting-hualien/" }
          - { type: ticket, icon: 🔗, label: 多罗满官网, url: "https://www.turumoan.com.tw/" }

      - time: 17:00 – 19:00
        title: 🌅 北滨公园 · 太平洋夕阳
        detail: 赏鲸结束后，步行至北滨公园看太平洋海景，天气好时可见日落染红海面。
        links:
          - { type: map, icon: 📍, label: 北滨公园, query: Beibin Park Hualien 北滨公园 }

      - time: 19:00 – 22:00
        title: 🍢 东大门夜市
        detail: 花莲最大夜市，四大主题街区：福町夜市、各省一条街、原住民一条街、自强夜市。必吃：官财板、炸蛋葱油饼、第一家烤肉串、蒋记公正包子。
        links:
          - { type: map, icon: 📍, label: 东大门夜市, query: Dongdamen Night Market }
          - { type: map, icon: 📍, label: 花莲文创园区, query: 花莲文创园区 }
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
      - time: 09:00 – 11:00
        title: 🌊 七星潭 · 最后的太平洋（可选）
        detail: 花莲市区 20 分钟车程可达，鹅卵石月牙湾海滩，太平洋最美蓝。建议 S.E.A. 民宿 check-out 后寄放行李搭计程车前往（单程约 NT$250）。
        links:
          - { type: map, icon: 📍, label: 七星潭, query: Qixingtan Beach Hualien }
          - { type: map, icon: 📍, label: 松园别馆, query: 松园别馆 }

      - time: 12:00 – 13:00
        title: 🍱 花莲午餐 + 取行李
        detail: 回 S.E.A. 民宿取行李。可以吃最后一餐花莲小吃（戴记扁食、液香扁食、蓝蜻蜓炸鸡）。

      - time: 14:00 – 16:30
        title: 🚆 台铁 · 花莲 → 台北（约 2.5 小时）
        transit: true
        detail: 花莲车站搭普悠玛/太鲁阁号/自强号至台北车站。<strong>务必提前 14 天抢票，周五热门班次秒杀。</strong>
        transit_route:
          preferred: 普悠玛号 · 14:xx 花莲 → 16:xx 台北
          alternatives: ["太鲁阁号", "自强号（车程 3h）"]
        tickets:
          - { tag: 普悠玛, value: NT$440 }
        links:
          - { type: ticket, icon: 🎫, label: 台铁订票, url: "https://www.railway.gov.tw/tra-tip-web/tip?lang=ZH_TW" }
          - { type: map,    icon: 📍, label: 台北车站, query: Taipei Main Station }

      - time: 17:30 – 18:10
        title: 🚇 机场捷运 · 台北 A1 → 桃园机场 A12/A13
        transit: true
        detail: 台北车站地下 B1 机场捷运，直达车约 35 分钟到 T1，普通车 50 分钟。建议直达车。
        tickets:
          - { tag: 机场捷运, value: NT$150 }
        links:
          - { type: ticket, icon: 🎫, label: 机场捷运官网, url: "https://www.tymetro.com.tw/tymetro-new/tc/" }
          - { type: ticket, icon: 🎫, label: Klook 车票, url: "https://www.klook.com/zh-CN/activity/3091-taoyuan-airport-mrt-taipei/" }

      - time: 18:30 – 22:55
        title: ✈️ 桃园国际机场 TPE · 晚餐 + 候机
        detail: |
          Scoot 航站位于 T1。红眼航班 00:55 起飞，建议 22:55 前完成值机（起飞前 2 小时）。机场设有 24 小时微热山丘、星巴克、佳德凤梨酥专柜。T1 出境后有免税店与观景台。
          <br><br>
          <strong>伴手礼：</strong>凤梨酥（微热山丘/佳德/犁记）、乌龙茶、高粱酒、Mr. Brown 咖啡、乖乖、方块酥。
        links:
          - { type: map, icon: 📍, label: 桃园机场 T1, query: Taiwan Taoyuan International Airport Terminal 1 }
          - { icon: 🔗, label: 机场官网, url: "https://www.taoyuan-airport.com/" }

      - time: 6/6 00:55
        title: ✈️ Scoot TR 875 · TPE → SIN
        transit: true
        detail: 00:55 起飞，05:20 抵达新加坡樟宜机场。红眼航班建议穿宽松衣物、带颈枕与眼罩。
    note: |
      <strong>💡 Day 9 Plan B · 花莲 → 松山 → 桃园：</strong>若台铁抢不到票，可改搭立荣/华信航空花莲→松山机场（30 分钟），再搭国道客运 1960/1961 松山→桃园（约 1 小时）。费用较高但时间可控。

booking_channels:
  - { name: 台湾高铁 HSR, detail: '<a href="https://www.thsrc.com.tw" target="_blank">thsrc.com.tw</a>（提前 29 天购票）/ T-EX App' }
  - { name: 台铁 / 普悠玛 / 自强号, detail: '<a href="https://www.railway.gov.tw/tra-tip-web/tip?lang=ZH_TW" target="_blank">railway.gov.tw</a>（提前 14 天 06:30 开售）' }
  - { name: 机场捷运, detail: '<a href="https://www.tymetro.com.tw/tymetro-new/tc/" target="_blank">tymetro.com.tw</a> / 悠游卡直刷' }
  - { name: 台湾好行 6670A（台中-日月潭）, detail: '<a href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=6670A&rn=1775391353552&lan=C" target="_blank">时刻表</a> · 现场购票' }
  - { name: 台湾好行 6739（日月潭-阿里山）, detail: '<a href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=67390&rn=1775391077195&lan=C" target="_blank">时刻表</a> · <a href="https://www.nantoubus.com.tw/" target="_blank">南投客运</a> 需电话或 APP 预约' }
  - { name: 台湾好行 7329A（阿里山-嘉义）, detail: '<a href="https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=7329A&rn=1775391545330&lan=C" target="_blank">时刻表</a>' }
  - { name: 阿里山森林铁路, detail: '<a href="https://afrts.forest.gov.tw" target="_blank">afrts.forest.gov.tw</a>（提前 14 天早上开放订票，订位即付款）' }
  - { name: 九族文化村 + 日月潭缆车, detail: '<a href="https://www.klook.com/zh-CN/activity/574-formosan-aboriginal-culture-village-nantou/" target="_blank">Klook</a> / <a href="https://www.kkday.com/zh-cn/product/4180" target="_blank">KKday</a>' }
  - { name: 多罗满赏鲸, detail: '<a href="https://www.klook.com/zh-CN/activity/697-hualien-whale-watching-rafting-hualien/" target="_blank">Klook</a> / <a href="https://www.turumoan.com.tw/" target="_blank">官网</a>' }
  - { name: 台北 101 观景台, detail: '<a href="https://www.klook.com/zh-CN/activity/76-taipei-101-observatory/" target="_blank">Klook</a> / <a href="https://www.taipei-101.com.tw/" target="_blank">官网</a>' }
  - { name: 故宫博物院, detail: '<a href="https://www.npm.gov.tw/" target="_blank">官网</a> / <a href="https://www.klook.com/zh-CN/activity/1573-national-palace-museum-taipei/" target="_blank">Klook</a>' }
  - { name: Scoot 航班管理, detail: '<a href="https://www.flyscoot.com/en/manage-booking" target="_blank">flyscoot.com</a>' }

checklist:
  - '<strong>悠游卡 EasyCard</strong>：机场、捷运站可购（NT$100 押金），台北捷运、公车、台铁、便利店、台湾好行均可用'
  - '<strong>网络</strong>：桃园机场 Chunghwa Telecom 柜台办 8 天无限流量 SIM 约 NT$500，或 eSIM（Airalo/Saily）'
  - '<strong>国际驾照</strong>：台南租机车必备，出发前在当地监理所办理'
  - '<strong>防晒 & 薄外套</strong>：5–6 月台湾平地 28–32°C，阿里山海拔 2,200m 早晚 10–15°C，日夜温差大'
  - '<strong>梅雨季</strong>：5–6 月台湾进入梅雨，备好雨具，阿里山湿滑需防滑鞋'
  - '<strong>现金</strong>：老店小摊仅收现金，建议备 NT$3,000–5,000'
  - '<strong>插座</strong>：台湾电压 110V，与美国同型，中国/新加坡电器需转接头'
  - '<strong>抢票提醒</strong>：台铁（提前 14 天 06:30）· 林铁（提前 14 天 05:00）· 高铁（提前 29 天）'
---
