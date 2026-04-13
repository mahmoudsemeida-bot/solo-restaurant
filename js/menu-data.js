/* ========================================
   PAPA'S Restaurant - Menu Database
   قاعدة بيانات المنيو
======================================== */

const menuData = {
    // ====== الأطباق المميزة ======
    signature: [
        {
            id: 1,
            name: {
                en: "Camel Steak",
                ar: "ستيك الجمل",
                fr: "Steak de Chameau",
                
                it: "Bistecca di Cammello",
                ru: "Верблюжий стейк",
                hi: "ऊंट स्टेक"
            },
            description: {
                en: "Unique premium camel meat, grilled to perfection with special herbs",
                ar: "لحم جمل فاخر فريد، مشوي للكمال مع أعشاب خاصة",
                fr: "Viande de chameau premium unique, grillée à la perfection avec des herbes spéciales",
                it: "Carne di cammello premium unica, grigliata alla perfezione con erbe speciali",
                ru: "Уникальное премиальное мясо верблюда, идеально приготовленное со специальными травами",
                hi: "विशेष जड़ी बूटियों के साथ परफेक्शन तक ग्रिल किया गया अनोखा प्रीमियम ऊंट मांस"
            },
            price: 280,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090213/camel-steak_vzbfkt.jpg",
            badge: "Signature",
            tags: ["gluten-free", "high-protein"],
            category: "signature",
            popular: true
        },
        {
            id: 2,
            name: {
                en: "Hot Stone Steak",
                ar: "ستيك الحجر الساخن",
                fr: "Steak sur Pierre Chaude",
                it: "Bistecca su Pietra Calda",
                ru: "Стейк на горячем камне",
                hi: "हॉट स्टोन स्टेक"
            },
            description: {
                en: "Premium beef served on volcanic lava stone - cook it your way!",
                ar: "لحم بقري فاخر يُقدم على حجر اللافا البركاني - اطهِه كما تحب!",
                fr: "Bœuf premium servi sur pierre de lave volcanique - cuisez-le à votre façon!",
                it: "Manzo premium servito su pietra lavica vulcanica - cuocilo come vuoi!",
                ru: "Премиальная говядина на вулканической лавовой плите - готовьте как хотите!",
                hi: "ज्वालामुखीय लावा पत्थर पर परोसा गया प्रीमियम बीफ - इसे अपने तरीके से पकाएं!"
            },
            price: 320,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090627/hot-stone-steak_pvsduc.jpg",
            badge: "Chef's Special",
            tags: ["interactive", "premium"],
            category: "signature",
            popular: true
        },
        {
            id: 3,
            name: {
                en: "Mixed Grill Platter",
                ar: "طبق المشاوي المشكلة",
                fr: "Plateau de Grillades Mixtes",
                it: "Piatto Misto alla Griglia",
                ru: "Ассорти гриль",
                hi: "मिक्स्ड ग्रिल प्लेटर"
            },
            description: {
                en: "Beef, chicken, lamb kofta, and sausages with grilled vegetables",
                ar: "لحم بقري، دجاج، كفتة لحم ضأن، وسجق مع خضروات مشوية",
                fr: "Bœuf, poulet, kofta d'agneau et saucisses avec légumes grillés",
                it: "Manzo, pollo, kofta di agnello e salsicce con verdure grigliate",
                ru: "Говядина, курица, кофта из баранины и колбаски с овощами гриль",
                hi: "बीफ, चिकन, लैम्ब कोफ्ता और सॉसेज ग्रिल्ड सब्जियों के साथ"
            },
            price: 350,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090702/mixed-grill_oeqxx3.jpg",
            badge: "Best Seller",
            tags: ["sharing", "variety"],
            category: "signature",
            popular: true
        },
        {
            id: 4,
            name: {
                en: "Seafood Extravaganza",
                ar: "مأكولات بحرية فاخرة",
                fr: "Extravagance de Fruits de Mer",
                it: "Stravaganza di Frutti di Mare",
                ru: "Морское изобилие",
                hi: "सीफूड एक्सट्रावगान्ज़ा"
            },
            description: {
                en: "Lobster, king prawns, calamari, and fish fillet - a sea feast!",
                ar: "لوبستر، جمبري ملكي، كاليماري، وفيليه سمك - وليمة بحرية!",
                fr: "Homard, crevettes royales, calamars et filet de poisson - un festin de la mer!",
                it: "Aragosta, gamberi reali, calamari e filetto di pesce - una festa di mare!",
                ru: "Лобстер, королевские креветки, кальмары и филе рыбы - морской пир!",
                hi: "लॉबस्टर, किंग प्रॉन्स, कैलामारी और फिश फिलेट - एक समुद्री दावत!"
            },
            price: 450,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090771/seafood-platter_mfkrbq.jpg",
            badge: "Premium",
            tags: ["seafood", "luxury"],
            category: "signature",
            popular: true
        }
    ],

    // ====== الستيك ======
    steaks: [
        {
            id: 11,
            name: {
                en: "Ribeye Steak 300g",
                ar: "ستيك ريب آي 300 جرام",
                fr: "Entrecôte 300g",
                it: "Costata 300g",
                ru: "Рибай стейк 300г",
                hi: "रिबआई स्टेक 300ग्राम"
            },
            description: {
                en: "Premium aged beef, perfectly marbled with your choice of sauce",
                ar: "لحم بقري معتق فاخر، مع صلصة من اختيارك",
                fr: "Bœuf vieilli premium avec sauce de votre choix",
                it: "Manzo stagionato premium con salsa a scelta",
                ru: "Премиальная выдержанная говядина с соусом на выбор",
                hi: "आपकी पसंद की चटनी के साथ प्रीमियम एज्ड बीफ"
            },
            price: 280,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090811/ribeye_j8hzzl.jpg",
            tags: ["beef", "premium"],
            category: "steaks"
        },
        {
            id: 12,
            name: {
                en: "Tenderloin Steak 250g",
                ar: "ستيك تندرلوين 250 جرام",
                fr: "Filet Mignon 250g",
                it: "Filetto 250g",
                ru: "Филе миньон 250г",
                hi: "टेंडरलॉइन स्टेक 250ग्राम"
            },
            description: {
                en: "The most tender cut, served with mushroom sauce and vegetables",
                ar: "أطرى قطعة لحم، تُقدم مع صلصة الفطر والخضروات",
                fr: "La coupe la plus tendre avec sauce aux champignons et légumes",
                it: "Il taglio più tenero con salsa ai funghi e verdure",
                ru: "Самый нежный кусок с грибным соусом и овощами",
                hi: "सबसे नरम कट, मशरूम सॉस और सब्जियों के साथ"
            },
            price: 320,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090851/tenderloin_eo4nk4.jpg",
            tags: ["beef", "tender"],
            category: "steaks"
        },
        {
            id: 13,
            name: {
                en: "T-Bone Steak 400g",
                ar: "ستيك تي بون 400 جرام",
                fr: "T-Bone 400g",
                it: "Bistecca alla Fiorentina 400g",
                ru: "Ти-бон стейк 400г",
                hi: "टी-बोन स्टेक 400ग्राम"
            },
            description: {
                en: "Best of both worlds - tenderloin and strip in one magnificent steak",
                ar: "الأفضل من كلا العالمين - تندرلوين وستريب في ستيك واحد رائع",
                fr: "Le meilleur des deux mondes dans un steak magnifique",
                it: "Il meglio di due mondi in una bistecca magnifica",
                ru: "Лучшее из двух миров в одном великолепном стейке",
                hi: "दोनों दुनिया का सर्वश्रेष्ठ - एक शानदार स्टेक में"
            },
            price: 360,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090892/tbone_uwcu3x.jpg",
            tags: ["beef", "large"],
            category: "steaks"
        },
        {
            id: 14,
            name: {
                en: "Grilled Chicken Breast",
                ar: "صدر دجاج مشوي",
                fr: "Blanc de Poulet Grillé",
                it: "Petto di Pollo Grigliato",
                ru: "Куриная грудка на гриле",
                hi: "ग्रिल्ड चिकन ब्रेस्ट"
            },
            description: {
                en: "Marinated chicken breast with herbs, served with garlic sauce",
                ar: "صدر دجاج متبل بالأعشاب، يُقدم مع صلصة الثوم",
                fr: "Blanc de poulet mariné aux herbes avec sauce à l'ail",
                it: "Petto di pollo marinato alle erbe con salsa all'aglio",
                ru: "Маринованная куриная грудка с травами и чесночным соусом",
                hi: "जड़ी बूटियों में मैरीनेट किया चिकन ब्रेस्ट, लहसुन सॉस के साथ"
            },
            price: 180,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090939/grilled-chicken_vlorem.jpg",
            tags: ["chicken", "healthy"],
            category: "steaks"
        }
    ],

    // ====== المأكولات البحرية ======
    seafood: [
        {
            id: 21,
            name: {
                en: "Grilled Salmon",
                ar: "سلمون مشوي",
                fr: "Saumon Grillé",
                it: "Salmone Grigliato",
                ru: "Лосось на гриле",
                hi: "ग्रिल्ड सैल्मन"
            },
            description: {
                en: "Atlantic salmon fillet with lemon butter sauce and asparagus",
                ar: "فيليه سلمون أطلسي مع صلصة الزبدة بالليمون والهليون",
                fr: "Filet de saumon atlantique sauce beurre citron et asperges",
                it: "Filetto di salmone atlantico con salsa al burro e limone e asparagi",
                ru: "Филе атлантического лосося с лимонно-масляным соусом и спаржей",
                hi: "लेमन बटर सॉस और शतावरी के साथ अटलांटिक सैल्मन फ़िल्लेट"
            },
            price: 280,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776090976/salmon_fx1wad.jpg",
            tags: ["fish", "omega-3"],
            category: "seafood",
            popular: true
        },
        {
            id: 22,
            name: {
                en: "King Prawns",
                ar: "جمبري ملكي",
                fr: "Crevettes Royales",
                it: "Gamberi Reali",
                ru: "Королевские креветки",
                hi: "किंग प्रॉन्स"
            },
            description: {
                en: "Jumbo prawns grilled with garlic butter and fresh herbs",
                ar: "جمبري جامبو مشوي بزبدة الثوم والأعشاب الطازجة",
                fr: "Gambas jumbo grillées au beurre d'ail et herbes fraîches",
                it: "Gamberi jumbo grigliati con burro all'aglio ed erbe fresche",
                ru: "Гигантские креветки на гриле с чесночным маслом и свежими травами",
                hi: "लहसुन मक्खन और ताज़ी जड़ी बूटियों के साथ ग्रिल किए गए जंबो प्रॉन्स"
            },
            price: 320,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091010/prawns_ggyc7o.jpg",
            tags: ["prawns", "grilled"],
            category: "seafood",
            popular: true
        },
        {
            id: 23,
            name: {
                en: "Seafood Pasta",
                ar: "باستا بالمأكولات البحرية",
                fr: "Pâtes aux Fruits de Mer",
                it: "Pasta ai Frutti di Mare",
                ru: "Паста с морепродуктами",
                hi: "सीफूड पास्ता"
            },
            description: {
                en: "Fresh seafood medley with linguine in white wine sauce",
                ar: "خليط مأكولات بحرية طازجة مع لينجويني في صلصة النبيذ الأبيض",
                fr: "Mélange de fruits de mer frais avec linguine sauce vin blanc",
                it: "Misto di frutti di mare freschi con linguine in salsa di vino bianco",
                ru: "Свежие морепродукты с лингвини в соусе из белого вина",
                hi: "व्हाइट वाइन सॉस में लिंगुइन के साथ ताज़ा सीफूड मेडले"
            },
            price: 260,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091054/seafood-pasta_izqxyu.jpg",
            tags: ["pasta", "seafood"],
            category: "seafood",
            popular: true
        },
        {
            id: 24,
            name: {
                en: "Grilled Calamari",
                ar: "كاليماري مشوي",
                fr: "Calamars Grillés",
                it: "Calamari Grigliati",
                ru: "Кальмары на гриле",
                hi: "ग्रिल्ड कैलामारी"
            },
            description: {
                en: "Tender calamari rings with lemon and aioli dipping sauce",
                ar: "حلقات كاليماري طرية مع ليمون وصلصة أيولي",
                fr: "Anneaux de calamars tendres avec citron et sauce aïoli",
                it: "Anelli di calamari teneri con limone e salsa aioli",
                ru: "Нежные кольца кальмара с лимоном и соусом айоли",
                hi: "नींबू और आइओली डिपिंग सॉस के साथ नरम कैलामारी रिंग्स"
            },
            price: 220,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091103/calamari_klzkwe.jpg",
            tags: ["calamari", "appetizer"],
            category: "seafood"
        }
    ],

    // ====== الباستا ======
    pasta: [
        {
            id: 31,
            name: {
                en: "Spaghetti Carbonara",
                ar: "سباجيتي كاربونارا",
                fr: "Spaghetti Carbonara",
                it: "Spaghetti alla Carbonara",
                ru: "Спагетти Карбонара",
                hi: "स्पेगेटी कार्बोनारा"
            },
            description: {
                en: "Classic Italian pasta with bacon, egg, parmesan, and black pepper",
                ar: "باستا إيطالية كلاسيكية مع لحم مقدد، بيض، بارميزان، وفلفل أسود",
                fr: "Pâtes italiennes classiques avec bacon, œuf, parmesan et poivre noir",
                it: "Classica pasta italiana con pancetta, uovo, parmigiano e pepe nero",
                ru: "Классическая итальянская паста с беконом, яйцом, пармезаном и черным перцем",
                hi: "बेकन, अंडा, परमेसन और काली मिर्च के साथ क्लासिक इतालवी पास्ता"
            },
            price: 160,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091171/carbonara_ybx3ao.jpg",
            tags: ["pasta", "italian"],
            category: "pasta"
        },
        {
            id: 32,
            name: {
                en: "Penne Arrabbiata",
                ar: "بيني أرابياتا",
                fr: "Penne Arrabbiata",
                it: "Penne all'Arrabbiata",
                ru: "Пенне Аррабиата",
                hi: "पेन्ने अर्राबियाटा"
            },
            description: {
                en: "Spicy tomato sauce with garlic, chili peppers, and fresh basil",
                ar: "صلصة طماطم حارة مع ثوم، فلفل حار، وريحان طازج",
                fr: "Sauce tomate épicée à l'ail, piments et basilic frais",
                it: "Salsa di pomodoro piccante con aglio, peperoncino e basilico fresco",
                ru: "Острый томатный соус с чесноком, перцем чили и свежим базиликом",
                hi: "लहसुन, मिर्च और ताज़ी तुलसी के साथ मसालेदार टमाटर सॉस"
            },
            price: 140,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091214/arrabbiata_lqjoow.jpg",
            tags: ["pasta", "spicy"],
            category: "pasta"
        },
        {
            id: 33,
            name: {
                en: "Fettuccine Alfredo",
                ar: "فيتوتشيني ألفريدو",
                fr: "Fettuccine Alfredo",
                it: "Fettuccine Alfredo",
                ru: "Феттучини Альфредо",
                hi: "फेटुचिनी अल्फ्रेडो"
            },
            description: {
                en: "Creamy parmesan sauce with grilled chicken and mushrooms",
                ar: "صلصة بارميزان كريمية مع دجاج مشوي وفطر",
                fr: "Sauce crémeuse au parmesan avec poulet grillé et champignons",
                it: "Salsa cremosa al parmigiano con pollo grigliato e funghi",
                ru: "Сливочный соус с пармезаном, курицей гриль и грибами",
                hi: "ग्रिल्ड चिकन और मशरूम के साथ क्रीमी परमेसन सॉस"
            },
            price: 180,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091248/alfredo_za7gwc.jpg",
            tags: ["pasta", "creamy"],
            category: "pasta",
            popular: true
        },
        {
            id: 34,
            name: {
                en: "Lasagna Bolognese",
                ar: "لازانيا بولونيز",
                fr: "Lasagne Bolognaise",
                it: "Lasagne alla Bolognese",
                ru: "Лазанья Болоньезе",
                hi: "लसग्ना बोलोग्नीज़"
            },
            description: {
                en: "Layered pasta with beef ragù, béchamel, and melted cheese",
                ar: "باستا متعددة الطبقات مع راجو اللحم، بشاميل، وجبن مذاب",
                fr: "Pâtes en couches avec ragù de bœuf, béchamel et fromage fondu",
                it: "Pasta a strati con ragù di manzo, besciamella e formaggio fuso",
                ru: "Слоеная паста с мясным рагу, бешамель и плавленым сыром",
                hi: "बीफ रागू, बेचमेल और पिघला हुआ चीज़ के साथ परतदार पास्ता"
            },
            price: 190,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091302/lasagna_mmpssd.jpg",
            tags: ["pasta", "baked"],
            category: "pasta"
        }
    ],

    // ====== الأطباق الشرقية ======
    oriental: [
        {
            id: 41,
            name: {
                en: "Mixed Mezze Platter",
                ar: "طبق المقبلات المشكلة",
                fr: "Plateau de Mezze Mixtes",
                it: "Piatto Misto di Mezze",
                ru: "Ассорти мезе",
                hi: "मिक्स्ड मेज़े प्लेटर"
            },
            description: {
                en: "Hummus, baba ghanoush, tabbouleh, falafel, and pita bread",
                ar: "حمص، بابا غنوج، تبولة، فلافل، وخبز بيتا",
                fr: "Houmous, baba ghanoush, taboulé, falafel et pain pita",
                it: "Hummus, baba ghanoush, tabbouleh, falafel e pane pita",
                ru: "Хумус, баба гануш, табуле, фалафель и лаваш",
                hi: "हम्मस, बाबा घनौश, तब्बौलेह, फलाफेल और पीटा ब्रेड"
            },
            price: 120,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091356/mezze_q7gciq.jpg",
            tags: ["vegetarian", "sharing"],
            category: "oriental",
            popular: true
        },
        {
            id: 42,
            name: {
                en: "Chicken Shawarma",
                ar: "شاورما دجاج",
                fr: "Shawarma de Poulet",
                it: "Shawarma di Pollo",
                ru: "Куриная шаурма",
                hi: "चिकन शवर्मा"
            },
            description: {
                en: "Marinated chicken with garlic sauce, pickles, and fries",
                ar: "دجاج متبل مع صلصة الثوم، مخلل، وبطاطس مقلية",
                fr: "Poulet mariné avec sauce à l'ail, cornichons et frites",
                it: "Pollo marinato con salsa all'aglio, sottaceti e patatine",
                ru: "Маринованная курица с чесночным соусом, маринованными овощами и картофелем фри",
                hi: "लहसुन सॉस, अचार और फ्राइज़ के साथ मैरीनेट चिकन"
            },
            price: 100,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091405/shawarma_edpqtg.jpg",
            tags: ["chicken", "popular"],
            category: "oriental"
        },
        {
            id: 43,
            name: {
                en: "Lamb Kofta",
                ar: "كفتة لحم ضأن",
                fr: "Kofta d'Agneau",
                it: "Kofta di Agnello",
                ru: "Кофта из баранины",
                hi: "लैम्ब कोफ्ता"
            },
            description: {
                en: "Grilled lamb mince skewers with rice and grilled vegetables",
                ar: "أسياخ لحم ضأن مفروم مشوي مع أرز وخضروات مشوية",
                fr: "Brochettes de viande d'agneau hachée avec riz et légumes grillés",
                it: "Spiedini di carne di agnello macinata con riso e verdure grigliate",
                ru: "Шашлык из рубленой баранины с рисом и овощами гриль",
                hi: "चावल और ग्रिल्ड सब्जियों के साथ ग्रिल्ड लैम्ब मिन्स स्किवर्स"
            },
            price: 150,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091445/kofta_q5t9qa.jpg",
            tags: ["lamb", "grilled"],
            category: "oriental"
        },
        {
            id: 44,
            name: {
                en: "Stuffed Vine Leaves",
                ar: "ورق عنب محشي",
                fr: "Feuilles de Vigne Farcies",
                it: "Foglie di Vite Ripiene",
                ru: "Фаршированные виноградные листья",
                hi: "स्टफ्ड वाइन लीव्स"
            },
            description: {
                en: "Rice and herb stuffed vine leaves with yogurt sauce",
                ar: "ورق عنب محشي بالأرز والأعشاب مع صلصة الزبادي",
                fr: "Feuilles de vigne farcies au riz et aux herbes avec sauce au yaourt",
                it: "Foglie di vite ripiene di riso ed erbe con salsa allo yogurt",
                ru: "Виноградные листья с начинкой из риса и трав с йогуртовым соусом",
                hi: "दही सॉस के साथ चावल और जड़ी बूटियों से भरे वाइन के पत्ते"
            },
            price: 90,
            currency: "EGP",
            image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1776091499/vine-leaves_oyaxga.jpg",
            tags: ["vegetarian", "traditional"],
            category: "oriental"
        }
    ],

    // ====== المشروبات ======
    drinks: [
        {
            id: 51,
            name: {
                en: "Mojito Classic",
                ar: "موهيتو كلاسيك",
                fr: "Mojito Classique",
                it: "Mojito Classico",
                ru: "Классический Мохито",
                hi: "क्लासिक मोजिटो"
            },
            description: {
                en: "Fresh mint, lime, sugar, soda water",
                ar: "نعناع طازج، ليمون، سكر، مياه غازية",
                fr: "Menthe fraîche, citron vert, sucre, eau gazeuse",
                it: "Menta fresca, lime, zucchero, acqua frizzante",
                ru: "Свежая мята, лайм, сахар, содовая",
                hi: "ताज़ा पुदीना, नींबू, चीनी, सोडा पानी"
            },
            price: 60,
            currency: "EGP",
            image: "./images/drinks/mojito.jpg",
            tags: ["non-alcoholic", "refreshing"],
            category: "drinks",
            popular: true
        },
        {
            id: 52,
            name: {
                en: "Fresh Orange Juice",
                ar: "عصير برتقال طازج",
                fr: "Jus d'Orange Frais",
                it: "Succo d'Arancia Fresco",
                ru: "Свежевыжатый апельсиновый сок",
                hi: "ताज़ा संतरे का रस"
            },
            description: {
                en: "Freshly squeezed orange juice",
                ar: "عصير برتقال معصور طازج",
                fr: "Jus d'orange fraîchement pressé",
                it: "Succo d'arancia appena spremuto",
                ru: "Свежевыжатый апельсиновый сок",
                hi: "ताज़ा निचोड़ा हुआ संतरे का रस"
            },
            price: 40,
            currency: "EGP",
            image: "./images/drinks/orange-juice.jpg",
            tags: ["fresh", "vitamin-c"],
            category: "drinks"
        },
        {
            id: 53,
            name: {
                en: "Mango Smoothie",
                ar: "سموذي مانجو",
                fr: "Smoothie à la Mangue",
                it: "Frullato di Mango",
                ru: "Манго смузи",
                hi: "मैंगो स्मूदी"
            },
            description: {
                en: "Fresh mango blended with yogurt and honey",
                ar: "مانجو طازج ممزوج مع زبادي وعسل",
                fr: "Mangue fraîche mixée avec yaourt et miel",
                it: "Mango fresco frullato con yogurt e miele",
                ru: "Свежее манго с йогуртом и медом",
                hi: "दही और शहद के साथ मिश्रित ताज़ा आम"
            },
            price: 50,
            currency: "EGP",
            image: "./images/drinks/mango-smoothie.jpg",
            tags: ["smoothie", "tropical"],
            category: "drinks"
        },
        {
            id: 54,
            name: {
                en: "Turkish Coffee",
                ar: "قهوة تركية",
                fr: "Café Turc",
                it: "Caffè Turco",
                ru: "Турецкий кофе",
                hi: "तुर्की कॉफी"
            },
            description: {
                en: "Traditional Turkish coffee with cardamom",
                ar: "قهوة تركية تقليدية مع هيل",
                fr: "Café turc traditionnel à la cardamome",
                it: "Caffè turco tradizionale con cardamomo",
                ru: "Традиционный турецкий кофе с кардамоном",
                hi: "इलायची के साथ पारंपरिक तुर्की कॉफी"
            },
            price: 30,
            currency: "EGP",
            image: "./images/drinks/turkish-coffee.jpg",
            tags: ["coffee", "traditional"],
            category: "drinks"
        }
    ]
};

// دالة للحصول على المنيو حسب الفئة
function getMenuByCategory(category) {
    return menuData[category] || [];
}

// دالة للحصول على جميع الأطباق
function getAllDishes() {
    return Object.values(menuData).flat();
}

// دالة للبحث في المنيو
function searchMenu(query, lang = 'en') {
    const allDishes = getAllDishes();
    return allDishes.filter(dish => 
        dish.name[lang].toLowerCase().includes(query.toLowerCase()) ||
        dish.description[lang].toLowerCase().includes(query.toLowerCase())
    );
}

// دالة للحصول على الأطباق الشعبية
function getPopularDishes() {
    return getAllDishes().filter(dish => dish.popular);
}

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuData, getMenuByCategory, getAllDishes, searchMenu, getPopularDishes };
}
