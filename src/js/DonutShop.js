class DonutShop {
    constructor() {
       this.DonutCount = 0;
       this.AutoDonutClickerCost = 100;
       this.AutoDonutClickerCount = 0; 
       this.DonutMultiplierCount = 0; 
       this.DonutMultiplierCost = 10;  
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
        return this.DonutMultiplierCost; 
    }

    getDonutsEarned(){
        return this.DonutsEarned * this.GetDonutMultiplier();
    }

    AddDonuts = () => {
        this.DonutCount += this.getDonutsEarned(); 
        UpdateText();
    }
    
    AddAuto = () => {
        console.log(this.DonutCount);
        console.log(this.AutoDonutClickerCost);
        if(this.DonutCount >= this.AutoDonutClickerCost) {
            this.DonutCount -= this.AutoDonutClickerCost
            this.AutoDonutClickerCount++; 
            if(this.IntervalID == undefined){
            console.log ("starting interval");
                this.IntervalID = setInterval(this.ProcessAutoClicker, 1000);
                console.log (this.IntervalID);
            }
           this.AutoDonutClickerCost += (.1 *this.AutoDonutClickerCost); 
                  
       }
    }        
        
    AddDonutMulti = () => {
        if(this.DonutCount >= this.DonutMultiplierCost) {
            this.DonutCount -= this.DonutMultiplierCost
            this.DonutMultiplierCount++; 
            this.DonutMultiplierCost += (.1 *this.DonutMultiplierCost); 
        }
        console.log(this.DonutMultiplierCount);
        console.log(this.DonutMultiplierCost);
                  
       }
           
    GetDonutMultiplier = () => {
        return Math.pow(1.1, this.DonutMultiplierCount);
    }
      
    ProcessAutoClicker = () => {
        for (var i = 0; i < this.AutoDonutClickerCount; i++){
            this.AddDonuts();
         
        }
    }   
  
}
