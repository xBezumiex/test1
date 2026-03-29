// ===== ЭЛЕМЕНТЫ =====
const btnCreate       = document.getElementById('btnCreate');
const btnStats        = document.getElementById('btnStats');
const articleFormWrap = document.getElementById('articleFormWrap');
const articleTitle    = document.getElementById('articleTitle');
const articleText     = document.getElementById('articleText');
const btnSave         = document.getElementById('btnSave');
const btnCancel       = document.getElementById('btnCancel');
const statsDialog     = document.getElementById('statsDialog');
const statsClose      = document.getElementById('statsClose');
const statsPostCount  = document.getElementById('statsPostCount');
const blogGrid        = document.getElementById('blogGrid');
const cardTemplate    = document.getElementById('cardTemplate');

// ===== ПОКАЗАТЬ ФОРМУ =====
btnCreate.addEventListener('click', () => {
  articleFormWrap.classList.toggle('is-open');
});

// ===== ОТМЕНА — очистить и скрыть форму =====
btnCancel.addEventListener('click', () => {
  articleTitle.value = '';
  articleText.value = '';
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

statsClose.addEventListener('click', () => statsDialog.close());

statsDialog.addEventListener('click', (e) => {
  if (e.target === statsDialog) statsDialog.close();
});

// ===== УДАЛЕНИЕ ПОСТА =====
function attachDeleteHandler(card) {
  const deleteBtn = card.querySelector('.blog-card__delete');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      card.remove();
    });
  }
}

// Навесить обработчики на существующие карточки
blogGrid.querySelectorAll('.blog-card').forEach(attachDeleteHandler);

// ===== ДОБАВИТЬ ПОСТ =====
function addPost(title, text) {
  const template = cardTemplate.content.cloneNode(true);
  const card = template.querySelector('.blog-card');

  card.querySelector('.blog-card__title').textContent = title;
  card.querySelector('.blog-card__date').textContent = new Date().toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  // Заглушка картинки
  const imgWrap = card.querySelector('.blog-card__img');
  imgWrap.style.cssText = 'display:flex;align-items:center;justify-content:center;font-size:36px;';
  imgWrap.textContent = '🖼';

  attachDeleteHandler(card);
  blogGrid.prepend(card);
}

// ===== СОХРАНИТЬ — читаем данные из формы =====
btnSave.addEventListener('click', () => {
  const title = articleTitle.value.trim();
  const text  = articleText.value.trim();

  // Валидация обязательных полей
  if (!title) {
    articleTitle.style.borderColor = 'red';
    articleTitle.focus();
    return;
  }
  if (!text) {
    articleText.style.borderColor = 'red';
    articleText.focus();
    return;
  }

  // Сброс стилей ошибок
  articleTitle.style.borderColor = '';
  articleText.style.borderColor = '';

  // Добавляем пост
  addPost(title, text);

  // Reset формы и скрыть
  articleTitle.value = '';
  articleText.value = '';
  articleFormWrap.classList.remove('is-open');
});