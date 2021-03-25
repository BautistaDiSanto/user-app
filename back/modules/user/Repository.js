class Repository {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
    console.log("usuario agregado con nombre ", user.nombre);
    return user;
  }
  findById(id) {
    const user = this.users.find((user) => user.getId() == id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  }
  getAll() {
    return this.users;
  }
  removeUser(user) {
    const indexOfUser = this.users.findIndex((u) => u.getId() === user.getId());
    if (indexOfUser === -1) {
      return null;
    }
    this.users.splice(indexOfUser, 1);
    return user;
  }
  updateUser(user) {
    const indexOfUser = this.users.findIndex((u) => u.getId() === user.getId());
    if (indexOfUser === -1) {
      return null;
    }
    this.users[indexOfUser] = user;
    return user;
  }
}

module.exports = Repository;
