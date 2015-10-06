






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

Lag en JavaScript-komponent `Library`. Komponenten skal ha et array med navn på bøker og tilby følgende API:

1. `lendBook(bookName)` låner ut en bok med navn 'X'. Kast exception dersom boka ikke er tilgjengelig.
2. Bruk et objekt til å ha tilstand på om boka er utlånt. Marker boka som utlånt dersom noen kaller på `lendBook(bookName)`
3. `returnBook(book)` gir tilbake en bok. Marker boka som tilgjengelig.
4. `search(name)` søker gjennom arrayet med bøker og returnerer bøker som matcher navnet som er oppgitt, bruk `filter`-funksjonen som Arrays har. Returverdi: array med books

Bruk gjerne https://jsbin.com/?js,console til å skrive.

### Ekstra utfordringer

4. Kjør JavaScript lokalt i stedet for å bruke jsbin.com. Se under for oppsett.
5. Skriv tester til tjenesten ved bruk av node-js, gulp og karma
6. Flytt array med bøker til en egen komponent `LibraryStore` (opprett gjerne i samme fil). Bestem API selv, f.eks `.getBook(book)`.
7. Legg `LibraryStore` i en egen fil `library-store.js` og utnytt "modules" fra ECMAScript 6 til å laste inn den nye fila.

#### Start node, gulp og karma

- Last ned og installer node-js (https://nodejs.org)
- Kjør `git clone https://github.com/kmkr/javascript-ws` via terminal/cmd
- Åpne mappa (ved å kjøre `cd javascript-ws`)
- Kjør `npm install -g gulp`
- Kjør `npm install`
- Kjør `gulp test`
