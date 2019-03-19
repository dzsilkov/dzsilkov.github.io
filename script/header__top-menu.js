'use strict';

window.addEventListener("scroll", runOnScroll);

function runOnScroll() {
  if (window.scrollY === 0) {
    var element = document.getElementsByClassName("top-menu")[0];
    element.classList.remove("top-menu_shadow");
    // element.classList.add("top-menu");
  } if (window.scrollY > 0) {
    var element = document.getElementsByClassName("top-menu")[0];
    element.classList.remove("top-menu_shadow");
    // element.classList.add("blue");
  }
}

// window.onscroll = function () {
//   var el = document.getElementsByClassName('top-menu');
//   var shadow;
//
//   if (window.pageXOffset() == 0) {
//     shadow = el[0].classList.add('top-menu_shadow');
//   } else {
//     shadow = el[0].classList.remove('top-menu_shadow');
//   }
// };



// alert( 'Текущая прокрутка сверху: ' + window.pageYOffset );
// alert( 'Текущая прокрутка слева: ' + window.pageXOffset );



// document.querySelector(".sb-main").onscroll = function() {myFunction()};
// function myFunction() {
//   document.querySelector(".top-menu").classList.add('top-menu_shadow');
// }
  // window.onscroll = function () {
  //   !(document.querySelector('div').classList.contains('scroll')) && document.querySelector('div').classList.add('scroll');
  // };

// window.onscroll = function() {
//
//   console.log( 'Позиция скрола: '+scrolled  );
// };
//
// window.onscroll = function () {
//   var scrolled = window.pageXOffset;
//   document.getElementsByTagName('nav')[0].innerHTML;
//   classList.add("top-menu_shadow");
// };

// window.onscroll = function () {
//   var scrolled = window.pageYOffset;
//   var shadow = document.getElementsByClassName('top-menu')[0].innerHTML;
//   if ( scrolled === 0) {
//     shadow.classList.add('top-menu_shadow');
//   }
//   else {
//     shadow.classList.remove('top-menu_shadow');
//   }
//
// };

//
// window.onscroll = function() {
//
//   var scrolled = window.pageYOffset;
//   var el = getElementsByClassName('top-menu');
//   if (scrolled === 0) {
//     el.addClass('top-menu_shadow');
// };


//   || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scrolled + 'px';
// };

  // $(window).scroll(function() {
  //   var height = $(window).scrollTop();
  //
  //   /*Если сделали скролл на 100px задаём новый класс для header*/
  //   if(height > 100){
  //     $('header').addClass('header-fixed');
  //   } else{
  //     /*Если меньше 100px удаляем класс для header*/
  //     $('header').removeClass('header-fixed');
  //   }
  //
  // });

// }
// $('.top-menu').on('click', function (e) {
//   e.preventDefault;
//   $(this).toggleClass('top-menu_shadow');
//   $('.top-menu__menu-item').toggleClass('top-menu__menu-item_active')
// });

// var avatarElem = document.getElementById('avatar');
//
// var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;
//
// window.onscroll = function() {
//   if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
//     avatarElem.classList.remove('fixed');
//   } else if (window.pageYOffset > avatarSourceBottom) {
//     avatarElem.classList.add('fixed');
//   }
// };
//
// var cbpShadowHeader = (function() {
//
//   var docElem = document.documentElement,
//       header = document.querySelector( '.top-menu' ),
//       didScroll = false,
//       changeHeaderOn = 300;
//
//   function init() {
//     window.addEventListener( 'scroll', function( event ) {
//       if( !didScroll ) {
//         didScroll = true;
//         setTimeout( scrollPage, 250 );
//       }
//     }, false );
//   }
//
//   function scrollPage() {
//     var sy = scrollY();
//     if ( sy >= changeHeaderOn ) {
//       classie.add( header, 'top-menu_shadow' );
//     }
//     else {
//       classie.remove( header, 'top-menu_shadow' );
//     }
//     didScroll = false;
//   }
//
//   function scrollY() {
//     return window.pageYOffset || docElem.scrollTop;
//   }
//
//   init();
//
// })();