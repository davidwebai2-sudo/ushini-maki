// =====================================================
// 1. ТЕКСТЫ НА ТРЁХ ЯЗЫКАХ
// =====================================================
const UI = {
  ru: {
    doc_title: 'Ушини маки — китайский ресторан',
    brand_sub: 'Китайский ресторан',
    nav_about: 'О ресторане', nav_menu: 'Меню', nav_tea: 'Чай', nav_contacts: 'Контакты',
    lang_label: 'Язык', theme_light: 'Включить светлую тему', theme_dark: 'Включить тёмную тему',
    menu_open: 'Открыть меню', menu_close: 'Закрыть меню', back_to_top: 'Наверх',
    hero_title: 'Искусство китайской кухни',
    hero_subtitle: 'Традиционные вкусы Азии, созданные с любовью к каждой детали.',
    hero_cta_menu: 'Посмотреть меню', hero_cta_about: 'Наш ресторан',
    about_title: 'О ресторане',
    about_lead: 'Ушини маки — современный китайский ресторан, где классические рецепты встречаются с вниманием к подаче.',
    about_p1: 'Мы готовим блюда, которые узнает каждый, кто бывал в Китае: кисло-острый суп, курицу гунбао, хрустящие кунжутные шарики. Без лишних украшений — только вкус, текстура и аккуратная подача.',
    about_p2: 'Особое место в меню занимает чай. Его заваривают в глиняном чайнике и подают в маленьких чашках, чтобы раскрылся каждый пролив.',
    about_v1_t: 'Классические рецепты', about_v1_d: 'Знакомые блюда китайской кухни в бережном исполнении.',
    about_v2_t: 'Чайная традиция', about_v2_d: 'Шесть видов китайского чая и неторопливая подача.',
    about_v3_t: 'Забота о гостях', about_v3_d: 'Состав и аллергены для каждого блюда.',
    menu_title: 'Меню', menu_lead: 'Выберите раздел. Для каждого блюда доступны состав и аллергены.',
    cat_soups: 'Супы', cat_mains: 'Основные блюда', cat_desserts: 'Десерты',
    btn_allergens: 'Состав и аллергены', btn_details: 'Подробнее',
    price_pending: 'Цена уточняется', status_pending: 'Требует подтверждения', status_confirmed: 'Подтверждено рестораном',
    photo_soon: 'Фото блюда скоро появится',
    modal_names: 'Названия', modal_ingredients: 'Состав', modal_allergens: 'Аллергены', modal_price: 'Цена', modal_close: 'Закрыть',
    allergens_expected: 'Предполагаемые аллергены по составу. Ресторан ещё не подтвердил эти данные.',
    allergens_none: 'Уточняйте у персонала.',
    allergen_warning: 'Информация об аллергенах предоставлена для ознакомления. Возможны изменения состава и перекрёстное загрязнение при приготовлении. Пожалуйста, сообщите персоналу о пищевой аллергии.',
    al_gluten: 'Глютен', al_milk: 'Молоко', al_eggs: 'Яйца', al_peanuts: 'Арахис', al_nuts: 'Орехи',
    al_soy: 'Соя', al_sesame: 'Кунжут', al_fish: 'Рыба', al_crustaceans: 'Ракообразные', al_molluscs: 'Моллюски',
    tea_title: 'Чайная церемония',
    tea_lead: 'Китайский чай, заваренный в глиняном чайнике и поданный в маленьких чашках.',
    tea_tradition: 'В Китае чай — больше, чем напиток. Чайный лист заваривают ненадолго и несколько раз подряд, и каждый пролив открывает новый оттенок вкуса. Глиняный чайник хранит тепло и смягчает настой, а маленькие чашки располагают к неспешному разговору.',
    tea_volume: 'Объём', tea_volume_pending: 'Объём уточняется',
    contacts_title: 'Контакты', contacts_lead: 'Будем рады видеть вас в Ушини маки.',
    contacts_address: 'Адрес', contacts_phone: 'Телефон', contacts_hours: 'Часы работы', contacts_email: 'Почта',
    address_pending: 'Адрес будет добавлен', phone_pending: 'Телефон будет добавлен',
    hours_pending: 'График работы будет добавлен', email_pending: 'Почта будет добавлена',
    map_placeholder: 'Место для карты', social_title: 'Мы в соцсетях', social_pending: 'Ссылка будет добавлена',
    footer_rights: 'Все права защищены.', footer_note: 'Цены, адрес и график работы уточняются.',
  },
  en: {
    doc_title: 'Ushini Maki — Chinese restaurant',
    brand_sub: 'Chinese restaurant',
    nav_about: 'About us', nav_menu: 'Menu', nav_tea: 'Tea', nav_contacts: 'Contacts',
    lang_label: 'Language', theme_light: 'Switch to light theme', theme_dark: 'Switch to dark theme',
    menu_open: 'Open menu', menu_close: 'Close menu', back_to_top: 'Back to top',
    hero_title: 'The Art of Chinese Cuisine',
    hero_subtitle: 'Traditional flavours of Asia, crafted with love for every detail.',
    hero_cta_menu: 'View the menu', hero_cta_about: 'Our restaurant',
    about_title: 'About us',
    about_lead: 'Ushini Maki is a modern Chinese restaurant where classic recipes meet careful presentation.',
    about_p1: 'We cook the dishes anyone who has been to China will recognise: hot and sour soup, kung pao chicken, crisp sesame balls. Nothing superfluous — just flavour, texture and thoughtful plating.',
    about_p2: 'Tea holds a special place on our menu. We brew it in a clay teapot and serve it in small cups, so every infusion can open up.',
    about_v1_t: 'Classic recipes', about_v1_d: 'Familiar Chinese dishes, prepared with care.',
    about_v2_t: 'Tea tradition', about_v2_d: 'Six Chinese teas, served unhurriedly.',
    about_v3_t: 'Care for our guests', about_v3_d: 'Ingredients and allergens for every dish.',
    menu_title: 'Menu', menu_lead: 'Choose a section. Ingredients and allergens are available for every dish.',
    cat_soups: 'Soups', cat_mains: 'Main courses', cat_desserts: 'Desserts',
    btn_allergens: 'Ingredients & allergens', btn_details: 'Details',
    price_pending: 'Price on request', status_pending: 'Awaiting confirmation', status_confirmed: 'Confirmed by the restaurant',
    photo_soon: 'Photo coming soon',
    modal_names: 'Names', modal_ingredients: 'Ingredients', modal_allergens: 'Allergens', modal_price: 'Price', modal_close: 'Close',
    allergens_expected: 'Expected allergens based on the ingredients. Not yet confirmed by the restaurant.',
    allergens_none: 'Please ask our staff.',
    allergen_warning: 'Allergen information is provided for reference only. Recipes may change and cross-contamination may occur during preparation. Please tell our staff about any food allergies.',
    al_gluten: 'Gluten', al_milk: 'Milk', al_eggs: 'Eggs', al_peanuts: 'Peanuts', al_nuts: 'Tree nuts',
    al_soy: 'Soy', al_sesame: 'Sesame', al_fish: 'Fish', al_crustaceans: 'Crustaceans', al_molluscs: 'Molluscs',
    tea_title: 'Tea Ceremony',
    tea_lead: 'Chinese tea brewed in a clay teapot and served in small cups.',
    tea_tradition: 'In China, tea is more than a drink. The leaves are steeped briefly and several times in a row, and each infusion reveals a new shade of flavour. A clay teapot holds the warmth and softens the brew, while small cups invite an unhurried conversation.',
    tea_volume: 'Volume', tea_volume_pending: 'Volume to be confirmed',
    contacts_title: 'Contacts', contacts_lead: 'We look forward to welcoming you to Ushini Maki.',
    contacts_address: 'Address', contacts_phone: 'Phone', contacts_hours: 'Opening hours', contacts_email: 'Email',
    address_pending: 'Address coming soon', phone_pending: 'Phone number coming soon',
    hours_pending: 'Opening hours coming soon', email_pending: 'Email coming soon',
    map_placeholder: 'Map placeholder', social_title: 'Follow us', social_pending: 'Link coming soon',
    footer_rights: 'All rights reserved.', footer_note: 'Prices, address and opening hours to be confirmed.',
  },
  zh: {
    doc_title: 'Ushini Maki — 中餐厅',
    brand_sub: '中餐厅',
    nav_about: '关于我们', nav_menu: '菜单', nav_tea: '茶', nav_contacts: '联系我们',
    lang_label: '语言', theme_light: '切换为浅色模式', theme_dark: '切换为深色模式',
    menu_open: '打开菜单', menu_close: '关闭菜单', back_to_top: '返回顶部',
    hero_title: '中华美食之艺',
    hero_subtitle: '传承亚洲经典风味，用心雕琢每一个细节。',
    hero_cta_menu: '查看菜单', hero_cta_about: '了解餐厅',
    about_title: '关于我们',
    about_lead: 'Ushini Maki 是一家现代中餐厅，让经典菜谱与精致摆盘相遇。',
    about_p1: '我们烹制的都是去过中国的人一尝便知的味道：酸辣汤、宫保鸡丁、香脆的芝麻球。没有多余的装饰，只专注于风味、口感与用心的呈现。',
    about_p2: '茶在我们的菜单中占有特别的位置。我们用紫砂壶冲泡，以小杯奉上，让每一泡的滋味都充分展现。',
    about_v1_t: '经典菜谱', about_v1_d: '以用心的方式呈现熟悉的中国菜。',
    about_v2_t: '茶的传统', about_v2_d: '六款中国茶，从容品味。',
    about_v3_t: '用心待客', about_v3_d: '每道菜均提供配料与过敏原信息。',
    menu_title: '菜单', menu_lead: '请选择类别。每道菜都可查看配料与过敏原信息。',
    cat_soups: '汤类', cat_mains: '主菜', cat_desserts: '甜品',
    btn_allergens: '配料与过敏原', btn_details: '查看详情',
    price_pending: '价格待定', status_pending: '待确认', status_confirmed: '餐厅已确认',
    photo_soon: '菜品图片即将上线',
    modal_names: '名称', modal_ingredients: '配料', modal_allergens: '过敏原', modal_price: '价格', modal_close: '关闭',
    allergens_expected: '以下为根据配料推测的过敏原，尚未经餐厅确认。',
    allergens_none: '请向工作人员咨询。',
    allergen_warning: '过敏原信息仅供参考。配方可能调整，烹饪过程中也可能发生交叉污染。如有食物过敏，请告知我们的工作人员。',
    al_gluten: '麸质', al_milk: '乳制品', al_eggs: '蛋类', al_peanuts: '花生', al_nuts: '坚果',
    al_soy: '大豆', al_sesame: '芝麻', al_fish: '鱼类', al_crustaceans: '甲壳类', al_molluscs: '软体动物',
    tea_title: '茶道',
    tea_lead: '紫砂壶冲泡的中国茶，配以小巧的茶杯。',
    tea_tradition: '在中国，茶不仅仅是一种饮品。茶叶以短时多次冲泡，每一泡都带来新的滋味层次。紫砂壶保温蕴香，使茶汤更加柔和；小小的茶杯，最适合慢慢品味、悠然交谈。',
    tea_volume: '容量', tea_volume_pending: '容量待定',
    contacts_title: '联系我们', contacts_lead: '期待您光临 Ushini Maki。',
    contacts_address: '地址', contacts_phone: '电话', contacts_hours: '营业时间', contacts_email: '邮箱',
    address_pending: '地址待补充', phone_pending: '电话待补充',
    hours_pending: '营业时间待补充', email_pending: '邮箱待补充',
    map_placeholder: '地图预留位置', social_title: '关注我们', social_pending: '链接待添加',
    footer_rights: '版权所有。', footer_note: '价格、地址与营业时间待定。',
  },
};

