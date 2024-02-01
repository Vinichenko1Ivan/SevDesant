'use strict'

document.querySelector('.header__burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.burger-menu__list').classList.toggle('drop-menu');
})



let pictures = document.querySelectorAll('.slider-area__container img');
let container = document.querySelector('.slider-area__container');
let counter = 0;
let width;



function initial () {
    console.log('resize');
    width = document.querySelector('.slider-area').offsetWidth;
    container.style.width = width * pictures.length + 'px';
    pictures.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    changeSlide();
}

window.addEventListener('resize', initial);
initial();


function changeSlide () {
    container.style.transform = 'translate(-' + counter * width + 'px)'
}


let next = document.querySelector('.next-button').addEventListener('click', function () {
    counter++;
    if (counter >= pictures.length) {
        counter = 0;
    }
    changeSlide();
});

let prev = document.querySelector('.prev-button').addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = pictures.length - 1;
    }
    changeSlide();
});