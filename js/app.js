/* ========================================
   PAPA'S Restaurant - Main Application
   البرمجة الرئيسية للموقع
======================================== */
// ============================================
// 🎨 نظام Placeholder للصور (حل مؤقت)
// ============================================

const PLACEHOLDER_IMAGES = {
    // Hero & Main
    'images/hero-bg.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80',
    'images/about-restaurant.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80',
    'images/live-music.jpg': 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop&q=80',
    'images/og-image.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop&q=80',
    
    // Dishes - Signature
    'images/dishes/camel-steak.jpg': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80',
    'images/dishes/hot-stone-steak.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80',
    'images/dishes/mixed-grill.jpg': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop&q=80',
    'images/dishes/seafood-platter.jpg': 'https://images.unsplash.com/photo-1559737558-2f8a72700288?w=800&h=600&fit=crop&q=80',
    
    // Steaks
    'images/dishes/ribeye.jpg': 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop&q=80',
    'images/dishes/tenderloin.jpg': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop&q=80',
    'images/dishes/tbone.jpg': 'https://images.unsplash.com/photo-1615937691194-95d839ce11a0?w=800&h=600&fit=crop&q=80',
    'images/dishes/grilled-chicken.jpg': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop&q=80',
    
    // Seafood
    'images/dishes/salmon.jpg': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop&q=80',
    'images/dishes/prawns.jpg': 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&h=600&fit=crop&q=80',
    'images/dishes/seafood-pasta.jpg': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop&q=80',
    'images/dishes/calamari.jpg': 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&h=600&fit=crop&q=80',
    
    // Pasta
    'images/dishes/carbonara.jpg': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop&q=80',
    'images/dishes/arrabbiata.jpg': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop&q=80',
    'images/dishes/alfredo.jpg': 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&h=600&fit=crop&q=80',
    'images/dishes/lasagna.jpg': 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=600&fit=crop&q=80',
    
    // Oriental
    'images/dishes/mezze.jpg': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80',
    'images/dishes/shawarma.jpg': 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop&q=80',
    'images/dishes/kofta.jpg': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop&q=80',
    'images/dishes/vine-leaves.jpg': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop&q=80',
    
    // Drinks
    'images/drinks/mojito.jpg': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=800&fit=crop&q=80',
    'images/drinks/orange-juice.jpg': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=800&fit=crop&q=80',
    'images/drinks/mango-smoothie.jpg': 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=800&fit=crop&q=80',
    'images/drinks/turkish-coffee.jpg': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=800&fit=crop&q=80',
    
    // Gallery
    'images/gallery/dish-1.jpg': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=900&fit=crop&q=80',
    'images/gallery/dish-2.jpg': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=900&fit=crop&q=80',
    'images/gallery/dish-3.jpg': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=900&fit=crop&q=80',
    'images/gallery/interior-1.jpg': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop&q=80',
    'images/gallery/lounge-1.jpg': 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&h=900&fit=crop&q=80',
    'images/gallery/music-1.jpg': 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&h=900&fit=crop&q=80',
    
    // Reviews (Avatars)
    'images/reviews/user-1.jpg': 'https://i.pravatar.cc/300?img=12',
    'images/reviews/user-2.jpg': 'https://i.pravatar.cc/300?img=47',
    'images/reviews/user-3.jpg': 'https://i.pravatar.cc/300?img=33'
};

// استبدال الصور تلقائياً عند تحميل الصفحة
function replacePlaceholderImages() {
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (PLACEHOLDER_IMAGES[src]) {
            img.src = PLACEHOLDER_IMAGES[src];
            img.onerror = function() {
                // في حالة فشل التحميل، استخدم placeholder بسيط
                this.src = `https://via.placeholder.com/800x600/C19D60/FFFFFF?text=PAPA'S+Restaurant`;
            };
        }
    });
    
    // استبدال الخلفيات
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
        const style = el.getAttribute('style');
        Object.keys(PLACEHOLDER_IMAGES).forEach(key => {
            if (style.includes(key)) {
                el.style.backgroundImage = `url('${PLACEHOLDER_IMAGES[key]}')`;
            }
        });
    });
    
    console.log('✅ تم تحميل الصور المؤقتة بنجاح');
}

// تشغيل عند التحميل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replacePlaceholderImages);
} else {
    replacePlaceholderImages();
}
class PapasRestaurant {
    constructor() {
        this.currentLanguage = 'en';
        this.scrollPosition = 0;
        this.isScrolling = false;
        
        this.init();
    }

    init() {
        // الانتظار حتى تحميل الصفحة بالكامل
        window.addEventListener('load', () => {
            this.hideLoadingScreen();
            this.setupLanguageSwitcher();
            this.setupNavigation();
            this.setupScrollEffects();
            this.setupMobileMenu();
            this.setupMenuTabs();
            this.setupGallery();
            this.setupReviewsSlider();
            this.setupAnimations();
            this.setupBackToTop();
            this.loadMenuItems('signature');
            this.setupCounters();
            this.setupNewsletterForm();
        });
    }

