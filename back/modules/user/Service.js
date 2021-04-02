const User = require("./User.js");
const Repository = require("./Repository.js");

const Users = require('../../models/User.js')

const validateUser = (body) => {
  if (!body.nombre) throw new Error("nombre property missing");
  if (!body.apellido) throw new Error("apellido property missing");
  if (!body.mail) throw new Error("email property missing");
  if (!body.edad) throw new Error("edad property missing");
  if (!body.direccion) throw new Error("direccion property missing");
  if (!body.tarjetaCredito) throw new Error("tarjetaCredito property missing");
};

class Service {
  constructor() {
    this.userRepository = new Repository();
  }
  async test({firstName, lastName}) {
    const user = await Users.create({ firstName, lastName });
    return user
  }
  createUser(body) {
    try {
      validateUser(body);
      const newUser = new User(
        body.mail,
        body.nombre,
        body.apellido,
        body.edad,
        body.tarjetaCredito,
        body.direccion
      );
      return this.userRepository.addUser(newUser);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  getUserById(id) {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  getAllUsers() {
    try {
      return this.userRepository.getAll();
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = Service;
