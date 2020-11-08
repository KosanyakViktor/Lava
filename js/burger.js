const burgerBtn = document.querySelector('.burger');
const burgerBtnStyle = document.querySelector('.one');
const burgerBtnStyleTwo = document.querySelector('.two');
const burgerBlockStyle = document.querySelector('.block-menu');
const headerBlockStyle = document.querySelector('.heading');

function burgerBtnAnimation() {
    burgerBtnStyle.classList.toggle('line-burger-one');
    burgerBtnStyleTwo.classList.toggle('line-burger-two');
    burgerBlockStyle.classList.toggle('block-menu-active');
    burgerBtn.classList.toggle('burger-active');
    headerBlockStyle.classList.toggle('header-active');
}

burgerBtn.addEventListener('click', burgerBtnAnimation);