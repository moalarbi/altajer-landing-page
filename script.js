/**
 * التاجر الإلكتروني - Landing Page JavaScript
 * 
 * أماكن التعديل المهمة:
 * 1. WHATSAPP_NUMBER: تعديل رقم الواتساب
 * 2. PRICING: تعديل الأسعار
 * 3. COUNTDOWN_END_DATE: تعديل وقت العد التنازلي
 * 4. PLACEHOLDER_IMAGES: إضافة روابط الصور/الفيديو
 */

// ============================================
// 1. إعدادات قابلة للتعديل
// ============================================

// 🔧 تعديل رقم الواتساب هنا
const WHATSAPP_NUMBER = '966XXXXXXXXX';

// 🔧 تعديل الأسعار هنا
const PRICING = {
    original: 2999,    // السعر الأصلي
    current: 1199,     // السعر الحالي
    discount: 60       // نسبة الخصم
};

// 🔧 تعديل وقت العد التنازلي هنا
// الوقت الافتراضي: نهاية الأسبوع القادم (الجمعة 23:59 بتوقيت الرياض)
const getCountdownEndDate = () => {
    const now = new Date();
    const endDate = new Date();
    
    // حساب الجمعة القادمة
    const daysUntilFriday = (5 - now.getDay() + 7) % 7 || 7;
    endDate.setDate(now.getDate() + daysUntilFriday);
    endDate.setHours(23, 59, 59, 999);
    
    return endDate;
};

// 🔧 إضافة روابط الصور والفيديو هنا
const ASSETS = {
    heroVideo: null,        // ضع رابط الفيديو هنا
    ogImage: './assets/og-image.jpg',    // صورة المعاينة
    logo: null              // شعار الموقع
};

// ============================================
// 2. العد التنازلي
// ============================================

function initCountdown() {
    const endDate = getCountdownEndDate();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        
        if (distance < 0) {
            // انتهى العد التنازلي
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// 3. تأثير الظهور عند التمرير (Scroll Reveal)
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================
// 4. تأثير الهيدر عند التمرير
// ============================================

function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ============================================
// 5. القائمة المتنقلة (Mobile Menu)
// ============================================

function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    if (!menuBtn || !menuOverlay) return;
    
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
        
        if (isOpen) {
            menuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                menuOverlay.classList.remove('opacity-0');
            }, 10);
        } else {
            menuOverlay.classList.add('opacity-0');
            setTimeout(() => {
                menuOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
    }
    
    menuBtn.addEventListener('click', toggleMenu);
    
    // إغلاق القائمة عند النقر على رابط
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // إغلاق القائمة عند النقر خارجها
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });
    
    // إغلاق القائمة بزر ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleMenu();
        }
    });
}

// ============================================
// 6. الأسئلة الشائعة (FAQ Accordion)
// ============================================

function initFAQ() {
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = answer.classList.contains('open');
            
            // إغلاق جميع الإجابات الأخرى
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('open');
            });
            document.querySelectorAll('.faq-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
            });
            
            // فتح/إغلاق الإجابة الحالية
            if (!isOpen) {
                answer.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// ============================================
// 7. تحديث روابط الواتساب
// ============================================

function updateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    });
}

// ============================================
// 8. تحديث الأسعار (اختياري)
// ============================================

function updatePricing() {
    // يمكن استخدام هذا لتحديث الأسعار ديناميكياً
    console.log('الأسعار الحالية:', PRICING);
}

// ============================================
// 9. التهيئة الرئيسية
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initScrollReveal();
    initHeaderScroll();
    initMobileMenu();
    initFAQ();
    updateWhatsAppLinks();
    updatePricing();
    
    console.log('🚀 التاجر الإلكتروني - تم التحميل بنجاح');
    console.log('📱 رقم الواتساب:', WHATSAPP_NUMBER);
    console.log('💰 الأسعار:', PRICING);
});

// ============================================
// 10. دعم تحميل الصفحة بالكامل
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
