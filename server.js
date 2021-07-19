const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const corsOptions = {
  origin: "http://localhost:3000"
};

const gateways = require("./client/src/controllers/gateway.controller.js");

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Create a new Gateway
app.post("/api/gateways", gateways.create);

// Get All Gateways
app.get("/api/gateways", gateways.findAll);

// DELETE Gateway by id
app.delete("/api/gateways/:id", gateways.delete);

// UPDATE Gateway by id
app.put("/api/gateways/:id", gateways.update);

// set port, listen for requests
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

const db = require("./client/src/models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });