var myDS = new DonutShop();

const donutCount = document.getElementById("donutCount");
const autoCountText = document.getElementById("autoCountText");
//const dpsText = document.getElementById("DPS");
const multCountText = document.getElementById("multCountText");
const autoText = document.getElementById("autoText");
const multText = document.getElementById("multText");

let clickButton = document.getElementById("clickButton");
let autoButton = document.getElementById("autoClickButton");
let multButton = document.getElementById("multButton");

clickButton.addEventListener('click', ClickButton);
autoButton.addEventListener('click', AddAutoClicker);
multButton.addEventListener('click', AddMultiplier);

function Click(){
    myDS.AddDonuts(myDS.getDonutMultiplier());
    UpdateText();
}

function AddClicker(){
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

function UpdateText(){
    donutCount.innerText = "Donuts" + myDS.getDonutCount().toFixed(0);
    autoCountText.innterText = "Donut AutoClicker" + myDS.getAutoDonutClickerCount();
    multCountText.innerText = "Status Multiplier" + myDS.getDonutMultiplier().toFixed(2) + "x";
    autoText.innerText = "Auto Donutclicker Cost" + myDS.getAutoDonutClickerCost().toFixed(2) + "donuts";
    multText.innerText = "Multiplier Cost" + myDS.getDonutMultiplierCost().toFixed(2) + "donuts";
}
UpdateText();

var myVar = setInterval(TimedAuto, 100);
function TimedAuto(){
    myDS.DonutCount = myDS.AddDonuts(myDS.getAutoDonutClickerCount() * myDS.getDonutMultiplier()/10); // NEED to change amount
    UpdateText();
}



}
