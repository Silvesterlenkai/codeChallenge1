function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const  pointsPerKmOverLimit = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const kmOverLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmOverLimit/ kmPerDemeritPoint);
        if (demeritPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
        return demeritPoints;
    }
}

// Test the function
const speed = parseFloat(prompt("Enter the speed of the car in km/h:"));
const points = calculateDemeritPoints(speed);
const time = 80;
calculateDemeritPoints(time)