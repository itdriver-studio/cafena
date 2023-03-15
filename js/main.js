let burger = document.querySelector('.burger');
let navAdaptive = document.querySelector('.nav__adaptive');

burger.addEventListener('click', () => {
    navAdaptive.classList.remove('hidden');
})