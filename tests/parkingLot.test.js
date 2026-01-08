import { test, describe } from "node:test";
import assert from "assert";
import Vehicle from "../models/vehicle.js";
import Car from "../models/car.js";
import Truck from "../models/truck.js";
import Motercycle from "../models/motorcycle.js";
import MemberVehicle from "../models/memberVehicle.js";
import ParkingLot from "../models/parkingLot.js";

describe("Parking lot test", () => {
  test("cparking lot 1.", () => {
    const parkingLot = new ParkingLot(1);
    assert.throws(() => parkingLot.park("hello world"), {
      message: "not a vehicle.",
    });
  });

  test("parking lot 2.", () => {
    const parkingLot = new ParkingLot(1);
    const car1 = new Car("12345");
    const car2 = new Car("123");
    assert.equal(parkingLot.park(car1), undefined);
    assert.throws(() => parkingLot.park(car2), {
      message: "parking lot is full.",
    });
  });

  test("parking lot 3.", () => {
    const parkingLot = new ParkingLot(1);
    const car1 = new Car("12345");
    const car2 = new Car("123");
    assert.equal(parkingLot.park(car1), undefined);
    assert.throws(() => parkingLot.park(car2), {
      message: "parking lot is full.",
    });
  });

  test("parking lot 4.", () => {
    const parkingLot = new ParkingLot(2);
    const car1 = new Car("12345");
    const car2 = new Car("12345");
    assert.equal(parkingLot.park(car1), undefined);
    assert.throws(() => parkingLot.park(car2), {
      message: "Vehicle already parked.",
    });
  });

  test("parking lot 4. unpark", () => {
    const parkingLot = new ParkingLot(2);
    const car1 = new Car("12345");
    assert.throws(() => parkingLot.unpark(car1.plateNumber, 1), {
      message: "vehicle not parked.",
    });
  });

  test("parking lot 5. unpark", () => {
    const parkingLot = new ParkingLot(2);
    const car = new Car("12345");
    parkingLot.park(car);
    assert.equal(parkingLot.getVehiclesCount(), 1);

    assert.equal(car.calculateCost(2), 24);
    
    parkingLot.unpark(car.plateNumber, 1);

    assert.equal(parkingLot.getVehiclesCount(), 0);
  });
});
