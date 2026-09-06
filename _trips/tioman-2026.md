---
layout: trip
lang: zh-CN
title: 刁曼岛四日海岛行程
subtitle:
  - 新山 Larkin
  - 丰盛港 Mersing
  - 刁曼岛 Pulau Tioman
date_range: 2026/9/24 – 9/27
duration: 共 4 天 3 夜
last_updated: 2026/9/6

# Repeated URLs — declared once, referenced via YAML anchors (*url_xxx) below.
urls:
  cataferry:     &url_cataferry     "https://www.cataferry.com/"
  busonline:     &url_busonline     "https://www.busonlineticket.com/"
  causewaylink:  &url_causewaylink  "https://www.causewaylink.com.my/"
  amantioman:    &url_amantioman    "https://www.amantioman.com/"
  aman_snorkel:  &url_aman_snorkel  "https://www.amantioman.com/packages/snorkeling-fun/"
  serimalaysia:  &url_serimalaysia  "https://www.serimalaysia.com.my/hotel-seri-malaysia-mersing/"

cost:
  primary: RM
  secondary: SGD
  rate: 3.18
  rate_note: 2026 年 9 月
  notes:
    - 岛上三餐已含在房价内
    - 浮潜装备租金
    - 免税店购物
    - 小费
    - 汇率浮动
  groups:
    - name: 住宿（3 晚）
      icon: 🏨
      items:
        - { label: "Aman Tioman Beach Resort（2 晚 · 含三餐 · 2 人）", amount: 1406, in: primary }
        - { label: "Hotel Seri Malaysia Mersing（9/24 一晚 · Trip.com 预付 ¥213.19）", amount: 128.51, in: primary }

    - name: 交通
      icon: 🚌
      items:
        - { label: "新加坡 → 新山 Larkin 关卡巴士（2 人）", amount: 10, in: primary, note: 估算 }
        - { label: "Causeway Link JB-MS02 Larkin → 丰盛港（2 人）", amount: 40, in: primary }
        - { label: "Cataferry 往返快艇 丰盛港 ⇄ 刁曼 Paya（2 人）", amount: 360, in: primary }
        - { label: "Causeway Link MSJB03 丰盛港 → Larkin（2 人）", amount: 46, in: primary }
        - { label: "Larkin → 新加坡 关卡巴士（2 人）", amount: 10, in: primary, note: 估算 }

    - name: 门票与体验
      icon: 🎫
      items:
        - { label: "刁曼海洋公园保育费（RM 30 × 2 人）", amount: 60, in: primary }
        - { label: "柔佛州立公园费（RM 20 × 2 人）", amount: 40, in: primary, note: 估算 }
        - { label: "半日跳岛浮潜团（RM 80 × 2 人）", amount: 160, in: primary, note: 估算 }
        - { label: "浮潜装备租借（2 人 × 1 天）", amount: 40, in: primary, note: 估算 }

hotels:
  - name: Hotel Seri Malaysia Mersing 马来西亚丰盛港塞里酒店
    nights: 1
    dates: 9/24 (四) – 9/25 (五)
    address: Lot TTB 641, Jalan Ismail, Mersing Kechil, 86800 Mersing, Johor, Malaysia
    map_query: Hotel Seri Malaysia Mersing Jalan Ismail
  - name: Aman Tioman Beach Resort
    nights: 2
    dates: 9/25 (五) – 9/27 (日)
    address: Lot 73, Kampung Paya, Pulau Tioman, 26800 Pahang, Malaysia
    map_query: Aman Tioman Beach Resort Kampung Paya Tioman