// =====================================================
// 2. МЕНЮ
// Фото: images/<id>.jpg. zoom — приближение фото (1 = как есть).
// prices: варианты порции. price — число в евро, формат подставится сам
//   (RU: 9,60 €, EN/中文: €9.60). size — подпись порции или null.
// confirmed: true, когда ресторан подтвердит состав и аллергены.
// =====================================================
const SIZE_60 = { ru: '60% порции', en: '60% portion', zh: '60%份量' };
const SIZE_100 = { ru: '100% порции', en: '100% portion', zh: '100%份量' };
const MAIN_PRICES = [
  { size: SIZE_60, price: 9.60 },
  { size: SIZE_100, price: 13.10 },
];

const DISHES = [
  {
    id: 'hot-sour-soup', category: 'soups', zoom: 1, confirmed: false,
    prices: [{ size: null, price: 7.80 }],
    name: { ru: 'Кисло-острый суп', en: 'Hot and Sour Soup', zh: '酸辣汤' },
    description: {
      ru: 'Традиционный китайский суп с насыщенным кисло-острым вкусом.',
      en: 'A traditional Chinese soup with a rich hot-and-sour flavour.',
      zh: '传统中式汤品，酸辣浓郁。',
    },
    ingredients: {
      ru: ['бульон', 'тофу', 'бамбуковые побеги', 'древесные грибы', 'яйцо', 'специи'],
      en: ['broth', 'tofu', 'bamboo shoots', 'wood ear mushrooms', 'egg', 'spices'],
      zh: ['高汤', '豆腐', '竹笋', '木耳', '鸡蛋', '香料'],
    },
    allergens: ['soy', 'eggs'],
  },
  {
    id: 'wonton-soup', category: 'soups', zoom: 1, confirmed: false,
    prices: [{ size: null, price: 9.10 }],
    name: { ru: 'Суп с вонтонами', en: 'Wonton Soup', zh: '云吞汤' },
    description: {
      ru: 'Нежный китайский суп с традиционными пельменями вонтонами.',
      en: 'A delicate Chinese soup with traditional wontons.',
      zh: '清淡鲜美的传统云吞汤。',
    },
    ingredients: {
      ru: ['вонтоны с мясной начинкой', 'куриный бульон', 'зелень', 'зелёный лук'],
      en: ['meat-filled wontons', 'chicken broth', 'fresh herbs', 'spring onion'],
      zh: ['肉馅云吞', '鸡汤', '香草', '葱'],
    },
    allergens: ['gluten'],
  },
  {
    id: 'corn-egg-soup', category: 'soups', zoom: 1, confirmed: false,
    prices: [{ size: null, price: 6.90 }],
    name: { ru: 'Кукурузный суп с яйцом', en: 'Corn and Egg Soup', zh: '玉米蛋花汤' },
    description: {
      ru: 'Нежный суп с кукурузой и тонкими яичными лентами.',
      en: 'A gentle soup with sweet corn and silky egg ribbons.',
      zh: '玉米香甜，蛋花细滑的暖心汤品。',
    },
    ingredients: {
      ru: ['кукуруза', 'яйцо', 'бульон', 'зелёный лук'],
      en: ['sweet corn', 'egg', 'broth', 'spring onion'],
      zh: ['玉米', '鸡蛋', '高汤', '葱'],
    },
    allergens: ['eggs'],
  },
  {
    id: 'kung-pao-chicken', category: 'mains', zoom: 1, confirmed: false,
    prices: MAIN_PRICES,
    name: { ru: 'Курица гунбао', en: 'Kung Pao Chicken', zh: '宫保鸡丁' },
    description: {
      ru: 'Кусочки курицы в насыщенном пикантном соусе с арахисом и перцем чили.',
      en: 'Tender chicken in a bold, piquant sauce with peanuts and chilli.',
      zh: '鸡丁配花生与辣椒，酱香浓郁，鲜辣开胃。',
    },
    ingredients: {
      ru: ['курица', 'арахис', 'красный перец чили', 'болгарский перец', 'соевый соус', 'зелёный лук'],
      en: ['chicken', 'peanuts', 'red chilli', 'bell pepper', 'soy sauce', 'spring onion'],
      zh: ['鸡肉', '花生', '红辣椒', '甜椒', '酱油', '葱'],
    },
    allergens: ['peanuts', 'soy', 'gluten'], // соевый соус обычно содержит пшеницу
  },
  {
    id: 'ginger-beef', category: 'mains', zoom: 1, confirmed: false,
    prices: MAIN_PRICES,
    name: { ru: 'Говядина с имбирём', en: 'Ginger Beef Stir-Fry', zh: '姜汁牛肉' },
    description: {
      ru: 'Обжаренные полоски говядины с ароматным имбирём и овощами.',
      en: 'Stir-fried strips of beef with fragrant ginger and vegetables.',
      zh: '牛肉条与鲜姜、时蔬快炒，姜香四溢。',
    },
    ingredients: {
      ru: ['говядина', 'имбирь', 'лук', 'болгарский перец', 'соевый соус'],
      en: ['beef', 'ginger', 'onion', 'bell pepper', 'soy sauce'],
      zh: ['牛肉', '生姜', '洋葱', '甜椒', '酱油'],
    },
    allergens: ['soy', 'gluten'],
  },
  {
    id: 'sweet-sour-pork', category: 'mains', zoom: 1, confirmed: false,
    prices: MAIN_PRICES,
    name: { ru: 'Свинина в кисло-сладком соусе', en: 'Sweet and Sour Pork', zh: '糖醋里脊' },
    description: {
      ru: 'Хрустящая свинина в ярком кисло-сладком соусе с овощами и ананасом.',
      en: 'Crispy pork in a bright sweet-and-sour sauce with vegetables and pineapple.',
      zh: '外酥里嫩的里脊裹上酸甜酱汁，配以时蔬与菠萝。',
    },
    ingredients: {
      ru: ['свинина', 'ананас', 'болгарский перец', 'лук', 'кисло-сладкий соус'],
      en: ['pork', 'pineapple', 'bell pepper', 'onion', 'sweet-and-sour sauce'],
      zh: ['猪里脊', '菠萝', '甜椒', '洋葱', '糖醋酱'],
    },
    allergens: [], // панировку уточнить у ресторана
  },
  {
    id: 'mango-pudding', category: 'desserts', zoom: 1, confirmed: false,
    prices: [{ size: null, price: 5.70 }],
    name: { ru: 'Манговый пудинг в стеклянном бокале', en: 'Mango Pudding in a Glass Cup', zh: '芒果布丁' },
    description: {
      ru: 'Нежный сливочный манговый десерт со свежими кусочками манго.',
      en: 'A silky, creamy mango dessert with fresh mango pieces.',
      zh: '口感丝滑的奶香芒果甜品，点缀新鲜芒果粒。',
    },
    ingredients: {
      ru: ['манго', 'молоко или сливки', 'сахар', 'желатин'],
      en: ['mango', 'milk or cream', 'sugar', 'gelatine'],
      zh: ['芒果', '牛奶或淡奶油', '糖', '吉利丁'],
    },
    allergens: ['milk'],
  },
  {
    id: 'sesame-balls', category: 'desserts', zoom: 1, confirmed: false,
    prices: [
      { size: { ru: '5 шт.', en: '5 pcs', zh: '5个' }, price: 6.35 },
      { size: { ru: '10 шт.', en: '10 pcs', zh: '10个' }, price: 11.10 },
    ],
    name: { ru: 'Кунжутные шарики', en: 'Sesame Balls', zh: '芝麻球' },
    description: {
      ru: 'Традиционные китайские хрустящие шарики из рисового теста с кунжутом.',
      en: 'Traditional crisp Chinese rice-dough balls coated in sesame.',
      zh: '传统中式点心，糯米外皮裹满芝麻，外酥内糯。',
    },
    ingredients: {
      ru: ['клейкая рисовая мука', 'кунжут', 'сахар', 'начинка из красной фасоли'],
      en: ['glutinous rice flour', 'sesame seeds', 'sugar', 'red bean paste'],
      zh: ['糯米粉', '芝麻', '糖', '红豆沙'],
    },
    allergens: ['sesame'],
  },
  {
    id: 'fried-ice-cream', category: 'desserts', zoom: 1, confirmed: false,
    prices: [{ size: { ru: '3 шарика', en: '3 balls', zh: '3个' }, price: 6.40 }],
    name: { ru: 'Жареное мороженое', en: 'Fried Ice Cream', zh: '炸冰淇淋' },
    description: {
      ru: 'Контрастный десерт с хрустящей золотистой оболочкой и нежным холодным мороженым внутри.',
      en: 'A dessert of contrasts: a crisp golden shell around cold, creamy ice cream.',
      zh: '外层金黄酥脆，内里冰凉绵密，冷热交融。',
    },
    ingredients: {
      ru: ['ванильное мороженое', 'панировка', 'яйцо', 'мука'],
      en: ['vanilla ice cream', 'breadcrumb coating', 'egg', 'flour'],
      zh: ['香草冰淇淋', '面包糠', '鸡蛋', '面粉'],
    },
    allergens: ['milk', 'eggs', 'gluten'],
  },
];

