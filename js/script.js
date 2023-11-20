// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.


//PARI E DISPARI

//chiedo di scegliere pari o dispari all'utente
const chooseEvenOrOdd = prompt("Choose even or odd");
console.log("You have chosen " + chooseEvenOrOdd);

//Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("Type a number from 1 to 5"));
console.log(userNumber);

//Genero un numero random da 1 a 5 con una funzione
function randomComputerNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

const pcNumber = randomComputerNumber();
console.log(pcNumber);

//Sommo i due numeri
const sum = userNumber + pcNumber;
console.log(sum);

//con una funzione stabilisco se la somma è pari o dispari
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//dichiaro chi ha vinto
if (isEven(sum) === true) {
    console.log("Even wins");
} else {
    console.log("Odd wins");
}



// ---------------------------------------------------------------------------------------------------------
// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.

//PALINDROMA

//chiedo all'utente una parola
const userWord = prompt("Type a word");
console.log(userWord);


//calcolo la lunghezza della parola e la divido per due
    //SE
        //la prima metà è uguale alla seconda metà
            //la lettera al primo posto (posto ZERO) nella stringa è diversa alla lettera nell'ultimo posto nella stringa
            //la parola NON è palindroma
        //altrimenti
            //la parola non è palindroma

const wordLength = userWord.length;
console.log("your word has " + wordLength + " letters");

// for (let i = 0; i < wordLength / 2; i++) {
//     if (userWord[i] !== userWord[wordLength - 1 - i]) {
//         console.log("Your word isn't a palindrome")
//     } else {
//         console.log ("Your word is a palindrome");
//     }
    
// }

let i = 0;
let palindrome = false;

while ((userWord[i] === userWord[wordLength - 1 - i])) {
    palindrome = true;
    i++
}

console.log(palindrome);

