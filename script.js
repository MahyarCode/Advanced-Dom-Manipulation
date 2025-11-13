'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO Create, insert and delete a Cookie element:

// DESC Create
const header = document.querySelector('.header'); // 1. Specify the Parent node
const message = document.createElement('div'); // 2. Specify the ElementTagName
message.innerHTML =
  'We use cookie for better functionality and analytics. <button class="btn btn--close-cookie">Got it</button>'; // 3. Specify the innerHTML

// DESC Insert
header.prepend(message); // 4. insert it

// DESC Delete
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  }); // 5. Delete it
