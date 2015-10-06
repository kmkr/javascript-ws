var Library = {
  bookList: ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts'],
  hasBook: function (bookName) {
    return this.bookList.indexOf(bookName) !== -1;
  },
  lendBook: function (bookName) {
    if (!this.hasBook(bookName)) {
      throw new Error('Unknown book');
    }

    return this.bookList[this.bookList.indexOf(bookName)];
  }
};

console.log('Har du boka Ole Brumm?');
console.log(Library.hasBook('Ole Brumm'));

console.log('Har du boka Tom Cruise Biography?');
console.log(Library.hasBook('Tom Cruise Biography'));

// Prototype:

var Library = function() {
  this.bookList = ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts'];
}

Library.prototype.hasBook = function(bookName) {
  return this.bookList.indexOf(bookName) !== -1;
}

Library.prototype.lendBook = function(bookName) {
  if (!this.hasBook(bookName)) {
    throw new Error('Unknown book');
  }

  return this.bookList[this.bookList.indexOf(bookName)];

}

var library = new Library();
console.log('Har du boka Ole Brumm?');
console.log(library.hasBook('Ole Brumm'));

console.log('Har du boka Tom Cruise Biography?');
console.log(library.hasBook('Tom Cruise Biography'));
