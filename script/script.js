'use strict';

var slides = document.querySelectorAll('.main__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,7000);

function nextSlide(){
  slides[currentSlide].className = 'main__slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'main__slide showing';
}

(function () {

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

      let el = document.querySelector('#footerLogo');
      let myAnimation = new LazyLinePainter(el, {
        "ease": "easeLinear",
        "strokeWidth": 2,
        "strokeOpacity": 1,
        "strokeColor": "#F2C511",
        "strokeCap": "square",
        "reverse": true
      });
      myAnimation.paint();
    }
  }
})();
myAnimation.paint();


var FormElement = document.forms['add-base'];
var FormElement = document.forms['news'];

FormElement.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {

  var formElement = document.forms['news'];
  var formNameElement = FormElement.elements['name'];
  var formEmailElement = FormElement.elements['e-mail'];
  var formPhoneElement = FormElement.elements['phone'];
  var formNameValue = formNameElement.value;
  var formEmailValue = parseInt(formNameElement.value);
  var formPhoneValue = parseInt(formPhoneElement.value);

  if (formNameValue.length > 20) {
    alert('Введите пожалуйста имя не длиннее 20 символов!');
    formNameElement.focus();
    return false;
  }

  if (isNaN(formPhoneValue)) {
    alert('Введите пожалуйста Корректный номер телефона!');
    formPhoneElement.focus();
    return false;
  }

  return true;
}