hotels_note: |
  <strong>🏨 Hotel Seri Malaysia Mersing（9/24）：</strong>高级大床房 1 间 1 晚（1 张大床，最多 2 位成人），Trip.com 网上预付已付清，<strong>不含早餐</strong>。Check-in 15:00–22:00 / Check-out 12:00 前，前台电话 +60 7-799 1876。<strong>9/22 23:59 后不可退款。</strong>
  <br><br>
  <strong>🏨 Aman Tioman Beach Resort（9/25–9/27）：</strong>1 房 2 成人，含三餐（Room &amp; Meals），RM 1,406 已全额付清。Check-in 15:00 / Check-out 10:00，前台电话 012-772 9880。
  <br><br>
  <strong>⚠️ 注意：</strong>9/25 早上 07:05 开船、06:00 就得到码头，<strong>塞里酒店的早餐（自助餐 RM 20 / 成人，需现场加购）根本赶不上</strong>，别提前买。退房时间虽是 12:00，但当天 05:45 左右就要离开，记得前一晚在前台确认早退房 / 交还房卡的方式。

overview:
  - { label: DAY 1,   text: 新加坡 → 新山 → 丰盛港 }
  - { label: DAY 2,   text: 快艇上岛 · Paya 海滩 }
  - { label: DAY 3,   text: 跳岛浮潜 · Tulai 珊瑚岛 }
  - { label: DAY 4,   text: 离岛 · 原路返回新加坡 }
  - { label: 住宿,    text: Aman Tioman（含三餐） }
  - { label: 主要交通, text: 跨境巴士 · 快艇渡轮 }

