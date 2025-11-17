'use strict';

import {
  operationContainer,
  operationContent,
  operations,
} from '../Elements/Elements.js';

operations;
export function switchTabs(e) {
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
}
