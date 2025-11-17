'use strict';

function loadImage(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

export const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
});
