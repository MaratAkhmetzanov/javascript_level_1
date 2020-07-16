'use strict';

class Widget {
  constructor() {
    this.historyEl = document.querySelector('.history');
  }

  /**
   * Добавляет обработчики событий и создаёт переменные
   * @param {array} historyList 
   * @param {Calls} calls 
   */
  init(historyList, calls, dndStatus = false, filterValue = 'all') {
    this.history = historyList;
    this.calls = calls;
    this.dndStatus = dndStatus;
    document.querySelector('.search-filter').value = filterValue;
    this.fillHistory();
    this.addHistoryBtnsEvents();
    this.addDndToggleEvent();
    this.addNumfieldTextboxChangeEvent();
    this.addNumfieldBtnClickEvent();
    this.addFilterChangeEvent();
  }

  /**
   * Переключает состояние ДНД
   */
  dndToggleHandler() {
    this.dndStatus = !this.dndStatus;
    if (this.dndStatus) {
      document.querySelector('.header-dnd').classList.add('selected');
    } else { document.querySelector('.header-dnd').classList.remove('selected'); }
  }

  /**
   * Добавление обработчик клика на кнопку ДНД
   */
  addDndToggleEvent() {
    const btn = document.querySelector('.header-dnd');
    btn.addEventListener('click', this.dndToggleHandler.bind(this));
  }

  /**
   * Показать все скрытые строки в истории
   */
  showHidden() {
    const hiddenRows = document.querySelector('.history').querySelectorAll('.hidden');
    hiddenRows.forEach(element => element.classList.remove('hidden'));
  }

  /**
   * Скрывает все строки не подходящие под фильтр
   */
  applyFilter() {
    this.showHidden();
    const filterSelect = document.querySelector('.search-filter');

    if (filterSelect.value != 'all') {
      const rows = document.querySelector('.history').querySelectorAll(`.history-row:not([data-call-type = ${filterSelect.value}])`);
      rows.forEach(element => element.classList.add('hidden'));
    }
  }

  /**
   * Добавляет слушатель на фильтр
   */
  addFilterChangeEvent() {
    const select = document.querySelector('.search-filter');
    select.addEventListener('change', this.applyFilter.bind(this));
  }

  /**
   * Заполнение истории звонков из существующего списка
   */
  fillHistory() {
    this.historyEl.innerHTML = '';
    this.history.forEach(element => {
      this.historyEl.innerHTML += `<div class="history-row" data-call-type="${element.callType}">
            <div class="history-row-wrp">
              <span class="history-row-icon ${element.callType}"></span>
              <span class="history-row-name">${element.name}</span>
              <span class="history-row-number">${element.number}</span>
            </div>
            <span class="history-row-time">${("0" + element.time.getHours()).slice(-2)}:${("0" + element.time.getMinutes()).slice(-2)}</span>
            <button class="history-row-callbtn" data-id="${element.id}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 13.98v2.408a1.604 1.604 0 01-1.754 1.605 15.94 15.94 0 01-6.943-2.464 15.672 15.672 0 01-4.827-4.818 15.868 15.868 0 01-2.47-6.96 1.603 1.603 0 01.953-1.614c.204-.09.425-.137.648-.137h2.414A1.61 1.61 0 017.63 3.381c.102.77.29 1.528.563 2.256a1.603 1.603 0 01-.362 1.694l-1.022 1.02a12.86 12.86 0 004.827 4.817l1.022-1.02a1.61 1.61 0 011.697-.36c.73.271 1.489.46 2.26.561A1.61 1.61 0 0118 13.98z"
                />
              </svg>
            </button>
          </div>`;
    });
  }

  /**
   * Добавление обработчика клика на кнопки звонка, 
   * чтобы можно было позвонить по любому номеру из истории.
   * При клике начинает звонок по номеру
   */
  addHistoryBtnsEvents() {
    const btns = document.querySelector('.history').querySelectorAll('.history-row-callbtn');
    btns.forEach(element => {
      element.addEventListener('click', () => { this.calls.startNewCall(); })
    });
  }

  /**
   * Обработчик изменения значения текстового поля.
   * Активирует кнопку звонка, если ввели хотя бы один символ
   * и деактивирует, если поле пустое
   */
  numfieldTextboxChangeHandler() {
    const btn = document.querySelector('.numfield-btn');
    if (this.value.length > 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  /**
   * Добавляет обработчик изменение значения текстового поля
   */
  addNumfieldTextboxChangeEvent() {
    const textbox = document.querySelector('.numfield-textbox');
    textbox.addEventListener('input', this.numfieldTextboxChangeHandler);
  }

  /**
   * Добавляет обработчик клика на кнопку звонка.
   * При клике начинает новый звонок.
   */
  addNumfieldBtnClickEvent() {
    const btn = document.querySelector('.numfield-btn');
    btn.addEventListener('click', () => { this.calls.startNewCall(); });
  }
}
