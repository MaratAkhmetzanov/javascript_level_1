'use strict';
// 1. получить объект модального окна с классом .wrap
const modal = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
const closeModalBtn = document.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
const showModalBtn = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
showModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});