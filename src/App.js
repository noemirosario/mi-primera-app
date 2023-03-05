import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Hola from "./componentes/Hola"
import Adios from "./componentes/Adios"
import Saludar from "./componentes/Saludar"


function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);
  
  useEffect (() => {
    console.log("total : " + contar);
  }, [contar]);

  const userName= "noemi r";
  const edad = 20;

  const user = {
    nombre: "noemi rosario",
    edad: 20,
    color: "rosa"
  }

  const saludarFn = (nombre) =>{
      console.log("hola " + nombre + " tiene " +edad + " años");

      // // TEMPLATE STRING
      console.log(`Hola ${nombre}, tiene ${edad} años`);
  }

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
    // setStateCar(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Saludar name="Noemi Rosario" age= "20"/> */}
        {/* <Saludar name={userName} age={edad}/> */}
        {/* <Saludar userInfo={user} saludarFn={saludarFn}/> */}
        <h2>
          el coche esta : {stateCar ? "encendido" : "apagado" }
        </h2>
        <h3>
          clicks : {contar}
        </h3>
        <button onClick={encenderApagar}>
          encender / apagar
        </button>

      </header>
    </div>
    
  );
}

export default App;
