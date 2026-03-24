// ===== ЭЛЕМЕНТЫ =====
const btnCreate      = document.getElementById('btnCreate');
const btnStats       = document.getElementById('btnStats');
const articleFormWrap = document.getElementById('articleFormWrap');
const btnSave        = document.getElementById('btnSave');
const btnCancel      = document.getElementById('btnCancel');
const statsDialog    = document.getElementById('statsDialog');
const statsClose     = document.getElementById('statsClose');
const statsPostCount = document.getElementById('statsPostCount');
const blogGrid       = document.getElementById('blogGrid');
const cardTemplate   = document.getElementById('cardTemplate');

// ===== ПОКАЗАТЬ / СКРЫТЬ ФОРМУ =====
btnCreate.addEventListener('click', () => {
  articleFormWrap.classList.toggle('is-open');
});

// ===== ОТМЕНА — скрыть форму =====
btnCancel.addEventListener('click', () => {
  articleFormWrap.classList.remove('is-open');
});

// ===== ПОДСЧЁТ ПОСТОВ =====
function getPostCount() {
  return blogGrid.querySelectorAll('.blog-card').length;
}

// ===== СТАТИСТИКА =====
btnStats.addEventListener('click', () => {
  statsPostCount.textContent = getPostCount();
  statsDialog.showModal();
});

// Закрытие по крестику
statsClose.addEventListener('click', () => {
  statsDialog.close();
});

// Закрытие по клику вне диалога
statsDialog.addEventListener('click', (e) => {
  if (e.target === statsDialog) {
    statsDialog.close();
  }
});

// ===== ДОБАВИТЬ ПОСТ (mock-данные) =====
function addPost(title, text, date) {
  const template = cardTemplate.content.cloneNode(true);
  template.querySelector('.blog-card__title').textContent = title;
  template.querySelector('.blog-card__date').textContent = date;
  // картинка-заглушка
  const imgWrap = template.querySelector('.blog-card__img');
  imgWrap.style.cssText = 'display:flex;align-items:center;justify-content:center;font-size:36px;';
  imgWrap.textContent = '🖼';
  blogGrid.prepend(template);
}

// Запускаем добавление с mock-данными при загрузке
addPost(
  'New mock article title here',
  'Mock text for the article body',
  'Mar 24, 2026'
);

// ===== СОХРАНИТЬ — добавить пост из формы (lesson 5 — просто mock) =====
btnSave.addEventListener('click', () => {
  addPost(
    'New mock article title here',
    'Mock text for the article body',
    new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  );
  articleFormWrap.classList.remove('is-open');
});