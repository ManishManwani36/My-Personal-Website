const hamburger = document.getElementById('hamburger');
const nav__list = document.getElementById('nav__list');

hamburger.addEventListener('click', () => {
    nav__list.classList.toggle('show');
});