






# Agenda

- JavaScript? ECMAScript? JScript? 

- Typer

- Operatorer

- Statements og loops

- Funksjoner

- Scope

- Prototyper

- Verktøy



# JavaScript

- Dynamisk typet

- Objekt-basert

- Prototype-basert

- Kjører i nettleser, på server, i PDF, Chrome, Safari og Opera-extensions, Apple- og Windows-widgets, Micro-controllere, ...



# Historie

```
  ECMAScript 1
      |     ES 2
      |      |     ES 3          ES 4                ES 5               ES6
 -----|------|------|-------------|-------------------|------------------|-----
    1997   1998   1999    ...   2005   ...   2008   2009   2010   ...   2015
```



# Typer

- Number
- boolean
- String
- undefined / null
- Array
- Object
- NaN

* Truthy/Falsy
* typeof



# Operators

- =
- ==
- !=
- ===
- !===
- &&
- || (default values)
- !
- !!
- delete

* Array, fjerner ikke men lager hull



# Statements og loops

- if
- switch
- break
- continue
- while
- for
- return
- try/throw



# Funksjoner

- Returnerer alltid
- First-class-objects
- Argumenter
- Closures

* argumenter - for få/for mange
* closures: childfunksjon har tilgang på parents scope selv etter parent har returnert:

var bookList = ['The Blind Watchmaker', 'Donald på eventyr', 'Ole Brumm'];

function findBook(bookName) {
  return bookList.filter(function (book) {
    return book.name === bookName;
  });
}

findBook('Ole Brumm');


function findBook(fun) {
  return bookList.filter(function (bookName) {
    return fun(bookName);
  });
}

console.log(findBook(function (bookName) {
  return bookName.length > 10;
}));

* arguments



# Scope

- Funksjonscope
- Hoisting
- Blokk-scope (ES6)

* globalt object
* wrap i anonym funksjon



# Prototyper

- Chain
- Objekt i stedet for klasse
- Arv
- Object.create

* function Ninja() {}
* var ninja = new Ninja();
* typeof, instanceof ninja.constructor === Ninja

*
```
var Person = function (name) {
  console.log('I persons konstruktør');
  this.name = name;
};

Person.prototype.talk = function () {
  console.log('Hei, jeg heter ' + this.name);
};

new Person('Ole').talk();

var Employee = function (name, position) {
  Person.call(this, name);
  this.position = position;
};


// 1. alt
Employee.prototype = Person.prototype;
Employee.prototype.work = function () {
  console.log('Jeg jobber som ' + this.position);
};
// 2. alt
Employee.prototype = new Person;
Employee.prototype.work = function () {
  console.log('Jeg jobber som ' + this.position);
};
// 3. alt
Employee.prototype = Object.create(Person.prototype, {
    work: {
      value: function () {
        console.log('Jeg jobber som ' + this.position);
      }
    }
  });

new Employee('Kristoffer', 'dev').work();
```
*

Overskrive native
```
console.log(['a'].indexOf('a'));
Array.prototype.indexOf = function () { console.log('woppsy');};
console.log(['a'].indexOf('a'));
```



# Verktøy

- Node
- Gulp / Grunt
- Karma + Jasmine
- ESLint
- Webpack



# Rammeverk

- AngularJS
- React / React Native



# Oppgaver

## Bibliotek / library


1. Lag en JavaScript-komponent `Library`. Du kan velge om du vil lage et objekt direkte eller gå via prototype. Husk `new Library()` dersom du bruker sistnevnte. Komponenten skal inneholde et array med navn på bøker (hardkodet liste er greit).
2. Skriv funksjonen `lendBook(bookName)` som låner ut en bok med navn "bookName". Kast exception dersom boka ikke er tilgjengelig.
3. Skriv funksjonen `hasBook(bookName)` som returnerer true eller false basert på om boka er tilgjengelig. 
4. Bruk en liste med objekter i stedet for en liste med navn på bøker. Hvert objekt er en bok med `name` og `available` properties. Oppdater funksjonene fra punkt 2) og 3) til å fungere, gjerne ved å skrive en hjelpefunksjon `getBook(bookName)`
5. Marker boka som utlånt i kallet til `lendBook(bookName)`.

Bruk gjerne https://jsbin.com/?js,console til å skrive.

### Ekstra utfordringer

6. Funksjonen `getBook(bookName)` bør ikke være tilgjengelig fra utsiden, gjør den tilgjengelig kun for metodene til "book".
7. Kjør JavaScript lokalt i stedet for å bruke jsbin.com. Se under for oppsett.
8. Skriv tester til tjenesten ved bruk av node-js, gulp og karma
9. Flytt array med bøker til en egen komponent `LibraryStore` (opprett gjerne i samme fil). Bestem API selv, f.eks `.getBook(book)`.
10. Legg `LibraryStore` i en egen fil `library-store.js` og utnytt "modules" fra ECMAScript 6 til å laste inn den nye fila. Hint:
  `export default` og `import LibraryStore from './library-store.js'`

#### Start node, gulp og karma

- Last ned og installer node-js (https://nodejs.org)
- Kjør `git clone https://github.com/kmkr/javascript-ws` via terminal/cmd
- Åpne mappa (ved å kjøre `cd javascript-ws`)
- Kjør `npm install -g gulp`
- Kjør `npm install`
- Kjør `gulp test`