// =====================================================
// 3. ЧАЙ. price — цена за чайник с одной заваркой.
// Для акции: oldPrice (старая цена) и promo (причина акции).
// =====================================================
const TEAPOT = { ru: 'Чайник 0,5 л', en: '0.5 L teapot', zh: '每壶0.5升' };

const TEAS = [
  { id: 'jasmine', color: '#E6CF7A', volume: TEAPOT, price: 2.70,
    name: { ru: 'Жасминовый зелёный чай', en: 'Jasmine Green Tea', zh: '茉莉花茶' },
    notes: { ru: 'Нежный цветочный аромат жасмина и мягкий свежий вкус.', en: 'A delicate jasmine fragrance with a soft, fresh taste.', zh: '茉莉花香清雅，口感柔和清新。' } },
  { id: 'oolong', color: '#D59B3A', volume: TEAPOT, price: 2.70,
    name: { ru: 'Улун', en: 'Oolong Tea', zh: '乌龙茶' },
    notes: { ru: 'Цветочно-сливочный аромат и мягкое медовое послевкусие.', en: 'A floral, creamy aroma and a gentle honeyed finish.', zh: '花香馥郁，回甘带有蜜韵。' } },
  { id: 'puerh', color: '#6E2B1A', volume: TEAPOT, price: 2.70,
    name: { ru: 'Пуэр', en: 'Pu-erh Tea', zh: '普洱茶' },
    notes: { ru: 'Глубокий землистый вкус с древесными нотами.', en: 'A deep, earthy taste with woody notes.', zh: '滋味醇厚，带有陈香与木质气息。' } },
  { id: 'longjing', color: '#C3CC6E', volume: TEAPOT, price: 2.70,
    name: { ru: 'Лунцзин', en: 'Dragon Well Tea', zh: '龙井茶' },
    notes: { ru: 'Свежий, слегка ореховый вкус и аромат обжаренного листа.', en: 'A fresh, slightly nutty taste with a toasted-leaf aroma.', zh: '鲜爽甘醇，带有板栗般的炒青香。' } },
  { id: 'chrysanthemum', color: '#EBD27A', volume: TEAPOT, price: 2.70,
    name: { ru: 'Хризантемовый чай', en: 'Chrysanthemum Tea', zh: '菊花茶' },
    notes: { ru: 'Лёгкий цветочный настой с медовыми нотами.', en: 'A light floral infusion with honeyed notes.', zh: '清香淡雅，带有淡淡蜜甜。' } },
  { id: 'black', color: '#9A3A1E', volume: TEAPOT, price: 2.00, oldPrice: 2.70,
    promo: { ru: 'Акция к китайскому Новому году', en: 'Chinese New Year special', zh: '春节特惠' },
    name: { ru: 'Китайский чёрный чай', en: 'Black Chinese Tea', zh: '红茶' },
    notes: { ru: 'Насыщенный вкус с нотами мёда и сухофруктов.', en: 'A rich taste with notes of honey and dried fruit.', zh: '汤色红艳，带有蜜香与果干香。' } },
];