days:
  - num: 1
    color: "#2980b9"
    date: 2026-09-24
    lat: 2.4312
    lon: 103.8405
    title: 新加坡 → 新山 Larkin → 丰盛港
    date_label: 9月24日（周四）
    location: 陆路北上
    toc_label: 9/24 南下丰盛港
    items:
      - time: 08:00 – 10:30
        title: 🚌 新加坡 → 新山 Larkin Sentral
        transit: true
        detail: |
          从新加坡搭 CW1 / CW2（金文泰、快乐山发车）或 Causeway Link 直达 Larkin Sentral 的班车过新柔长堤。<strong>务必预留缓冲</strong>——兀兰关卡周四早上仍会塞，整段含通关通常 1.5–2.5 小时。
          <br><br>
          过关流程：新加坡出境 → 上车 → 马来西亚 JB Sentral 入境 → 再上车到 Larkin。中国护照持有人须提前 3 天内在线填 <strong>MDAC 马来西亚数字入境卡</strong>。
        links:
          - { type: map, label: Larkin Sentral, query: Larkin Sentral Johor Bahru }
          - { label: MDAC 官网, url: "https://imigresen-online.imi.gov.my/mdac/main" }

      - time: 11:00 – 13:00
        title: 🍜 Larkin Sentral 午餐 + 候车
        detail: |
          Larkin 车站二楼有本地美食中心，来一碗叻沙、云吞面或炒粿条垫肚子——今天下午整段车程约 3.5 小时，中途只有一次休息站。顺手在便利店备水与零食。
          <br><br>
          <strong>提醒：</strong>官方建议发车前 1 小时到候车月台，随时看 CTS 电子屏确认闸口，闸口号临发车前可能会变。
        links:
          - { type: map, label: Larkin Sentral 巴士总站, query: "Larkin Sentral Bus Terminal, Jalan Garuda, Johor Bahru" }

      - time: 13:30 – 17:00
        title: 🚌 Causeway Link Express · Larkin → 丰盛港
        transit: true
        detail: |
          班次 <strong>JB-MS02</strong>，2+2 EXECUTIVE 座位车，Larkin Sentral（BT 5, Jalan Garuda）发车，终点丰盛港巴士总站（Terminal Bas Dan Teksi Bandar Mersing）。车程约 3–3.5 小时。
          <br><br>
          上车前把 BusOnlineTicket 的电子票打印或截图备好，登车码在票面上，司机核对后放行。
        tickets:
          - { tag: 座位, value: "LD1, LD2" }
          - { tag: 票价, value: "RM 20 / 成人" }
        links:
          - { type: map, label: 丰盛港巴士总站, query: "Terminal Bas Dan Teksi Bandar Mersing" }
          - { type: ticket, label: BusOnlineTicket, url: *url_busonline }
          - { label: Causeway Link 官网, url: *url_causewaylink }

      - time: 17:00 – 18:00
        title: 🏨 Hotel Seri Malaysia Mersing · Check-in
        detail: |
          地址 Lot TTB 641, Jalan Ismail（Mersing Kechil），巴士总站过去计程车 5 分钟 / RM 10 以内，到 Mersing Harbour Centre 渡轮码头也很近。<strong>登记入住时段 15:00–22:00</strong>，凭订单住客姓名与护照办理。
          <br><br>
          房型是高级大床房（1 张大床，最多 2 位成人），<strong>不含早餐</strong>——反正明早 05:45 就要出门，也吃不上。放好行李后先在前台问清楚<strong>明早的退房 / 还卡方式</strong>与叫车安排。
        tickets:
          - { tag: 房型, value: 高级大床房 · 1 张大床 }
          - { tag: 登记入住, value: "15:00 – 22:00" }
          - { tag: 早餐, value: "自助餐 RM 20 / 成人（未含 · 赶不上）" }
        links:
          - { type: map, label: 酒店地图, query: Hotel Seri Malaysia Mersing Jalan Ismail }
          - { type: map, label: Mersing Harbour Centre, query: Mersing Harbour Centre }
          - { label: Seri Malaysia 官网, url: *url_serimalaysia }

      - time: 18:30 – 20:30
        title: 🦀 丰盛港海鲜晚餐
        detail: |
          丰盛港是柔佛东海岸的渔港，海鲜便宜又新鲜。码头一带的海鲜楼（Mersing Seafood Restaurant、Loke Tien Yuen 老天缘等）可试甘香螃蟹、奶油虾、清蒸石斑。吃完早点回房收拾，把上岛要用的东西（泳衣、防晒、护照、现金）单独装一包。<strong>顺路在镇上 ATM 取足现金</strong>——明天码头的两笔公园费只收现金，岛上更取不到钱。
        links:
          - { type: map, label: 丰盛港美食街, query: Mersing seafood restaurant }
          - { type: map, label: 镇上 ATM, query: ATM Mersing Johor }
    note: |
      <strong>💡 明早关键节点：</strong>快艇 07:05 开船，Cataferry 与度假村都要求 <strong>提前 1 小时（06:00）</strong>抵达 Mersing Harbour Centre —— 需在码头柜台换登船牌、缴海洋公园保育费，闸口 <strong>发船前 10 分钟关闭</strong>。今晚务必定好闹钟。
    stay:
      hotel: Hotel Seri Malaysia Mersing 马来西亚丰盛港塞里酒店

  - num: 2
    color: "#16a085"
    date: 2026-09-25
    lat: 2.7936
    lon: 104.1447
    title: 快艇上岛 · Paya 海滩初见
    date_label: 9月25日（周五）
    location: 刁曼岛 Kampung Paya
    toc_label: 9/25 上岛 · Paya
    items:
      - time: 06:00 – 07:05
        title: ⛴️ Mersing Harbour Centre · 换登船牌 + 缴保育费
        detail: |
          凭 Cataferry 电子票到柜台换实体登船牌，同时到旁边的保育费柜台缴费——这两笔钱<strong>不含在船票里，只收现金</strong>：
          <br><br>
          • <strong>刁曼海洋公园保育费</strong>：外国成人 RM 30 / 人<br>
          • <strong>柔佛州立公园费</strong>（丰盛港出发独有）：外国成人 RM 20 / 人
          <br><br>
          护照随身，登船前会核验身份。请提前 20 分钟到候船厅。
        tickets:
          - { tag: 海洋公园保育费, value: "RM 30 / 成人（现金）" }
          - { tag: 柔佛州立公园费, value: "RM 20 / 成人（现金）", note: 估算 }
          - { tag: 闸口关闭, value: 发船前 10 分钟 }
        links:
          - { type: map, label: Mersing Harbour Centre, query: Mersing Harbour Centre jetty }
          - { type: ticket, label: Cataferry 官网, url: *url_cataferry }

      - time: 07:05 – 09:00
        title: ⛴️ Cataferry · 丰盛港 → 刁曼岛（Paya 码头）
        transit: true
        detail: |
          Cataferry 双体快艇，航程约 1.5–2 小时，会依序停靠西海岸各村，<strong>Paya 是其中一站，留意广播别坐过站</strong>。船舱空调很足，带件薄外套；南海这段在 9 月通常平稳，但仍建议提前 30 分钟吃晕船药，坐中后段船身晃动最小。
        tickets:
          - { tag: 座位, value: "8A, 8B（Standard）" }
          - { tag: 往返票价, value: "MYR 360 / 2 人（已付）" }
        links:
          - { type: map, label: Paya 码头, query: Kampung Paya Jetty Tioman }
          - { type: ticket, label: Cataferry, url: *url_cataferry }

      - time: 09:00 – 10:00
        title: 🎒 Aman Tioman Beach Resort · 行李寄存
        detail: |
          Paya 码头下船即到度假村，步行 3–5 分钟。<strong>正式 check-in 是 15:00</strong>，先把大件行李寄前台，换上泳衣与凉鞋，顺手确认三餐时段（房价含早/午/晚三餐）与浮潜团报名方式。
        links:
          - { type: map, label: Aman Tioman Beach Resort, query: Aman Tioman Beach Resort Kampung Paya Tioman }
          - { label: 度假村官网, url: *url_amantioman }

      - time: 10:30 – 12:30
        title: 🏖️ Paya 海滩 · 岸潜初体验
        detail: |
          Paya 是刁曼西岸最平缓的一段沙滩，海水清、浪小，<strong>离岸游 30–50 米就有活珊瑚与热带鱼群</strong>，非常适合第一天热身。度假村可租浮潜三宝（面镜 + 呼吸管 + 蛙鞋，约 RM 15–25 / 天）。
          <br><br>
          <strong>注意：</strong>刁曼是海洋公园，<strong>禁止踩踏、触摸或带走任何珊瑚与贝壳</strong>；防晒请用礁石友好型（reef-safe）。
        links:
          - { type: map, label: Paya Beach, query: Paya Beach Tioman }

      - time: 12:30 – 13:30
        title: 🍛 度假村午餐（含）
        detail: 房价已含三餐，午餐通常是马来式自助或套餐——咖喱鱼、参巴空心菜、炒饭配虾饼。岛上物价偏高，能吃住餐厅就别外食。

      - time: 15:00 – 15:30
        title: 🏨 Aman Tioman · 正式 Check-in
        detail: 拿房卡放行李、冲个澡。岛上电压 240V / 英标三脚插座（Type G），与新加坡一致，不用转接头。房间空调与热水通常按时段供应，早点确认。
        links:
          - { type: map, label: 地图, query: Aman Tioman Beach Resort Kampung Paya Tioman }

      - time: 16:00 – 18:30
        title: 🐠 Renggis 岛外围 / 沙滩漫步
        detail: |
          体力还行就跟度假村问问下午的短程浮潜（Pulau Renggis 就在北边 Berjaya 外海，运气好能见到黑鳍礁鲨与海龟）；不想下水就沿沙滩往北散步，能一路走到 Genting 村方向，看渔船和高脚屋。
          <br><br>
          刁曼西岸<strong>正对日落方向</strong>，18:30 前后是最好的光线，别错过。
        links:
          - { type: map, label: Pulau Renggis, query: Pulau Renggis Tioman }
          - { type: ticket, label: 度假村浮潜配套, url: *url_aman_snorkel }

      - time: 19:00 – 20:30
        title: 🍤 度假村晚餐（含）+ 夜观星空
        detail: 岛上几乎没有光污染，晚饭后走到沙滩躺着看银河是刁曼的隐藏项目。9 月夜间约 26–28°C，带瓶水与驱蚊液即可。
    stay:
      hotel: Aman Tioman Beach Resort
      label: 第 1 晚 / 共 2 晚

  - num: 3
    color: "#e67e22"
    date: 2026-09-26
    lat: 2.8672
    lon: 104.0967
    title: 跳岛浮潜 · Tulai 珊瑚岛
    date_label: 9月26日（周六）
    location: 刁曼岛周边海域
    toc_label: 9/26 跳岛浮潜
    items:
      - time: 08:00 – 09:00
        title: 🍳 度假村早餐 + 集合
        detail: 早餐后到前台集合，出海前把防水袋、防晒、帽子、干毛巾准备好，手机建议装防水套。船上一般不供餐（全日团含简餐），自备水。

      - time: 09:00 – 15:00
        title: 🐠 跳岛浮潜团（Tulai 珊瑚岛 · Renggis · Monkey Bay）
        detail: |
          刁曼最经典的一日项目。经典路线是<strong>珊瑚岛 Pulau Tulai</strong>（水下能见度最好、软珊瑚成片，是整个刁曼公认的浮潜之王）、<strong>Renggis 岛</strong>（常见黑鳍礁鲨、绿海龟）、<strong>Monkey Bay 猴子湾</strong>与 Malang Rock 礁石区。
          <br><br>
          直接在度假村前台报名最省事，也可以到 Paya 村里的船家问价——半日团 RM 50–80 / 人（3–4 个点），全日团 RM 100–150 / 人（含午餐、点更多）。装备另租 RM 15–25。
          <br><br>
          <strong>Plan B：</strong>不想出海可以包一辆越野车翻山到东岸的 <strong>Juara 朱亚拉</strong>（单程约 45 分钟，RM 35–40 / 人），那边有海龟保育中心与长长的冲浪沙滩，气质和西岸完全不同。
        tickets:
          - { tag: 半日团, value: "RM 50–80 / 人", note: 估算 }
          - { tag: 全日团（含午餐）, value: "RM 100–150 / 人", note: 估算 }
          - { tag: 装备租借, value: "RM 15–25 / 天", note: 估算 }
        links:
          - { type: map, label: Pulau Tulai 珊瑚岛, query: Pulau Tulai Coral Island Tioman }
          - { type: map, label: Monkey Bay, query: Monkey Bay Tioman }
          - { type: map, label: Juara 沙滩, query: Juara Beach Tioman }
          - { type: ticket, label: Aman 浮潜配套, url: *url_aman_snorkel }

      - time: 15:30 – 17:30
        title: 🛍️ Tekek 村 · 免税店闲逛（可选）
        detail: |
          <strong>刁曼全岛免税</strong>——啤酒、洋酒、巧克力、香烟价格是马来西亚本土的一半左右。主村 Tekek 有最集中的免税店与 ATM（岛上提款机极少且常缺钞，别指望）。
          <br><br>
          Paya 到 Tekek 可搭水上的士（约 RM 15–20 / 人）或走海岸步道（约 45 分钟，有一小段爬坡）。
        links:
          - { type: map, label: Tekek 村, query: Kampung Tekek Tioman }
          - { type: map, label: 刁曼海洋公园中心, query: Tioman Marine Park Centre Tekek }

      - time: 19:00 – 21:00
        title: 🍖 度假村晚餐（含）· 最后一夜
        detail: |
          今晚提前把行李收好——明早 08:00 开船，07:40 就得在码头集合，几乎没有整理时间。泳衣、湿毛巾单独装塑料袋；护照、船票、现金放随身包最上层。
    note: |
      <strong>💡 岛上现金为王：</strong>刁曼多数船家、小店、水上的士<strong>只收现金且不刷卡</strong>，ATM 稀少又常故障。建议上岛前在丰盛港就取够 <strong>RM 500–800</strong> 现金。
    stay:
      hotel: Aman Tioman Beach Resort
      label: 第 2 晚 / 共 2 晚

  - num: 4
    color: "#34495e"
    date: 2026-09-27
    title: 离岛 · 丰盛港 → 新山 → 新加坡
    date_label: 9月27日（周日）
    location: 返程日
    toc_label: 9/27 返程日
    items:
      - time: 07:00 – 07:30
        title: 🍳 早餐 + Check-out
        detail: |
          度假村 check-out 时间是 10:00，但船 08:00 就开，所以今天<strong>吃完早餐直接退房带走全部行李</strong>，不再回房间。走之前检查抽屉、保险箱与浴室挂钩。

      - time: 07:40 – 08:00
        title: 🎒 Paya 码头集合
        detail: 度假村步行 3–5 分钟到码头。回程同样建议提前 20 分钟到候船点，闸口发船前 10 分钟关闭。
        links:
          - { type: map, label: Paya 码头, query: Kampung Paya Jetty Tioman }

      - time: 08:00 – 09:45
        title: ⛴️ Cataferry · 刁曼岛（Paya）→ 丰盛港
        transit: true
        detail: |
          同一张订单的回程段，座位 6A / 6B。抵达丰盛港约 09:30–10:00（视沿途停靠村数与海况浮动）。
        tickets:
          - { tag: 座位, value: "6A, 6B（Standard）" }
        links:
          - { type: map, label: Mersing Harbour Centre, query: Mersing Harbour Centre jetty }
          - { type: ticket, label: Cataferry, url: *url_cataferry }

      - time: 10:00 – 11:30
        title: 🍜 丰盛港 · 午餐 + 转往巴士总站
        detail: |
          码头到丰盛港巴士总站步行 10–15 分钟 / 计程车 RM 10 以内。时间宽裕就在码头附近吃碗鱼丸粉或海南鸡饭，<strong>11:00 前一定要到候车点</strong>。
        links:
          - { type: map, label: 丰盛港巴士总站, query: "Terminal Bas Dan Teksi Bandar Mersing" }

      - time: 11:30 – 15:00
        title: 🚌 Causeway Link Express · 丰盛港 → Larkin
        transit: true
        detail: |
          班次 <strong>MSJB03</strong>，2+2 EXECUTIVE 座位车，车程约 3–3.5 小时，抵达 Larkin Sentral。
        tickets:
          - { tag: 座位, value: "LD1, LD2" }
          - { tag: 票价, value: "RM 23 / 成人" }
        links:
          - { type: map, label: Larkin Sentral, query: Larkin Sentral Johor Bahru }
          - { type: ticket, label: BusOnlineTicket, url: *url_busonline }

      - time: 15:30 – 18:00
        title: 🚌 Larkin → 新加坡
        transit: true
        detail: |
          在 Larkin 转 CW1 / CW2 或 Causeway Link 回新加坡。<strong>周日傍晚是新柔长堤最堵的时段之一</strong>，通关排队 1–2 小时是常态，预留充足时间，别安排当晚的硬性行程。
          <br><br>
          <strong>免税提醒：</strong>新加坡对入境酒类有免税额度限制（须在境外停留 ≥48 小时，烈酒/葡萄酒/啤酒合计最多 2 公升的组合），香烟<strong>无任何免税额</strong>——刁曼买的免税品别超量。
        links:
          - { type: map, label: 兀兰关卡, query: Woodlands Checkpoint Singapore }
          - { label: 新加坡海关免税额度, url: "https://www.customs.gov.sg/individuals/going-through-customs/arriving/guide-for-travellers/" }
    note: |
      <strong>⚠️ 当天最紧的一环：</strong>快艇 09:45 左右靠岸 → 11:30 发车，中间只有约 1.5 小时，还要走去巴士总站。若海况不好导致渡轮延误，先打电话给 Causeway Link 说明；票面注明不可改签，最坏情况需在总站现场补买下一班（丰盛港 → Larkin 每天有多班）。

