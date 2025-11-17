'use strict';
import {
  btnsOpenModal,
  btnCloseModal,
  overlay,
  header,
  message,
  allTabFeatures,
  learnMore,
  images,
  operationContainer,
  btnRight,
  btnLeft,
} from './Elements/Elements.js';

import { cookieInit } from './Functions/cookie.js';
import { imageObserver } from './Functions/image.js';
import { openModal } from './Functions/modals.js';
import { closeModal } from './Functions/modals.js';
import { closeModalEsc } from './Functions/modals.js';
import { featureScroll, learnMoreScroll } from './Functions/scroll.js';

import {
  createDots,
  keydownBTN,
  leftBTN,
  rightBTN,
  separatingSlides,
  dotSlide,
} from './Functions/slider.js';

import { headerObserver } from './Functions/stickyHeader.js';
import { switchTabs } from './Functions/switchTabs.js';

// TODO Open Modal window
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// TODO Close Modal window
btnCloseModal.addEventListener('click', closeModal);

// TODO overlay when modal opens
overlay.addEventListener('click', closeModal);

// TODO closing modal using 'Esc' key on keyboard
document.addEventListener('keydown', closeModalEsc);

// TODO Cookie:
cookieInit();
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// TODO scrolling for each features' tabs
allTabFeatures.addEventListener('click', featureScroll);

// TODO 'Learn More' scrolls into the first section.
learnMore.addEventListener('click', learnMoreScroll);

// TODO Header sticks to other sections
headerObserver.observe(header);

// TODO Loading images
images.forEach(img => imageObserver.observe(img));

// TODO Tab switch in 'operation' section
operationContainer.addEventListener('click', switchTabs);

// TODO Slider in the last section with Arrows:
separatingSlides();

btnRight.addEventListener('click', rightBTN);

btnLeft.addEventListener('click', leftBTN);

document.addEventListener('keydown', keydownBTN);

// TODO Slider dots
createDots();
dotSlide(0);
