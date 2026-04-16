// =============================================
// بيانات الكتاب (حالياً الباب الأول فقط)
// =============================================
const courseData = {
  chapters: [
    {
      id: 1,
      title: "١. مقدمة: الجدول القياسي للتفاضلات",
      content: `
        <h2>مقدمة: الجدول القياسي للتفاضلات</h2>
        <p>فيما يلي الجدول القياسي لتفاضلات الدوال الأساسية كما ورد في المحاضرات (صفحات ٣-٥):</p>
        
        <h3>أولاً: تفاضلات الدوال الجبرية والأسية واللوغاريتمية</h3>
        <table class="math-table">
          <thead>
            <tr><th>مسلسل</th><th>الدالة</th><th>المشتقة</th></tr>
          </thead>
          <tbody>
            <tr><td>١</td><td>\\(y = x^n\\)</td><td>\\(\\frac{dy}{dx} = n x^{n-1}\\)</td></tr>
            <tr><td>٢</td><td>\\(y = a^x\\)</td><td>\\(\\frac{dy}{dx} = a^x \\ln a\\)</td></tr>
            <tr><td>٣</td><td>\\(y = e^x\\)</td><td>\\(\\frac{dy}{dx} = e^x\\)</td></tr>
            <tr><td>٤</td><td>\\(y = \\ln x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{x}\\)</td></tr>
            <tr><td>٥</td><td>\\(y = \\log_a x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{x \\ln a}\\)</td></tr>
          </tbody>
        </table>
        
        <h3>ثانياً: تفاضلات الدوال المثلثية</h3>
        <table class="math-table">
          <thead>
            <tr><th>مسلسل</th><th>الدالة</th><th>المشتقة</th></tr>
          </thead>
          <tbody>
            <tr><td>٦</td><td>\\(y = \\sin x\\)</td><td>\\(\\frac{dy}{dx} = \\cos x\\)</td></tr>
            <tr><td>٧</td><td>\\(y = \\cos x\\)</td><td>\\(\\frac{dy}{dx} = -\\sin x\\)</td></tr>
            <tr><td>٨</td><td>\\(y = \\tan x\\)</td><td>\\(\\frac{dy}{dx} = \\sec^2 x\\)</td></tr>
            <tr><td>٩</td><td>\\(y = \\cot x\\)</td><td>\\(\\frac{dy}{dx} = -\\csc^2 x\\)</td></tr>
            <tr><td>١٠</td><td>\\(y = \\sec x\\)</td><td>\\(\\frac{dy}{dx} = \\sec x \\tan x\\)</td></tr>
            <tr><td>١١</td><td>\\(y = \\csc x\\)</td><td>\\(\\frac{dy}{dx} = -\\csc x \\cot x\\)</td></tr>
          </tbody>
        </table>
        
        <h3>ثالثاً: تفاضلات الدوال المثلثية العكسية</h3>
        <table class="math-table">
          <thead>
            <tr><th>مسلسل</th><th>الدالة</th><th>المشتقة</th></tr>
          </thead>
          <tbody>
            <tr><td>١٢</td><td>\\(y = \\sin^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{\\sqrt{1-x^2}}\\)</td></tr>
            <tr><td>١٣</td><td>\\(y = \\cos^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{-1}{\\sqrt{1-x^2}}\\)</td></tr>
            <tr><td>١٤</td><td>\\(y = \\tan^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{1+x^2}\\)</td></tr>
            <tr><td>١٥</td><td>\\(y = \\cot^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{-1}{1+x^2}\\)</td></tr>
            <tr><td>١٦</td><td>\\(y = \\sec^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{x\\sqrt{x^2-1}}\\)</td></tr>
            <tr><td>١٧</td><td>\\(y = \\csc^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{-1}{x\\sqrt{x^2-1}}\\)</td></tr>
          </tbody>
        </table>
        
        <h3>رابعاً: تفاضلات الدوال الزائدية</h3>
        <table class="math-table">
          <thead>
            <tr><th>مسلسل</th><th>الدالة</th><th>المشتقة</th></tr>
          </thead>
          <tbody>
            <tr><td>١٨</td><td>\\(y = \\sinh x\\)</td><td>\\(\\frac{dy}{dx} = \\cosh x\\)</td></tr>
            <tr><td>١٩</td><td>\\(y = \\cosh x\\)</td><td>\\(\\frac{dy}{dx} = \\sinh x\\)</td></tr>
            <tr><td>٢٠</td><td>\\(y = \\tanh x\\)</td><td>\\(\\frac{dy}{dx} = \\text{sech}^2 x\\)</td></tr>
            <tr><td>٢١</td><td>\\(y = \\coth x\\)</td><td>\\(\\frac{dy}{dx} = -\\text{csch}^2 x\\)</td></tr>
            <tr><td>٢٢</td><td>\\(y = \\text{sech} x\\)</td><td>\\(\\frac{dy}{dx} = -\\text{sech} x \\tanh x\\)</td></tr>
            <tr><td>٢٣</td><td>\\(y = \\text{csch} x\\)</td><td>\\(\\frac{dy}{dx} = -\\text{csch} x \\coth x\\)</td></tr>
          </tbody>
        </table>
        
        <h3>خامساً: تفاضلات الدوال الزائدية العكسية</h3>
        <table class="math-table">
          <thead>
            <tr><th>مسلسل</th><th>الدالة</th><th>المشتقة</th></tr>
          </thead>
          <tbody>
            <tr><td>٢٤</td><td>\\(y = \\sinh^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{\\sqrt{1+x^2}}\\)</td></tr>
            <tr><td>٢٥</td><td>\\(y = \\cosh^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{\\sqrt{x^2-1}}\\)</td></tr>
            <tr><td>٢٦</td><td>\\(y = \\tanh^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{1-x^2}\\)</td></tr>
            <tr><td>٢٧</td><td>\\(y = \\coth^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{1}{1-x^2}\\)</td></tr>
            <tr><td>٢٨</td><td>\\(y = \\text{sech}^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{-1}{x\\sqrt{1-x^2}}\\)</td></tr>
            <tr><td>٢٩</td><td>\\(y = \\text{csch}^{-1} x\\)</td><td>\\(\\frac{dy}{dx} = \\frac{-1}{x\\sqrt{1+x^2}}\\)</td></tr>
          </tbody>
        </table>
        
        <p class="mt-4 text-sm text-gray-600">المصدر: محاضرات في حساب التكامل - د. صالح الدين عباس، كلية العلوم - جامعة سوهاج.</p>
      `
    }
    // يمكن إضافة باقي الأبواب هنا بنفس الهيكل لاحقاً
  ]
};

