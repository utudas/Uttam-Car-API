'use strict';

var utils = require('../utils/writer.js');
var Vehicle = require('../service/VehicleService');

module.exports.drive_state = function drive_state (req, res, next) {
  var id = req.swagger.params['id'].value;
  Vehicle.drive_state(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vehicleGET = function vehicleGET (req, res, next) {
  Vehicle.vehicleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
