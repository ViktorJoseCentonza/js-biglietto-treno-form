/*
Descrizione
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const submitEl = document.getElementById("submit_button")
console.log(submitEl);

submitEl.addEventListener(`click`, function () {

    const distance = Number(document.getElementById("distance").value)
    console.log(distance);

    const user_age = document.getElementById("user_age").value;
    console.log(user_age);

    const standard_price = distance * 0.21;
    console.log(`pre-discount price is ${standard_price}`);
    let discount_price = standard_price;

    if (user_age > 65) {
        discount_price = discount_price * 0.60

    } else if (user_age < 18) {
        discount_price = discount_price * 0.80

    }

    console.log(`your price is ${discount_price}`);







})

