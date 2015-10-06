var Library = {
  bookList: [
    {
      name: 'The Blind Watchmaker',
      available: true
    }, {
      name: 'Ole Brumm',
      available: true
    }, {
      name: 'JavaScript\'s best parts',
      available: true
    }
  ],
  getBook: function(bookName) {
    return this.bookList.filter(function (book) {
      return book.name === bookName && book.available;
    })[0];
  },
  hasBook: function (bookName) {
    return !!this.getBook(bookName);
  },
  lendBook: function (bookName) {
    if (!this.hasBook(bookName)) {
      throw new Error('Unknown book');
    }

    return this.getBook(bookName);
  }
};

console.log('Har du boka Ole Brumm?');
console.log(Library.hasBook('Ole Brumm'));

console.log('Låner boka Ole Brumm');
console.log(Library.lendBook('Ole Brumm'));


// Prototype


var Library = function() {
  this.bookList = [{
    name: 'The Blind Watchmaker',
    available: true
  }, {
    name: 'Ole Brumm',
    available: true
  }, {
    name: 'JavaScript\'s best parts',
    available: true
  }];
};

Library.prototype.hasBook = function (bookName) {
  return !!this.getBook(bookName);
};

Library.prototype.getBook = function(bookName) {
  return this.bookList.filter(function (book) {
    return book.name === bookName && book.available;
  })[0];
};

Library.prototype.lendBook = function(bookName) {
  if (!this.hasBook(bookName)) {
    throw new Error('Unknown book');
  }

  return this.getBook(bookName);

};

var library = new Library();
console.log('Har du boka Ole Brumm?');
console.log(library.hasBook('Ole Brumm'));

console.log('Låner boka Ole Brumm');
console.log(library.lendBook('Ole Brumm'));