// =============================================
// وظائف العرض والتفاعل
// =============================================

// عناصر DOM
const chapterListEl = document.getElementById('chapter-list');
const contentAreaEl = document.getElementById('content-area');

// دالة لإنشاء قائمة الأبواب في الشريط الجانبي
function renderSidebar() {
  if (!chapterListEl) return;
  
  let html = '';
  courseData.chapters.forEach((chapter, index) => {
    html += `
      <li>
        <button 
          class="sidebar-item w-full text-right px-4 py-3 rounded-lg text-slate-200 hover:text-white flex items-center"
          data-chapter-id="${chapter.id}"
        >
          <span class="mr-2 text-blue-300">📘</span>
          <span>${chapter.title}</span>
        </button>
      </li>
    `;
  });
  
  chapterListEl.innerHTML = html;
  
  // إضافة مستمعي الأحداث لأزرار الأبواب
  document.querySelectorAll('[data-chapter-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.chapterId);
      loadChapter(id);
      
      // تحديث الـ active class
      document.querySelectorAll('.sidebar-item').forEach(b => {
        b.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
}

// دالة تحميل محتوى باب معين
function loadChapter(chapterId) {
  const chapter = courseData.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return;
  
  // عرض المحتوى
  contentAreaEl.innerHTML = chapter.content;
  
  // إعادة تهيئة MathJax لعرض المعادلات الجديدة
  if (window.MathJax) {
    MathJax.typesetPromise([contentAreaEl]).catch(err => console.log('MathJax error:', err));
  }
}

// دالة تهيئة الصفحة (تحميل الباب الأول افتراضياً)
function initializePage() {
  renderSidebar();
  
  // تحديد الباب الأول كنشط وعرضه
  if (courseData.chapters.length > 0) {
    const firstChapterId = courseData.chapters[0].id;
    loadChapter(firstChapterId);
    
    // تحديث الـ active class في القائمة
    const firstBtn = document.querySelector(`[data-chapter-id="${firstChapterId}"]`);
    if (firstBtn) firstBtn.classList.add('active');
  }
}

// بدء التطبيق بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializePage);
