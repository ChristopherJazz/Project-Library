const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});