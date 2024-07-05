import React, { useState } from 'react';
import './formSaliente.css';

const FormularioBueno = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  const CerrarForm = () => {
    console.log("Botón de sesión presionado");
    if(mostrarFormulario == false){
      setMostrarFormulario(!mostrarFormulario);
    }
    console.log("Estado de mostrarFormulario:", !mostrarFormulario);
    document.getElementById("formSaliente")?.classList.toggle("hidden");
  }; 
  return (
    <div id="formSaliente" className='main hidden '>
      <input type="checkbox" id="chk" />
      <button className="close-btn" onClick={CerrarForm}>&times;</button>
      <div className="signup">
        <form className="dflex">
          <label htmlFor="chk">Sign up</label>
          <input type="text" name="txt" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form className='dflex'>
          <label htmlFor="chk">Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;