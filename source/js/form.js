'use strict';

(function() {
  const me = {};
  const form = document.querySelector('.form__container');

  let closeFormButton = null;

  // Remove event listener for close form button
  const onClose = () => {
    me.close();
    closeFormButton.removeEventListener('click', onClose);
  };

  // Open form window
  me.open = () => {
    form.classList.remove('is-hidden');
    
    closeFormButton = document.querySelector('.form__close--button');
    closeFormButton.addEventListener('click', onClose); 
  };

  // Close form window
  me.close = () => {
    form.classList.add('is-hidden');
  };

  window.form = me;
}());