// =====================================================
// 4. КОНТАКТЫ (null или '' — показывается «будет добавлен»). <br> — перенос строки
// =====================================================
const RESTAURANT = {
  // Данные вымышленные — для демонстрации сайта
  address: {
    ru: 'Китай, Шанхай, район Цзинъань, ул. Цинлун, 88',
    en: '88 Qinglong Road, Jing’an District, Shanghai, China',
    zh: '中国上海市静安区青龙路88号',
  },
  phone: '+86 21 5555 0188',
  hours: {
    ru: 'Пн–Пт: 08:00–24:00<br>Сб–Вс: 08:00–02:00',
    en: 'Mon–Fri: 08:00–24:00<br>Sat–Sun: 08:00–02:00',
    zh: '周一至周五：08:00–24:00<br>周六至周日：08:00–次日02:00',
  },
  email: 'ushinimaki@gmail.com',
  social: { instagram: '', facebook: '', telegram: '', youtube: '' },
};

// =====================================================
// 4б. КАРТА — рисованная и вымышленная, в цветах сайта.
// Названия улиц можно менять здесь.
// =====================================================
const MAP_LABELS = {
  main: { ru: 'ул. Цинлун', en: 'Qinglong Rd', zh: '青龙路' },
  cross: { ru: 'ул. Байхэ', en: 'Baihe Rd', zh: '白鹤路' },
  avenue: { ru: 'Золотой проспект', en: 'Golden Ave', zh: '金桂大道' },
  river: { ru: 'река Цзиньшуй', en: 'Jinshui River', zh: '锦水河' },
  park: { ru: 'Парк Луны', en: 'Moon Park', zh: '月亮公园' },
};

