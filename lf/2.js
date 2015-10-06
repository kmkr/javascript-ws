var Library = {
  bookList: ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts'],
  lendBook: function (bookName) {
    if (this.bookList.indexOf(bookName) === -1) {
      throw new Error('Unknown book');
    }

    return this.bookList[this.bookList.indexOf(bookName)];
  }
};

console.log('Låner Ole Brumm');
console.log(Library.lendBook('Ole Brumm'));
console.log('Låner Tom Cruise Biography');
console.log(Library.lendBook('Tom Cruise Biography'));

// Prototype

var Library = function () {
  this.bookList = ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts'];
}

Library.prototype.lendBook = function (bookName) {
  if (this.bookList.indexOf(bookName) === -1) {
    throw new Error('Unknown book');
  }

  return this.bookList[this.bookList.indexOf(bookName)];
};

var library = new Library();
console.log('Låner Ole Brumm');
console.log(library.lendBook('Ole Brumm'));
console.log('Låner Tom Cruise Biography');
console.log(library.lendBook('Tom Cruise Biography'));
