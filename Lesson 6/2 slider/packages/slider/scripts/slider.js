
'use strict';
let slider = document.querySelector('.slider');

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    // Инициализация слайдера
    images.init();
    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размеры.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

// Объект слайдера
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
        this.slides[this.slides.length - 1].classList.add('slider-item-left');
        this.slides[this.currentIdx + 1].classList.add('slider-item-right');
    },

    /** Берем слайд с текущим индексом и убираем у него класс
     * hidden-slide. */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');

        if (this.currentIdx == this.slides.length - 1) {
            this.slides[0].classList.add('slider-item-right');
            this.slides[0].classList.remove('slider-item-left');
        } else {
            this.slides[this.currentIdx + 1].classList.add('slider-item-right');
            this.slides[this.currentIdx + 1].classList.remove('slider-item-left');
        }

        if (this.currentIdx == 0) {
            this.slides[this.slides.length - 1].classList.add('slider-item-left');
            this.slides[this.slides.length - 1].classList.remove('slider-item-right');
        } else {
            this.slides[this.currentIdx - 1].classList.add('slider-item-left');
            this.slides[this.currentIdx - 1].classList.remove('slider-item-right');
        }

    },

    /** Всем слайдам добавляем класс hidden-slide. */
    hideVisibleImages() {
        document.querySelector('.slider-item:not(.hidden-slide)').classList.add('hidden-slide');
    },

    /** Переключиться на предыдущее изображение. */
    setNextLeftImage() {
        this.hideVisibleImages();
        document.querySelector('.slider-item-right').classList.remove('slider-item-right');
        if (this.currentIdx == 0) {
            this.slides[this.slides.length - 1].classList.remove('hidden-slide', 'slider-item-left');
            this.slides[this.currentIdx].classList.add('slider-item-right');
            this.currentIdx = this.slides.length - 1;
        } else {
            this.slides[this.currentIdx - 1].classList.remove('hidden-slide', 'slider-item-left');
            this.slides[this.currentIdx].classList.add('slider-item-right');
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    /** Переключиться на следующее изображение. */
    setNextRightImage() {
        this.hideVisibleImages();
        document.querySelector('.slider-item-left').classList.remove('slider-item-left');
        if (this.currentIdx == this.slides.length - 1) {
            this.slides[0].classList.remove('hidden-slide', 'slider-item-right');
            this.slides[this.currentIdx].classList.add('slider-item-left');
            this.currentIdx = 0;
        } else {
            this.slides[this.currentIdx + 1].classList.remove('hidden-slide', 'slider-item-right');
            this.slides[this.currentIdx].classList.add('slider-item-left');
            this.currentIdx++;
        }

        this.showImageWithCurrentIdx();
    },
}
