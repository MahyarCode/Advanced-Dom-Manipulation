'use strict';
import { overlay, modal } from '../Elements/Elements.js';
export const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

export const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

export const closeModalEsc = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};
