class Vehicle {
  #isInside;

  constructor(plateNumber) {
    this.plateNumber = plateNumber;
    this.#isInside = false;
  }

  enter() {
    if (this.#isInside) {
      throw new Error("Vehicle already inside");
    }

    this.#isInside = true;
  }

  isInside(){
    return this.#isInside;
  }

  calculateHourlyRate(){
    return 10;
  }

  calculateCost(hours){
    if(typeof hours !== 'number' || hours <= 0){
        throw new Error("hours must be positive.")
    }

    return hours * this.calculateHourlyRate();
  }
}

export default Vehicle;
