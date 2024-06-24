import React, { useState } from "react";
import Link from "next/link";
import "./navHome.css";
import FormularioBueno from "../formularioSaliente/formularioNuevo";

export const NavHome = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    console.log("Botón de sesión presionado");
    setMostrarFormulario(!mostrarFormulario);
    console.log("Estado de mostrarFormulario:", !mostrarFormulario);
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
        <button onClick={toggleFormulario}>Sesión</button>
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
