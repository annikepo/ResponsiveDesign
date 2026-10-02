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

openBtn.addEventListener('click', openModal);
openImg.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});