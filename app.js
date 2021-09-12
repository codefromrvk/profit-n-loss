const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const btn = document.querySelector("#btn")
const output = document.querySelector("#output")

//costprice,number of stocks,selling price
function calculateProfitAndLoss(cp, num, sp) {
    // console.log(typeof (cp))
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
function displayOutput(str) {
    console.log(output);
    output.innerText = (str);
}

function clickHandler() {
    const [value, percentage, ans] = calculateProfitAndLoss(Number(initialPrice.value), Number(quantity.value), Number(currentPrice.value));
    console.log(typeof percentage)
    console.log(value, percentage, ans)
    let outputText = "Kuch bhi nahi ukaada";
    if (ans === "profit") {
        outputText = `Paisa hiii paisa,Profit=${value} aur ${percentage.toFixed(2)}% pratishath ka fayda, Wah bhai wahh!!`
        displayOutput(outputText)
    } else if (ans === "loss") {
        outputText = `Paisa sab barbaad,Loss=${value} aur ${percentage.toFixed(2)}% pratishath nuksaan`
        displayOutput(outputText)
    } else {
        displayOutput(outputText);
    }
}


btn.addEventListener("click", clickHandler)





