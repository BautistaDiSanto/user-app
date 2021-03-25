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
    setError("")
    const user = {
      mail,
      nombre,
      apellido,
      edad,
      direccion,
      tarjetaCredito: tarjeta,
    };
    try {
      const response = await fetch(`${URL}/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        const errMessage = await response.text()
        setError(errMessage);
      }
    } catch (error) {
     setError(error.message) 
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={e => e.preventDefault()}>
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
        </form>
      </div>
    </div>
  );
}

export default App;
