var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.getElementById("total");
var submitBtn = document.getElementById("submit");

function calculateTip(total, tipPercent){
  var result = total * tipPercent;
  return result
}

function calculateTotal(tipAmount, total) {
    return parseFloat(total) + parseFloat(tipAmount)
}

function addTip(event) {
  event.preventDefault();

  var tipPercent = tipEl.value * 0.01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercent); 
  var newTotal = calculateTotal(tipAmount, total);
  
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.getElementById("new-total").textContent = newTotal.toFixed(2);
}


submitBtn.addEventListener("click", addTip);



