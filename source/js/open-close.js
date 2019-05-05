
var navMain = document.querySelector('.main-header__top');
var navToggleClose = document.querySelector('.btn-nav-close');
var navToggleOpen = document.querySelector('.btn-nav-open');

navMain.classList.remove('main-header__top--nojs');

navToggleClose.addEventListener('click', function(){
if (navMain.classList.contains('main-header__top--close'))
{
navMain.classList.remove('main-header__top--close');
navMain.classList.add('main-header__top--open');
} else {
navMain.classList.remove('main-header__top--open');
navMain.classList.add('main-header__top--close');
}
});

    navToggleOpen.addEventListener('click', function(){
  if (navMain.classList.contains('main-header__top--open'))
  {
    navMain.classList.remove('main-header__top--open');
    navMain.classList.add('main-header__top--close');
  } else {
      navMain.classList.remove('main-header__top--close');
      navMain.classList.add('main-header__top--open');
    }
});
