// Kursy walut
const ratesEUR = 4.35;
const ratesCHF = 4.75;
const ratesGBP = 4.82;
const ratesSEK = 0.39;

// Pobieranie elementów
const amountInput = document.getElementById("amount-input");
const rateInput = document.getElementById("rate-input");
const currencySelect = document.getElementById("currency-select");
const submitButton = document.getElementById("submit-button");
const resultOutput = document.getElementById("result-output");

// Ustaw kurs po zmianie waluty
currencySelect.addEventListener("change", function () {

    if (currencySelect.value === "EUR") {
        rateInput.value = ratesEUR;
    } 
    else if (currencySelect.value === "CHF") {
        rateInput.value = ratesCHF;
    } 
    else if (currencySelect.value === "GBP") {
        rateInput.value = ratesGBP;
    } 
    else if (currencySelect.value === "SEK") {
        rateInput.value = ratesSEK;
    }
});

// ⭐ Ustaw kurs przy pierwszym wyświetleniu strony
currencySelect.dispatchEvent(new Event("change"));

// Obliczenia
submitButton.addEventListener("click", function () {

    const amountValue = Number(amountInput.value);
    const rateValue = Number(rateInput.value);

    if (amountValue <= 0) {
        resultOutput.textContent = "Kwota musi być większa niż zero!";
        return;
    }

    const result = amountValue / rateValue;

    resultOutput.textContent =
        amountValue + " PLN = " + result.toFixed(2) + " " + currencySelect.value;
});