// Дополнительные стили (карта и аккуратные переносы строк).
// Добавляются на страницу из скрипта, чтобы не менять style.css
const EXTRA_CSS = `
  h1, h2, h3, .about-lead, .dish-names, .tea-names, .names dd, .map-card-address { text-wrap: balance; }
  p, blockquote, .contact-value, .value .muted { text-wrap: pretty; }
  .dish-desc { -webkit-line-clamp: 3; min-height: 4.8em; }
  @media (max-width: 900px) {
    .modal-panel { grid-template-columns: 1fr; }
    .modal-photo { min-height: 0; padding: 24px 24px 0; }
    .modal-photo .photo-ring { width: min(70%, 360px); }
  }
  .map-box.map-ready { position: relative; overflow: hidden; display: block; padding: 0; }
  .map-box svg.map-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .map-label { font-family: var(--font-sans); font-size: 11px; letter-spacing: 0.06em; fill: rgba(247, 241, 229, 0.62); }
  .map-label.gold { fill: rgba(200, 164, 93, 0.9); }
  .map-pulse { transform-box: fill-box; transform-origin: center; animation: map-pulse 2.4s ease-out infinite; }
  @keyframes map-pulse { from { transform: scale(1); opacity: 0.9; } to { transform: scale(3.2); opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { .map-pulse { animation: none; opacity: 0; } }
  .map-card { position: absolute; left: 16px; right: 16px; bottom: 16px; max-width: 340px; padding: 14px 16px;
    border: 1px solid rgba(32, 178, 170, 0.55); border-radius: 14px; background: rgba(21, 25, 24, 0.82);
    backdrop-filter: blur(6px); color: #f7f1e5; text-align: left; }
  .map-card-name { font-family: var(--font-display); font-size: 20px; font-weight: 600; letter-spacing: 0.12em; color: #c8a45d; }
  .map-card-address { margin-top: 4px; font-size: 13px; line-height: 1.5; color: rgba(247, 241, 229, 0.82); }
`;

function addExtraStyles() {
  if (document.getElementById('extra-styles')) return;
  const style = document.createElement('style');
  style.id = 'extra-styles';
  style.textContent = EXTRA_CSS;
  document.head.appendChild(style);
}

function renderMap() {
  const box = $('.map-box');
  if (!box) return;
  const L = (key) => MAP_LABELS[key][lang];
  const address = RESTAURANT.address ? RESTAURANT.address[lang] : t('address_pending');

  // кварталы: сетка 5×5, в левом верхнем углу вместо четырёх кварталов — парк
  const blocks = [];
  [20, 140, 260, 380, 500].forEach((x, col) => {
    [20, 130, 240, 350, 460].forEach((y, row) => {
      if (col < 2 && row < 2) return;
      blocks.push(`<rect x="${x}" y="${y}" width="100" height="90" rx="8"/>`);
    });
  });
  const trees = [[60, 60], [95, 85], [150, 55], [190, 95], [70, 160], [120, 175], [200, 165], [165, 140]]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9"/>`).join('');

  box.classList.add('map-ready');
  box.innerHTML = `
    <svg class="map-svg" viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${t('contacts_address')}: ${address}">
      <defs>
        <radialGradient id="map-bg" cx="55%" cy="42%" r="80%">
          <stop offset="0" stop-color="#0f5a56"/>
          <stop offset="0.6" stop-color="#073b3a"/>
          <stop offset="1" stop-color="#042726"/>
        </radialGradient>
      </defs>
      <rect width="600" height="560" fill="url(#map-bg)"/>

      <g fill="rgba(32,178,170,0.07)" stroke="rgba(32,178,170,0.18)">${blocks.join('')}</g>

      <rect x="20" y="20" width="220" height="200" rx="22" fill="rgba(32,178,170,0.16)" stroke="rgba(32,178,170,0.35)"/>
      <g fill="rgba(32,178,170,0.32)">${trees}</g>

      <path d="M-20 420 C 150 380, 220 520, 380 500 S 560 430, 640 470" fill="none" stroke="rgba(32,178,170,0.35)" stroke-width="40"/>
      <path d="M-20 420 C 150 380, 220 520, 380 500 S 560 430, 640 470" fill="none" stroke="#042a29" stroke-width="32"/>

      <line x1="0" y1="520" x2="600" y2="60" stroke="rgba(200,164,93,0.45)" stroke-width="10"/>

      <line x1="0" y1="230" x2="600" y2="230" stroke="#0d5c58" stroke-width="18"/>
      <line x1="0" y1="230" x2="600" y2="230" stroke="rgba(32,178,170,0.75)" stroke-width="1.5" stroke-dasharray="10 8"/>
      <line x1="370" y1="0" x2="370" y2="560" stroke="#0d5c58" stroke-width="18"/>
      <line x1="370" y1="0" x2="370" y2="560" stroke="rgba(32,178,170,0.75)" stroke-width="1.5" stroke-dasharray="10 8"/>

      <text class="map-label" x="400" y="258">${L('main')}</text>
      <text class="map-label" x="0" y="0" transform="translate(392 40) rotate(90)">${L('cross')}</text>
      <text class="map-label gold" x="0" y="0" transform="translate(455 150) rotate(-37.5)">${L('avenue')}</text>
      <text class="map-label" x="0" y="0" transform="translate(60 418) rotate(-6)">${L('river')}</text>
      <text class="map-label" x="130" y="125" text-anchor="middle">${L('park')}</text>

      <g transform="translate(560 44)">
        <circle r="17" fill="rgba(21,25,24,0.55)" stroke="rgba(247,241,229,0.3)"/>
        <path d="M0 -12 L5 4 L0 1 L-5 4 Z" fill="#C8A45D"/>
      </g>

      <g transform="translate(370 230)">
        <circle class="map-pulse" r="10" fill="none" stroke="#20B2AA" stroke-width="2"/>
        <ellipse cx="0" cy="0" rx="9" ry="3.5" fill="rgba(0,0,0,0.4)"/>
        <path d="M-9 -24 L0 -3 L9 -24 Z" fill="#C8A45D"/>
        <circle cx="0" cy="-44" r="24" fill="#073B3A" stroke="#C8A45D" stroke-width="2.5"/>
        <use href="#dragon" x="-19" y="-63" width="38" height="38"/>
      </g>
    </svg>
    <div class="map-card">
      <p class="map-card-name">USHINI MAKI</p>
      <p class="map-card-address">${address}</p>
    </div>`;
}

