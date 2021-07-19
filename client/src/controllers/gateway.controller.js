const db = require("../models");
const Gateway = db.gateway;

// Create and Save a new Gateway
exports.create = (req, res) => {
  // Validate request
  //   if (!req.body.title) {
  //     res.status(400).send({ message: "Content can not be empty!" });
  //     return;
  //   }

  // Create a Gateway
  const gateway = new Gateway({
    name: req.body.name,
    IPAddress: req.body.IPAddress,
    serialNumber: req.body.serialNumber,
    devices: req.body.devices
  })


  // Save Gateway in the database
  gateway
    .save(gateway)
    .then(data => {
      res.send(data)
      console.log("Gateway added successfully!")
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Gateway."
      })
    })

}

// Retrieve all Gateways from the database.
exports.findAll = (req, res) => {

  Gateway.find({})
    .then(data => {
      res.send(data)
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving gateways."
      });
    });
}

// Find a single Gateway with an id
exports.findOne = (req, res) => {

}

// Update a Gateway by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id

  Gateway.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Gateway with id=${id}`
        })
      } else res.send({
        message: "Gateway was updated successfully.",
        id: id,
        body: data
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Gateway with id=" + id
      })
    })
}

// Delete a Gateway with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Gateway.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Gateway with id=${id}. Maybe Gateway was not found!`
        })
      } else {
        res.send({
          message: "Gateway was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Gateway with id=" + id
      })
    })
}

// Delete all Gateways from the database.
exports.deleteAll = (req, res) => {

}

// Find all published Gateways
exports.findAllPublished = (req, res) => {

}