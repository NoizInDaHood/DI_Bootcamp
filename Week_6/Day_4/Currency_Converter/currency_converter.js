const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const form = document.getElementById("form");
const selectFrom = document.getElementById("selectCurrencyFrom");
const selectTo = document.getElementById("selectCurrencyTo");
const inputAmount = document.getElementById("inputAmount");
const btnSubmit = document.getElementById("btnSubmit");

async function getCurrency() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a65591f0051ad40f2ef010af/codes`);
        if (!response.ok) {
            throw new Error("Problem with the API request");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

async function fillCurrencies(currency, selection) {
    try {
        const data = await getCurrency();
        data.supported_codes.forEach(row =>{
            const currencyDat = row[0];
            const name = row[1];
            const addCurrency = document.createElement("option");
            addCurrency.textContent = `${currencyDat} - ${name}`;
            addCurrency.value = currencyDat;
            selection.appendChild(addCurrency);
            if (currency === currencyDat) {
                addCurrency.selected = true;
            };
        })        
    }catch (error) {
        console.log(error);
    }
};
fillCurrencies("USD",selectFrom);
fillCurrencies("EUR",selectTo);

async function convertAmount(from, to, amount) {
    try {
        const fromCurrency = from.value;
        const toCurrency = to.value;
        const amountValue = amount.value;
        const apiConvert = await fetch(`https://v6.exchangerate-api.com/v6/a65591f0051ad40f2ef010af/pair/${fromCurrency}/${toCurrency}/${amountValue}`);
        if (!apiConvert.ok) {
            throw new Error("Problem with the API request");
        }
        const resultJson = await apiConvert.json();
        return resultJson.conversion_result;
    }catch (error) {
        console.log(error);
    }
};

btnSubmit.addEventListener("click", async ev => {
    ev.preventDefault();
    const finalResult = await convertAmount(selectFrom, selectTo, inputAmount);
    result.textContent = ` ${finalResult} ${selectTo.value} `;
    result.style.visibility = "visible";
    result2.style.visibility = "visible";
});
