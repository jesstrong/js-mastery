var myDS = new DonutShop();

// DECLARE VARIABLE FOR ELEMENTS 
const donutCount = document.getElementById("donutCount");
const autoCountText = document.getElementById("autoCountText");
const autoClickerCost = document.getElementById("autoClickerCost");
const multiplierCount = document.getElementById("multiplierCount");
const multipleCost = document.getElementById("multipleCost");

// CLICK BUTTONS 
let clickButton = document.getElementById("clickButton");
let autoClickButton = document.getElementById("autoClickButton");
let multiButton = document.getElementById("multiButton");
let resetButton = document.getElementById("resetButton");

// EVENT LISTENERS passing in functions 
clickButton.addEventListener('click', ClickButton);
autoClickButton.addEventListener('click', AutoClickButton);
multiButton.addEventListener('click', MultiButton);
resetButton.addEventListener('click', ResetGame);

// FUNCTIONS for EVENT LISTENERS
function ClickButton(){
    myDS.AddDonuts();
    UpdateText();
}
function AutoClickButton(){
    console.log("buy auto clicker");
    myDS.AddAuto();
    UpdateText();

}

function MultiButton(){
    console.log("buy multiplier");
    myDS.AddDonutMulti();
    UpdateText();

}

//FUNCTIONS FOR ACTIONS
function UpdateText(){
    donutCount.innerText = "Donuts" + Math.floor(myDS.getDonutCount());
    autoCountText.innerText = "Donut AutoClicker Count" + myDS.getAutoDonutClickerCount();
    autoClickerCost.innerText = "Auto Donutclicker Cost" + myDS.getAutoDonutClickerCost() + "donuts";
    multiplierCount.innerText = "Status Multiplier" + myDS.GetDonutMultiplier().toFixed(2) + "x";
    multipleCost.innerText = "Multiplier Cost" + myDS.getDonutMultiplierCost().toFixed(2) + "donuts";
    UpdateButtons();
}

function AddClicker(){
    if(myDS.DonutCount >= myDS.getAutoDonutClickerCost()){
      myDS.AddDonuts(-myDS.getAutoDonutClickerCost());
      myDS.AddAuto();
      UpdateText();
    }
}

function ResetGame(){
    myDS = new DonutShop();
    UpdateText();
    }
    
function UpdateButtons(){
    autoClickButton.disabled =!(myDS.getDonutCount() >=myDS.getAutoDonutClickerCost());
    multiButton.disabled =!(myDS.getDonutCount() >=myDS.getDonutMultiplierCost());
}










