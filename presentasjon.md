Agenda

- Historikk
- Typer
- Operatorer
- Statements
- Funksjoner
- Loops
- Scope
- Prototyper
- Struktur
- Verktøy










  ECMAScript 1
      |     ES 2
      |      |     ES 3          ES 4                ES 5               ES6
 -----|------|------|-------------|-------------------|------------------|-----
    1997   1998   1999    ...   2005   ...   2008   2009   2010   ...   2015

















# Typer

- Number
- boolean
- String
- undefined / null
- Array
- Object
- NaN

* Truthy/Falsy














# Operators

- ==
- !=
- ===
- !===
- &&
- || (default values)
- !
- !!








# Statements

- if
- switch
- break
- continue
- while
- for
- return
- try/throw












# Funksjoner

* argumenter - for få/for mange
* closures - childfunksjon har tilgang på parents scope selv etter parent har returnert
* arguments

# Loops

# Scope

* global object
* wrap i anonym funksjon

# Prototyper

# Kodestruktur

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

Lag en JavaScript-komponent/tjeneste `Library`. Komponenten skal ha et array med bøker og tilby følgende API:

1) `lendBook(book)` el. `borrowBook(book)` låner ut en bok med navn 'X'. Kast exception dersom boka ikke er tilgjengelig. Marker boka som utlånt. Returverdi: book
2) `returnBook(book)` gir tilbake en bok. Marker boka som tilgjengelig.
3) `search(..)` søker gjennom arrayet med bøker. Returverdi: array med books

Tjenesten kan være et objekt og arrayet med bøker kan være en liste med strings eller med objekter som har properties "id" og "name".

### Ekstra utfordringer

- Skriv tjenesten der funksjonene ligger på prototypen til funksjonen `Library`
- Skriv tester til tjenesten

Last ned NodeJS (https://nodejs.org)
Kjør `git clone https://github.com/kmkr/javascript-ws` via terminal/cmd
Åpne mappa (ved å kjøre `cd javascript-ws`)
Kjør `npm install -g gulp`
Kjør `npm install`
Kjør `gulp 
