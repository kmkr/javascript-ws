var Library = {
  bookList: ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts']
};

console.log('Mitt bibliotek har disse bøkene:');
console.log(Library.bookList);

// Prototype

function Library() {
  this.bookList = ['The Blind Watchmaker', 'Ole Brumm', 'JavaScript\'s best parts'];
}

console.log('Mitt bibliotek har disse bøkene:');
console.log(new Library().bookList);
