let burger = document.querySelector('.burger');
let closeBtn = document.querySelector('.close');
let navAdaptive = document.querySelector('.nav__adaptive');

burger.addEventListener('click', () => {
    navAdaptive.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', () => {
    navAdaptive.classList.add('hidden');
    document.body.style.overflow = 'auto';
})

navAdaptive.addEventListener('click', () => {
    menuAdaptive.classList.add('hide');
    document.body.style.overflow = 'auto';
})