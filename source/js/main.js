'use strict';

(function() {
  
  // Add event listener for open form button
  const openFormButton = document.querySelector('.btn__down');
  const form = document.querySelector('.form');
  const nav = document.querySelector('.nav');
  const burgerMenu = document.querySelector('.burger__menu');

  if (openFormButton) {
    openFormButton.addEventListener('click', e => {
      e.preventDefault();
      BUSINESS.form.open();
    });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      if (BUSINESS.form.isValid()) {
        console.log('Good');
      } else {
        console.log('Is not valid');
      }
    });
  }

  if (nav) {
    nav.addEventListener('click', e => {
      const target = e.target;

      if (target.tagName.toLowerCase() !== 'a') {
        return;
      }

      e.preventDefault();
      BUSINESS.navigation.toggleToActiveLink(target);
    });
  }

  if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
      BUSINESS.navigation.toggleToMenu();
    });
  }

}());