// =====================================================
// 5. ЛОГИКА САЙТА
// =====================================================
const LANGS = ['ru', 'en', 'zh'];
const LANG_LABEL = { ru: 'RU', en: 'EN', zh: '中文' };
const ALLERGEN_ICON = {
  gluten: 'wheat', milk: 'milk', eggs: 'egg', peanuts: 'bean', nuts: 'nut',
  soy: 'sprout', sesame: 'grip', fish: 'fish', crustaceans: 'shell', molluscs: 'snail',
};

let lang = 'ru';
let category = 'soups';
let openDish = null;

try {
  const saved = localStorage.getItem('um-lang');
  if (LANGS.includes(saved)) lang = saved;
} catch (e) {}

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const t = (key) => UI[lang][key] || UI.ru[key] || key;
const otherNames = (name) => LANGS.filter((l) => l !== lang).map((l) => name[l]).join(' / ');

// Цена в формате выбранного языка: 9,60 € или €9.60
const LOCALE = { ru: 'ru-RU', en: 'en-IE', zh: 'zh-CN' };
const money = (n) => new Intl.NumberFormat(LOCALE[lang], { style: 'currency', currency: 'EUR' }).format(n);

function pricesHtml(prices) {
  if (!prices || !prices.length) return `<span class="price">${t('price_pending')}</span>`;
  return `<ul class="price-list">${prices.map((p) => `
    <li>${p.size ? `<span class="size">${p.size[lang]}</span>` : ''}<span class="amount">${money(p.price)}</span></li>`).join('')}
  </ul>`;
}

function icons() {
  if (window.lucide) window.lucide.createIcons();
}

// Неразрывные пробелы: короткое слово не остаётся одно в конце строки,
// а число не отрывается от единицы измерения («0,5 л», «5 шт.»)
const SHORT_WORDS = {
  ru: /(^|[\s«(])(в|во|с|со|и|к|ко|а|о|об|у|на|по|не|ни|из|за|от|до|для|без|при|над|под|про|что|как|или|но|ул\.)\s+/gi,
  en: /(^|[\s(])(a|an|the|of|in|on|at|to|and|or|for|with|by)\s+/gi,
};

function typograph(root) {
  if (!root) return;
  keepLastWords(root);
  const short = SHORT_WORDS[lang];
  if (!short) return; // в китайском пробелов между словами нет
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement || node.parentElement.closest('script, style')) continue;
    let text = node.textContent;
    const before = text;
    for (let i = 0; i < 2; i++) text = text.replace(short, (m, pre, word) => pre + word + '\u00A0');
    text = text
      .replace(/(\d)\s+(?=(л|шт\.|шарика|L|pcs|balls)(?![A-Za-zА-Яа-яЁё]))/g, '$1\u00A0')
      .replace(/,\s+(\d+)$/, ',\u00A0$1')
      .replace(/^(\d+)\s+/, '$1\u00A0')
      .replace(/\s+—/g, '\u00A0—');
    if (text !== before) node.textContent = text;
  }
}

// Последнее слово абзаца или заголовка не остаётся на строке одно:
// его «приклеиваем» к предыдущему. В китайском не разрываем последние 3 знака.
function keepLastWords(root) {
  if (!root) return;
  root.querySelectorAll('h1, h2, h3, p, blockquote, dd, .value strong, .value .muted, .contact-value').forEach((el) => {
    const nodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) if (n.textContent.trim()) nodes.push(n);
    const last = nodes[nodes.length - 1];
    if (!last) return;
    const text = last.textContent;
    if (lang === 'zh') {
      if (text.includes('\u2060')) return;
      const chars = [...text.replace(/\s+$/, '')];
      if (chars.length < 6) return;
      const tail = chars.splice(-3).join('\u2060');
      last.textContent = chars.join('') + '\u2060' + tail;
      return;
    }
    const m = text.match(/\s(?=\S+\s*$)/);
    if (m && text[m.index] !== '\u00A0') {
      last.textContent = text.slice(0, m.index) + '\u00A0' + text.slice(m.index + 1);
    }
  });
}

