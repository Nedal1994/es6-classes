'use strict';

class Vehicle
{
    vehicle(name)
    {
        this.name=name;
    }
    drive()
    {
        `${this.name}`
    }
}

class Car extends Vehicle
{
    vehicle(carname)
    {
        super(carname)
    }
}

class Motorcycle extends Vehicle
{
    vehicle(motorcyclename)
    {
        super(motorcyclename)
    }
}

let car=new Car('Toyota')
let motor = new Motorcycle('Kawasaki')
car.drive()
motor.drive()