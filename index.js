//============NAUDOJANT SKAICIUS================

// var, let, const

//pvz 1
//let age = 30;
//age = 31;
//console.log(age);

//pvz2

//let score;

//score = 10;

//console.log(score);


//pvz3

//jei naudoji const,turi aprasyti ir verte

//const score = 10;

//console.log(score);

//=======NAUDOJANT DUOMENIS================

//String, Numbers, Boolean, null, undefined, Symbol

//const name = 'John';
//const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;

//console.log(typeof rating);
//vietoj rating rasant name, age ar kitus paskyrimus gaunami atitinkami
//rezultatai,bet ne reiksmes nurodytos

///const name = 'John';
//const age = 30;

//console.log('My name is ' + name + ' and I am ' + age);
// sitas skaito jog yra pasenes metodas istraukiant ir aprasant
//atsakymus,o kitas budas yra naudojant String
//console.log(`My name is ${name} and I am ${age}`);
//dar budas,apsirasom
//const hello = `My name is ${name} and I am ${age}`;
//printinam rezultata
//console.log(hello);

//yra budu kaip apskaiciuojama simboliu skaicius,pvz
//const s = 'Hello World!';
//console.log(s.length);

//arba parasyti teksta DIDZIOSIOMIS raidemis
//const s = 'Hello World!';
//console.log(s.toUpperCase());

//arba mazosiomis raidemis
//console.log(s.toLowerCase());

//varijantas kaip galima isstraukti norima simboliu skaiciu ir
//dar papildomai cia teksta parasysime didziosiomis raidemis
//console.log(s.substring(0, 5).toUpperCase());
//varijantas kaip visus aprasytus simbolius isskirti atskirai
//console.log(s.split(''));
//dar vienas pan pvz
//const s = 'technology, computers, it, code';
//console.log(s.split(', '));


// ---------Arrays - variables that hold multiple values---------

/* tarp kitko taip galima
iskirti komentuojama teksta keliose eilutese */
//const numbers = Array(1,2,3,4,5);
//console.log(numbers);
/* dar pvz */
//const fruits = ['apples', 'oranges', 'pears', 10, true];
//console.log(fruits);
//jei noretume atspausdinti butent kazkuri kintamaji
//zinant jo eile,tad naudojam tokia programa
//console.log(fruits[1]);
//atsakymas bus (orrange),nes pirmasis narys zymisi kaip 0,
//antrasis kaip 1, ir t.t.
//norint prideti nauja kokia nors verte,galim tai padaryti
//sekanciai
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits); */
//taciau jei turite daug kintamuju ir nezinote tikslaus skaiciaus
//pridejimui naujoko galima naudoti PUSH metoda
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
console.log(fruits);*/ 
//jei nori kintamaji prideti pradzioje,naudoji UNSHIFT,pvz
//const fruits = ['apples', 'oranges', 'pears'];
//fruits[3] = 'grapes';
//fruits.push('mangos');
//fruits.unshift('strawberries');
//console.log(fruits); 

//jei nori paskutini istrinti,naudoji POP
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits); */

//jei norime pasitikrinti ar yra kokia nors norima reiksme
//apsirasome tai sekanciai su ARRAY
/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits);  */

//jei vietoj ...isArray(fruits));  idetume 'hello', tai gautume atsakyma FALSE

//jei panoretume suzinoti kintamojo numeracija
//tai patikriname sekanciai

//console.log(fruits.indexOf('oranges'))


// -----------Object literals----------- nuo 30min iraso
//const person = {
 //   firstName: 'John',
 //   lastName: 'Doe',
 //   age: 30,
   // hobbies: ['music', 'movies', 'sports'],
  //  address: {
     //   street: '50 main str',
      //  city: 'Boston',
      //  state: 'MA'
   // }
//}
//console.log(person);
//console.log(person.firstName);
//console.log(person.hobbies);
//console.log(person.firstName,person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.hobbies[0]);
// ***istraukiant objektus is apraso,galim tai rasyti taip:
//const {firstName, lastName} = person;
//console.log(firstName);
//kitas pvz
//const {firstName, lastName, address: { city}} = person;
//console.log(city);
//***jei nori dar ka nors prideti,aprasome tai sekanciai */
//person.email = 'john@gmail.com';
//console.log(person);

//---------------Arrays------------

/*const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
*/
//console.log(todos);
//jei mes tiesiog norime istraukti texta jog 'Meeting with boss'
//tai aprasome sekanciai
//console.log(todos[1].text);

//jei norim nusiusti duomenis serverin,pvz

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);


//-----------Funkcijos **** For **** naudojimas
//for(let i = 0; i <= 10; i++){
  //  console.log(i);
//}
//arba galim dar prirasyti texto,pvz
/*for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}*/
///kazkas cia nepaejo

//----------Funkcijos *** While *** naudojimas----------

