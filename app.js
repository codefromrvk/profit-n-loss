const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const outputImg = document.querySelector(".container2")

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
        output.style.color = "brown";
        outputImg.classList.add("invalid");
        output.innerText = (str);

    } else if (result === "profit") {
        output.style.color = "green";
        outputImg.classList.add("profit");
        output.innerText = (str);


    } else if (result === "loss") {
        output.style.color = "red";
        outputImg.classList.add("loss");
        output.innerText = (str);
    }
    else {
        output.style.color = "brown";
        outputImg.classList.add("safe");
        output.innerText = (str);
    }
}


function clickHandler() {
    const [value, percentage, ans] = calculateProfitAndLoss(Number(initialPrice.value), Number(quantity.value), Number(currentPrice.value));

    let outputText = "Kuch bhi nahi ukaada";
    if (ans === "emptyornegative") {
        outputText = "Kehna Kya chahte ho?";
        displayOutput(outputText, ans)
    } else if (ans === "profit") {
        outputText = `Paisa hiii paisa,Profit=${value} aur ${percentage.toFixed(2)}% pratishath ka fayda, Wah bhai wahh!!☺️`;
        displayOutput(outputText, ans)
    } else if (ans === "loss") {
        outputText = `Paisa sab barbaad,Loss=${value} aur ${percentage.toFixed(2)}% pratishath nuksaan`
        displayOutput(outputText, ans)
    } else {
        displayOutput(outputText, ans);
    }
}


btn.addEventListener("click", clickHandler)





