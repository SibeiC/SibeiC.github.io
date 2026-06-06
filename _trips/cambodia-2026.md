---
published: false

layout: trip
lang: zh-CN
title: 柬埔寨七日行 · 吴哥窟与金边
subtitle:
  - 暹粒
  - 吴哥窟
  - 金边
date_range: 2026/7/25 – 7/31
duration: 共 7 天 6 夜
last_updated: 2026/6/6

# 重复 URL（≥2 次）集中声明，下方用 *anchor 复用。
urls:
  angkor_pass: &url_angkor_pass "https://www.angkorenterprise.gov.kh/"
  giant_ibis:  &url_giant_ibis  "https://www.giantibis.com/"
  phare:       &url_phare       "https://pharecircus.org/tickets/"

# ── 费用（2 人 · 同住一房；金额为美元/新元原始数字，布局自动汇总换算）──────────
# 柬埔寨日常消费以美元（USD）为主，仅找零用瑞尔；机票从新加坡预订记为 SGD。
cost:
  primary: USD
  secondary: SGD
  rate: 0.78
  rate_note: 2026 年 6 月（1 SGD ≈ 0.78 USD）
  notes:
    - 汇率浮动
    - 购物
    - 酒店与机票为示例 · 未预订
  groups:
    - name: 国际机票
      icon: ✈️
      items:
        - { label: "SIN → 暹粒 REP · 新航直飞（2 人 · 示例）", amount: 460, in: secondary, note: 估算 }
        - { label: "金边 PNH → SIN · 酷航直飞（2 人 · 示例）", amount: 320, in: secondary, note: 估算 }

    - name: 住宿（6 晚 · 2 人 1 房）
      icon: 🏨
      items:
        - { label: "暹粒 Courtyard by Marriott ×4 晚", amount: 320, in: primary, note: 估算 }
        - { label: "金边 Courtyard by Marriott ×2 晚", amount: 190, in: primary, note: 估算 }

    - name: 吴哥与暹粒体验
      icon: 🎫
      items:
        - { label: "吴哥三日通票（62 × 2 人）", amount: 124, in: primary }
        - { label: "持照英文导游 ×2 天", amount: 80, in: primary, note: 估算 }
        - { label: "包车/突突车（小圈 + 大圈 + 崩密列 3 天）", amount: 110, in: primary, note: 估算 }
        - { label: "崩密列门票（5 × 2 人）", amount: 10, in: primary }
        - { label: "洞里萨湖游船（2 人）", amount: 50, in: primary, note: 估算 }
        - { label: "Phare 马戏团 Section B（28 × 2 人）", amount: 56, in: primary }

    - name: 城际与市区交通
      icon: 🚌
      items:
        - { label: "Giant Ibis 暹粒 → 金边（15 × 2 人）", amount: 30, in: primary }
        - { label: "金边市区突突车（2 天）", amount: 30, in: primary, note: 估算 }
        - { label: "机场往返突突车（暹粒 + 金边）", amount: 25, in: primary, note: 估算 }

    - name: 金边门票
      icon: 🏛️
      items:
        - { label: "大皇宫（10 × 2 人）", amount: 20, in: primary }
        - { label: "S-21 吐斯廉屠杀博物馆（含讲解 · 2 人）", amount: 16, in: primary, note: 估算 }
        - { label: "Choeung Ek 杀人场（含语音导览 · 6 × 2 人）", amount: 12, in: primary }

    - name: 签证 · 餐饮 · 杂费
      icon: 🍜
      items:
        - { label: "柬埔寨电子签证（约 36 × 2 人）", amount: 72, in: primary, note: 估算 }
        - { label: "餐饮（约 20/人/天 × 7 天 × 2 人）", amount: 280, in: primary, note: 估算 }
        - { label: "eSIM ×2", amount: 10, in: primary, note: 估算 }
        - { label: "小费 / 杂费", amount: 40, in: primary, note: 估算 }