// Если фото не найдено — показываем заглушку с драконом
function photoFail(img) {
  const box = img.closest('.round-photo');
  if (box) box.classList.add('is-missing');
  img.remove();
}

function roundPhoto(src, alt, zoom) {
  return `
    <div class="round-photo">
      <img src="${src}" alt="${alt}" style="--zoom:${zoom || 1}" onerror="photoFail(this)">
      <span class="photo-missing">
        <svg class="logo" aria-hidden="true"><use href="#dragon"/></svg>
        <span>${t('photo_soon')}</span>
      </span>
    </div>`;
}

function dishPhoto(d) {
  return roundPhoto(`images/${d.id}.jpg`, d.name[lang], d.zoom);
}

// ---------- Фото на главном экране и в чайной секции ----------
function renderStaticPhotos() {
  $$('[data-photo]').forEach((el) => {
    const src = el.dataset.photo;
    const id = src.replace('images/', '').replace('.jpg', '');
    const dish = DISHES.find((d) => d.id === id);
    const alt = dish ? dish.name[lang] : t('tea_title');
    el.innerHTML = roundPhoto(src, alt, dish ? dish.zoom : 1);
  });
}

// ---------- Меню ----------
function renderMenu() {
  const list = DISHES.filter((d) => d.category === category);
  $('#dish-grid').innerHTML = list.map((d) => `
    <article class="dish-card fade-in">
      <div class="dish-top">
        <button type="button" class="dish-photo-btn" data-open="${d.id}" aria-label="${t('btn_details')}: ${d.name[lang]}">
          <div class="plate"><div class="photo-ring">${dishPhoto(d)}</div></div>
        </button>
        ${d.confirmed ? '' : `<span class="badge">${t('status_pending')}</span>`}
      </div>
      <div class="dish-body">
        <h3>${d.name[lang]}</h3>
        <p class="dish-names" data-multilang>${otherNames(d.name)}</p>
        <p class="dish-desc">${d.description[lang]}</p>
        <ul class="allergen-icons">
          ${d.allergens.map((a) => `<li title="${t('al_' + a)}"><i data-lucide="${ALLERGEN_ICON[a]}"></i><span class="sr-only">${t('al_' + a)}</span></li>`).join('')}
        </ul>
        <div class="dish-foot">
          ${pricesHtml(d.prices)}
          <button type="button" class="link-btn" data-open="${d.id}">${t('btn_details')}</button>
        </div>
        <button type="button" class="btn-outline" data-open="${d.id}" data-section="allergens">${t('btn_allergens')}</button>
      </div>
    </article>`).join('');

  $$('.tabs button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.cat === category)));
  typograph($('#dish-grid'));
  icons();
}

// ---------- Окно блюда ----------
function renderModal() {
  const d = DISHES.find((x) => x.id === openDish);
  if (!d) return;
  const note = d.allergens.length ? '' : t('allergens_none');
  $('#modal-panel').innerHTML = `
    <button type="button" class="modal-close" data-close aria-label="${t('modal_close')}"><i data-lucide="x">✕</i></button>
    <div class="modal-photo plate"><div class="photo-ring">${dishPhoto(d)}</div></div>
    <div class="modal-content">
      <h2 id="modal-title">${d.name[lang]}</h2>
      <span class="badge ${d.confirmed ? 'ok' : ''}">${d.confirmed ? t('status_confirmed') : t('status_pending')}</span>
      <p class="modal-desc">${d.description[lang]}</p>

      <p class="modal-label">${t('modal_names')}</p>
      <dl class="names" data-multilang>
        ${LANGS.map((l) => `<dt>${LANG_LABEL[l]}</dt><dd lang="${l === 'zh' ? 'zh-CN' : l}">${d.name[l]}</dd>`).join('')}
      </dl>

      <p class="modal-label">${t('modal_ingredients')}</p>
      <ul class="chips">${d.ingredients[lang].map((i) => `<li>${i}</li>`).join('')}</ul>

      <div id="modal-allergens">
        <p class="modal-label">${t('modal_allergens')}</p>
        ${note ? `<p class="allergen-note">${note}</p>` : ''}
        <ul class="chips allergens">
          ${d.allergens.map((a) => `<li><i data-lucide="${ALLERGEN_ICON[a]}"></i>${t('al_' + a)}</li>`).join('')}
        </ul>
      </div>

      <p class="warning"><i data-lucide="triangle-alert"></i><span>${t('allergen_warning')}</span></p>

      <div class="modal-price">
        <span class="muted">${t('modal_price')}</span>
        ${pricesHtml(d.prices)}
      </div>
    </div>`;
  typograph($('#modal-panel'));
  icons();
}

function openModal(id, section) {
  openDish = id;
  renderModal();
  const modal = $('#dish-modal');
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('open')));
  $('.modal-close').focus({ preventScroll: true });
  const panel = $('#modal-panel');
  panel.scrollTop = 0;
  if (section === 'allergens') {
    setTimeout(() => {
      panel.scrollTo({ top: $('#modal-allergens').offsetTop - 16, behavior: 'smooth' });
    }, 320);
  }
}

function closeModal() {
  const modal = $('#dish-modal');
  if (modal.hidden) return;
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    modal.hidden = true;
    openDish = null;
  }, 300);
}

// ---------- Чай ----------
function teaCup(tea) {
  return `
    <svg class="tea-cup" viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <radialGradient id="liq-${tea.id}" cx="38%" cy="34%" r="75%">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.55"/>
          <stop offset="0.3" stop-color="${tea.color}"/>
          <stop offset="1" stop-color="${tea.color}"/>
        </radialGradient>
        <radialGradient id="clay-${tea.id}" cx="35%" cy="30%" r="80%">
          <stop offset="0" stop-color="#C8693F"/>
          <stop offset="1" stop-color="#7A3218"/>
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#clay-${tea.id})"/>
      <circle cx="40" cy="40" r="29.5" fill="#F4E9D8"/>
      <circle cx="40" cy="40" r="25.5" fill="url(#liq-${tea.id})"/>
      <ellipse cx="31" cy="30" rx="7" ry="3" fill="#FFFFFF" opacity="0.32" transform="rotate(-32 31 30)"/>
      <circle cx="40" cy="40" r="36" fill="none" stroke="#C8A45D" stroke-opacity="0.75"/>
    </svg>`;
}

