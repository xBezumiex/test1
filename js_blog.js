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
const blogEmpty       = document.getElementById('blogEmpty');
const blogLoader      = document.getElementById('blogLoader');
const cardTemplate    = document.getElementById('cardTemplate');

const LS_KEY = 'blog_posts';

// ===== localStorage =====
function getPosts() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}

function savePosts(posts) {
  localStorage.setItem(LS_KEY, JSON.stringify(posts));
}

// ===== ПУСТОЕ СОСТОЯНИЕ =====
function updateEmptyState() {
  const hasPosts = blogGrid.querySelectorAll('.blog-card').length > 0;
  blogEmpty.classList.toggle('is-visible', !hasPosts);
}

// ===== ЛОАДЕР (lesson 8) =====
function showLoader() {
  blogLoader.classList.add('is-visible');
  blogEmpty.classList.remove('is-visible');
  blogGrid.style.display = 'none';
  // disable кнопок пока грузится
  btnCreate.disabled = true;
  btnStats.disabled = true;
}

function hideLoader() {
  blogLoader.classList.remove('is-visible');
  blogGrid.style.display = '';
  btnCreate.disabled = false;
  btnStats.disabled = false;
  updateEmptyState();
}

// ===== ФОРМА ПОКАЗАТЬ/СКРЫТЬ =====
btnCreate.addEventListener('click', () => {
  articleFormWrap.classList.toggle('is-open');
});

btnCancel.addEventListener('click', () => {
  articleTitle.value = '';
  articleText.value = '';
  articleTitle.style.borderColor = '';
  articleText.style.borderColor = '';
  articleFormWrap.classList.remove('is-open');
});

// ===== СТАТИСТИКА =====
btnStats.addEventListener('click', () => {
  statsPostCount.textContent = blogGrid.querySelectorAll('.blog-card').length;
  statsDialog.showModal();
});

statsClose.addEventListener('click', () => statsDialog.close());

statsDialog.addEventListener('click', (e) => {
  if (e.target === statsDialog) statsDialog.close();
});

// ===== УДАЛЕНИЕ =====
function attachDeleteHandler(card, id) {
  const deleteBtn = card.querySelector('.blog-card__delete');
  if (!deleteBtn) return;
  deleteBtn.addEventListener('click', () => {
    card.remove();
    // удаляем из localStorage
    const posts = getPosts().filter(p => p.id !== id);
    savePosts(posts);
    updateEmptyState();
  });
}

// ===== СОЗДАТЬ КАРТОЧКУ =====
function createCard(post) {
  const template = cardTemplate.content.cloneNode(true);
  const card = template.querySelector('.blog-card');

  card.querySelector('.blog-card__title').textContent = post.title;
  card.querySelector('.blog-card__date').textContent = post.date;

  const imgWrap = card.querySelector('.blog-card__img');
  imgWrap.style.cssText = 'display:flex;align-items:center;justify-content:center;font-size:36px;';
  imgWrap.textContent = '🖼';

  attachDeleteHandler(card, post.id);
  return card;
}

// ===== ДОБАВИТЬ ПОСТ =====
function addPost(title, text) {
  const post = {
    id: Date.now(),
    title,
    text,
    date: new Date().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    })
  };

  // сохраняем в localStorage
  const posts = getPosts();
  posts.unshift(post);
  savePosts(posts);

  // добавляем карточку в DOM
  const card = createCard(post);
  blogGrid.prepend(card);
  updateEmptyState();
}

// ===== ЗАГРУЗИТЬ ПОСТЫ ИЗ localStorage (lesson 7) =====
function loadPostsFromStorage() {
  showLoader();

  // имитация задержки загрузки
  setTimeout(() => {
    const posts = getPosts();
    posts.forEach(post => {
      const card = createCard(post);
      blogGrid.appendChild(card);
    });
    hideLoader();
  }, 1200);
}

// ===== СОХРАНИТЬ — читаем данные из формы =====
btnSave.addEventListener('click', () => {
  const title = articleTitle.value.trim();
  const text  = articleText.value.trim();

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

  articleTitle.style.borderColor = '';
  articleText.style.borderColor = '';

  // ===== lesson 8: disable на время "сохранения" =====
  btnSave.disabled = true;
  btnCancel.disabled = true;
  articleTitle.disabled = true;
  articleText.disabled = true;

  setTimeout(() => {
    addPost(title, text);

    articleTitle.value = '';
    articleText.value = '';
    articleFormWrap.classList.remove('is-open');

    // включаем обратно
    btnSave.disabled = false;
    btnCancel.disabled = false;
    articleTitle.disabled = false;
    articleText.disabled = false;
  }, 600);
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
loadPostsFromStorage();