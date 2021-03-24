import Service from "./Service.js";

const usersService = new Service();

const bodyFalso = {
  nombre: "lucas",
  apellido: "rodriguez",
  password: "essecreta",
  edad: 21,
  tarjetaCredito: 1231541231,
  direccion: "calle falsa 123",
  mail: "lucas@capo"
};

try {
  const lucas = usersService.createUser(bodyFalso);
  const buscarLucas = usersService.getUserById(lucas.getId());
  usersService.getUserById(-1);
  console.log("LUCAS EN BASE DE DATOS", buscarLucas);
} catch (error) {
  console.warn(error.message);
}
