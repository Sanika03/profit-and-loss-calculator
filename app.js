var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output-div");

checkBtn.addEventListener("click", clickHandler);

function clickHandler(){
    var ip = Number(initialPrice.value);
    var q = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, q, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial != "" && quantity != "" && current != ""){
        if(initial > current){
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / initial) * 100;
            var message = `The loss is ${loss} and loss prcentage is ${lossPercentage}%`;
            showOutput(message);
            bodyColor.style.backgroundColor = "#be123c";
        }
        else if(current > initial){
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / initial) * 100;
            var message = `The profit is ${profit} and profit prcentage is ${profitPercentage}%`;
            showOutput(message);
            bodyColor.style.backgroundColor = "#047857";
        }
        else{
            var message = `No pain no gain, no gain no pain`;
            showOutput(message);
            bodyColor.style.backgroundColor = "#0e7490";
        }
    }
    else{
        var message = "Please enter values in all fields";
        showOutput(message);
    }
}

function showOutput(message){
    outputDiv.innerText = message;
}