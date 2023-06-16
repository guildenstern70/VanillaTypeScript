//
// The TypeScript Vanilla Project
// (C) 2023 Alessio Saltarin <alessiosaltarin@gmail.com>
// MIT License
//

import { increment } from "./increment";
import { decrement } from "./decrement";

console.log("Welcome to the TypeScript Vanilla Project");

const countValue: HTMLSpanElement = document.querySelector("#count-value") as HTMLSpanElement;
const incrementBtn: HTMLButtonElement = document.querySelector("#btn-add") as HTMLButtonElement;
const decrementBtn: HTMLButtonElement = document.querySelector("#btn-remove") as HTMLButtonElement;

const handleIncrement = () => {
    let currentValue = parseInt(countValue.innerText);
    const newValue = increment(currentValue).toString();
    console.log("Button + => " + newValue + "( was " + currentValue + " )");
    countValue.innerText = newValue;
}

const handleDecrement = () => {
    let currentValue = parseInt(countValue.innerText);
    const newValue = decrement(currentValue).toString();
    console.log("Button - => " + newValue);
    countValue.innerText = newValue;
}

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
