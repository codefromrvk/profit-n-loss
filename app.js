const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const outputImg = document.querySelector(".container2")
const sub = document.querySelector("#sub")

//costprice,number of stocks,selling price
function calculateProfitAndLoss(cp, num, sp) {
    if (sp <= 0 | cp <= 0 | num <= 0) {
        return [0, 0, "emptyornegative"];
    }
    if (sp > cp) {
        //profit
        const profit = sp - cp;
        const percProfit = (profit / cp) * 100;
        return [profit * num, percProfit, "profit"];

    } else if (sp < cp) {
        //loss
        const loss = cp - sp;
        const percLoss = (loss / cp) * 100;
        return [loss * num, percLoss, "loss"];

    }
    else {
        return [0, 0, "same"];
    }
}
function displayOutput(str, result) {
    outputImg.classList.remove("invalid", "profit", "loss", "safe")

    if (result === "emptyornegative") {
        output.style.backgroundColor = "brown";
        outputImg.classList.add("invalid");
        output.innerText = (str);
        sub.innerText = "Kehna kya chahte ho?"
        sub.style.backgroundColor = "brown";

    } else if (result === "profit") {
        output.style.backgroundColor = "green";
        outputImg.classList.add("profit");
        output.innerText = (str);
        sub.innerText = "Paisa hii paisa!!!";
        sub.style.backgroundColor = "green";

    } else if (result === "loss") {
        output.style.backgroundColor = "red";
        outputImg.classList.add("loss");
        output.innerText = (str);
        sub.innerText = "Paisa sab barbaad!!!";
        sub.style.backgroundColor = "red";
    }
    else {
        output.style.backgroundColor = "brown";
        outputImg.classList.add("safe");
        output.innerText = 0.00;
        sub.innerText = "Kuch bhi nahi ukaada";
        sub.style.backgroundColor = "brown";
    }
}


function clickHandler() {
    const [value, percentage, ans] = calculateProfitAndLoss(Number(initialPrice.value), Number(quantity.value), Number(currentPrice.value));

    let outputText = "Kuch bhi nahi ukaada";
    if (ans === "emptyornegative") {
        outputText = "Invalid Input";
        displayOutput(outputText, ans)
    } else if (ans === "profit") {
        outputText = `Profit:+Rs.${value} ( ${percentage.toFixed(2)}%)`;
        displayOutput(outputText, ans)
    } else if (ans === "loss") {
        outputText = `Loss:-Rs.${value} (${percentage.toFixed(2)}%) `
        displayOutput(outputText, ans)
    } else {
        displayOutput(outputText, ans);
    }
}


btn.addEventListener("click", clickHandler)





