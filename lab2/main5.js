function Vehicle(type) {
    Vehicle.VehicleCount++;
    this.type = type;
}

Vehicle.VehicleCount=0;

Vehicle.prototype.drive = function () {
    console.log('Vehicle is driving');
};

var vehicle