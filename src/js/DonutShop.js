class DonutShop {
    constructor() {
       this.DonutCount = 0;
       this.AutoDonutClickerCost = 100; //verify this amount
       this.AutoDonutClickerCount = 0; 
       this.DonutMultiplierCount = 0; 
       this.DonutMultiplierCost = 10;  //verify this amount
     
       this.Multiplier = 1.01; //verify this amount 

    }
     
    getDonutCount(){
        return this.DonutCount; 
    }
            
    getAutoDonutClickerCount() {
        return this.AutoDonutClickerCount;
    }
   
    getAutoDonutClickerCost(){
        return this.AutoDonutClickerCost;
    }

    getDonutMultiplierCount(){
        return this.DonutMultiplierCount;        
    }

    getDonutMultiplierCost(){
        return this.getDonutMultiplierCost; 
    }

    getDonutMultiplier(){
        return Math.pow(this.Multiplier, this.DonutMultiplierCount);
    }

    AddDonuts = (toAdd) => {
        this.DonutCount += toAdd; 
    }
    
    AddAuto = () => {
       this.AutoDonutClickerCount++; 
    }

    AddDonutMulti = () => {
        this.DonutMultiplierCount++; 
    }


    /*buyAutoDonutClicker(){
        this.autoDonutClickerCount += 1; 
        this.subtractAutoDonutClickerCostFromAutoDonutClickerCount();
        this.increaseAutoDonutClickerCost();
    }

    
    increaseAutoDonutClickerCost(){
        this.autoDonutClickerCost += this.autoDonutClickerCost * 0.1; 
    }

    






    checkClickCountToBuyAutoDonutClicker(){
        if(this.notEnoughClicksToPurchaseAutoDonutClicker()){
            return null;
        } else {
            this.buyAutoDonutClicker();
        } 
    }

    turnOnAutoDonutClicker(){
        for (let i = 0; i < this.autoDonutClickerCount; i++){
            this.clickForDonut();
        }
    }
    
    purchaseDonutMultiplier(){
        this.donutMultiplierCount += 1;
        this.subtractDonutMultiplierCostFromDonutCount();
        this.increaseDonutMultiplierCost();
    }

    
    increaseDonutMultiplierCost(){
        this.donutMultiplierCost += this.donutMultiplierCost * 0.1;
    }

    

    checkClickCountToBuyDonutMultiplier() {
        if(this.notEnoughClicksToPurchaseDonutMultiplier()){
            return null;
        } else {
            this.buyDonutMultiplier;
        } 
    }

    calculateDonutMultiplierValue(){
        return Math.pow(1.2, this.donutMultiplierCount);
    }*/

}
