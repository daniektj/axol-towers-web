const burgerButton = document.querySelector('.header__burger');
const sidebar = document.querySelector('.mobile-nav');


burgerButton.addEventListener('click', () => {

  sidebar.classList.toggle('mobile-nav-animation');

});

