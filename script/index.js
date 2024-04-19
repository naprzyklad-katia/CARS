import { Btnanimation } from './modules/aminateFun.js';
const button = document.querySelector('#block-button');
const animateBtnHeader = document.querySelector('#block-button__aninamtion');
const animateBtnHeaderText = document.querySelector('#block-button__text-span');
const headerBurgerClickOpen = document.querySelector('#header__button-burger');
const headerMenuBurgeblock = document.querySelector('#header__menu');
const headerMenuBlockClickClose = document.querySelector('#header__menu-icon');

button.addEventListener('mouseover', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

button.addEventListener('mouseout', (e) => {
  Btnanimation(e, animateBtnHeader, animateBtnHeaderText, '#cf2e2e');
});

headerBurgerClickOpen.addEventListener('click', () => {
  headerMenuBurgeblock.style = `width: 100%;`;
  setTimeout(() => {
    headerMenuBurgeblock.querySelector('.header__menu-container').style.display = 'block';
    setTimeout(() => {
      headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
        e.style = ' transition-duration: 1s; transform: translateY(0%); ';
      });
      setTimeout(() => {
        document.querySelector('.header__menu-column2').style = 'opacity:1';
      }, 100);
    }, 10);
  }, 1000);
});

headerMenuBlockClickClose.addEventListener('click', () => {
  setTimeout(() => {
    headerMenuBurgeblock.style = `width: 0%;`;
    headerMenuBurgeblock.querySelector('.header__menu-container').style.display = 'none';
    headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
      e.style = ' transition-duration: 1s; transform: translateY(100%);';
    });
  }, 1000);
  setTimeout(() => {
    headerMenuBurgeblock.querySelectorAll('.header__menu-nav-itam').forEach((e) => {
      e.style = ' transition-duration: 1s; transform: translateY(-100%); ';
    });
  }, 500);
  document.querySelector('.header__menu-column2').style = 'opacity:0';
});