/*let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
} */

//----------todos for ARRAY ----------
/*const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
*/
//for(let i = 0; i <todos.length; i++) {
 //   console.log(todos[i].text);
//}
//*****kitas varijantas
//for(let todo of todos) {
 //   console.log(todo);
//}
//arba jei norim tik text dalies
//console.log(todo.text);
//}
//jei norim tik id skaiciaus
//console.log(todo.id);
//}

//-------High order arayment--------
//---forEach, map, filter------
/*
const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
*/
//todos.forEach(function(todo){
//console.log(todo.text);
//});

// Naudojant*********** map**** rezultatas sekantis
/*
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
*/
//Jei naudojam ******** filter*********
/*
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);
*/
//jei norim tiesiog vel ******texta istraukt
/*
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true; //cia istraukia tik tuos narius kurie turi isCompleted srityje atsakyma True//
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);
*/

//---------Condotionals-----------
/*
const x = 20; //kintmasis x,keiciant ji keistis turi ir atsakymas atitinkamai

if(x === 10) {
    console.log('x is 10');
} else{
    console.log('x is NOT 10');
}
*/
//dar papildymu
/*
const x = 4; //kintmasis x,keiciant ji keistis turi ir atsakymas atitinkamai

if(x === 10) {
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}
*/
//praktiniai pvz

/*
const x = 4; //kintmasis x,keiciant ji keistis turi ir atsakymas atitinkamai
const y = 11;

if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
} 
*/

//jei dadesime (and),rasosi &&
/*
const x = 6; //kintmasis x,keiciant ji keistis turi ir atsakymas atitinkamai
const y = 11;

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
} 
*/

///-----Returnary opperator---------
/*
const x = 11;

const color = x > 10 ? 'red' : 'blue';
console.log(color);
*/

///----Switches-------
/*
const x = 9;

const color = 'green'; //patartina pasitikrint atsakyma istatant vietoj 'x > 10 ? 'red' : 'blue'' irasant pvz 'green'
switch(color) {
    case 'red':  //jei reiksme raudona,tada atsakymas bus...
    console.log('color is red');
    break;
    case 'blue':  //jei reiksme raudona,tada atsakymas bus...
    console.log('color is blue');
    break;
    default:
        console.log('color is NOT red or blue');
        break;
}   
*/

//--------Funkcijos--------------- 54:26 min

/*function addNums(num1,num2){
    console.log(num1 + num2);
}
addNums(5,6);
*/

//skaicius galima vesti per pvz: function addNums(num1 = 1, num2 = 3)
//arba priskiriant juos atskirai zemiau nurodant per addNums(4,3)

//iprastai funkcijoje naudojama return funkcija,tad gautusi

/*function addNums(num1 = 1,num2 = 2){
    return num1 + num2;
}
console.log(addNums(5,6));
*/
//dar funkcijos apsiraso per  const ""
//tad atrodytu
/*
const addNums = (num1 = 1,num2 = 2) => console.log(num1 + num2) ;

addNums(5,6);
*/
//su sia funkcija netgi nereik naudoti tu isskirtiniu skliaustu
//cia netgi nereik naudoti return varijanto,
//galima tai apsirasyti taip
/*
const addNums = (num1 = 1,num2 = 2) => num1 + num2 ;

console.log(addNums(5,6));
*/
//jei turite tik viena kintamaji
//tai apsirasytu isvis paprastai
/*
const addNums = num1  => num1 + 7 ;

console.log(addNums(5));
*/
//kaip matom tai palengvina darba apsirasant
//taip pat naudojant ir TODO funkcija
/*
todos.forEach((todo) => console.log(todo));
*/

//--------Constructor funkcija----------------

/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.firstName);
*/
//jei ta "dob" pakeistume sekanciai
//tai rezultatas gautusi toks
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

//console.log(person2.dob);
//jei po "console.log(person2.dob" padetume taska,galetume pasirinkti daugiau
//tikslingu pasirinkimu,kaip pvz
console.log(person2.dob.getFullYear());
*/
//tuos duomenu istraukimus galima apsirasyti ir kitais budais
//pvz
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person1);
*/
//------------PROTOTIPAI------------------

//kartais ne visi duomenys reikalingi,tad juos nukelti galim i ___proto___
//skilti kuria irgi ismeta atsakyma gaunant

//tai apsiraso sekanciai
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);        
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);
*/
//aprasinejant Javoje objektus naudojamas ir "Yes6"metodas,(klasiu metodas)
//kuris atrodytu taip

//Class
/*
class Person {
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);      
    }
    getBirthYear(){
    return this.dob.getFullYear();    
    }
    getFullName(){
    return `${this.firstName} ${this.lastName}`;    
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);
*/
//siuo metodu viskas apsiraso taip pat,gal tik grazesniame pavidale
//tuo paciu cia iskart apsiraso ir PROTOTYPE skiltis kuri atsakyme buna