    // ====== شاشة التحميل ======
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => loadingScreen.remove(), 500);
            }, 1000);
        }
    }

    // ====== نظام تبديل اللغات ======
    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
                
                // تحديث الأزرار النشطة
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        document.documentElement.lang = lang;
        
        // تغيير الاتجاه للعربية
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }

        // تحديث جميع النصوص القابلة للترجمة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // إعادة تحميل المنيو باللغة الجديدة
        const activeTab = document.querySelector('.menu-tab.active');
        if (activeTab) {
            const category = activeTab.dataset.category;
            this.loadMenuItems(category);
        }

        // إعادة تحميل اختيار الأطباق في نظام الحجز
        if (window.bookingSystem) {
            window.bookingSystem.loadDishesSelection();
        }
    }

    // ====== شريط التنقل ======
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        // تأثير التمرير على الـ navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // التنقل السلس بين الأقسام
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // تحديث الرابط النشط
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // إغلاق القائمة على الموبايل
                    const navMenu = document.getElementById('navMenu');
                    const mobileToggle = document.getElementById('mobileMenuToggle');
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                }
            });
        });

        // تحديث الرابط النشط عند التمرير
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ====== القائمة على الموبايل ======
    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }
    }

    // ====== تأثيرات التمرير ======
    setupScrollEffects() {
        // Intersection Observer للعناصر المتحركة
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // مراقبة العناصر
        document.querySelectorAll('[data-scroll]').forEach(el => {
            observer.observe(el);
        });

        // تأثير Parallax بسيط
        window.addEventListener('scroll', () => {
            if (this.isScrolling) return;
            
            this.isScrolling = true;
            
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                
                // تأثير parallax على الـ hero
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                }

                this.isScrolling = false;
            });
        });
    }

    // ====== تبويبات المنيو ======
    setupMenuTabs() {
        const menuTabs = document.querySelectorAll('.menu-tab');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                
                // تحديث التبويبات النشطة
                menuTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // تحميل عناصر المنيو
                this.loadMenuItems(category);
            });
        });
    }

    loadMenuItems(category) {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        const items = getMenuByCategory(category);
        const lang = this.currentLanguage;

        // تأثير التلاشي
        menuGrid.style.opacity = '0';
        
        setTimeout(() => {
            menuGrid.innerHTML = items.map(item => `
                <div class="menu-item" data-scroll="zoom">
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name[lang]}" loading="lazy">
                        ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <div>
                                <h3>${item.name[lang]}</h3>
                            </div>
                            <div class="menu-price">${item.price} ${item.currency}</div>
                        </div>
                        <p class="menu-item-desc">${item.description[lang]}</p>
                        <div class="menu-item-footer">
                            <div class="menu-tags">
                                ${item.tags ? item.tags.map(tag => 
                                    `<span class="menu-tag">${tag}</span>`
                                ).join('') : ''}
                            </div>
                            <button class="menu-add-btn btn-ripple" onclick="window.bookingSystem.openModal()">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            // تطبيق scroll reveal على العناصر الجديدة
            menuGrid.querySelectorAll('[data-scroll]').forEach(el => {
                el.classList.remove('revealed');
                setTimeout(() => el.classList.add('revealed'), 100);
            });

            menuGrid.style.opacity = '1';
        }, 300);
    }

    // ====== معرض الصور ======
    setupGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                this.openLightbox(imgSrc);
            });
        });
    }

    openLightbox(imgSrc) {
        // إنشاء lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: zoom-out;
            animation: fadeIn 0.3s ease;
        `;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            animation: zoomIn 0.3s ease;
        `;

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // إغلاق عند النقر
        lightbox.addEventListener('click', () => {
            lightbox.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
            }, 300);
        });

        // إغلاق بزر ESC
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                lightbox.click();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    // ====== سلايدر التقييمات ======
    setupReviewsSlider() {
        const reviewCards = document.querySelectorAll('.review-card');
        const dotsContainer = document.getElementById('reviewDots');
        
        if (!dotsContainer || reviewCards.length === 0) return;

        // إنشاء النقاط
        reviewCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToReviewSlide(index));
            dotsContainer.appendChild(dot);
        });

        // تغيير تلقائي كل 5 ثوان
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % reviewCards.length;
            this.goToReviewSlide(currentSlide);
        }, 5000);
    }

    goToReviewSlide(index) {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // ====== التأثيرات الحركية ======
    setupAnimations() {
        // تأثيرات إضافية على الأزرار
        document.querySelectorAll('.btn-ripple').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    left: ${x}px;
                    top: ${y}px;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;

                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ====== العدادات ======
    setupCounters() {
        const counters = document.querySelectorAll('.counter');
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count);
                    this.animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, stepTime);
    }

    // ====== زر العودة للأعلى ======
    setupBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ====== نموذج النشرة الإخبارية ======
    setupNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                
                // محاكاة الإرسال
                this.showNotification('Thank you for subscribing!', 'success');
                form.reset();
            });
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// تهيئة التطبيق
const app = new PapasRestaurant();

// CSS للتأثيرات الديناميكية
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