# ── 住宿（示例 · 尚未预订）─────────────────────────────────────────────────────
hotels:
  - name: 暹粒 · Courtyard by Marriott Siem Reap Resort
    nights: 4
    dates: 7/25 (六) – 7/29 (三)
    map_query: Courtyard by Marriott Siem Reap Resort
  - name: 金边 · Courtyard by Marriott Phnom Penh
    nights: 2
    dates: 7/29 (三) – 7/31 (五)
    map_query: Courtyard by Marriott Phnom Penh

hotels_note: |
  <strong>⚠️ 均为示例 · 尚未预订。</strong>已按你的偏好选<strong>国际连锁</strong>（万豪 Courtyard，两城同品牌、可累积 Bonvoy 积分、品控稳定）。淡季（7–8 月）参考价：暹粒约 US$70–90/晚、金边约 US$85–110/晚 —— 比本地精品店贵约一倍，但更省心。<br><br>同价位其他国际连锁备选：暹粒 <strong>Angkor Sokha / Memoire（本地高端）、Park Hyatt（奢华，US$300+）</strong>；金边 <strong>Hyatt Regency、Sofitel Phokeethra、Rosewood（均偏高端）、Holiday Inn（更经济）</strong>。定好日期后尽早预订。

overview:
  - { label: DAY 1,   text: 抵达暹粒 · Pub Street 夜市 }
  - { label: DAY 2,   text: 吴哥小圈 · 日出 · 巴戎 · 塔布茏 }
  - { label: DAY 3,   text: 吴哥大圈 · 女王宫 · 洞里萨湖日落 }
  - { label: DAY 4,   text: 崩密列丛林庙 · Phare 马戏团 }
  - { label: DAY 5,   text: 暹粒 → 金边 · 大皇宫 · 河滨 }
  - { label: DAY 6,   text: S-21 · 杀人场 · 中央市场 }
  - { label: DAY 7,   text: 金边 → 新加坡返程 }