booking_channels:
  - name: Cataferry 快艇（丰盛港 ⇄ 刁曼）
    links: [{ label: cataferry.com, url: *url_cataferry }]
    note: "已付 MYR 360 · 电子票需打印或截图 · 订单号见邮件确认函"
  - name: Causeway Link Express 跨州巴士
    links:
      - { label: BusOnlineTicket, url: *url_busonline }
      - { label: Causeway Link 官网, url: *url_causewaylink }
    note: "去程 JB-MS02 / 回程 MSJB03 · 不可退改 · 订单号与登车码见邮件确认函"
  - name: Aman Tioman Beach Resort
    links:
      - { label: amantioman.com, url: *url_amantioman }
      - { label: 浮潜配套, url: *url_aman_snorkel }
    note: "RM 1,406 已全额付清 · 含三餐 · 电话 012-772 9880"
  - name: Hotel Seri Malaysia Mersing（9/24 一晚）
    links: [{ label: serimalaysia.com.my, url: *url_serimalaysia }]
    note: "经 Trip.com 预付 ¥213.19（约 RM 128）· 不含早餐 · 9/22 23:59 后不可退款 · 电话 +60 7-799 1876"
  - name: MDAC 马来西亚数字入境卡
    links: [{ label: imigresen-online.imi.gov.my, url: "https://imigresen-online.imi.gov.my/mdac/main" }]
    note: 中国护照持有人须在入境前 3 天内在线填写，免费

