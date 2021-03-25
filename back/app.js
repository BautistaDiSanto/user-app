const express = require("express");
const app = express();
const Service = require("./modules/user/Service.js");
var cors = require('cors')

const usersService = new Service();
const port = 3000;

app.use(express.json());
app.use(cors())

app.post("/user", (req, res) => {
  try {
    const user = usersService.createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/user/:id", (req, res) => {
  try {
    const user = usersService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//app.use(express.static(__dirname))

app.listen(port, () => {
  console.log("servidor a su servicio en el puerto", port);
});