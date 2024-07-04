import React, { useState } from "react";
import Link from "next/link";
import "./navHome.css";
import FormularioBueno from "../formularioSaliente/formularioNuevo";

export const NavHome = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    console.log("Botón de sesión presionado");
    if(mostrarFormulario == true){ 
      setMostrarFormulario(!mostrarFormulario);
    }
    console.log("Estado de mostrarFormulario:", !mostrarFormulario);
    document.getElementById("formSaliente")?.classList.toggle("hidden");
    document.getElementById("formSaliente")?.classList.toggle("borroso");
  };
  
  
  return (
    <nav className="menu">
      <ul className="items">
        <li>
          <Link className="links" href="/home">
            INICIO
          </Link>
        </li>
        <li>
          <Link className="links" href="/quienesSomos">
            QUIENES SOMOS
          </Link>
        </li>
        <li>
          <Link className="links" href="/menus">
            MENUS
          </Link>
        </li>
        <li>
          <Link className="links" href="/home">
            ¿PREGUNTAS?
          </Link>
        </li>
        <li>
          <Link className="links" href="/home#linkcontacto">
            CONTACTENOS
          </Link>
        </li>
      </ul>
      <div className="botonSesion">
        <button className="btnForm" onClick={toggleFormulario}>Iniciar Sesión</button>
      </div>
      {mostrarFormulario && (  
        <div className={mostrarFormulario ? 'mainForm' : 'mainForm hidden'}>
          <FormularioBueno />
        </div>
      )}
    </nav>
  );
};

export default NavHome;
