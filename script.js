// Const val
const MAX_POSITVE = 10**19;
const MAX_NEGATIVE = (-10)**19;

// GET DOM of show
const showDom = document.getElementById("show");
//GET DOM of all btn
const clearBtn = document.getElementById("btn-clear");
const deleteBtn = document.getElementById("btn-delete");
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const plus = document.getElementById("opPlus");
const minus = document.getElementById("opMinus");
const multiply = document.getElementById("opMultiply");
const divide = document.getElementById("opDivide");
const equal = document.getElementById("opEqual");
const dot = document.getElementById("opDot");

// Catch event for all buttons
clearBtn.addEventListener("click", () => {
    //Set text in showDom to 0
    showDom.innerText = 0;
})

deleteBtn.addEventListener("click", () => {
    deleteOneFromCaculateString(getCaculateString());
})

num0.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num1.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num2.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num3.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num4.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num5.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num6.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num7.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num8.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

num9.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

plus.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

minus.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

multiply.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

divide.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

dot.addEventListener("click", (event) => {
    addCharToCaculateString(getCaculateString(), event.target.innerText);
})

equal.addEventListener("click", () => {
    showCaculateResult(getCaculateString());
})

//Caculate logic

/**
 * Function to get string to caculate
 * @returns caclString
*/
function getCaculateString () {
    let caclString = showDom.innerText;
    return caclString;
}

/**
 * Function to check if last char is digit
 * @param {*} caclString 
 * @returns 
 */
function isLastCharDigit (caclString) {
    return /^\d+$/.test(caclString[caclString.length - 1]);
}

/**
 * Function to handle caculate btn clicks
 * @param {*} caclString 
 * @param {*} char 
 */
function addCharToCaculateString (caclString, char) {
    if (caclString === "0") {
        if (char === "+" || char === "-" || char === "*" || char === "/") {
            showDom.innerText = caclString + " " + char;
        } else if (char === ".") {
            showDom.innerText = caclString + "" + char;
        } else {
            showDom.innerText = char;
        }
    } else {
        if (isLastCharDigit(caclString) || caclString[caclString.length - 1] === ".") {
            if (char === "+" || char === "-" || char === "*" || char === "/") {
                showDom.innerText = caclString + " " + char;
            } else {//Not add space if end and char is a number
                showDom.innerText = caclString + "" + char;
            }
        } else {//Case end char is not digit
            if (char === "+" || char === "-" || char === "*" || char === "/") {
                showDom.innerText = caclString;
            } else {//Add number after a operation
                showDom.innerText = caclString + " " + char;
            }
        }
    }
}

/**
 *Function handle when click C button 
 */
function deleteOneFromCaculateString (caclString) {
    if (caclString.length === 1) { //Reset showDom
        showDom.innerText = 0;
    } else {
        showDom.innerText = caclString.substring(0, caclString.length - 1);
    }
}

/**
 * Function handle when click equal button
 * @param {*} caclString 
 */
function showCaculateResult (caclString) {
    let result = caclString;
    if (isLastCharDigit(caclString)) {
        //Split string
        let caclList = caclString.split(" ");
        //Caculate
        if (caclList.length === 1) { //No computation
            result = caclString;
        } else { //>= 1 computarion
            //Fisrt computation
            result = caculate(caclList[0], caclList[2], caclList[1]);
            for (let i = 4; i < caclList.length; i = i +2) {
                result = caculate(result, caclList[i], caclList[i-1]);
            }
        }
    }
    showDom.innerText = result;
}

/**
 * Function to caculate each computation
 * @param {*} first 
 * @param {*} second 
 * @param {*} operation 
 */
function caculate (first, second, operation) {
    let result = 0;
    first = first * 1;
    second = second * 1;
    switch (operation) {
        case "+":
            result = first + second;
            return result < MAX_POSITVE ? result : "Error: Out of range";
        case "-":
            result = first - second;
            return result > MAX_NEGATIVE ? result : "Error: Out of range";
        case "*":
            result = first * second;
            return result < MAX_POSITVE || result > MAX_NEGATIVE? result : "Error: Out of range";
        case "/":
            result = first / second;
            return second !== 0 ? Math.round(result * 100) / 100  : "Error: Divide by zero";
        default:
            console.log("something has occur! Bruhhhhh");
            return "Is on update T.T";
    }
}