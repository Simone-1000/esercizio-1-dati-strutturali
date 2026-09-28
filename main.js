let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];

let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];




let parola1 = array_1[0][0]; // un
let parola2 = array_1[1][0]; // Anello
let parola3 = array_1[0][1]; // per
let parola4 = array_2[4][0][0]; // domarli,

let parola5 = array_1[0][0]; // un
let parola6 = array_1[1][0]; // Anello
let parola7 = array_1[0][1]; // per
let parola8 = array_1[1][1]; // trovarli,

let parola9 = array_1[0][0]; // un
let parola10 = array_1[1][0]; // Anello
let parola11 = array_1[0][1]; // per
let parola12 = array_1[2][0]; // ghermirli
let parola13 = array_1[2][1]; // e

let parola14 = array_2[3][0]; // nel
let parola15 = array_2[4][1]; // buio
let parola16 = array_1[0][2]; // incatenarli.




let frase =
    parola1.charAt(0).toUpperCase() + parola1.slice(1) + " " +
    parola2 + " " +
    parola3 + " " +
    parola4 + " " +
    parola5 + " " +
    parola6 + " " +
    parola7 + " " +
    parola8 + " " +
    parola9 + " " +
    parola10 + " " +
    parola11 + " " +
    parola12 + " " +
    parola13 + " " +
    parola14 + " " +
    parola15 + " " +
    parola16;




document.getElementById("frase").textContent = frase;