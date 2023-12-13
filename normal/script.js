var input1 = document.getElementById("clickYes");
var input2 = document.getElementById("clickNo");

function swapValues() {
  var value1 = input1.value;
  var value2 = input2.value;
  input1.value = value2;
  input2.value = value1;
}

input2.addEventListener("mouseover", swapValues);
input2.addEventListener("mouseout", swapValues);

popup = document.getElementById("viewPopup");
function viewPopup(){
    popup.classList.add("popup");
    popup.style.display = "block";
}

function closePopup(){
    popup.classList.remove("popup");
    popup.style.display = "none";
}