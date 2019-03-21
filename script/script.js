'use strict';

var slides = document.querySelectorAll('.main__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,7000);

function nextSlide(){
  slides[currentSlide].className = 'main__slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'main__slide showing';
}
