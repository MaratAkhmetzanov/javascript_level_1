'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * Меняет текст сообщения на новый
 * @param {String} newText Новый текст
 */
Post.prototype.edit = function (newText) {
    this.text = newText;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

/**
 * Меняет значение highlighted на true
 */
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
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