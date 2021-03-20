class DonutShop {
    constructor(){
        //Need donut count (part of Feature 1)
    this.TotalDonuts = 0; 
         //Need auto clickers count
    this.AutoClickerCount = 0; 
         //Need auto clicker cost     
    this.AutoClickerCost = 20; //verify what sh cost be?? 
         //Need donut multiplier (how many we have - count)
    this.DonutMultiplierCount = 0;
         //have a donut multiplier cost
    this.DonutMultiplierCost = 100; 

        //costs for auto clickers and multipliers - need methods for these
    this.Multiplier = 1.01; 
    this.AutoPriceUp = 1.05;
    this.MultiplierPriceUp = 1.1;
    
    }     
            
    getTotalDonutsCount(){
        return this.TotalDonuts; 
    }
    
    getAutoClickerCount(){
        return this.AutoClickerCount;
    }

    getAutoClickerCost(){
        return this.AutoClickerCost; 
    }

    getDonutMultiplierCount(){
        return this.DonutMultiplierCount;
    }

    getDonutMultiplierCost(){
        return this.DonutMultiplierCost; 
    }





    
}