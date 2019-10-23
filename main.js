document.querySelector('.menu-icon__wrapper').onclick = function () {
    document.querySelector('.menu').classList.toggle('mobile_hidden');
    document.querySelector('.menu').classList.toggle('show');
    for (let i = 0; i < document.querySelector('.menu-icon__wrapper').children.length; i++){
        document.querySelectorAll('.menu-icon__elem')[i].classList.toggle('cross');
    }
};