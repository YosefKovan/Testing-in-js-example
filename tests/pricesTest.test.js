import {test, describe} from 'node:test';
import assert from 'assert';
import Vehicle from '../models/vehicle.js';
import Car from "../models/car.js";
import Truck from "../models/truck.js";
import Motercycle from "../models/motorcycle.js";
import MemberVehicle from "../models/memberVehicle.js";


describe("Testing prices", ()=>{

    test("calculateCost(hours) passes.", ()=>{
        const car = new Car("12345");
        assert.equal(car.calculateCost(2) , 24);
    })

    test("calculateCost(hours) passes.", ()=>{
        const motercycle = new Motercycle("12345");
        assert.equal(motercycle.calculateCost(2) , 16);
    })

    test("calculateCost(hours) passes.", ()=>{
        const truck = new Truck("12345", 4);
        assert.equal(truck.calculateCost(1) , 20);
    })

    test("calculateCost(hours) passes.", ()=>{
        const truck = new Truck("12345", 6);
        assert.equal(truck.calculateCost(1) , 25);
    })

    test("calculateCost(hours) passes.", ()=>{
        const memberVehicle = new MemberVehicle("12345", 20);
        assert.equal(memberVehicle.calculateCost(100) , 0);
    })
})