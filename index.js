'use strict'

document.querySelector('.header__burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.burger-menu__list').classList.toggle('drop-menu');
})

