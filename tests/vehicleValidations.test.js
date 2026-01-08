import {test, describe} from 'node:test';
import assert from 'assert';
import Vehicle from '../models/vehicle.js';


describe("Testing Vehicle validation", ()=>{

    test("calculateCost(hours) throws Error", ()=>{
        const vehicle = new Vehicle("12345");
        assert.throws(()=>vehicle.calculateCost(0), {message: "hours must be positive."})
        assert.throws(()=>vehicle.calculateCost(-5), {message: "hours must be positive."})
        assert.throws(()=>vehicle.calculateCost("2"), {message: "hours must be positive."})
    })

    test("Test vehicle enter function", ()=>{
        const vehicle = new Vehicle("12345");
        assert.equal(vehicle.enter(), undefined);
        assert.throws(()=>vehicle.enter(), {message: "Vehicle already inside"})
    });

    
})