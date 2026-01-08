import Vehicle from "./vehicle.js";

class Truck extends Vehicle {
  #maxWeightTons;
  constructor(plateNumber, maxWeightTons) {
    super(plateNumber);
    this.#maxWeightTons = this.#setMaxWeight(maxWeightTons);
  }

  #setMaxWeight(maxWeightTons) {
    if (maxWeightTons < 0) {
      throw new Error("weight must be above zero.");
    }

    return maxWeightTons;
  }

  calculateHourlyRate() {
    const base = 20;
    if (this.#maxWeightTons > 5) {
      return base + 5;
    }

    return base;
  }
}

export default Truck
