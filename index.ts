// Day 27 Challenge: Start Coding!

// Question 79:
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Accessing and showing the car's model
console.log(car.model);

// Question 80:

let carDetails = {
    make: "Toyota",
    model: "Corolla",
    color : "blue",
  
    year: 2020
};
carDetails.year = 2021;
// Accessing and showing the car's model
console.log(carDetails);

// Question 81:
function objectProperties(anyobj: object) {
    for (let anyobject in anyobj) {
        console.log(`${anyobject}: ${anyobj[anyobject]}`);
        // Shows the anyobject name and its value
    }
}

objectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
