# التاجر الإلكتروني - Landing Page

صفحة هبوط احترافية لخدمة "التاجر الإلكتروني" - تجهيز متاجر إلكترونية على منصة سلة خلال 48 ساعة.

## 🚀 الميزات

- ✅ **تصميم Dark Mode فخم** - خلفية داكنة مع ألوان متناسقة
- ✅ **Mobile-First** - تصميم متجاوب مع جميع الأجهزة
- ✅ **خط IBM Plex Sans Arabic** - خط احترافي للغة العربية
- ✅ **RTL (من اليمين لليسار)** - دعم كامل للغة العربية
- ✅ **Countdown Timer** - عدّاد تنازلي حي للعرض
- ✅ **Scroll Animations** - تأثيرات ظهور عند التمرير
- ✅ **Fast Performance** - بدون مكتبات ثقيلة

## 📁 هيكل المشروع

```
altajer-landing-page/
├── index.html          # الصفحة الرئيسية
├── script.js           # ملف JavaScript
├── privacy.html        # صفحة سياسة الخصوصية
├── terms.html          # صفحة الشروط والأحكام
├── README.md           # هذا الملف
└── assets/             # مجلد الصور (فارغ حالياً)
```

## 🔧 أماكن التعديل المهمة

### 1. رقم الواتساب
**الملف:** `script.js` (السطر 15)
```javascript
const WHATSAPP_NUMBER = '966XXXXXXXXX';
```

### 2. الأسعار
**الملف:** `script.js` (السطر 18-22)
```javascript
const PRICING = {
    original: 2999,    // السعر الأصلي
    current: 1199,     // السعر الحالي
    discount: 60       // نسبة الخصم
};
```

### 3. وقت العدّاد التنازلي
**الملف:** `script.js` (السطر 26-34)
```javascript
const getCountdownEndDate = () => {
    // تعديل هذا لتحديد وقت انتهاء العرض
    const now = new Date();
    const endDate = new Date();
    // ...
    return endDate;
};
```

### 4. الصور والفيديو
**الملف:** `script.js` (السطر 37-41)
```javascript
const ASSETS = {
    heroVideo: 'رابط-الفيديو-هنا',
    ogImage: './assets/og-image.jpg',
    logo: 'رابط-الشعار-هنا'
};
```

## 🚀 النشر على GitHub Pages

### الطريقة الأولى: عبر GitHub Desktop

1. أنشئ مستودع جديد على GitHub باسم `altajer-landing-page`
2. ارفع ملفات المشروع
3. اذهب إلى Settings → Pages
4. اختر Branch: `main` و Folder: `/root`
5. احفظ الإعدادات

### الطريقة الثانية: عبر سطر الأوامر

```bash
# تهيئة المستودع
git init
git add .
git commit -m "Initial commit"

# ربط بالمستودع البعيد
git remote add origin https://github.com/USERNAME/altajer-landing-page.git
git branch -M main
git push -u origin main
```

## 🎨 التخصيص

### تغيير الألوان
**الملف:** `index.html` (قسم Tailwind Config)
```javascript
colors: {
    accent: {
        primary: '#6366F1',    // اللون الأساسي
        hover: '#4F46E5',      // اللون عند التمرير
    }
}
```

### تغيير المحتوى
- **العناوين والنصوص:** `index.html`
- **الأسئلة الشائعة:** `index.html` (قسم FAQ)
- **الشروط والأحكام:** `terms.html`
- **سياسة الخصوصية:** `privacy.html`

## 📱 المعاينة المحلية

بما أن المشروع يستخدم HTML/CSS/JS فقط، يمكنك فتح ملف `index.html` مباشرة في المتصفح.

أو استخدم خادم محلي:
```bash
# باستخدام Python
python -m http.server 8000

# باستخدام Node.js
npx serve .
```

## 🔗 الروابط المهمة

- **الموقع الرئيسي:** `https://USERNAME.github.io/altajer-landing-page/`
- **سياسة الخصوصية:** `https://USERNAME.github.io/altajer-landing-page/privacy.html`
- **الشروط والأحكام:** `https://USERNAME.github.io/altajer-landing-page/terms.html`

## 📞 التواصل

للاستفسارات أو الدعم، تواصل معنا عبر واتساب.

---

**جميع الحقوق محفوظة © 2026 - التاجر الإلكتروني**
