var Library = (function () {
  var getBook = function(bookName, bookList) {
    return bookList.filter(function (book) {
      return book.name === bookName && book.available;
    })[0];
  };

  return {
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
    hasBook: function (bookName) {
      return !!getBook(bookName, this.bookList);
    },
    lendBook: function (bookName) {
      if (!this.hasBook(bookName, this.bookList)) {
        throw new Error('Unknown book');
      }

      var book = getBook(bookName, this.bookList);
      book.available = false;
      return book;
    }
  };
}());

console.log(Library.getBook);

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

Library.prototype = (function() {
  function getBook(bookName, bookList) {
    return bookList.filter(function(book) {
      return book.name === bookName && book.available;
    })[0];
  }

  return {
    hasBook: function(bookName) {
      return !!getBook(bookName, this.bookList);
    },

    lendBook: function(bookName) {
      if (!this.hasBook(bookName, this.bookList)) {
        throw new Error('Unknown book');
      }

      var book = getBook(bookName, this.bookList);
      book.available = false;
      return book;
    }
  }
}());

var library = new Library();
console.log(library.getBook)
