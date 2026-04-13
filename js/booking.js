/* ========================================
   PAPA'S Restaurant - Booking System
   نظام الحجز المتقدم مع إرسال WhatsApp
======================================== */

class BookingSystem {
    constructor() {
        this.currentStep = 1;
        this.bookingData = {
            customerName: '',
            customerPhone: '',
            bookingDate: '',
            bookingTime: '',
            guestCount: '',
            selectedDishes: [],
            specialRequests: ''
        };
        this.whatsappNumber = '201090408853'; // رقم واتساب المطعم
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDatePicker();
        this.loadDishesSelection();
    }

    setupEventListeners() {
        // فتح نافذة الحجز
        const bookingButtons = document.querySelectorAll('#openBookingModal, #heroBookBtn, #ctaBookBtn');
        bookingButtons.forEach(btn => {
            btn.addEventListener('click', () => this.openModal());
        });

        // إغلاق النافذة
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeModal());
        }

        // أزرار التنقل بين الخطوات
        document.querySelectorAll('.next-step').forEach(btn => {
            btn.addEventListener('click', () => this.nextStep());
        });

        document.querySelectorAll('.prev-step').forEach(btn => {
            btn.addEventListener('click', () => this.prevStep());
        });

        // إرسال النموذج
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitBooking();
            });
        }

        // تتبع تغييرات الحقول
        this.setupFieldListeners();
    }

    setupFieldListeners() {
        const fields = ['customerName', 'customerPhone', 'bookingDate', 'bookingTime', 'guestCount'];
        
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('change', (e) => {
                    this.bookingData[fieldId] = e.target.value;
                    this.validateField(fieldId);
                });
            }
        });

        // حقل الطلبات الخاصة
        const specialRequests = document.getElementById('specialRequests');
        if (specialRequests) {
            specialRequests.addEventListener('input', (e) => {
                this.bookingData.specialRequests = e.target.value;
            });
        }
    }

    setupDatePicker() {
        const dateInput = document.getElementById('bookingDate');
        if (dateInput) {
            // تعيين الحد الأدنى للتاريخ (اليوم)
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const minDate = tomorrow.toISOString().split('T')[0];
            dateInput.setAttribute('min', minDate);

            // تعيين الحد الأقصى (3 أشهر من الآن)
            const maxDate = new Date(today);
            maxDate.setMonth(maxDate.getMonth() + 3);
            dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
        }
    }

    loadDishesSelection() {
        const dishesContainer = document.getElementById('dishesSelection');
        if (!dishesContainer) return;

        const currentLang = document.documentElement.lang || 'en';
        const popularDishes = getPopularDishes();

        dishesContainer.innerHTML = popularDishes.map(dish => `
            <div class="dish-option" data-dish-id="${dish.id}">
                <input type="checkbox" id="dish-${dish.id}" value="${dish.id}">
                <img src="${dish.image}" alt="${dish.name[currentLang]}" class="dish-option-image">
                <div class="dish-option-info">
                    <h4>${dish.name[currentLang]}</h4>
                    <p>${dish.description[currentLang]}</p>
                </div>
                <div class="dish-option-price">${dish.price} ${dish.currency}</div>
            </div>
        `).join('');

        // إضافة مستمعات للأحداث
        dishesContainer.querySelectorAll('.dish-option').forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            
            option.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    checkbox.checked = !checkbox.checked;
                }
                
                if (checkbox.checked) {
                    option.classList.add('selected');
                    this.addDish(parseInt(checkbox.value));
                } else {
                    option.classList.remove('selected');
                    this.removeDish(parseInt(checkbox.value));
                }
            });
        });
    }

    addDish(dishId) {
        if (!this.bookingData.selectedDishes.includes(dishId)) {
            this.bookingData.selectedDishes.push(dishId);
        }
    }

    removeDish(dishId) {
        this.bookingData.selectedDishes = this.bookingData.selectedDishes.filter(id => id !== dishId);
    }

    validateField(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return true;

        let isValid = true;
        const value = field.value.trim();

        // إزالة رسائل الخطأ السابقة
        this.removeFieldError(field);

        switch(fieldId) {
            case 'customerName':
                if (value.length < 3) {
                    isValid = false;
                    this.showFieldError(field, 'Name must be at least 3 characters');
                }
                break;

            case 'customerPhone':
                // التحقق من رقم الهاتف (يجب أن يبدأ بـ + ويحتوي على أرقام)
                const phoneRegex = /^\+?[0-9]{10,15}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    isValid = false;
                    this.showFieldError(field, 'Please enter a valid phone number');
                }
                break;

            case 'bookingDate':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate <= today) {
                    isValid = false;
                    this.showFieldError(field, 'Please select a future date');
                }
                break;

            case 'bookingTime':
            case 'guestCount':
                if (!value) {
                    isValid = false;
                    this.showFieldError(field, 'This field is required');
                }
                break;
        }

        if (isValid) {
            field.classList.add('valid');
            field.classList.remove('invalid');
        } else {
            field.classList.add('invalid');
            field.classList.remove('valid');
        }

        return isValid;
    }

    showFieldError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        field.parentElement.appendChild(errorDiv);
        field.classList.add('error-shake');
        
        setTimeout(() => field.classList.remove('error-shake'), 500);
    }

    removeFieldError(field) {
        const errorDiv = field.parentElement.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    validateStep(step) {
        let isValid = true;

        switch(step) {
            case 1:
                const requiredFields = ['customerName', 'customerPhone', 'bookingDate', 'bookingTime', 'guestCount'];
                requiredFields.forEach(fieldId => {
                    if (!this.validateField(fieldId)) {
                        isValid = false;
                    }
                });
                break;

            case 2:
                // الخطوة 2 اختيارية (اختيار الأطباق)
                isValid = true;
                break;

            case 3:
                const agreeTerms = document.getElementById('agreeTerms');
                if (agreeTerms && !agreeTerms.checked) {
                    isValid = false;
                    this.showNotification('Please agree to receive confirmation via WhatsApp', 'error');
                }
                break;
        }

        return isValid;
    }

    nextStep() {
        if (!this.validateStep(this.currentStep)) {
            return;
        }

        if (this.currentStep < 3) {
            this.currentStep++;
            this.updateStepDisplay();
            
            if (this.currentStep === 3) {
                this.updateBookingSummary();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStepDisplay();
        }
    }

    updateStepDisplay() {
        // إخفاء جميع الخطوات
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });

        // إظهار الخطوة الحالية
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }

        // تحديث المؤشرات
        document.querySelectorAll('.step-dot').forEach((dot, index) => {
            if (index + 1 <= this.currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // التمرير إلى الأعلى في النافذة المنبثقة
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }

    updateBookingSummary() {
        const summaryContainer = document.getElementById('bookingSummary');
        if (!summaryContainer) return;

        const currentLang = document.documentElement.lang || 'en';
        const allDishes = getAllDishes();
        
        // الحصول على الأطباق المختارة
        const selectedDishesDetails = this.bookingData.selectedDishes.map(dishId => {
            return allDishes.find(dish => dish.id === dishId);
        }).filter(dish => dish);

        // حساب الإجمالي
        const totalPrice = selectedDishesDetails.reduce((sum, dish) => sum + dish.price, 0);

        // تنسيق التاريخ
        const formattedDate = this.formatDate(this.bookingData.bookingDate);

        summaryContainer.innerHTML = `
            <div class="summary-item">
                <span class="summary-label">Name:</span>
                <span class="summary-value">${this.bookingData.customerName}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Phone:</span>
                <span class="summary-value">${this.bookingData.customerPhone}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Date:</span>
                <span class="summary-value">${formattedDate}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Time:</span>
                <span class="summary-value">${this.bookingData.bookingTime}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Guests:</span>
                <span class="summary-value">${this.bookingData.guestCount} ${this.bookingData.guestCount === '1' ? 'Person' : 'People'}</span>
            </div>
            ${selectedDishesDetails.length > 0 ? `
                <div class="summary-item" style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #e0e0e0;">
                    <span class="summary-label">Pre-ordered Dishes:</span>
                </div>
                ${selectedDishesDetails.map(dish => `
                    <div class="summary-item" style="padding-left: 1rem;">
                        <span class="summary-label">• ${dish.name[currentLang]}</span>
                        <span class="summary-value">${dish.price} ${dish.currency}</span>
                    </div>
                `).join('')}
                <div class="summary-item" style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--primary-color);">
                    <span class="summary-label">Estimated Total:</span>
                    <span class="summary-value" style="color: var(--primary-color); font-size: 1.5rem;">${totalPrice} EGP</span>
                </div>
            ` : ''}
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    submitBooking() {
        if (!this.validateStep(3)) {
            return;
        }

        // إنشاء رسالة WhatsApp
        const message = this.generateWhatsAppMessage();
        
        // إنشاء رابط WhatsApp
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // عرض رسالة نجاح
        this.showNotification('Redirecting to WhatsApp...', 'success');
        
        // الانتظار لمدة ثانية ثم فتح WhatsApp
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            this.closeModal();
            this.resetBooking();
        }, 1000);
    }

    generateWhatsAppMessage() {
        const currentLang = document.documentElement.lang || 'en';
        const allDishes = getAllDishes();
        
        // الحصول على الأطباق المختارة
        const selectedDishesDetails = this.bookingData.selectedDishes.map(dishId => {
            return allDishes.find(dish => dish.id === dishId);
        }).filter(dish => dish);

        let message = `🍽️ *PAPA'S Restaurant - New Booking*\n\n`;
        message += `👤 *Customer Details:*\n`;
        message += `Name: ${this.bookingData.customerName}\n`;
        message += `Phone: ${this.bookingData.customerPhone}\n\n`;
        
        message += `📅 *Reservation Details:*\n`;
        message += `Date: ${this.formatDate(this.bookingData.bookingDate)}\n`;
        message += `Time: ${this.bookingData.bookingTime}\n`;
        message += `Number of Guests: ${this.bookingData.guestCount}\n\n`;

        if (selectedDishesDetails.length > 0) {
            message += `🍴 *Pre-ordered Dishes:*\n`;
            selectedDishesDetails.forEach(dish => {
                message += `• ${dish.name[currentLang]} - ${dish.price} ${dish.currency}\n`;
            });
            
            const totalPrice = selectedDishesDetails.reduce((sum, dish) => sum + dish.price, 0);
            message += `\n💰 *Estimated Total:* ${totalPrice} EGP\n\n`;
        }

        if (this.bookingData.specialRequests) {
            message += `📝 *Special Requests:*\n${this.bookingData.specialRequests}\n\n`;
        }

        message += `⏰ Booking made at: ${new Date().toLocaleString()}\n`;
        message += `\n✅ Please confirm this reservation. Thank you!`;

        return message;
    }

    openModal() {
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
        }
    }

    closeModal() {
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // إعادة التمرير
        }
    }

    resetBooking() {
        this.currentStep = 1;
        this.bookingData = {
            customerName: '',
            customerPhone: '',
            bookingDate: '',
            bookingTime: '',
            guestCount: '',
            selectedDishes: [],
            specialRequests: ''
        };
        
        // إعادة تعيين النموذج
        const form = document.getElementById('bookingForm');
        if (form) {
            form.reset();
        }
        
        // إزالة تحديدات الأطباق
        document.querySelectorAll('.dish-option.selected').forEach(option => {
            option.classList.remove('selected');
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox) checkbox.checked = false;
        });
        
        // العودة للخطوة الأولى
        this.updateStepDisplay();
    }

    showNotification(message, type = 'info') {
        // إنشاء عنصر الإشعار
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
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // إزالة الإشعار بعد 3 ثوان
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// تهيئة نظام الحجز عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.bookingSystem = new BookingSystem();
});