document.addEventListener('DOMContentLoaded', () => {

// 1. Star Rating Logic
const stars = document.querySelectorAll('.star-rating i');
const ratingInput = document.getElementById('ratingValue');
const feedbackForm = document.getElementById('feedbackForm');

stars.forEach((star, index) => {
star.addEventListener('click', () => {
let val = star.getAttribute('data-val');
ratingInput.value = val;

// إعادة ضبط لون كل النجوم
stars.forEach(s => {
s.classList.remove('text-yellow-400');
s.classList.add('text-gray-600');
});

// تلوين النجمة المحددة وما قبلها باللون الأصفر
stars.forEach(s => {
if (parseInt(s.getAttribute('data-val')) <= parseInt(val)) {
s.classList.remove('text-gray-600');
s.classList.add('text-yellow-400');
}
});
});
});

// 2. Form Submission Logic via Mailto
if (feedbackForm) {
feedbackForm.addEventListener('submit', function(e) {
e.preventDefault();
const name = document.getElementById('userName').value;
const rating = document.getElementById('ratingValue').value;
const comment = document.getElementById('userComment').value;

if(rating == 0) {
alert('يرجى اختيار عدد النجوم للتقييم قبل الإرسال! ⭐');
return;
}

const email = "hkxbusiness.acc@gmail.com";
const subject = encodeURIComponent("تقييم جديد من عميل: " + name);
const body = encodeURIComponent(
"الاسم: " + name + "\n" +
"التقييم: " + rating + " نجوم\n" +
"التعليق: " + comment
);

// فتح تطبيق البريد الإلكتروني الافتراضي
window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
// إظهار رسالة نجاح وإعادة تهيئة النموذج بعد نصف ثانية
setTimeout(() => {
alert('شكراً لتقييمك! جاري فتح تطبيق البريد لإرسال رسالتك 💌.');
feedbackForm.reset();
stars.forEach(s => {
s.classList.remove('text-yellow-400');
s.classList.add('text-gray-600');
});
ratingInput.value = 0;
}, 500);
});
}
});
