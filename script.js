const calculateButton = document.getElementById("calculate-button");
const billAmountInput =document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numPeopleInput = document.getElementById("num-people");
const tipAmountSpan = document.getElementById("tip-amount");
const totalAmountSpan = document.getElementById("total-amount");
const amountPerPersonSpan = document.getElementById("amount-per-person");

calculateButton.addEventListener("click", () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value, 10);

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson = totalAmount / numPeople;

  tipAmountSpan.innerHTML = tipAmount.toFixed(2);
  totalAmountSpan.innerHTML = totalAmount.toFixed(2);
  amountPerPersonSpan.innerHTML = amountPerPerson.toFixed(2);
});
