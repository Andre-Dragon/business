'use strict';

const burgerMenu = document.querySelector('.burger__menu'),
    navMenu = document.querySelector('.nav__menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open__menu');
  burgerMenu.classList.toggle('open');
});