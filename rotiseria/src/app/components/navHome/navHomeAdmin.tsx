"use client";
import Link from "next/link";
import "./navHomeAdmin.css";
import "./navHome.css";
import React from "react";

export const NavHomeAdmin = () => {
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
      {/* Aca debo cerrar sesion */}
      <div className="cerrarSesion">
        <button>Cerrar Sesion</button>
      </div>
    </nav>
  );
};
