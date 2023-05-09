// Selectie van button (kleur verandert)
let selectedButton2 = null;

document.getElementById("oneYearBtn2").addEventListener("click", function() {
    selectedButton2 = "oneYearBtn2";
    this.style.backgroundColor = "#F9CB33";
    document.getElementById("oneMonthBtn2").style.backgroundColor = "#f4f4f9"
});

document.getElementById("oneMonthBtn2").addEventListener("click", function() {
    selectedButton2 = "oneMonthBtn2";
    this.style.backgroundColor = "#F9CB33";
    document.getElementById("oneYearBtn2").style.backgroundColor = "#f4f4f9"});



// Dynamische prijs dmv. klikken op knoppen

// Vind de knoppen en de h3 tags
let oneYearBtn2 = document.getElementById("oneYearBtn2");
let oneMonthBtn2 = document.getElementById("oneMonthBtn2");
let abonnementPrijs3 = document.getElementById("abonnementPrijs3");
let abonnementPrijs4 = document.getElementById("abonnementPrijs4");

// Hier word de tekst in het h3 element gezet.
abonnementPrijs3.textContent = "€ 9,90";
abonnementPrijs4.textContent = "Betaal €9,90";

// Voeg een click event listener toe aan de knoppen zodat prijzen veranderen
oneYearBtn2.addEventListener("click", () => {
    abonnementPrijs3.textContent = "€ 9,90";
    abonnementPrijs4.textContent = "Betaal €9,90";
});

oneMonthBtn2.addEventListener("click", () => {
    abonnementPrijs3.textContent = "€ 99,90";
    abonnementPrijs4.textContent = "Betaal €99,90";
});

