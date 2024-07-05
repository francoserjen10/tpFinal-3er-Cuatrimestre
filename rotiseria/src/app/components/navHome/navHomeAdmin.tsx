"use client";
import Link from "next/link";
import "./navHomeAdmin.css";
import "./navHome.css";
import React from "react";

export const NavHomeAdmin: React.FC = () => {
  return (
    <nav className="menu">
      <ul className="items">
        <li>
          <Link className="links" href="/admin">
            INICIO
          </Link>
        </li>
        {/* <li>
          <Link className="links" href="/admin/quienesSomos">
            QUIENES SOMOS
          </Link>
        </li> */}
        <li>
          <Link className="links" href="/admin/menus">
            MENUS
          </Link>
        </li>
        {/* <li>
          <Link className="links" href="/admin/home">
            ¿PREGUNTAS?
          </Link>
        </li> */}
        {/* <li>
          <Link className="links" href="/admin/home#linkcontacto">
            CONTACTENOS
          </Link>
        </li> */}
      </ul>
      {/* Aca debo cerrar sesion */}
      <div className="cerrarSesion">
        <button>Cerrar Sesion</button>
      </div>
    </nav>
  );
};