days:
  - num: 1
    color: "#8e44ad"
    date: 2026-07-25
    lat: 13.3618
    lon: 103.8606
    title: 抵达暹粒 · 老城与 Pub Street 夜市
    date_label: 7月25日（周六）
    location: 暹粒老城
    toc_label: 7/25 抵达暹粒
    items:
      - time: 下午
        title: ✈️ SIN → 暹粒 REP（直飞约 2h20m）
        transit: true
        detail: |
          新加坡往返暹粒目前以<strong>新加坡航空（SQ）直飞</strong>为主，约 2 小时 20 分；酷航等廉航多需在曼谷/胡志明经停，订票时留意是否直飞。
          <br><br>
          <strong>📌 航班号与时刻待定</strong> — 定好出行日后回填。落地暹粒吴哥国际机场（REP），叫一辆突突车或酒店接送进城（约 US$8–10，20 分钟）。
        links:
          - { type: map, label: 暹粒吴哥国际机场, query: Siem Reap Angkor International Airport }
          - { label: 查直飞航班（Skyscanner）, url: "https://www.skyscanner.com.sg/routes/sin/rep/singapore-to-siem-reap.html" }

      - time: 17:00 – 18:00
        title: 🏨 入住老城区酒店 · 安顿
        detail: 放下行李、换上轻便透气的衣服。暹粒小巧好逛，老城核心步行即可走遍。雨季傍晚常有阵雨，带把折叠伞出门。
        links:
          - { type: map, label: 暹粒老市场, query: Old Market Psar Chas Siem Reap }

      - time: 18:30 – 20:00
        title: 🍜 高棉风味晚餐 · 老市场一带
        detail: |
          先尝一顿正宗高棉菜：<strong>Amok（香茅椰浆鱼/鸡咖喱蒸蛋）、Lok Lak（黑胡椒炒牛肉）、红蚂蚁炒木耳、贡布胡椒蟹</strong>。老市场（Psar Chas）周边老牌餐厅集中，价格亲民。
        links:
          - { type: map, label: 老市场餐饮区, query: Old Market Siem Reap restaurants }

      - time: 20:00 – 22:30
        title: 🍺 Pub Street 酒吧街 + 夜市
        detail: 暹粒夜生活中心，霓虹满街、餐吧林立，旁边就是手工艺夜市（Angkor Night Market）可淘围巾、银饰、香料。逛累了来一杯 US$0.5 的扎啤或路边果昔，感受最热闹的暹粒。
        links:
          - { type: map, label: Pub Street, query: Pub Street Siem Reap }
          - { type: map, label: 吴哥夜市, query: Angkor Night Market Siem Reap }
    stay:
      hotel: 暹粒 · Courtyard by Marriott Siem Reap Resort
      label: 第 1 晚 / 共 4 晚

  - num: 2
    color: "#2980b9"
    date: 2026-07-26
    lat: 13.4125
    lon: 103.8670
    title: 吴哥小圈 · 日出 · 巴戎 · 塔布茏
    date_label: 7月26日（周日）
    location: 吴哥考古公园
    toc_label: 7/26 吴哥小圈
    items:
      - time: 05:00 – 06:30
        title: 🌅 吴哥窟日出（Angkor Wat Sunrise）
        detail: |
          凌晨包车/突突车出发（约 4:45 从酒店走），赶在天亮前抵达<strong>吴哥窟</strong>西参道，于左侧莲花池畔等待五座宝塔在晨曦中渐渐显形、倒映水面 — 一生必看的画面之一。雨季云层多但常有戏剧性朝霞，水池也最满。
          <br><br>
          <strong>🎟️ 进园需持吴哥通票（见下）；在任意入口闸口刷票，建议前一天傍晚或当天清晨在售票中心购买。</strong>
        tickets:
          - { tag: 日出, value: "约 05:30 – 06:00" }
          - { tag: 着装, value: 需遮住肩膀与膝盖（上层圣殿要求） }
        links:
          - { type: map, label: 吴哥窟 Angkor Wat, query: Angkor Wat }
          - { type: ticket, label: 吴哥通票官网, url: *url_angkor_pass }

      - time: 06:30 – 08:00
        title: 🍳 园内早餐 + 细看吴哥窟
        detail: 日出后在窟前小摊吃份早餐、喝杯咖啡，待旅行团散去再回身细看吴哥窟主殿 —— 回廊浮雕（《乳海翻腾》《罗摩衍那》战争场面）、陡峭的中央圣殿。请一位<strong>持照英文导游</strong>讲解，浮雕故事会立体许多。
        tickets:
          - { tag: 导游, value: "约 US$40–45/天（强烈建议）" }
        links:
          - { type: map, label: 吴哥窟主殿, query: Angkor Wat main temple }

      - time: 08:30 – 10:30
        title: 🏛️ 大吴哥城 Angkor Thom · 巴戎寺 Bayon
        detail: |
          穿过南门（两侧善神恶神拉着七头蛇）进入<strong>大吴哥城</strong>。核心的<strong>巴戎寺</strong>有 200 余张巨大的「高棉的微笑」石刻面孔，无论站在哪个角度都有佛面凝视着你。续走<strong>巴方寺、空中宫殿、斗象台、癞王台</strong>。
        links:
          - { type: map, label: 巴戎寺 Bayon, query: Bayon Temple Angkor Thom }
          - { type: map, label: 斗象台, query: Terrace of the Elephants }

      - time: 10:30 – 12:00
        title: 🌳 塔布茏寺 Ta Prohm（古墓丽影树根庙）
        detail: 《古墓丽影》取景地，<strong>百年木棉与卡波克树根盘缠石墙、穿顶破壁</strong>，自然与废墟共生的震撼画面。雨季树木最翠绿、苔痕最浓，氛围极佳。
        links:
          - { type: map, label: 塔布茏寺 Ta Prohm, query: Ta Prohm Temple }

      - time: 12:00 起
        title: 🍱 午餐 + 回城避暑
        detail: |
          中午最热，回城吃午餐、酒店泳池小憩。<strong>雨季的节奏：上午看庙、午后躲雨/休息</strong>，傍晚视天气再补一个点或逛夜市。
        note: |
          <strong>💡 三日通票从今天启用</strong>（US$62/人，10 天内任选 3 天），覆盖 Day 2–4 全部吴哥行程。建议 Day 2 请导游，Day 3/4 自由度更高可只包车。
    stay:
      hotel: 暹粒 · Courtyard by Marriott Siem Reap Resort
      label: 第 2 晚

  - num: 3
    color: "#16a085"
    date: 2026-07-27
    lat: 13.4307
    lon: 103.8869
    title: 吴哥大圈 · 女王宫 · 洞里萨湖日落
    date_label: 7月27日（周一）
    location: 吴哥外圈 · 洞里萨湖
    toc_label: 7/27 大圈 · 洞里萨
    items:
      - time: 08:30 – 09:30
        title: 🌸 女王宫 Banteay Srei（红砂岩精雕）
        detail: |
          距城约 35 公里、需包车前往。<strong>女王宫</strong>以红色砂岩与<strong>极致精细的浮雕</strong>闻名，被誉为「吴哥艺术皇冠上的明珠」，规模虽小但雕工无出其右。清早人少光柔，最适合拍照。
        links:
          - { type: map, label: 女王宫 Banteay Srei, query: Banteay Srei Temple }

      - time: 10:00 – 12:30
        title: 🛺 吴哥大圈 · 圣剑寺 · 涅槃宫 · 东梅奔
        detail: |
          回程串起<strong>大圈</strong>诸庙：<strong>圣剑寺（Preah Khan）</strong>幽长回廊、<strong>涅槃宫（Neak Pean）</strong>水中圣岛、<strong>塔逊寺（Ta Som）</strong>东门的树根门、<strong>东梅奔（East Mebon）</strong>的石象。比小圈清静，慢慢逛。
        links:
          - { type: map, label: 圣剑寺 Preah Khan, query: Preah Khan Temple Angkor }
          - { type: map, label: 涅槃宫 Neak Pean, query: Neak Pean }

      - time: 12:30 – 15:30
        title: 🍱 午餐 + 回城避暑
        detail: 午后回城吃饭、休息，避开最晒的时段，养精蓄锐去看湖上日落。

      - time: 16:00 – 18:30
        title: 🚤 洞里萨湖 · 水上村落 + 日落
        detail: |
          东南亚最大淡水湖。乘船深入<strong>Kampong Phluk</strong>（高脚屋水上村落，比 Chong Khneas 更原生态、宰客少），<strong>雨季水位高、可划进淹水的红树林</strong>，再于湖心看夕阳沉入水天之间。
          <br><br>
          <strong>⚠️ 请通过酒店或正规社订船，明确含船费 + 村落费</strong>，避免码头临时加价。约 US$20–35/人。
        tickets:
          - { tag: 游船, value: "约 US$20–35/人", note: 含村落费更稳妥 }
        links:
          - { type: map, label: Kampong Phluk, query: Kampong Phluk floating village }

      - time: 19:30 起
        title: 🍜 暹粒晚餐
        detail: 回城吃晚饭。可试 Khmer BBQ 自助烤（含鳄鱼/袋鼠等异国肉），或安静的高棉餐厅犒劳一天的奔波。
    stay:
      hotel: 暹粒 · Courtyard by Marriott Siem Reap Resort
      label: 第 3 晚

  - num: 4
    color: "#27ae60"
    date: 2026-07-28
    lat: 13.4747
    lon: 104.2316
    title: 崩密列丛林庙 · Phare 马戏团
    date_label: 7月28日（周二）
    location: 暹粒近郊
    toc_label: 7/28 崩密列 · Phare
    items:
      - time: 08:30 – 12:30
        title: 🌳 崩密列 Beng Mealea（丛林中的废墟）
        detail: |
          距城约 65 公里、车程约 1.5 小时。<strong>崩密列</strong>几乎未经修复，巨石倾颓、藤蔓与树木彻底吞没庙宇 —— 一座货真价实的「丛林废墟」，可沿木栈道穿行其间，探险感十足。<strong>雨季苔绿满墙，氛围一流。</strong>
          <br><br>
          单独门票 US$5/人（不含在吴哥通票内）。来回车程较长，建议包车一日。
        tickets:
          - { tag: 门票, value: "US$5/人", note: 不含在吴哥通票内 }
        links:
          - { type: map, label: 崩密列 Beng Mealea, query: Beng Mealea Temple }

      - time: 12:30 – 17:00
        title: 🛍️ 回城午餐 + 自由活动
        detail: |
          回到暹粒午餐后下午自由安排：泳池泡水、逛<strong>艺术市集 / 老市场</strong>、做个高棉草药 SPA 按摩（约 US$8–15/小时），或试一次有名的「鱼疗」。为晚上的马戏养精神。
        links:
          - { type: map, label: 暹粒艺术中心夜市, query: Made in Cambodia Market Siem Reap }

      - time: 20:00 – 21:15
        title: 🎪 Phare · 柬埔寨马戏团
        detail: |
          暹粒头号晚间体验。由公益艺术学校 Phare Ponleu Selpak 的学员演出，<strong>融合杂技、特技、戏剧、现场乐队</strong>，用肢体讲述柬埔寨的历史与乡村故事 —— 票务收入支持弱势青年艺术教育，看得开心又有意义。
          <br><br>
          每晚 20:00 开演，建议 19:30 前入场（开场前有街头小吃与暖场）。
        tickets:
          - { tag: Section B, value: "US$28/成人", note: 标准区 · 已足够好 }
          - { tag: Section C, value: "US$18/成人", note: 两侧 · 部分视线受遮 }
          - { tag: 开演, value: "每晚 20:00" }
        links:
          - { type: map, label: Phare 大帐篷, query: Phare The Cambodian Circus Siem Reap }
          - { type: ticket, label: Phare 官网购票, url: *url_phare }
    stay:
      hotel: 暹粒 · Courtyard by Marriott Siem Reap Resort
      label: 第 4 晚

  - num: 5
    color: "#e67e22"
    date: 2026-07-29
    lat: 11.5637
    lon: 104.9319
    title: 暹粒 → 金边 · 大皇宫 · 河滨
    date_label: 7月29日（周三）
    location: 暹粒 → 金边
    toc_label: 7/29 暹粒→金边
    items:
      - time: 08:00 – 08:30
        title: 🎒 退房 + 前往 Giant Ibis 车站
        detail: 老城核心的酒店到 Giant Ibis 暹粒车站突突车约 US$2–3。退房后把大件行李随身带上车（大巴有行李舱）。
        links:
          - { type: map, label: Giant Ibis 暹粒车站, query: Giant Ibis Siem Reap station }

      - time: 08:45 – 15:00
        title: 🚌 Giant Ibis 大巴 · 暹粒 → 金边（约 6h）
        transit: true
        detail: |
          <strong>Giant Ibis</strong> 是柬埔寨口碑最好的长途巴士公司：车况新、有 WiFi、空调、含小吃水、中途休息。暹粒→金边约 6 小时、约 US$15。<strong>建议官网/App 提前选前排座位。</strong>
          <br><br>
          <strong>🛫 想省时间的替代方案：</strong>柬埔寨航空/JC 航空内陆直飞约 45 分钟（约 US$50–90），但算上往返机场未必比大巴省心。
        transit_route:
          preferred: Giant Ibis 上午班次（约 08:45 发）
          alternatives: ["Giant Ibis 中午/夜班", "内陆航班 REP→PNH 约 45min"]
        tickets:
          - { tag: 车票, value: "约 US$15/人" }
          - { tag: 车程, value: "约 6 小时" }
        links:
          - { type: ticket, label: Giant Ibis 官网订票, url: *url_giant_ibis }

      - time: 15:30 – 16:30
        title: 🏨 入住河滨酒店 · 安顿
        detail: 抵达金边后入住河滨（Sisowath Quay）一带酒店，放下行李稍作休整。金边比暹粒大、车多，市区移动用 Grab / PassApp 叫突突车最方便。
        links:
          - { type: map, label: 金边河滨 Sisowath Quay, query: Sisowath Quay Phnom Penh }

      - time: 16:30 – 17:00
        title: 🏛️ 大皇宫 · 银殿（赶傍晚场）
        detail: |
          <strong>金边大皇宫</strong>始建于 1866 年，是现任国王居所，金顶飞檐的高棉宫殿群美轮美奂；<strong>银殿（Silver Pagoda）</strong>地面铺满纯银砖、供奉翡翠玉佛与镶钻金佛。<strong>⚠️ 开放 08:00–11:00 / 14:00–17:00，需遮肩盖膝。</strong>若今日赶不及，可改到 Day 6 上午。
        tickets:
          - { tag: 门票, value: "US$10/人", note: 仅收现金 }
          - { tag: 开放, value: "08:00–11:00 / 14:00–17:00" }
        links:
          - { type: map, label: 大皇宫 Royal Palace, query: Royal Palace Phnom Penh }

      - time: 18:00 – 21:00
        title: 🌆 河滨晚餐 + 夜市
        detail: 沿洞里萨河与湄公河交汇的滨河大道散步，餐吧、夜市热闹。可试 Friends/Romdeng 等公益餐厅（培训弱势青年），或河边大排档来份炒河粉配吴哥啤酒。
        links:
          - { type: map, label: 金边夜市, query: Phnom Penh Night Market }
    stay:
      hotel: 金边 · Courtyard by Marriott Phnom Penh
      label: 第 1 晚 / 共 2 晚

  - num: 6
    color: "#c0392b"
    date: 2026-07-30
    lat: 11.5494
    lon: 104.9211
    title: S-21 · 杀人场 · 中央市场
    date_label: 7月30日（周四）
    location: 金边市区
    toc_label: 7/30 历史与市场
    items:
      - time: 08:30 – 10:30
        title: 🕊️ S-21 吐斯廉屠杀博物馆（Tuol Sleng）
        detail: |
          原为中学，红色高棉时期改为<strong>S-21 秘密监狱</strong>，约 1.2 万人在此受难。如今为博物馆，陈列受难者照片、囚室与史料。<strong>沉重但极其重要</strong> —— 理解柬埔寨的当代历史，绕不开这里。建议<strong>租语音导览</strong>，由幸存者与亲历者口述，震撼且克制。
        tickets:
          - { tag: 门票 + 语音导览, value: "约 US$5", note: 强烈建议租导览 }
          - { tag: 开放, value: "08:00–17:00" }
        links:
          - { type: map, label: S-21 博物馆, query: Tuol Sleng Genocide Museum }

      - time: 11:00 – 12:30
        title: 🕊️ 琼邑克杀人场 Choeung Ek
        detail: |
          市郊约 15 公里的<strong>万人冢纪念地</strong>，红色高棉的处决与埋尸场之一，中央慰灵塔供奉数千具头骨。含<strong>多语种语音导览</strong>（含中文），步道沿途讲述，肃穆而深刻。突突车往返约 US$15。
        tickets:
          - { tag: 门票 + 语音导览, value: "约 US$6" }
        links:
          - { type: map, label: Choeung Ek 杀人场, query: Choeung Ek Genocidal Center }

      - time: 13:00 – 14:00
        title: 🍜 午餐 · 缓一缓
        detail: 上午行程沉重，午餐找家舒服的咖啡馆/餐厅坐下来缓一缓。金边的法式烘焙与咖啡受殖民历史影响，水准不错。

      - time: 14:30 – 16:30
        title: 🛍️ 中央市场 Central Market（Phsar Thmei）
        detail: |
          1937 年建成的<strong>装饰艺术（Art Deco）穹顶市场</strong>，明黄色十字形大厅是金边地标。珠宝、银器、纪念品、布料、小吃应有尽有，适合采买伴手礼。时间宽裕可顺道看<strong>乌那隆寺、独立纪念碑</strong>。
        links:
          - { type: map, label: 中央市场, query: Central Market Phsar Thmei Phnom Penh }
          - { type: map, label: 独立纪念碑, query: Independence Monument Phnom Penh }

      - time: 18:30 起
        title: 🍢 告别晚餐
        detail: 最后一晚，挑一家高棉特色或河景餐厅好好吃一顿，回味这一周的吴哥与金边。
    stay:
      hotel: 金边 · Courtyard by Marriott Phnom Penh
      label: 第 2 晚

  - num: 7
    color: "#34495e"
    date: 2026-07-31
    title: 金边 → 新加坡返程
    date_label: 7月31日（周五）
    location: 归国日
    toc_label: 7/31 返程
    items:
      - time: 上午
        title: 🛍️ 自由活动 / 收尾
        detail: 视航班时间睡个饱觉、吃顿悠闲早午餐，或去河滨/咖啡馆坐坐、补买伴手礼（贡布胡椒、棕榈糖、高棉丝巾、Kampot 海盐）。
        links:
          - { type: map, label: 金边河滨, query: Sisowath Quay Phnom Penh }

      - time: 视航班
        title: ✈️ 金边 PNH → SIN（直飞约 2h05m）
        transit: true
        detail: |
          金边到新加坡有<strong>酷航（TR）、新航（SQ）、捷星</strong>等直飞，约 2 小时。建议起飞前 3 小时到机场（金边国际机场 PNH/新机场以官方为准）。市区到机场突突车/Grab 约 US$10–15。
          <br><br>
          <strong>📌 航班号与时刻待定</strong> — 定好出行日后回填。
        links:
          - { type: map, label: 金边国际机场, query: Phnom Penh International Airport }
          - { label: 查直飞航班（Skyscanner）, url: "https://www.skyscanner.com.sg/routes/pnh/sin/phnom-penh-to-singapore.html" }
    note: |
      <strong>💡 行程弹性：</strong>若想多留吴哥/少跑动，可砍掉金边段改为暹粒 6 晚（往返暹粒），把 Day 5–6 换成 Kbal Spean 千林伽 + 高布斯滨瀑布、Phnom Kulen 圣山、或一天纯休息泡池。

