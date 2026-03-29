//----------------variables-------------------
const driverName = "Joe";
const distanceMiles = 430;
const gasPrice = 3.75;
const mpg = 22;
const fuelCapacity = 14;
const isRoundTrip = true;
let totalDistance;
//
let stopCounter = 0;
let milesTraveled = 0;
let totalEstimate = 0.0;


//----------------functions-------------------
function calculateGallonsNeeded(totalDistance, mpg){
    return totalDistance / mpg;
}

function calculateFuelCost(gallons, gasPrice){
    return gallons * gasPrice;
}

//----------------loops-------------------
console.log("---Road Trip Planning---");
if(isRoundTrip){
        totalDistance = distanceMiles * 2;
    }
    else{
        totalDistance = distanceMiles;
    }
console.log(`Total Distance: ${totalDistance}`);
    
while(milesTraveled + (fuelCapacity * mpg) < totalDistance){
    milesTraveled += fuelCapacity * mpg;
    stopCounter++;

    let currentCost = calculateFuelCost(calculateGallonsNeeded(milesTraveled,mpg), gasPrice);

    console.log(`Stop: ${stopCounter}`);
    console.log(`Current Miles: ${milesTraveled}`);
    console.log(`Current Cost: $${currentCost.toFixed(2)}`);
}

console.log("---Final Trip Summary---");
console.log(`Driver: ${driverName}`);
console.log(`Total Distance: ${totalDistance}`);
console.log(`Estimated Gallons Needed: ${calculateGallonsNeeded(totalDistance,mpg).toFixed(2)}`);
console.log(`Estimated Total Cost: $${calculateFuelCost(calculateGallonsNeeded(totalDistance,mpg), gasPrice).toFixed(2)}`);
