'use strict';

// Получаем все кнопки «В корзину» и добавляем каждой обработку нажатия
let toCartBtns = document.querySelectorAll('.toCartBtn');
toCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        cart.addToCart(btn);
    });
});

// Объект корзины
let cart = {
    //Список элементов корзины.
    items: [],
    //Итоговая цена всех товаров в корзине.
    priceTotal: 0,
    //html-елемент корзины и списка продуктов в корзине, чтобы не перегружать код
    cartElement: document.querySelector('.cartPanel'),
    cartList: document.querySelector('.cartPanel').querySelector('tbody'),

    /**
     * Добавление продукта в корзину. Из data атрибутов достаём данные о товаре (id, название, цена)
     * @param {HTMLElement} item Кнопка продукта, на которую нажали. 
     */
    addToCart(item) {
        let existIdex = this.items.findIndex((el) => (el[0] == item.dataset.id));
        if (existIdex >= 0) {
            this.items[existIdex][3]++;
        } else {
            this.items.push([item.dataset.id, item.dataset.name, item.dataset.price, 1]);
        }
        this.cartUpdate();
    },

    /**
     * Удаление продукта из корзины.
     * @param {Int} id Позиция продукта в корзине
     */
    cartRemoveElement(id) {
        this.items.splice(id, 1);
        this.cartUpdate();
    },

    /**
     * Обновление корзины после добавления или удаления продукта
     */
    cartUpdate() {
        let itemsListString = '';
        this.priceTotal = 0;

        this.items.forEach((item) => {
            itemsListString += '<tr>';
            itemsListString += `<td scope="col">${item[0]}</td>`;
            itemsListString += `<td scope="col">${item[1]}</td>`;
            itemsListString += `<td scope="col">${item[2]}</td>`;
            itemsListString += `<td scope="col">${item[3]}</td>`;
            itemsListString += '<td scope="col"><i class="far fa-trash-alt hidden" data-id></i></td></tr>';
            this.priceTotal += Number(item[2]) * Number(item[3]);
        });

        this.cartList.innerHTML = itemsListString;
        this.cartElement.querySelector('.total').innerText = this.priceTotal;

        this.cartList.querySelectorAll('tr').forEach((el) => {
            el.addEventListener('mouseover', () => {
                el.querySelector('.fa-trash-alt').classList.remove('hidden');
            })
        });

        this.cartList.querySelectorAll('tr').forEach((el) => {
            el.addEventListener('mouseout', () => {
                el.querySelector('.fa-trash-alt').classList.add('hidden');
            })
        });

        this.cartList.querySelectorAll('.fa-trash-alt').forEach((el) => {
            el.addEventListener('click', () => {
                this.cartRemoveElement(el.dataset.id);
            })
        });
    }
}