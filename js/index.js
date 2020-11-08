// Блок-сылки

const timorBlock = document.querySelector('.timor');

const clickNewPageTimor = function(){
    window.location.href='lombok.html'
};

timorBlock.addEventListener('click', clickNewPageTimor);

const tunzaBlock = document.querySelector('.tunza');

const clickNewPageTunza = function(){
    window.location.href='tunza.html'
};

tunzaBlock.addEventListener('click', clickNewPageTunza);

const lombokBlock = document.querySelector('.lombok');

const clickNewPageLombok = function(){
    window.location.href='timor.html'
};

lombokBlock.addEventListener('click', clickNewPageLombok);

// Бургер-меню 

const burgerBtn = document.querySelector('.burger');
const burgerBtnStyle = document.querySelector('.one');
const burgerBtnStyleTwo = document.querySelector('.two');
const burgerBlockStyle = document.querySelector('.block-menu');

function burgerBtnAnimation() {
    burgerBtnStyle.classList.toggle('line-burger-one');
    burgerBtnStyleTwo.classList.toggle('line-burger-two');
    burgerBlockStyle.classList.toggle('block-menu-active');
    burgerBtn.classList.toggle('burger-active');
}

burgerBtn.addEventListener('click', burgerBtnAnimation);