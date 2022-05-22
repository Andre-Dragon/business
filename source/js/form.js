'use strict';

(function() {
  const me = {};
  const formContainer = document.querySelector('.form__container');
  const form = document.querySelector('.form');

  let closeFormButton = null;

  // Remove event listener for close form button
  const onClose = e => {
    const target = e.target;
    const code = e.code;

    if ( (target.closest('.form__close--button') ) || (code === 'Escape') ) {
      me.close();

      closeFormButton.removeEventListener('click', onClose);
      document.removeEventListener('keydown', onClose);
      form.reset();
    }

  };

  // Open form window  
  me.open = () => {
    formContainer.classList.remove('is-hidden');
    
    closeFormButton = document.querySelector('.form__close--button');
    closeFormButton.addEventListener('click', onClose);
    document.addEventListener('keydown', onClose); 
  };

  // Close form window
  me.close = () => {
    formContainer.classList.add('is-hidden');
  };

  // Verify validation form
  me.isValid = () => {
    const requiredFields = document.querySelectorAll('[data-valid="required"]');
    const emailValue = document.querySelector('[data-email]').value;
    const numberValue = document.querySelector('[data-number]').value;
    const formInput = document.querySelector('.form__input');
    

    if (!me.isAllCompleted(requiredFields)) {
      console.log('Заполните все необходимые поля');
      formInput.style.borderColor = 'red';
      return false;

    } else if (!BUSINESS.validation.isEmail(emailValue)) {
      console.log('Неверный email');
      return false;

    } else if (!BUSINESS.validation.isNumber(numberValue)) {
      console.log('Неверный tel.');
      return false;
    }

    return true;
  };

  // Verify required form
  me.isAllCompleted = data => {
    let result = true;

    for (let i = 0; i < data.length; i++) {
      if (!BUSINESS.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }
    return result;
  };

  BUSINESS.form = me;
}());