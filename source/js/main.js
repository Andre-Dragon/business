'use strict';

(function() {
  
  // Add event listener for open form button
  const openFormButton = document.querySelector('.btn__down');

  if (openFormButton) {
    openFormButton.addEventListener('click', e => {
      e.preventDefault();
      form.open();
    });
  }

}());