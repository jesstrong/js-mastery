var myDS = new DonutShop();

const donutCount = document.getElementById("donutCount");
const autoCountText = document.getElementById("autoCountText");
const multCountText = document.getElementById("multCountText");
const autoText = document.getElementById("autoText");
const multText = document.getElementById("multText");

let clickButton = document.getElementById("clickButton");
let autoButton = document.getElementById("autoClickButton");
let multButton = document.getElementById("multButton");

clickButton.addEventListener('click', ClickButton);
autoButton.addEventListener('click', );
//multButton.addEventListener('click', AddMultiplier);

function ClickButton(){
    myDS.AddDonuts();
    UpdateText();
}

function UpdateText(){
    donutCount.innerText = "Donuts" + Math.floor(myDS.getDonutCount());
   // autoCountText.innterText = "Donut AutoClicker" + myDS.getAutoDonutClickerCount();
   // multCountText.innerText = "Status Multiplier" + myDS.getDonutMultiplier() + "x";
   // autoText.innerText = "Auto Donutclicker Cost" + myDS.getAutoDonutClickerCost() + "donuts";
   // multText.innerText = "Multiplier Cost" + myDS.getDonutMultiplierCost() + "donuts";
}
/*function AddClicker(){
    if(myDS.DonutCount >= myDS.getAutoDonutClickerCost()){
        myDS.AddDonuts(-myDS.getAutoDonutClickerCost());
        myDS.AddAuto();
        UpdateText();
    }

function AddMultiplier(){
    if(myDS.donutCount >= myDS.getDonutMultiplierCost());
        myDS.AddDonuts(-myDS.getDonutMultiplierCost());
        myDS.AddDonutMulti();
        UpdateText();
    }
}


UpdateText();

var myVar = setInterval(TimedAuto, 100);
function TimedAuto(){
    myDS.DonutCount = myDS.AddDonuts(myDS.getAutoDonutClickerCount() * myDS.getDonutMultiplier()/10); // NEED to change amount
    UpdateText();
}



}*/


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}