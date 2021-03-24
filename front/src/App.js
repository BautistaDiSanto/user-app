import React from "react";

function App() {
  const URL = `http://localhost:3000`;
  const [error, setError] = React.useState(true);
  const [mail, setMail] = React.useState("hola");
  const [nombre, setNombre] = React.useState("hola");
  const [apellido, setApellido] = React.useState("hola");
  const [edad, setEdad] = React.useState("hola");
  const [direccion, setDireccion] = React.useState("hola");
  const [tarjeta, setTarjeta] = React.useState("hola");
  const hanldeOnSubmit = async () => {
    const user = {
      mail,
      nombre,
      apellido,
      edad,
      direccion,
      tarjetaCredito: tarjeta,
    };
    const response = await fetch(`${URL}/user`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        '{"mail":"carlos","nombre":"carl0os","apellido":"carlos","edad":"21654","direccion":"6541654","tarjetaCredito":"65416541"}',
    });
    console.log(JSON.stringify(user));
    console.log(response);
  };
  return (
    <div>
      <div>
        <p>mail</p>
        <input
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        ></input>
        <p>nombre</p>
        <input
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        ></input>
        <p>apellido</p>
        <input
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        ></input>
        <p>edad</p>
        <input
          value={edad}
          onChange={(e) => {
            setEdad(e.target.value);
          }}
        ></input>
        <p>direccion</p>
        <input
          value={direccion}
          onChange={(e) => {
            setDireccion(e.target.value);
          }}
        ></input>
        <p>tarjeta de credito</p>
        <input
          value={tarjeta}
          onChange={(e) => {
            setTarjeta(e.target.value);
          }}
        ></input>
        <button onClick={hanldeOnSubmit}>submit</button>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default App;
