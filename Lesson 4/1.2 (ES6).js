'use strict';


class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    /**
     * Меняет текст сообщения на новый
     * @param {String} newText Новый текст
     */
    edit(newText) {
        this.text = newText;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    /**
     * Меняет значение highlighted на true
     */
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post1 = new Post('Andew', 'Hi', 'yesterday');
console.log(post1);
post1.edit('Hello');
console.log(post1);

const apost1 = new AttachedPost('Alex', 'Bye', 'today');
console.log(apost1);
apost1.edit('Goodbye');
apost1.makeTextHighlighted();
console.log(apost1);