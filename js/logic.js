const buttons = document.querySelectorAll("button");
const maindisplay = document.querySelector("#main-display");
const digitbtn = document.querySelectorAll(".digit-btn");
const operatorbtn = document.querySelectorAll(".operator-btn");
const soperatorbtn = document.querySelectorAll(".soperator-btn");
const actionbtn = document.querySelector(".equal");
const cleaner = document.querySelector(".cleaner");
let x = "";
let currentinputtrack = "X";
let y = "";
let checker;
let operator;
digitbtn.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    if (checker === true) {
      x = "";
      y = "";
      operator = "";
      checker = false;
      currentinputtrack = "X";
    }
    if (currentinputtrack == "X") {
      x += e.target.value;
      maindisplay.value = x;
    } else if (currentinputtrack === "Y") {
      y += e.target.value;
      maindisplay.value = y;
    }
  });
});
operatorbtn.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    operator = e.target.value;
    checker = false;
    currentinputtrack = "Y";
  });
});
soperatorbtn.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    operator = e.target.value;
    if (x !== "") {
      x = parseFloat(x);
      switch (operator) {
        case "√":
          {
            let result = Math.sqrt(x);
            maindisplay.value = result;
          x = String(result);
          }
          break;
        case "1/x":
          {
            let result = 1 / x;
            maindisplay.value = result;
            x = String(result);
          }
          break;
        default:
          break;
      }
    }
  });
});
actionbtn.addEventListener("click", (e) => {
  x = parseFloat(x);
  y = parseFloat(y);
  switch (operator) {
    case "+":
      {
        let result = x + y;
        maindisplay.value = result;
        x = String(result);
      }
      break;
    case "-":
      {
        let result = x - y;
        maindisplay.value = result;
        x = String(result);
      }
      break;
    case "*":
      {
        let result = x * y;
        maindisplay.value = result;
        x = String(result);
      }
      break;
    case "÷":
      {
        let result = x / y;
        maindisplay.value = result;
        x = String(result);
      }
      break;
    case "%":
      {
        let result = x % y;
        maindisplay.value = result;
        x = String(result);
      }
      break;
    default:
      break;
  }
  y = "";
  checker = true;
});

cleaner.addEventListener("click", (e) => {
  maindisplay.value = "";
  x = '';
  y = "";
  operator = "";
  currentinputtrack = "X";
  checker = false;
});
