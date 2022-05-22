'use strict';

(function() {
  const me = {};

  me.isEmail = email => {
    const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return re.test(email);
  };

  me.isNumber = number => {
    const re = /^(\+7|8)(\(\d{3}\)|\d{3})\d{7}$/;
    return re.test(number);
  };

  me.isNotEmpty = str => {
    return !!str;
  };

  BUSINESS.validation = me;
}());