'use strict';

(function() {
  const me = {};
  const burgerMenu = document.querySelector('.burger__menu');
  const navMenu = document.querySelector('.nav__menu');

  function scrollToActiveSection(showedSection) {

    // document.querySelector('.' + showedSection).scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
    
    var heightHeader = document.querySelector('.header').offsetHeight;
    const topOffset = heightHeader; // 0 если не нужен отступ сверху 
    const section = document.querySelector('.' + showedSection);
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
    navMenu.classList.remove('open__menu');
    burgerMenu.classList.remove('open');
  }

  me.toggleToActiveLink = target => {
    const links = document.querySelectorAll('.nav__link');
    const showedSection = target.dataset.link;
    
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains('nav__link--active')) {
        links[i].classList.remove('nav__link--active');
      }
    }

    target.classList.add('nav__link--active');
    scrollToActiveSection(showedSection);
  };

  me.toggleToMenu = () => {
    navMenu.classList.toggle('open__menu');
    burgerMenu.classList.toggle('open');
  };

  BUSINESS.navigation = me;

}());