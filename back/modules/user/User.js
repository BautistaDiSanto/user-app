class User {
  constructor(mail, nombre, apellido, edad, tarjetaCredito, direccion) {
    this.setMail(mail);
    this.setNombre(nombre);
    this.setApellido(apellido);
    this.setEdad(edad);
    this.setDireccion(direccion);
    this.setTarjetaCredito(tarjetaCredito);
    this.id = Math.floor(Math.random() * 10000);
  }

  setMail(mail) {
    this.mail = mail;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }
  setEdad(edad) {
    this.edad = edad;
  }
  setDireccion(direccion) {
    this.direccion = direccion;
  }
  setTarjetaCredito(tarjetaCredito) {
    this.tarjetaCredito = tarjetaCredito;
  }
  getMail() {
    return this.mail;
  }
  getPassword() {
    return this.password;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getDireccion() {
    return this.direccion;
  }
  getTarjetaCredito() {
    return this.tarjetaCredito;
  }
  getId() {
    return this.id;
  }
}

module.exports = User;