booking_channels:
  - name: 吴哥通票 Angkor Enterprise（官方）
    links:
      - { label: angkorenterprise.gov.kh, url: *url_angkor_pass }
    note: "官方唯一售票；1 日 US$37 / 3 日 US$62 / 7 日 US$72，可线上购或售票中心买，12 岁以下免费"
  - name: Giant Ibis 长途巴士
    links:
      - { label: giantibis.com, url: *url_giant_ibis }
    note: 暹粒↔金边口碑最佳；官网/App 提前选座
  - name: Phare 柬埔寨马戏团
    links:
      - { label: pharecircus.org, url: *url_phare }
    note: 每晚 20:00；官网购票
  - name: 国际机票
    links:
      - { label: 新航 SIN→REP, url: "https://www.skyscanner.com.sg/routes/sin/rep/singapore-to-siem-reap.html" }
      - { label: 酷航 PNH→SIN, url: "https://www.skyscanner.com.sg/routes/pnh/sin/phnom-penh-to-singapore.html" }
    note: 开口程（飞暹粒进、金边出）最省回头路
  - name: 当地行程 / 导游 / 游船
    links:
      - { label: Klook 暹粒, url: "https://www.klook.com/en-SG/city/41-siem-reap-things-to-do/" }
      - { label: GetYourGuide 暹粒, url: "https://www.getyourguide.com/siem-reap-l274/" }
    note: 持照导游、洞里萨湖船、包车均可经酒店或平台预订

