const modal = document.getElementById('recipe-modal');
const openBtn = document.getElementById('open-recipe-btn');
const openImg = document.getElementById('open-recipe-img');
const closeBtn = document.getElementById('close-recipe-btn');

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

if (openBtn) {
  openBtn.addEventListener('click', openModal);
}

if (openImg) {
  openImg.addEventListener('click', openModal);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}