'use strict';

const modal = document.querySelector('.modal');

// TODO Open Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// TODO Close Modal window

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const btnCloseModal = document.querySelector('.btn--close-modal');
btnCloseModal.addEventListener('click', closeModal);

// TODO overlay when modal opens

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', closeModal);

// TODO closing modal using 'Esc' key on keyboard

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO Cookie:

const header = document.querySelector('.header');
const message = document.createElement('div');

// NOTE 1. Create
message.innerHTML =
  'This Cookie does NOTHING!. <button class="btn btn--close-cookie">Got it</button>';

// NOTE 2. Insert
header.prepend(message);

// NOTE 3. style Element
message.classList.add('cookie');

// NOTE 4. close cookie: Delete
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// TODO scrolling for each features' tabs

const allTabFeatures = document.querySelector('.nav__links');
allTabFeatures.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');

    document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
  }
});

// TODO 'Learn More' scrolls into the first section.

const learnMore = document.querySelector('.btn--scroll-to');
learnMore.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
});

// TODO Header sticks to other sections

const nav = document.querySelector('.nav');

function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// TODO Loading images

const images = document.querySelectorAll('img[data-src]');

function loadImage(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
});
images.forEach(img => imageObserver.observe(img));

// TODO Tab switch in 'operation' section

const operations = document.querySelectorAll('.operations__tab');
const operationContainer = document.querySelector('.operations__tab-container');
const operationContent = document.querySelectorAll('.operations__content');

operationContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  operations.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  operationContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// TODO Slider in the last section with Arrows:

const slides = document.querySelectorAll('.slide');

slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

let currentSlide = 0;

btnRight.addEventListener('click', function (e) {
  if (currentSlide === slides.length - 1) currentSlide = -1;
  currentSlide++;
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
  dotSlide(currentSlide);
});

btnLeft.addEventListener('click', function (e) {
  if (currentSlide === 0) currentSlide = slides.length;
  currentSlide--;
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
  dotSlide(currentSlide);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    if (currentSlide === slides.length - 1) currentSlide = -1;
    currentSlide++;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
    );
    dotSlide(currentSlide);
  }

  if (e.key === 'ArrowLeft') {
    if (currentSlide === 0) currentSlide = slides.length;
    currentSlide--;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
    );
    dotSlide(currentSlide);
  }
});

// TODO Slider dots
const dots = document.querySelector('.dots');
function createDots() {
  slides.forEach((_, i) => {
    dots.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}
createDots();

function dotSlide(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(btn => btn.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
}
dotSlide(0);