function renderTeas() {
  $('#tea-grid').innerHTML = TEAS.map((tea) => `
    <li>
      <article class="tea-card">
        ${teaCup(tea)}
        <div>
          ${tea.promo ? `<span class="promo">${tea.promo[lang]}</span>` : ''}
          <h3>${tea.name[lang]}</h3>
          <p class="tea-names" data-multilang>${otherNames(tea.name)}</p>
          <p class="tea-notes">${tea.notes[lang]}</p>
          <div class="tea-meta">
            <span>${tea.volume ? tea.volume[lang] : t('tea_volume_pending')}</span>
            <span class="price">
              ${tea.oldPrice ? `<s class="old-price">${money(tea.oldPrice)}</s>` : ''}
              ${tea.price != null ? money(tea.price) : t('price_pending')}
            </span>
          </div>
        </div>
      </article>
    </li>`).join('');
}

// ---------- Контакты и соцсети ----------
function renderContacts() {
  const r = RESTAURANT;
  const rows = [
    { icon: 'map-pin', label: 'contacts_address', value: r.address && r.address[lang], pending: 'address_pending' },
    { icon: 'phone', label: 'contacts_phone', value: r.phone, pending: 'phone_pending', href: r.phone && 'tel:' + r.phone.replace(/[^\d+]/g, '') },
    { icon: 'clock', label: 'contacts_hours', value: r.hours && r.hours[lang], pending: 'hours_pending' },
    { icon: 'mail', label: 'contacts_email', value: r.email, pending: 'email_pending', href: r.email && 'mailto:' + r.email },
  ];
  $('#contact-list').innerHTML = rows.map((row) => `
    <div class="contact-row">
      <span class="value-icon"><i data-lucide="${row.icon}"></i></span>
      <div>
        <p class="contact-label">${t(row.label)}</p>
        ${row.value
          ? (row.href ? `<a class="contact-value" href="${row.href}">${row.value}</a>` : `<p class="contact-value">${row.value}</p>`)
          : `<p class="contact-value pending">${t(row.pending)}</p>`}
      </div>
    </div>`).join('') + `
    <div>
      <p class="contact-label" style="margin:10px 0 12px">${t('social_title')}</p>
      <div class="socials">${socialsHtml()}</div>
    </div>`;

  $('#socials').innerHTML = socialsHtml();
}

function socialsHtml() {
  const items = [
    ['instagram', 'Instagram', 'instagram'],
    ['facebook', 'Facebook', 'facebook'],
    ['telegram', 'Telegram', 'send'],
    ['youtube', 'YouTube', 'youtube'],
  ];
  return items.map(([key, label, icon]) => {
    const url = RESTAURANT.social[key];
    return url
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}"><i data-lucide="${icon}"></i></a>`
      : `<span role="img" aria-label="${label}: ${t('social_pending')}" title="${label}: ${t('social_pending')}"><i data-lucide="${icon}"></i></span>`;
  }).join('');
}

// ---------- Язык ----------
function applyLang() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.title = t('doc_title');
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
    el.title = t(el.dataset.i18nAria);
  });
  $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  updateThemeLabel();
  renderStaticPhotos();
  renderMenu();
  renderTeas();
  renderContacts();
  renderMap();
  if (openDish) renderModal();
  typograph(document.body);
  icons();
  try { localStorage.setItem('um-lang', lang); } catch (e) {}
}

// ---------- Тема ----------
function updateThemeLabel() {
  const dark = document.documentElement.classList.contains('dark');
  const label = dark ? t('theme_light') : t('theme_dark');
  $('#theme-toggle').setAttribute('aria-label', label);
  $('#theme-toggle').title = label;
}

function toggleTheme() {
  const html = document.documentElement;
  html.classList.add('theme-anim');
  const dark = html.classList.toggle('dark');
  try { localStorage.setItem('um-theme', dark ? 'dark' : 'light'); } catch (e) {}
  updateThemeLabel();
  setTimeout(() => html.classList.remove('theme-anim'), 500);
}

// ---------- Мобильное меню ----------
function setMobileNav(open) {
  $('#mobile-nav').hidden = !open;
  $('#header').classList.toggle('open', open);
  $('#burger').setAttribute('aria-expanded', String(open));
  $('#burger').dataset.i18nAria = open ? 'menu_close' : 'menu_open';
  $('#burger').setAttribute('aria-label', t($('#burger').dataset.i18nAria));
  $('#burger').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}">${open ? '✕' : '☰'}</i>`;
  document.body.classList.toggle('no-scroll', open);
  icons();
}

// ---------- Появление блоков при прокрутке ----------
function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
}

// =====================================================
// 6. ЗАПУСК
// =====================================================
$$('[data-lang]').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  applyLang();
}));

$('#theme-toggle').addEventListener('click', toggleTheme);

$$('.tabs button').forEach((b) => b.addEventListener('click', () => {
  category = b.dataset.cat;
  renderMenu();
}));

$('#dish-grid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open]');
  if (btn) openModal(btn.dataset.open, btn.dataset.section);
});

$('#dish-modal').addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (!$('#mobile-nav').hidden) setMobileNav(false);
  }
});

$('#burger').addEventListener('click', () => setMobileNav($('#mobile-nav').hidden));
$$('#mobile-nav a').forEach((a) => a.addEventListener('click', () => setMobileNav(false)));

$('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('scroll', () => {
  $('#header').classList.toggle('scrolled', window.scrollY > 8);
  $('#back-to-top').classList.toggle('show', window.scrollY > 700);
}, { passive: true });

$('#year').textContent = new Date().getFullYear();

addExtraStyles();
applyLang();
setupReveal();