// Day 27 Challenge: Start Coding!
// Question 79:
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car.model);
// Question 80:
var carDetails = {
    make: "Toyota",
    model: "Corolla",
    color: "blue",
    year: 2020
};
carDetails.year = 2021;
// Accessing and showing the car's model
console.log(carDetails);
// Question 81:
function objectProperties(anyobj) {
    for (var anyobject in anyobj) {
        console.log("".concat(anyobject, ": ").concat(anyobj[anyobject]));
        // Shows the anyobject name and its value
    }
}
objectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
