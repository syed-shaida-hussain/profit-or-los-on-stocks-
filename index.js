const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / current) * 100;
        showOutput(`the loss is ${loss} and loss percentage is ${lossPercentage}`)
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / current) * 100;
        showOutput(`the profit is ${profit} and profit percentage is ${profitPercentage}`)
    } else {
        showOutput("no pain , no gain and no gain , no pain")
    }
}

function clickHandler() {
    var iPrice = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(iPrice, qty, curr)
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

submitButton.addEventListener('click', clickHandler)