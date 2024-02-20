const resources = require('./../../resources/model');

const Gpio = require('onoff').Gpio;


let actuator1, actuator2;
let model = resources.pi.actuators.leds;
let pluginName = resources.pi.actuators.leds[1].name + ", " + resources.pi.actuators.leds[2].name;

function connectHardware() {
	actuator1 = new Gpio(model[1].gpio, 'out');
	actuator1.watch(function (err, value) {
		model.value = !!value;
	});
	actuator2 = new Gpio(model[2].gpio, 'out');
	actuator2.watch(function (err, value) {
		model.value = !!value;
	});
}

exports.start = function (params) {
	connectHardware();
	console.log("starting " + pluginName + " plugin");
};

// TODO 1: Complete the ledsPlugin!
exports.stop = function() {
	actuator1.write(0);
	actuator1.unexport();
	actuator2.write(0);
	actuator2.unexport();
}

exports.switchOnOff = {
    1: function (value) {
        // turn LED 1 on or off based on value
		if (value) {
			actuator1.write(1);
			console.log("led1 working");
		}
		else {
			actuator1.write(0);
			console.log("led1 off");
		}
    },
    2: function (value) {
        // turn LED 2 on or off based on value
		if (value) {
			actuator2.write(1);
			console.log("led2 working");
		}
		else {
			actuator2.write(0);
			console.log("led2 off");
		}
    }
}
