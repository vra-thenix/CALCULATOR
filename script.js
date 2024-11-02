// script.js

// Select the display element
const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    display.value += " " + operator + " ";
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = "Error";
    }
}

// Function to calculate square
function calculateSquare() {
    display.value = Math.pow(eval(display.value), 2);
}

// Function to calculate square root
function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}
