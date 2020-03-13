var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
  var popupError = document.querySelector(".modal-error");
  var closeError = document.querySelector(".modal-error__button");
  var popupSuccess = document.querySelector(".modal-success");
  var closeSuccess = document.querySelector(".modal-success__button")
  var form = document.querySelector(".filter-form");
  var userName = document.querySelector("[name=name]");
  var userSurname = document.querySelector("[name=surname]");
  var userPhone = document.querySelector("[name=user-phone]");
  var userEmail = document.querySelector("[name=user-email]");
  var array = [userName, userSurname, userPhone, userEmail];

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!userName.value || !userSurname.value || !userPhone.value || !userEmail.value) {
      popupError.classList.remove("modal-error--show");
      popupError.offsetWidth = popupError.offsetWidth;
      popupError.classList.add("modal-error--show");
      for (var i = 0; i < array.length; i += 1) {
        if (!array[i].value) {
          array[i].classList.add("filter-form__control--error")
        }
      }
    } else {
      popupSuccess.classList.add("modal-success--show")
      }
  });

  userName.onfocus = function() {
    if (userName.classList.contains("filter-form__control--error")) {
      userName.classList.remove("filter-form__control--error");
    }
  };

  userSurname.onfocus = function() {
    if (userSurname.classList.contains("filter-form__control--error")) {
      userSurname.classList.remove("filter-form__control--error");
    }
  };

  userPhone.onfocus = function() {
    if (userPhone.classList.contains("filter-form__control--error")) {
      userPhone.classList.remove("filter-form__control--error");
    }
  };

  userEmail.onfocus = function() {
    if (userEmail.classList.contains("filter-form__control--error")) {
      userEmail.classList.remove("filter-form__control--error");
    }
  };

  closeError.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupError.classList.remove("modal-error--show");
  });

  closeSuccess.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSuccess.classList.remove("modal-success--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupError.classList.contains("modal-error--show") || popupSuccess.classList.contains("modal-success--show")) {
        popupError.classList.remove("modal-error--show");
        popupSuccess.classList.remove("modal-success--show");
      }
    }
  });
}