checklist:
  - '<strong>签证</strong>：柬埔寨对新加坡及多数游客需签证。<strong>电子签 e-Visa</strong>（官方 evisa.gov.kh）约 US$30 + 手续费，3 个工作日出签；亦可落地签。务必走官方网站，避免山寨代办站'
  - '<strong>现金为王</strong>：柬埔寨日常以<strong>美元</strong>流通，瑞尔（KHR）仅用于找零（1 USD ≈ 4,000 KHR）。<strong>带足够的崭新小面额美元</strong>（1/5/10/20），破损钞常被拒收；ATM 多吐美元但有手续费'
  - '<strong>网络</strong>：当地 Cellcard / Smart 电话卡便宜流量大；或出发前买 eSIM（Airalo / Saily），落地即用'
  - '<strong>吴哥着装</strong>：进入寺庙（尤其吴哥窟上层圣殿）<strong>需遮住肩膀与膝盖</strong>，备一条轻薄长裤/披肩'
  - '<strong>雨季装备（7–8 月）</strong>：折叠伞 / 轻便雨衣、速干衣、防滑凉鞋、防蚊液、防晒；午后多阵雨，行程按「上午看庙、午后避雨」安排'
  - '<strong>防中暑</strong>：高温高湿，随身大瓶水、电解质，庙区遮阳帽 + 墨镜'
  - '<strong>突突车 App</strong>：装 <strong>Grab</strong> 与 <strong>PassApp</strong> 叫车，价格透明不被宰；吴哥包车一日约 US$20–40（突突车/空调车）'
  - '<strong>插座电压</strong>：220–230V，插座以 A/C/G 型混用，备万能转换头'
  - '<strong>小费</strong>：导游/司机适度给小费（导游约 US$5–10/天、司机 US$3–5/天）是当地惯例'
  - '<strong>预订窗口</strong>：7–8 月为淡季，机票/酒店压力小；但 Giant Ibis 好座位、Phare 马戏团仍建议提前几天订'
  - '<strong>🛡️ 治安总览</strong>：柬埔寨整体对游客友好（美国旅行警示 Level 2，与法国/德国同级），暴力犯罪罕见。主要风险是<strong>金边的飞车抢夺</strong>（摩托抢手机/包）—— 包斜背朝内、走路别玩手机、贵重物分散放，暹粒老城与吴哥园区则相当安全'
  - '<strong>🛡️ 防骗</strong>：① <strong>只在官方售票中心买吴哥通票</strong>，突突车司机兜售的「折扣票」是假票、进不了门；② 警惕「宝石批发、可回国转卖」的搭讪（玻璃假货）；③ ATM 取款选「按本币结算 / 拒绝货币转换（DCC）」'
  - '<strong>🛡️ 酒水安全</strong>：Pub Street 等夜场<strong>不接受陌生人递来的饮料、饮料不离手</strong>，防迷药；适量饮酒'
  - '<strong>🛡️ 边境无关本行程</strong>：2025 年泰柬边境（Preah Vihear / Oddar Meanchey 一带）的摩擦点在暹粒以北约 250 公里，<strong>暹粒市区与吴哥园区完全不受影响</strong>，出发前可再查一次最新旅行警示'
  - '<strong>🛡️ 饮食健康</strong>：<strong>不喝自来水</strong>（瓶装水约 US$0.5），冰块选正规餐厅；备肠胃药、防蚊液（雨季蚊多，登革热风险）'
---
