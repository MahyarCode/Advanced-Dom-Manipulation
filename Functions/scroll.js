'use strict';

export function featureScroll(e) {
  if (
    e.target.classList.contains('nav__link') &&
    e.target.dataset.behavior === 'scroll'
  ) {
    e.preventDefault();
    const id = e.target.getAttribute('href'); // #section--1

    document
      .getElementById(id.replace('#', ''))
      .scrollIntoView({ behavior: 'smooth' });
  }
}

export function learnMoreScroll(e) {
  e.preventDefault();
  document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
}
