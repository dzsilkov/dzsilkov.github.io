'use strict';

$('.header__menu-btn').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('header__menu-btn_active');
  $('.menu-main__left-item').toggleClass('menu-main__left-item_showed');
  $('.menu-main__center-item').toggleClass('menu-main__center-item_showed');
  $('.menu-main__right-item').toggleClass('menu-main__right-item_showed');
  $('header').toggleClass('header_fixed');
});