///**********   DOM naudojimas JS sistemoje    ************ */


//siam momentui perrasom standartini html faila i tinkama siai uzduociai
//jame atsiranda laukelis irasyti varda ir kitas emeilui,bei mygtukas submit

//ankstesnis html atrode taip
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Crash Course</title>
</head>
<body>
    <header>
        <h1>JS Crash Course</h1>
    </header>

    <script src="main.js">
        
    </script>
    
</body>
</html>
*/
//naujesni html paliksim kaip ir buvo filmuko aprasyme
//susikurus ir css faila,susikuriame dailesne duomenu saugujimui 
//tinkama lentele

//dirbant su duomenims,buna 
//Single element selectors
//ir
//Multiple element selectors

//Apsirasom ---------   Single
/*
console.log(document.getElementById('my-form'));
*/
//jei aprasysime per variables
//gausis
/*
const form = document.getElementById('my-form');
console.log(form);
*/
//istraukiant duomenis galima panaudoti ir query
/*
console.log(document.querySelector('.container'));
//arba
console.log(document.querySelector('h1'));
*/


// --------   MULTIPLE SELECTOR
//Kaip snekejome,jei norime istraukti kelis elementus
//tada apsirasome sekanciai
//pries tai nukomentuojame ul elementa is html
/*
console.log(document.querySelectorAll('.item'));
*/
//patartina visada naudoti 'querySelectorAll'
//kadangi kiti yra senesni
//kitavertus jei tai butu *** KLASE ***,jos info istraukti galim per...
/*
console.log(document.getElementsByClassName('item'));
*/
//dar galima tai panaudoti per ***TAG*** metoda
/*
console.log(document.getElementsByTagName('li'));
*/
//taigi protingiausia naudoti *** querySelector *** arba
// *** querySelectorAll ***

//padarom koki pavyzduka
/*
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
*/
//pasirodo dar galima ir keisti dalykus DOM'e
/*
const ul = document.querySelector('.items');
ul.remove();
*/
//sitas ".remove" istrina vis elementa
//o galima ir dar detaliau istrinti dalis
// kaip sekanciam pavyzdyje
/*
const ul = document.querySelector('.items');
ul.lastElementChild.remove();
*/
//arba galima net pakeisti elemento info,kaip pvz
/*
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.lastElementChild.innerHTML = '<h1>Labas</h1>';
*/
// jei noretume pakeisti sekanti naudojames sekanciai
/*
ul.children[1].innerText = 'Brad';
*/
//davai pakeiciam koki stiliu
/*
const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/
//dabar sukursime koki nors veiksma
//pvz mygtuko paspaudimas
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
});
*/
//ta "e.preventDefault();" apsirasem nes
// be jo mygtukas be perstojo veiktu
//o apsirasius jis suaktyvinamas tik paspaudus
//jei vietoj click panaudotume event objekta 'e' gautusi...
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});
*/
//taip apsiraso visa eile duomeny apie si veiksma
//ir jei pasigilintume tarp prom elementu
//galima butu istraukti ir tikslesniu duomenu apie ta elementa
//pvz
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
});
*/
//davai padarom kanors neiprasto paspaudus mygtuka
//kaip pvz pasikeicia backgroundo spalva
//arba spalva keiciasi css aprasytoje klaseje
//ir paspaudus keiciam item pavadinima
/*
const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'aqua';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Labas</h1>';
});
*/
//tai gal ir naivu,bet tai tiesiog parodo kokios yra galimybes
//naudojant ivairius elementus
//tuo paciu jei vietoj 'click' panaudotume 'mouseout' arba
//mouseover, tada taip pat pamatytume pasikeitimu

//dabar pasimokinsime kaip apsirasyti ir istraukti 
//pristatytus/naujus duomenis

//------------Form value---------------
/*
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    //} else {
     //   console.log('success');
    //}
//}
*/
//alert varijantas neitin naudojamas nes negraziai atrodo ir stabdo visa darba
//tad vietoj jo galima panaudoti ir kita varijanta
//prie to pacio mes turim ir error klase apsirase css'e tad panaudosim ir tai
//visa ta perspejima jog uzpildyk laukelius po 3sekundziu
//padarysime jog isnyktu,tam panaudosime setTimeout
//jeigu mes pildome forma,tada duomenis mes norime jog
// issisaugotu users skiltyje,tai apsirasome else skiltyje
/*
    } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    //Clear fields
    nameInput.value = '';
    emailInput.value = '';    
    }
}
*/
//beabejo jei perkrausit puslapi, visi suvesti duomenys isnyks,nes
//tai neissisaugo duonbazej,tad jei norim dar ir issaugot duomenis,reik pasimokint daugiau
//siam kartui tiek ;-)


//truputi isbandau git hub,pakeitimus dedu