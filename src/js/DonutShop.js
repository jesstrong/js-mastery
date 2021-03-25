class DonutShop {
    constructor() {
       this.DonutCount = 0;
       this.AutoDonutClickerCost = 100; //verify this amount
       this.AutoDonutClickerCount = 0; 
       this.DonutMultiplierCount = 0; 
       this.DonutMultiplierCost = 10;  //verify this amount
       this.IntervalID = undefined; 
       this.DonutsEarned = 1;  

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

    getDonutsEarned(){
        return this.DonutsEarned; 
    }

    AddDonuts = () => {
        this.DonutCount += this.DonutsEarned; 
    }
    
    AddAuto = () => {
       this.AutoDonutClickerCount++; 
       if(this.getDonutCount -= this.getAutoDonutClickerCost) {
          this.Interval = SetInterval(ProcessAutoclicker, 1000)
       }else {
        this.Interval = undefined;this.IntervalID; 
       }
    }   
       //this.DonutCount -=this.DonutMultiplierCost; 
       //this.Interval = SetInterval(ProcessAutoclicker, 1000)
       //if (this.Interval == undefined)this.IntervalID; 


       //this.DonutCount -= this.AutoDonutClickerCost; 
       //code:   this.Interval = SetInterval(ProcessAutoclicker, 1000)
       //this code will be after you check to see if they have enough donuts to buy Autoclicker, when set interval code is:   
       //need if stmt (donutcount is greater than the cost ) stmt sh ensure that they have enough donuts 
       //                if this.Interval = undefined then start the Interval; 
  //}  

    AddDonutMulti = () => {
        this.DonutMultiplierCount++; 
        if (this.DonutCount -= this.DonutMultiplierCost) {
            this.DonutsEarned = Math.pow(this.DonutsEarned, this.DonutMultiplierCount);
            

        //need if stmt (donutcount is greater than the cost ) stmt sh ensure that they have enough donuts 
        //next 2 lines will be inside if stmt 
        
        //if (this.DonutCount -= this.DonutMultiplierCost)
        //this.DonutsEarned = Math.pow(this.DonutsEarned, this.DonutMultiplierCount);
    }

    ProcessAutoClicker = () => {
        for (var i = 0; i < this.AutoDonutClickerCount; i++){
            this.AddDonuts();
        }

    }
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