checklist:
  - '<strong>MDAC 数字入境卡</strong>：中国护照持有人入境马来西亚前 3 天内在线填写（免费，官网直接办，勿走第三方收费网站）；中国公民目前享 30 天免签'
  - '<strong>现金 RM 为王</strong>：保育费、船家、水上的士、小店几乎只收现金，刁曼 ATM 极少且常缺钞。建议 9/24 晚在丰盛港镇上就取足 <strong>RM 500–800</strong>'
  - '<strong>两笔码头费用</strong>：海洋公园保育费 RM 30 / 成人 + 柔佛州立公园费 RM 20 / 成人，登船前现场缴，<strong>不含在船票内</strong>'
  - '<strong>晕船药</strong>：丰盛港 ⇄ 刁曼快艇约 1.5–2 小时，上船前 30 分钟服用；坐船身中后段最稳'
  - '<strong>礁石友好防晒</strong>：刁曼是海洋公园，禁止踩踏 / 触摸 / 带走珊瑚与贝壳；建议用 reef-safe 防晒霜，或直接穿长袖水母衣'
  - '<strong>浮潜装备</strong>：自带面镜 + 呼吸管最舒服（合脸不漏水），蛙鞋可现场租；防水手机袋、干袋必备'
  - '<strong>天气</strong>：9 月刁曼日间 28–32°C、湿热，属东北季风季前的尾声，午后可能有阵雨。11 月–2 月为季风期，岛上大部分度假村关闭 — 这趟正好赶在关岛前'
  - '<strong>插座 & 电压</strong>：马来西亚 240V / Type G 英标三脚，与新加坡相同，不需转接头'
  - '<strong>网络</strong>：刁曼信号断续，Paya / Tekek 一带 4G 尚可，出海与东岸基本无讯号。度假村 Wi-Fi 仅公共区域可用，做好离线准备（离线地图、电子票截图）'
  - '<strong>免税岛</strong>：刁曼全岛免税，酒类 / 巧克力 / 香烟便宜。但回新加坡有额度限制 — 酒类须境外停留 ≥48 小时方可享免税额，香烟<strong>零免税额</strong>，超量必须申报'
  - '<strong>长堤通关</strong>：周四早上出发 / 周日傍晚返回都是高峰时段，两头都要留足 2 小时缓冲'
---
