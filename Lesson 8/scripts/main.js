'use strict';

window.addEventListener('load', () => {
    const widget = new Widget();
    const calls = new Calls();

    widget.init(historyList, calls);
});