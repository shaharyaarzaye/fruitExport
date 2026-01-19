export type LanguageCode = 'en' | 'ar' | 'zh' | 'fr' | 'de' | 'hi' | 'ja' | 'pt' | 'ru' | 'es';

export type TranslationKey = 
  | 'nav_home' | 'nav_about' | 'nav_products' | 'nav_gallery' | 'nav_contact' | 'nav_select_lang'
  | 'hero_welcome' | 'hero_subtitle' | 'hero_btn_explore' | 'hero_btn_quote' | 'hero_tag'
  | 'feature_title' | 'feature_subtitle' | 'about_title' | 'contact_title' | 'gallery_title';

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    nav_home: 'Home', nav_about: 'About', nav_products: 'Products', nav_gallery: 'Gallery', nav_contact: 'Contact', nav_select_lang: 'Select Language',
    hero_welcome: 'Welcome to Arjit Enterprises',
    hero_subtitle: 'Your Trusted Partner in Global Fresh Fruits, Vegetables & Agro Exports. Bringing the best of Indian fields to the world.',
    hero_btn_explore: 'Explore Products', hero_btn_quote: 'Get Quote', hero_tag: 'ISO 9001:2015 Certified Exporter',
    feature_title: 'Why Choose Arjit Enterprises?', gallery_title: 'Photo Gallery', contact_title: 'Contact Us', about_title: 'About Us'
  },
  ar: {
    nav_home: 'الرئيسية', nav_about: 'عن الشركة', nav_products: 'المنتجات', nav_gallery: 'المعرض', nav_contact: 'اتصل بنا', nav_select_lang: 'اختر اللغة',
    hero_welcome: 'مرحباً بكم في أرجييت إنتربرايزس',
    hero_subtitle: 'شريكك الموثوق في تصدير الفواكه الطازجة والخضروات والمنتجات الزراعية عالمياً. نجلب أفضل الحقول الهندية إلى العالم.',
    hero_btn_explore: 'استكشف المنتجات', hero_btn_quote: 'احصل على عرض سعر', hero_tag: 'مصدر معتمد ISO 9001:2015',
    feature_title: 'لماذا تختار أرجييت إنتربرايزس؟', gallery_title: 'معرض الصور', contact_title: 'اتصل بنا', about_title: 'من نحن'
  },
  zh: {
    nav_home: '首页', nav_about: '关于我们', nav_products: '产品', nav_gallery: '图库', nav_contact: '联系我们', nav_select_lang: '选择语言',
    hero_welcome: '欢迎来到 Arjit Enterprises',
    hero_subtitle: '您在全球新鲜水果、蔬菜和农产品出口领域值得信赖的合作伙伴。将印度最优质的田野产品带向世界。',
    hero_btn_explore: '探索产品', hero_btn_quote: '获取报价', hero_tag: 'ISO 9001:2015 认证出口商',
    feature_title: '为什么选择 Arjit Enterprises？', gallery_title: '相册', contact_title: '联系我们', about_title: '关于我们'
  },
  hi: {
    nav_home: 'होम', nav_about: 'हमारे बारे में', nav_products: 'उत्पाद', nav_gallery: 'गैलरी', nav_contact: 'संपर्क करें', nav_select_lang: 'भाषा चुनें',
    hero_welcome: 'अर्जित एंटरप्राइजेज में आपका स्वागत है',
    hero_subtitle: 'वैश्विक ताजा फलों, सब्जियों और कृषि निर्यात में आपका भरोसेमंद साथी। भारतीय खेतों का सर्वश्रेष्ठ दुनिया तक पहुँचाना।',
    hero_btn_explore: 'उत्पादों को देखें', hero_btn_quote: 'कोटेशन प्राप्त करें', hero_tag: 'ISO 9001:2015 प्रमाणित निर्यातक',
    feature_title: 'अर्जित एंटरप्राइजेज क्यों चुनें?', gallery_title: 'फोटो गैलरी', contact_title: 'संपर्क करें', about_title: 'हमारे बारे में'
  },
  fr: {
    nav_home: 'Accueil', nav_about: 'À propos', nav_products: 'Produits', nav_gallery: 'Galerie', nav_contact: 'Contact', nav_select_lang: 'Choisir la langue',
    hero_welcome: 'Bienvenue chez Arjit Enterprises',
    hero_subtitle: 'Votre partenaire de confiance pour l\'exportation mondiale de fruits frais, légumes et produits agricoles. Le meilleur des champs indiens pour le monde.',
    hero_btn_explore: 'Explorer les produits', hero_btn_quote: 'Obtenir un devis', hero_tag: 'Exportateur certifié ISO 9001:2015',
    feature_title: 'Pourquoi choisir Arjit Enterprises ?', gallery_title: 'Galerie Photos', contact_title: 'Contactez-nous', about_title: 'À propos de nous'
  },
  de: {
    nav_home: 'Startseite', nav_about: 'Über uns', nav_products: 'Produkte', nav_gallery: 'Galerie', nav_contact: 'Kontakt', nav_select_lang: 'Sprache wählen',
    hero_welcome: 'Willkommen bei Arjit Enterprises',
    hero_subtitle: 'Ihr vertrauenswürdiger Partner im globalen Export von frischem Obst, Gemüse und Agrarprodukten. Das Beste von Indiens Feldern in die Welt.',
    hero_btn_explore: 'Produkte entdecken', hero_btn_quote: 'Angebot anfordern', hero_tag: 'ISO 9001:2015 zertifizierter Exporteur',
    feature_title: 'Warum Arjit Enterprises wählen?', gallery_title: 'Fotogalerie', contact_title: 'Kontaktieren Sie uns', about_title: 'Über uns'
  },
  ja: {
    nav_home: 'ホーム', nav_about: '会社概要', nav_products: '製品', nav_gallery: 'ギャラリー', nav_contact: 'お問い合わせ', nav_select_lang: '言語を選択',
    hero_welcome: 'アルジット・エンタープライズへようこそ',
    hero_subtitle: '新鮮な果物、野菜、農産物のグローバル輸出における信頼できるパートナー。インドの最高の畑を世界へ届けます。',
    hero_btn_explore: '製品を見る', hero_btn_quote: '見積もり依頼', hero_tag: 'ISO 9001:2015 認証輸出業者',
    feature_title: 'アルジット・エンタープライズを選ぶ理由', gallery_title: 'フォトギャラリー', contact_title: 'お問い合わせ', about_title: '私たちについて'
  },
  pt: {
    nav_home: 'Início', nav_about: 'Sobre', nav_products: 'Produtos', nav_gallery: 'Galeria', nav_contact: 'Contato', nav_select_lang: 'Selecionar Idioma',
    hero_welcome: 'Bem-vindo à Arjit Enterprises',
    hero_subtitle: 'Seu parceiro de confiança na exportação global de frutas frescas, vegetais e agroprodutos. Levando o melhor dos campos indianos para o mundo.',
    hero_btn_explore: 'Explorar Produtos', hero_btn_quote: 'Obter Cotação', hero_tag: 'Exportador Certificado ISO 9001:2015',
    feature_title: 'Por que escolher a Arjit Enterprises?', gallery_title: 'Galeria de Fotos', contact_title: 'Contate-nos', about_title: 'Sobre Nós'
  },
  ru: {
    nav_home: 'Главная', nav_about: 'О нас', nav_products: 'Продукция', nav_gallery: 'Галерея', nav_contact: 'Контакты', nav_select_lang: 'Выбрать язык',
    hero_welcome: 'Добро пожаловать в Arjit Enterprises',
    hero_subtitle: 'Ваш надежный партнер в глобальном экспорте свежих фруктов, овощей и агропродукции. Лучшее с индийских полей всему миру.',
    hero_btn_explore: 'Продукция', hero_btn_quote: 'Получить расчет', hero_tag: 'Сертифицированный экспортер ISO 9001:2015',
    feature_title: 'Почему выбирают Arjit Enterprises?', gallery_title: 'Фотогалерея', contact_title: 'Связаться с нами', about_title: 'О нас'
  },
  es: {
    nav_home: 'Inicio', nav_about: 'Nosotros', nav_products: 'Productos', nav_gallery: 'Galería', nav_contact: 'Contacto', nav_select_lang: 'Seleccionar idioma',
    hero_welcome: 'Bienvenido a Arjit Enterprises',
    hero_subtitle: 'Su socio de confianza en la exportación global de frutas frescas, verduras y productos agrícolas. Llevando lo mejor de los campos indios al mundo.',
    hero_btn_explore: 'Explorar productos', hero_btn_quote: 'Pedir cotización', hero_tag: 'Exportador certificado ISO 9001:2015',
    feature_title: '¿Por qué elegir Arjit Enterprises?', gallery_title: 'Galería de fotos', contact_title: 'Contáctenos', about_title: 'Sobre nosotros'
  }
};