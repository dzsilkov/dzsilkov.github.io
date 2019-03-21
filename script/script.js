'use strict';

var slides = document.querySelectorAll('.sb-main__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,7000);

function nextSlide(){
  slides[currentSlide].className = 'sb-main__slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'sb-main__slide showing';
}
