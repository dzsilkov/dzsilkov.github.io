'use strict';

$('.sb-header__menu-btn').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('sb-header__menu-btn_active');
  $('.menu-main__left-item').toggleClass('menu-main__left-item_showed');
  $('.menu-main__center-item').toggleClass('menu-main__center-item_showed');
  $('.menu-main__right-item').toggleClass('menu-main__right-item_showed');
  $('.sb-header').toggleClass('sb-header_fixed');
});