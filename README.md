





                        JJJJJJJJJJJ   SSSSSSSSSSSSSSS 
                        J:::::::::J SS:::::::::::::::S
                        J:::::::::JS:::::SSSSSS::::::S
                        JJ:::::::JJS:::::S     SSSSSSS
                          J:::::J  S:::::S            
                          J:::::J  S:::::S            
                          J:::::J   S::::SSSS         
                          J:::::j    SS::::::SSSSS    
                          J:::::J      SSS::::::::SS  
              JJJJJJJ     J:::::J         SSSSSS::::S 
              J:::::J     J:::::J              S:::::S
              J::::::J   J::::::J              S:::::S
              J:::::::JJJ:::::::J  SSSSSSS     S:::::S
               JJ:::::::::::::JJ   S::::::SSSSSS:::::S
                 JJ:::::::::JJ     S:::::::::::::::SS 
                   JJJJJJJJJ        SSSSSSSSSSSSSSS   


                           2015-10-07
                    kris-mikael.krister@webstep.no




# Agenda

- JavaScript? ECMAScript? JScript? 

- Typer

- Operatorer

- Statements og loops

- Funksjoner

- Scope

- Prototyper

- Verktøy

- Oppgaver



# JavaScript

- Dynamisk typet

- Overføres og tolkes som tekst

- Objekt-basert

- Prototype-basert

- Kjører i nettleser, på server, i PDF, Chrome, Safari og Opera-extensions, Apple- og Windows-widgets, Micro-controllere, ...



# Historikk

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



# Scope

- Funksjon-scope
- Hoisting
- Blokk-scope (ES6)



# Prototyper

- Chain
- Objekt i stedet for klasse
- Arv
- Object.create

```
function Ninja() {}
var ninja = new Ninja();
```



# Verktøy

- Node
- Gulp / Grunt
- Karma + Jasmine
- ESLint
- Webpack



# Oppgaver

## Bibliotek / library

Bruk gjerne https://jsbin.com/?js,console til å gjøre oppgavene.

### Oppgave 1

Lag en JavaScript-komponent `Library`. Du kan velge om du vil lage et objekt direkte eller gå via prototype. Husk `new Library()` dersom du bruker sistnevnte. Komponenten skal inneholde et array med navn på bøker (hardkodet liste er greit).


### Oppgave 2

Skriv funksjonen `lendBook(bookName)` som låner ut en bok med navn "bookName". Kast exception dersom boka ikke er tilgjengelig.

Fikk du ikke til Oppgave 1? Start fra
http://jsbin.com/fuharosola/edit?js,console


### Oppgave 3

Skriv funksjonen `hasBook(bookName)` som returnerer true eller false basert på om boka er tilgjengelig. 

http://jsbin.com/dahajemicu/edit?js,console


### Oppgave 4

Bruk en liste med objekter i stedet for en liste med navn på bøker. Hvert objekt er en bok med `name` og `available` properties. Oppdater funksjonene fra punkt 2) og 3) til å fungere, gjerne ved å skrive en hjelpefunksjon `getBook(bookName)`

http://jsbin.com/hanavuqafe/edit?js,console


### Oppgave 5

Marker boka som utlånt i kallet til `lendBook(bookName)`.

http://jsbin.com/dudicupaje/edit?js,console


### Oppgave 6

Funksjonen `getBook(bookName)` bør ikke være tilgjengelig fra utsiden, gjør den tilgjengelig kun for metodene til "book".

http://jsbin.com/qevedefita/edit?js,console


## Ekstra utfordringer

Kjør JavaScript lokalt i stedet for å bruke jsbin.com. Oppsett:

- Last ned og installer node-js (https://nodejs.org)
- Kjør `git clone https://github.com/kmkr/javascript-ws` via terminal/cmd
- Åpne mappa (ved å kjøre `cd javascript-ws`)
- Kjør `npm install -g gulp`
- Kjør `npm install`
- Kjør `gulp test`

Løsningsforslag for oppgave 1 - 6 ligger på
http://jsbin.com/jidalawaba/edit?js,console


### Oppgave 7

Skriv tester til tjenesten ved bruk av node-js, gulp og karma


### Oppgave 8

Flytt array med bøker til en egen komponent `LibraryStore` (opprett gjerne i samme fil). Bestem API selv, f.eks `.getBook(book)`.


### Oppgave 9

Legg `LibraryStore` i en egen fil `library-store.js` og utnytt "modules" fra ECMAScript 6 til å laste inn den nye fila. Hint:
  `export default` og `import LibraryStore from './library-store.js'`


### Oppgave 10

Konverter `LibraryStore` og `Library` til å være ES6-classes.

