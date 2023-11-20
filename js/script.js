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
//PALINDROMA



//calcolo la lunghezza della parola e la divido per due
//SE
//la prima metà è uguale alla seconda metà
//la lettera al primo posto (posto ZERO) nella stringa è diversa dalla lettera nell'ultimo posto nella stringa
//la parola NON è palindroma
//altrimenti
//la parola è palindroma

//chiedo all'utente una parola

function checkPalindrome(wordToCheck) {
    //Trovo la lunghezza della stringa
    const wordLength = wordToCheck.length;
    
    //loop
    let i = 0;
    let palindrome = false;
    
    while ((wordToCheck[i] === wordToCheck[wordLength - 1 - i])) {
        palindrome = true;
        i++
        return ("Your word is a palindrome");
    }

    return ("Your word isn't a palindrome");
    
}

const userWord = prompt("Type a word");
console.log(checkPalindrome (userWord));
