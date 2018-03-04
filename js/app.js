/*
console.log("działa!");
let a = 1;
let b = 2;
if (a > b) {
    console.log("a jest większe od b")
}
else {
    console.log("b  jest większe od a")
}
let weather = "rain";
switch (weather) {
    case "sun" :
    console.log("It's sunny!");
    break;
    case "rain" :
    console.log("It's raining!");
    break;
    case "wind" :
    console.log("It's windy!")
    break;
}

for (let i = 0; i <=10; i += 1) {
    console.log("Cześć! Miło nam Cię powitać na girls.js!");  
  }


    let c = 7;
    let d = 1;
    let e = 20;
    if ((c > d) && (c > e)) {
    console.log("c największe");
}   else if ((d > e) && (d > c)) {
      console.log("d największe");
}
    else {
    console.log("e największe");
    
}

let lang = "esp";
switch (lang) {
    case "ang" :
    console.log("Hey");
    break;
    case "fr" :
    console.log("Salut");
    break;
    case "esp":
    console.log("Hola");
    break;
}



for (let i = 0; i <=10; i += 1) {
    console.log("Cześć! Miło nam Cię powitać na girls.js!");  
}

for (let i = 0; i <= 30; i += 1){
    console.log(i);
}

for (let i = 0; i <= 50; i += 1){
    console.log(i);
}

let count = 0;
while(count <= 10) {
    console.log("JavaScript jest super!");
}


for (let i = 0; i <= 20; i += 1){
    if (i%2 == 0 ){
        console.log("parzysta");
    }
    else {
        console.log("nieparzysta");

    }
}


for ( let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
    console.log( i + "*" + j + "=" + i * j);
    }
}







let group = ["Marek", "Adrian","Mateusz", "Jan"];
console.log(group[0]);

console.log(group.length);

console.log(group[4]);

group.push("Jarek");

console.log(group);

group[2] = "Tomasz";

console.log(group);

console.log(group.lenght);

let work_friends = ["Adam", "Ania", "Aleks"];
let party_friends = ["Beniamin", "Basia", "Bartek"];
let all_friends = work_friends.concat(party_friends);
console.log(all_friends);



let friends = ["Natalia", "Magdalena", "Daria", "Arleta"];
let part = friends.slice(1,3);
console.log(part);

let partz = friends.slice(1,2);
console.log(partz);

friends.splice(2,1,"Nowy");
console.log(friends);


let friends = ["Natalia", "Magdalena", "Daria", "Arleta"];
if (friends.indexOf("Magdalena") !== -1) {
    console.log("Marta znajduje si€ w tej tablicy!");
} else {
    console.log("Marty nie ma w tej tablicy!");
}

console.log( friends.indexOf("Natalia"));


let group = ["Ania", "Daria", "Jola"];
for (let i = 0; i < group.length; i += 1) {
    console.log("Cześć," + group[i] + "! Miło nam Cię powitać na girls.js!");
}

const wiersz = "Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki.";
let lit_a = 0;
let lit_e = 0;
let lit_i = 0;
let lit_o = 0;
let lit_u = 0;
for (let i = 0; i < wiersz.length; i += 1) {
    const litera = wiersz[i];
 if ((litera=="a") || (litera=="o") || (litera=="e") || (litera=="i") || (litera=="u")) {

    console.log(litera + " samogłoska!");
switch (litera) {
    case "a": 
        lit_a++;
        break;
    case "e": 
        lit_e++
        break;
        case"i":
        lit_i++
        break;
    case "o":
        lit_o++
        break;
    case "u":
        lit_u++
        break;

}
}
}
console.log("Ilość wystąpień litery a " + lit_a);
console.log("Ilość wystąpień litery e " + lit_e);
console.log("Ilość wystąpień litery i " + lit_i);
console.log("Ilość wystąpień litery o " + lit_o);
console.log("Ilość wystąpień litery u " + lit_u);

function helloGirlsJS(name) {
    console.log("Hej, " + name + "! Witaj na girls.js!");
}
helloGirlsJS("Anna");
helloGirlsJS("Kasia");

function pole(a, b) {
    const pole = a*b;
    console.log("Pole jest rowne" + pole);

}
pole(7,8);


const num = [2, 4, 6, 8];
function srednia(tablica) {
    let suma = 0;
    for(let i = 0; i < tablica.length; i++){
    suma += tablica[i];
    }
    console.log("Srednia to " + suma/tablica.length);

}

srednia(num);
const num2 = [3,6,9];
srednia(num2);


function getRandomColor() {
    console.log("Wylosujmy kolor!")
    getRandomColor();
}


*/
function getRandomColor() {    
    const letters = '0123456789ABCDEF';
    let color = '#';
    

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 16);
        const randomLetter = letters[randomNumber];
        color += randomLetter;

    }
    console.log(color);
    return color;
    
}





const napis = document.getElementById("magic");

function changeColor(tekst) {
    tekst.style.color = getRandomColor();
   
}

setInterval(function() { 
    changeColor(napis); 
}, 2000);



changeColor(napis);




 
















