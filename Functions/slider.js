'use strict';

import { slides, dots } from '../Elements/Elements.js';

export let currentSlide = 0;

export function separatingSlides() {
  slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
}

export function dotSlide(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(btn => btn.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
}

function nextSlide() {
  currentSlide++;
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
}

function prevSlide() {
  currentSlide--;
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
}
export function rightBTN() {
  if (currentSlide === slides.length - 1) currentSlide = -1;
  nextSlide();
  dotSlide(currentSlide);
}

export function leftBTN() {
  if (currentSlide === 0) currentSlide = slides.length;
  prevSlide();
  dotSlide(currentSlide);
}

export function keydownBTN(e) {
  if (e.key === 'ArrowRight') {
    if (currentSlide === slides.length - 1) currentSlide = -1;
    nextSlide();
    dotSlide(currentSlide);
  }

  if (e.key === 'ArrowLeft') {
    if (currentSlide === 0) currentSlide = slides.length;
    prevSlide();
    dotSlide(currentSlide);
  }
}

export function createDots() {
  slides.forEach((_, i) => {
    dots.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}
