const display = document.getElementById("display");
// Show input on display when typing
function appendToDisplay(input) {
  display.value += input;
}
// Clear display funtion
function clearDisplay() {
  display.value = "";
}
// Calculate function
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
// Use eval to calculate, use try and catch block to prevent program from crashing

// Event listener for number input
document.querySelectorAll(".numeric-button").forEach(button => {
  button.addEventListener("click", function () {
    appendToDisplay(button.innerText);
  });
});
// Event listener for function input

document.querySelectorAll(".operator-button").forEach(button => {
  button.addEventListener("click", function () {
    appendToDisplay(button.innerText);
  });
});
// Event listener for clear display input

document.querySelector(".clear-button").addEventListener("click", clearDisplay);
// Event listener for calculate button inout

document.querySelector(".calculate-button").addEventListener("click", calculate);