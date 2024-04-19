export const Btnanimation = (e, animateBtn, animateBtnText, color) => {
  const animateTime = 300;
  if (e.type === 'mouseover') {
    animateBtn.style = `-webkit-animation: header__button_aninamtion1 ${animateTime}ms; animation: header__button_aninamtion1 ${animateTime}ms;-webkit-animation-fill-mode: forwards; animation-fill-mode: forwards;background: ${color}`;
    animateBtnText.style = `animation: scroll-text ${animateTime}ms;`;
  } else if (e.type === 'mouseout') {
    animateBtn.style = `-webkit-animation: header__button_aninamtion2   ${animateTime}ms; animation: header__button_aninamtion2  ${animateTime}ms; -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; background: ${color}`;
    setTimeout(() => {
      animateBtnText.style = `-webkit-animation: scroll-text  ${animateTime}ms;  animation: scroll-text  ${animateTime}ms;`;
    }, animateTime);
    setTimeout(() => {
      animateBtnText.style = 'animation: ""';
    }, animateTime);
  }
};
