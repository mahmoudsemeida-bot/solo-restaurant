/* ========================================
   PAPA'S Restaurant - Translations System
   نظام الترجمة متعدد اللغات
======================================== */

const translations = {
    // ====== الإنجليزية ======
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navMenu: "Menu",
        navExperience: "Live Experience",
        navGallery: "Gallery",
        navReviews: "Reviews",
        navContact: "Contact",
        
        // Logo & Buttons
        logoSubtitle: "Restaurant & Lounge",
        btnBookTable: "Book a Table",
        btnBookNow: "Book Your Table",
        btnViewMenu: "View Menu",
        btnNext: "Next Step",
        btnPrevious: "Previous",
        btnConfirmBooking: "Confirm via WhatsApp",
        
        // Hero Section
        heroTitle1: "Experience Fine Dining",
        heroTitle2: "& Live Entertainment",
        heroSubtitle: "Where World Cuisine Meets Unforgettable Moments in Hurghada",
        
        // Features
        feature1Title: "Live Music",
        feature1Desc: "Enjoy rock, blues & world music performances daily",
        feature2Title: "Hot Stone Steaks",
        feature2Desc: "Cook your premium steak to perfection on hot lava stone",
        feature3Title: "World Cuisine",
        feature3Desc: "Italian, French, Indian, Mediterranean & Egyptian dishes",
        feature4Title: "Premium Lounge",
        feature4Desc: "Signature cocktails & relaxing atmosphere until 2 AM",
        
        // About Section
        aboutSubtitle: "Our Story",
        aboutTitle: "Welcome to PAPA'S",
        aboutText1: "Located in the heart of Hurghada City Center, PAPA'S Restaurant & Lounge offers more than just a meal – we create unforgettable experiences.",
        aboutText2: "Since our opening, we've been dedicated to bringing together the finest world cuisines with exceptional live entertainment. Our chefs prepare each dish with premium ingredients, while our musicians create the perfect ambiance for your evening.",
        aboutFeature1: "Fresh, locally-sourced ingredients",
        aboutFeature2: "Expert international chefs",
        aboutFeature3: "Live entertainment 7 days a week",
        aboutFeature4: "Exclusive signature dishes",
        stat1: "Happy Customers",
        stat2: "Menu Items",
        stat3: "Days a Week",
        
        // Menu Section
        menuSubtitle: "Discover Our Flavors",
        menuTitle: "Our Menu",
        menuTabSignature: "Signature Dishes",
        menuTabSteaks: "Steaks",
        menuTabSeafood: "Seafood",
        menuTabPasta: "Pasta",
        menuTabOriental: "Oriental",
        menuTabDrinks: "Drinks",
        
        // Experience Section
        expSubtitle: "More Than Dining",
        expTitle: "Live Entertainment Experience",
        expScheduleTitle: "Weekly Schedule",
        monday: "Monday - Tuesday",
        jazzNight: "Jazz & Blues Night",
        wednesday: "Wednesday",
        rockNight: "Rock Classics Night",
        thursday: "Thursday - Friday",
        specialShow: "Special Performance Show",
        weekend: "Saturday - Sunday",
        worldMusic: "World Music Mix",
        
        // Gallery
        gallerySubtitle: "Capture The Moments",
        galleryTitle: "Photo Gallery",
        
        // Reviews
        reviewsSubtitle: "What People Say",
        reviewsTitle: "Customer Reviews",
        
        // CTA
        ctaTitle: "Ready for an Unforgettable Evening?",
        ctaText: "Reserve your table now and enjoy our special welcome drink!",
        ctaButton: "Book Your Table Now",
        
        // Contact
        contactSubtitle: "Get In Touch",
        contactTitle: "Visit Us",
        contactLocationTitle: "Location",
        contactLocationText: "Hurghada City Center<br>Near Hilton Plaza<br>Hurghada, Egypt",
        contactPhoneTitle: "Phone",
        contactHoursTitle: "Opening Hours",
        contactHoursText: "Every Day<br>10:00 AM - 2:00 AM",
        contactSocialTitle: "Social Media",
        
        // Footer
        footerAbout: "Experience the finest dining and entertainment in Hurghada. Where every meal is a celebration.",
        footerQuickLinks: "Quick Links",
        footerOpeningHours: "Opening Hours",
        footerNewsletter: "Newsletter",
        footerNewsletterText: "Subscribe for special offers and events",
        footerRights: "All rights reserved.",
        footerDeveloped: "Developed with ❤️ for exceptional dining experiences",
        everyday: "Every Day",
        
        // Booking Modal
        modalTitle: "Reserve Your Table",
        modalSubtitle: "Fill in your details and we'll confirm your reservation via WhatsApp",
        step1Title: "Reservation Details",
        step2Title: "Pre-Order Dishes (Optional)",
        step2Subtitle: "Select dishes to speed up your service",
        step3Title: "Confirm Your Reservation",
        
        // Form Labels
        labelName: "Full Name",
        labelPhone: "Phone Number",
        labelDate: "Date",
        labelTime: "Time",
        labelGuests: "Number of Guests",
        labelSpecialRequests: "Special Requests",
        labelAgree: "I agree to receive booking confirmation via WhatsApp",
        
        // Misc
        location: "Hurghada City Center"
    },
    
    // ====== العربية ======
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navMenu: "القائمة",
        navExperience: "التجربة الحية",
        navGallery: "معرض الصور",
        navReviews: "آراء العملاء",
        navContact: "اتصل بنا",
        
        // Logo & Buttons
        logoSubtitle: "مطعم و صالة",
        btnBookTable: "احجز طاولة",
        btnBookNow: "احجز الآن",
        btnViewMenu: "عرض القائمة",
        btnNext: "التالي",
        btnPrevious: "السابق",
        btnConfirmBooking: "تأكيد عبر واتساب",
        
        // Hero Section
        heroTitle1: "تجربة طعام راقية",
        heroTitle2: "وترفيه مباشر",
        heroSubtitle: "حيث تلتقي المأكولات العالمية مع اللحظات التي لا تُنسى في الغردقة",
        
        // Features
        feature1Title: "موسيقى حية",
        feature1Desc: "استمتع بعروض الروك والبلوز والموسيقى العالمية يومياً",
        feature2Title: "ستيك الحجر الساخن",
        feature2Desc: "اطهِ الستيك المميز إلى الكمال على حجر اللافا الساخن",
        feature3Title: "مطبخ عالمي",
        feature3Desc: "أطباق إيطالية وفرنسية وهندية ومتوسطية ومصرية",
        feature4Title: "صالة راقية",
        feature4Desc: "كوكتيلات مميزة وأجواء مريحة حتى الساعة 2 صباحاً",
        
        // About Section
        aboutSubtitle: "قصتنا",
        aboutTitle: "مرحباً بكم في بابا'ز",
        aboutText1: "يقع في قلب مركز مدينة الغردقة، مطعم وصالة بابا'ز يقدم أكثر من مجرد وجبة - نحن نخلق تجارب لا تُنسى.",
        aboutText2: "منذ افتتاحنا، كرسنا جهودنا لجمع أفضل المأكولات العالمية مع ترفيه حي استثنائي. يُعد طهاتنا كل طبق بمكونات فاخرة، بينما يخلق موسيقيونا الأجواء المثالية لمسائك.",
        aboutFeature1: "مكونات طازجة من مصادر محلية",
        aboutFeature2: "طهاة عالميون خبراء",
        aboutFeature3: "ترفيه حي 7 أيام في الأسبوع",
        aboutFeature4: "أطباق مميزة حصرية",
        stat1: "عميل سعيد",
        stat2: "صنف في القائمة",
        stat3: "أيام في الأسبوع",
        
        // Menu Section
        menuSubtitle: "اكتشف نكهاتنا",
        menuTitle: "قائمتنا",
        menuTabSignature: "الأطباق المميزة",
        menuTabSteaks: "الستيك",
        menuTabSeafood: "المأكولات البحرية",
        menuTabPasta: "الباستا",
        menuTabOriental: "الأطباق الشرقية",
        menuTabDrinks: "المشروبات",
        
        // Experience Section
        expSubtitle: "أكثر من مجرد طعام",
        expTitle: "تجربة الترفيه الحي",
        expScheduleTitle: "الجدول الأسبوعي",
        monday: "الإثنين - الثلاثاء",
        jazzNight: "ليلة الجاز والبلوز",
        wednesday: "الأربعاء",
        rockNight: "ليلة الروك الكلاسيكي",
        thursday: "الخميس - الجمعة",
        specialShow: "عرض خاص مميز",
        weekend: "السبت - الأحد",
        worldMusic: "موسيقى عالمية متنوعة",
        
        // Gallery
        gallerySubtitle: "التقط اللحظات",
        galleryTitle: "معرض الصور",
        
        // Reviews
        reviewsSubtitle: "ماذا يقول الناس",
        reviewsTitle: "آراء العملاء",
        
        // CTA
        ctaTitle: "مستعد لأمسية لا تُنسى؟",
        ctaText: "احجز طاولتك الآن واستمتع بمشروب الترحيب الخاص!",
        ctaButton: "احجز طاولتك الآن",
        
        // Contact
        contactSubtitle: "تواصل معنا",
        contactTitle: "زُرنا",
        contactLocationTitle: "الموقع",
        contactLocationText: "مركز مدينة الغردقة<br>بالقرب من هيلتون بلازا<br>الغردقة، مصر",
        contactPhoneTitle: "الهاتف",
        contactHoursTitle: "ساعات العمل",
        contactHoursText: "كل يوم<br>10:00 صباحاً - 2:00 صباحاً",
        contactSocialTitle: "وسائل التواصل",
        
        // Footer
        footerAbout: "استمتع بأفضل تجربة طعام وترفيه في الغردقة. حيث كل وجبة احتفال.",
        footerQuickLinks: "روابط سريعة",
        footerOpeningHours: "ساعات العمل",
        footerNewsletter: "النشرة الإخبارية",
        footerNewsletterText: "اشترك للحصول على العروض الخاصة والفعاليات",
        footerRights: "جميع الحقوق محفوظة.",
        footerDeveloped: "تم التطوير بـ ❤️ لتجارب طعام استثنائية",
        everyday: "كل يوم",
        
        // Booking Modal
        modalTitle: "احجز طاولتك",
        modalSubtitle: "املأ بياناتك وسنؤكد حجزك عبر واتساب",
        step1Title: "تفاصيل الحجز",
        step2Title: "طلب الأطباق مسبقاً (اختياري)",
        step2Subtitle: "اختر الأطباق لتسريع خدمتك",
        step3Title: "تأكيد الحجز",
        
        // Form Labels
        labelName: "الاسم الكامل",
        labelPhone: "رقم الهاتف",
        labelDate: "التاريخ",
        labelTime: "الوقت",
        labelGuests: "عدد الأشخاص",
        labelSpecialRequests: "طلبات خاصة",
        labelAgree: "أوافق على استلام تأكيد الحجز عبر واتساب",
        
        // Misc
        location: "مركز مدينة الغردقة"
    },
    
    // ====== الفرنسية ======
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navMenu: "Menu",
        navExperience: "Expérience Live",
        navGallery: "Galerie",
        navReviews: "Avis",
        navContact: "Contact",
        
        logoSubtitle: "Restaurant & Salon",
        btnBookTable: "Réserver une Table",
        btnBookNow: "Réserver Maintenant",
        btnViewMenu: "Voir le Menu",
        btnNext: "Suivant",
        btnPrevious: "Précédent",
        btnConfirmBooking: "Confirmer via WhatsApp",
        
        heroTitle1: "Gastronomie Raffinée",
        heroTitle2: "& Divertissement Live",
        heroSubtitle: "Où la Cuisine Mondiale Rencontre des Moments Inoubliables à Hurghada",
        
        feature1Title: "Musique Live",
        feature1Desc: "Profitez de performances rock, blues et musique du monde quotidiennement",
        feature2Title: "Steaks sur Pierre Chaude",
        feature2Desc: "Cuisez votre steak premium à la perfection sur pierre de lave chaude",
        feature3Title: "Cuisine Mondiale",
        feature3Desc: "Plats italiens, français, indiens, méditerranéens et égyptiens",
        feature4Title: "Salon Premium",
        feature4Desc: "Cocktails signature et ambiance relaxante jusqu'à 2h du matin",
        
        aboutSubtitle: "Notre Histoire",
        aboutTitle: "Bienvenue chez PAPA'S",
        aboutText1: "Situé au cœur du centre-ville d'Hurghada, PAPA'S Restaurant & Lounge offre plus qu'un simple repas – nous créons des expériences inoubliables.",
        aboutText2: "Depuis notre ouverture, nous nous consacrons à rassembler les meilleures cuisines du monde avec un divertissement live exceptionnel.",
        
        menuSubtitle: "Découvrez Nos Saveurs",
        menuTitle: "Notre Menu",
        menuTabSignature: "Plats Signature",
        menuTabSteaks: "Steaks",
        menuTabSeafood: "Fruits de Mer",
        menuTabPasta: "Pâtes",
        menuTabOriental: "Oriental",
        menuTabDrinks: "Boissons",
        
        ctaTitle: "Prêt pour une Soirée Inoubliable?",
        ctaText: "Réservez votre table maintenant et profitez de notre boisson de bienvenue spéciale!",
        ctaButton: "Réservez Votre Table",
        
        contactTitle: "Visitez-Nous",
        contactLocationTitle: "Emplacement",
        contactPhoneTitle: "Téléphone",
        contactHoursTitle: "Heures d'Ouverture",
        
        modalTitle: "Réservez Votre Table",
        modalSubtitle: "Remplissez vos coordonnées et nous confirmerons votre réservation via WhatsApp",
        
        labelName: "Nom Complet",
        labelPhone: "Numéro de Téléphone",
        labelDate: "Date",
        labelTime: "Heure",
        labelGuests: "Nombre de Personnes",
        location: "Centre-ville d'Hurghada"
    },
    
    // ====== الإيطالية ======
    it: {
        navHome: "Home",
        navAbout: "Chi Siamo",
        navMenu: "Menu",
        navExperience: "Esperienza Live",
        navGallery: "Galleria",
        navReviews: "Recensioni",
        navContact: "Contatti",
        
        logoSubtitle: "Ristorante & Lounge",
        btnBookTable: "Prenota un Tavolo",
        btnBookNow: "Prenota Ora",
        btnViewMenu: "Vedi Menu",
        btnNext: "Prossimo",
        btnPrevious: "Precedente",
        btnConfirmBooking: "Conferma via WhatsApp",
        
        heroTitle1: "Alta Cucina",
        heroTitle2: "& Intrattenimento Live",
        heroSubtitle: "Dove la Cucina Mondiale Incontra Momenti Indimenticabili ad Hurghada",
        
        feature1Title: "Musica dal Vivo",
        feature1Desc: "Goditi spettacoli di rock, blues e musica mondiale ogni giorno",
        feature2Title: "Bistecche su Pietra Calda",
        feature2Desc: "Cuoci la tua bistecca premium alla perfezione su pietra lavica calda",
        feature3Title: "Cucina Mondiale",
        feature3Desc: "Piatti italiani, francesi, indiani, mediterranei ed egiziani",
        feature4Title: "Lounge Premium",
        feature4Desc: "Cocktail signature e atmosfera rilassante fino alle 2 del mattino",
        
        aboutSubtitle: "La Nostra Storia",
        aboutTitle: "Benvenuti da PAPA'S",
        menuSubtitle: "Scopri i Nostri Sapori",
        menuTitle: "Il Nostro Menu",
        
        ctaTitle: "Pronto per una Serata Indimenticabile?",
        ctaText: "Prenota il tuo tavolo ora e goditi il nostro drink di benvenuto speciale!",
        
        modalTitle: "Prenota il Tuo Tavolo",
        labelName: "Nome Completo",
        labelPhone: "Numero di Telefono",
        labelDate: "Data",
        labelTime: "Ora",
        labelGuests: "Numero di Ospiti",
        location: "Centro di Hurghada"
    },
    
    // ====== الروسية ======
    ru: {
        navHome: "Главная",
        navAbout: "О нас",
        navMenu: "Меню",
        navExperience: "Живая музыка",
        navGallery: "Галерея",
        navReviews: "Отзывы",
        navContact: "Контакты",
        
        logoSubtitle: "Ресторан и Лаундж",
        btnBookTable: "Забронировать столик",
        btnBookNow: "Забронировать сейчас",
        btnViewMenu: "Посмотреть меню",
        btnNext: "Далее",
        btnPrevious: "Назад",
        btnConfirmBooking: "Подтвердить через WhatsApp",
        
        heroTitle1: "Изысканная кухня",
        heroTitle2: "и живая музыка",
        heroSubtitle: "Где мировая кухня встречается с незабываемыми моментами в Хургаде",
        
        feature1Title: "Живая музыка",
        feature1Desc: "Наслаждайтесь рок, блюз и мировой музыкой каждый день",
        feature2Title: "Стейки на горячем камне",
        feature2Desc: "Приготовьте премиальный стейк до совершенства на горячем лавовом камне",
        feature3Title: "Мировая кухня",
        feature3Desc: "Итальянские, французские, индийские, средиземноморские и египетские блюда",
        feature4Title: "Премиум лаундж",
        feature4Desc: "Фирменные коктейли и расслабляющая атмосфера до 2 часов ночи",
        
        aboutSubtitle: "Наша история",
        aboutTitle: "Добро пожаловать в PAPA'S",
        menuSubtitle: "Откройте наши вкусы",
        menuTitle: "Наше меню",
        
        ctaTitle: "Готовы к незабываемому вечеру?",
        ctaText: "Забронируйте столик сейчас и насладитесь нашим специальным приветственным напитком!",
        
        modalTitle: "Забронируйте столик",
        labelName: "Полное имя",
        labelPhone: "Номер телефона",
        labelDate: "Дата",
        labelTime: "Время",
        labelGuests: "Количество гостей",
        location: "Центр Хургады"
    },
    
    // ====== الهندية ======
    hi: {
        navHome: "होम",
        navAbout: "हमारे बारे में",
        navMenu: "मेनू",
        navExperience: "लाइव अनुभव",
        navGallery: "गैलरी",
        navReviews: "समीक्षा",
        navContact: "संपर्क करें",
        
        logoSubtitle: "रेस्तरां और लाउंज",
        btnBookTable: "टेबल बुक करें",
        btnBookNow: "अभी बुक करें",
        btnViewMenu: "मेनू देखें",
        btnNext: "अगला",
        btnPrevious: "पिछला",
        btnConfirmBooking: "WhatsApp के माध्यम से पुष्टि करें",
        
        heroTitle1: "बेहतरीन भोजन का अनुभव",
        heroTitle2: "और लाइव मनोरंजन",
        heroSubtitle: "जहां विश्व व्यंजन हुर्गडा में अविस्मरणीय क्षणों से मिलता है",
        
        feature1Title: "लाइव संगीत",
        feature1Desc: "रोज़ाना रॉक, ब्लूज़ और विश्व संगीत प्रदर्शन का आनंद लें",
        feature2Title: "हॉट स्टोन स्टेक्स",
        feature2Desc: "गर्म लावा पत्थर पर अपने प्रीमियम स्टेक को परफेक्शन तक पकाएं",
        feature3Title: "विश्व व्यंजन",
        feature3Desc: "इतालवी, फ्रेंच, भारतीय, भूमध्यसागरीय और मिस्र के व्यंजन",
        feature4Title: "प्रीमियम लाउंज",
        feature4Desc: "सिग्नेचर कॉकटेल और सुबह 2 बजे तक आरामदायक माहौल",
        
        aboutSubtitle: "हमारी कहानी",
        aboutTitle: "PAPA'S में आपका स्वागत है",
        menuSubtitle: "हमारे स्वादों की खोज करें",
        menuTitle: "हमारा मेनू",
        
        ctaTitle: "एक अविस्मरणीय शाम के लिए तैयार हैं?",
        ctaText: "अभी अपनी टेबल बुक करें और हमारे विशेष स्वागत पेय का आनंद लें!",
        
        modalTitle: "अपनी टेबल बुक करें",
        labelName: "पूरा नाम",
        labelPhone: "फ़ोन नंबर",
        labelDate: "तारीख",
        labelTime: "समय",
        labelGuests: "मेहमानों की संख्या",
        location: "हुर्गडा सिटी सेंटर"
    }
};

// تصدير الترجمات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}