 // Плавный скроллинг
// $(function(){
//       $('a[href^="#"]').click(function(){
//       var target = $(this).attr('href');
//       $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
//       return false;
//      });
//   });
 // <!-- Конец скролинга -->
/**Удален так как конфликтует с попапом на CSS */

 // Magnific-popups начало
// jQuery(document).ready(function($) {
//   $('.image-popup').magnificPopup({
//     type: 'image',
//     zoom: {
//          enabled: true,
//          duration: 500 // продолжительность анимации. Не меняйте данный параметр также и в CSS
//      },
//      fixedContentPos: true,
//      closeOnContentClick: true
//   });
// });
// Конец

//Перемотка наверх

$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height()) {
    $('.top').addClass('active');
  } else {
    $('.top').removeClass('active');
  }
});

// действие кнопки вверх

$('.top').click(function(){
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
//
