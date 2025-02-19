/*
Descrizione
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/
//select form inputs
const submit_button = document.getElementById("submit_button")
console.log(`submit_button is ${submit_button}`);

const input_distance = document.getElementById("input_distance")
console.log(`input_distance is ${input_distance}`);
const input_user_age = document.getElementById("input_user_age")
console.log(`input_user_age is ${input_user_age}`);

//calculate ticket price

let discount_price = 0;
let standard_price = 0;
submit_button.addEventListener(`click`, function () {
    const distance_value = Number(input_distance.value);
    console.log(`distance_value is ${distance_value}`);
    const user_age_value = Number(input_user_age.value);
    console.log(`user_age_value value is ${user_age_value}`);

    if (isNaN(distance_value) != true && isNaN(user_age_value) != true) {  //check for Nan in both values
        if (distance_value != 0 && user_age_value != 0) {   //check for 0 in both values
            standard_price = distance_value * 0.21;
            console.log(`pre-discount price is ${standard_price}`);
            discount_price = standard_price;
            if (user_age_value > 65) {
                discount_price = discount_price * 0.60
            } else if (user_age_value < 18) {
                discount_price = discount_price * 0.80
            }
            console.log(`your price is ${discount_price.toFixed(2) + "€"}`);
        } else {
            alert("input error")
        }
    } else {
        alert("input error")
    }
})



//get output elements
const form_el = document.getElementById("form_el")
const output_price = document.getElementById("output_price")
console.log(output_price);

//write on page
form_el.addEventListener(`submit`, function (e) {
    e.preventDefault();
    console.log("this is the submit function on the form running (begin)");
    output_distance.innerHTML += input_distance.value
    output_user_age.innerHTML += input_user_age.value
    output_price.innerHTML += discount_price.toFixed(2) + "€"
})
