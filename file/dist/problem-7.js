"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.getCarAge = () => {
                return new Date().getFullYear() - this.year;
            };
        }
        ;
    }
    // const car = new Car("Honda", "Civic", 2015);
    // console.log(car.getCarAge());
}
