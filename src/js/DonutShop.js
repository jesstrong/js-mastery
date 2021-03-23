class DonutShop {
    constructor() {
       this.donutCount = 0;
       this.autoDonutClickerCost = 100;
       this.autoDonutClickerCount = 0; 
       this.donutMultiplierCount = 0; 
       this.donutMultiplierCost = 10; 

    }
     clickForDonut(){
         this.donutCount += 1 * this.totalDonutValue();
     }

    getDonutClickCount(){
        return (this.donutCount);
    }
    
    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }
   
    getDonutMultiplierCost(){
        return this.donutMultiplierCost; 
    }

    getAutoDonutClickerCount(){
        return this.autoDonutClickerCount;
    }

    getAutoClickerCost(){
        return this.autoDonutClickerCost; 
    }

    buyDonutAutoClicker(){
        this.autoDonutClickerCost += 1; 
        this.subtractAutoDonutClickerCost();
        this.increaseAutoDonutClickerCost();
    }

    subtractAutoDonutClickerCost(){
        this.donutCount -= (this.autoDonutClickerCost);
    }

    increaseAutoDonutClickerCost(){
        this.autoDonutClickerCost += this.autoDonutClickerCost * 0.1; 
    }

    notEnoughClicksToPurchaseAutoClicker(){
        return this.autoDonutClickerCount < this.autoDonutClickerCost; 
    }

    checkClickCountToBuyAutoClicker(){
        if(this.notEnoughClicksToPurchaseAutoClicker()){
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

    subtractDonutMultiplierCostFromDonutCount(){
        this.donutCount -= this.donutMultiplierCost; 
    }

    increaseDonutMultiplierCost(){
        this.donutMultiplierCost += this.donutMultiplierCost * 0.1;
    }

    hasInsufficientClicksToBuyDonutMultiplier(){
        return this.donutCount < this.donutMultiplierCost;
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
    }

}
