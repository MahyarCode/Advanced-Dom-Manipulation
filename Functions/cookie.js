'use strict';
import { header, message } from '../Elements/Elements.js';
export function cookieInit() {
  message.innerHTML =
    'This Cookie does NOTHING!. <button class="btn btn--close-cookie">Got it</button>';

  header.prepend(message);

  message.classList.add('cookie');
}
