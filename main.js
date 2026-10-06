let numeroTiri = Number(prompt("Quanti tiri vuoi effettuare?"));

function giocoDadi(numeroTiri) {

    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;

    for (let i = 0; i < numeroTiri; i++) {

        let dado1 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        let dado2 = Math.floor(Math.random() * (6 + 1 - 1) + 1);

        punteggioGiocatore1 += dado1;
        punteggioGiocatore2 += dado2;
    }

    if (punteggioGiocatore1 > punteggioGiocatore2) {

        console.log("Ha vinto il Giocatore 1 con " + punteggioGiocatore1 + " punti");

    } else if (punteggioGiocatore2 > punteggioGiocatore1) {

        console.log("Ha vinto il Giocatore 2 con " + punteggioGiocatore2 + " punti");

    } else {

        console.log("Pareggio! Entrambi hanno totalizzato " + punteggioGiocatore1 + " punti");
    }
}

giocoDadi(numeroTiri);