// Selectie van button (kleur verandert)
let selectedButton = null;

document.getElementById("oneYearBtn").addEventListener("click", function () {
    selectedButton = "oneYearBtn";
    this.style.backgroundColor = "#F9CB33";
    document.getElementById("oneMonthBtn").style.backgroundColor = "#f4f4f9"
});

document.getElementById("oneMonthBtn").addEventListener("click", function () {
    selectedButton = "oneMonthBtn";
    this.style.backgroundColor = "#F9CB33";
    document.getElementById("oneYearBtn").style.backgroundColor = "#f4f4f9"
});


// Dynamische prijs dmv. klikken op knoppen

// Vind de knoppen en de h3 tags
let oneYearBtn = document.getElementById("oneYearBtn");
let oneMonthBtn = document.getElementById("oneMonthBtn");
let abonnementPrijs1 = document.getElementById("abonnementPrijs1");
let abonnementPrijs2 = document.getElementById("abonnementPrijs2");

// Hier word de tekst in het h3 element gezet.
abonnementPrijs1.textContent = "€ 99,90";
abonnementPrijs2.textContent = "Betaal €99,90";

// Voeg een click event listener toe aan de knoppen zodat prijzen veranderen
oneYearBtn.addEventListener("click", () => {
    abonnementPrijs1.textContent = "€ 99,90";
    abonnementPrijs2.textContent = "Betaal €99,90";
});

oneMonthBtn.addEventListener("click", () => {
    abonnementPrijs1.textContent = "€ 9,90";
    abonnementPrijs2.textContent = "Betaal €9,90";
});

