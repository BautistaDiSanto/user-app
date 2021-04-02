const express = require("express");
const app = express();
const Service = require("./modules/user/Service.js");
const sequelize = require('./database/connection.js');
require('./models/User.js');
var cors = require('cors')

const usersService = new Service();
const port = 3000;

app.use(express.json());
app.use(cors())

app.post("/test", async (req, res) => {
  try {
    const user = await usersService.test(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
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

app.get("/user", (req, res) => {
  try {
    const users = usersService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
//app.use(express.static(__dirname))

app.listen(port, () => {
  console.log("servidor a su servicio en el puerto", port);
});
