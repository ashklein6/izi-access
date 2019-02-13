let root = document.querySelector(':root');
const colors = {
  purple: window.getComputedStyle(root).getPropertyValue('--main-purple') || '#7d52a1',
  purpleHover: window.getComputedStyle(root).getPropertyValue('--main-purple-hover') || '#633589',
  red: window.getComputedStyle(root).getPropertyValue('--main-red') || '#d71f2e',
  redHover: window.getComputedStyle(root).getPropertyValue('--main-red-hover') || '#aa0f18',
  pink: window.getComputedStyle(root).getPropertyValue('--main-pink') || '#ec008c',
  pinkHover: window.getComputedStyle(root).getPropertyValue('--main-pink-hover') || '#de0082',
  orange: window.getComputedStyle(root).getPropertyValue('--main-orange') || '#eb983f',
  orangeHover: window.getComputedStyle(root).getPropertyValue('--main-orange-hover') || '#d17818',
  lightGrey: window.getComputedStyle(root).getPropertyValue('--main-light-grey') || '#f2f2f2',
  grey: window.getComputedStyle(root).getPropertyValue('--main-grey') || '#dddddd',
};

console.log('colors:', colors);

export default colors;