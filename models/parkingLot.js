import Vehicle from "./vehicle.js";

class ParkingLot{
    
    #vehiclesInside
    #capacity

    constructor(capacity){
        this.#vehiclesInside = new Map();
        this.#capacity = capacity
    }

    park(vehicle){
        if(!(vehicle instanceof Vehicle)){
            throw new Error("not a vehicle.")
        }

        if(this.#vehiclesInside.size === this.#capacity){
            throw new Error("parking lot is full.")
        }
        
        this.#vehiclesInside.forEach((value, plateNumber)=>{
            
            if(plateNumber===vehicle.plateNumber) throw new Error("Vehicle already parked.")
        })
        
        this.#vehiclesInside.set(vehicle.plateNumber, vehicle);
    
    }

    unpark(plateNumber, hours){
        
        const vehicle = this.#vehiclesInside.get(plateNumber);
        
        if(!vehicle){
            throw new Error("vehicle not parked.") 
        }

        const cost = vehicle.calculateCost(hours);

        this.#vehiclesInside.delete(plateNumber);
        
        return cost;
    }

    getVehiclesCount(){
        return this.#vehiclesInside.size;
    }
}

export default ParkingLot;