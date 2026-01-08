import Vehicle from "./vehicle.js";


class MemberVehicle extends Vehicle{
    
    #memberId

    constructor(plateNumber, memberId){
        super(plateNumber)
        this.#memberId = memberId;
    }

    calculateCost(hours){
        
        if(hours < 0){
            throw new Error("hours must be positive.")
        }

        return 0;
    }

}

export default MemberVehicle