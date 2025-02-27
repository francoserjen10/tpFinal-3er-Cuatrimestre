"use client";
import React, { useEffect, useState } from "react";
import "./navBar.css";
import FormularioBueno from "../formularioSaliente/formularioSaliente";
import { useRouter } from "next/navigation";
import { IUsuario } from "@/app/model/user.model";

export const NavBar = () => {
  const [rolUser, setRolUser] = useState<number | null>(null);
  const router = useRouter();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  const toggleFormulario = () => {
    console.log("Botón de sesión presionado");
    if (mostrarFormulario == true) {
      setMostrarFormulario(!mostrarFormulario);
    }
    console.log("Estado de mostrarFormulario:", !mostrarFormulario);
    document.getElementById("formSaliente")?.classList.toggle("hidden");
  };

  const logOut = () => {
    try {
      localStorage.removeItem("accessToken");
      setRolUser(null);
      router.push("/home");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const jwt = require("jsonwebtoken");

    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const user: IUsuario = jwt.decode(token);
        console.log("Este es e navbaaarrr", user);

        if (user?.rolId === 1) {
          setRolUser(1);
        } else if (user?.rolId === 2) {
          setRolUser(2);
        } else if (user?.rolId === null) {
          setRolUser(null);
        }
      }
    } catch (error) {
      console.error("error al mostrar no se que:", error);
      //  probar por aca a ver
      setRolUser(null);
    }
  }, []);

  return (
    <nav className="menu">
      <ul className="items">
        {/* home */}
        {rolUser === null && (
          <>
            <li onClick={() => router.push("/home")}>
              <p className="links">INICIO</p>
            </li>
            <li onClick={() => router.push("/home/quienesSomos")}>
              <p className="links">QUIENES SOMOS</p>
            </li>
            <li onClick={() => router.push("/home/menus")}>
              <p className="links">MENUS</p>
            </li>
            <li onClick={() => router.push("/home#linkcontacto")}>
              <p className="links">CONTACTENOS</p>
            </li>
          </>
        )}

        {/* Admin */}
        {rolUser === 1 && (
          <>
            <li onClick={() => router.push("/admin")}>
              <p className="links">MODIFICACIONES</p>
            </li>
            {/* <li onClick={() => router.push("/admin/administracion")}>
              <p className="links">ADMINISTRACION</p>
            </li> */}
          </>
        )}

        {/* User */}
        {rolUser === 2 && (
          <>
            <li onClick={() => router.push("/user")}>
              <p className="links">INICIO</p>
            </li>
            <li onClick={() => router.push("/user/quienesSomos")}>
              <p className="links">QUIENES SOMOS</p>
            </li>
            <li onClick={() => router.push("/user/menus")}>
              <p className="links">MENUS</p>
            </li>
            {/* Puede ser este <p> en el navBar o un boton con la imagen de un carrito */}
            <li onClick={() => router.push("/user#linkcontacto")}>
              <p className="links">CONTACTENOS</p>
            </li>

            <div className="carrito">
              <button
                className="imagenBoton"
                onClick={() => router.push("/user/carrito")}
              >
                <img
                  src="../imagenes/imagenBoton/imagenCarrito.png"
                  alt="Imagen"
                />
              </button>
            </div>
          </>
        )}
      </ul>

      {rolUser === null && (
        <div className="botonSesion">
          <button className="imagenBoton" onClick={toggleFormulario}>
            <img src="../imagenes/imagenBoton/imagenLogin.png" alt="Imagen" />
          </button>
          {mostrarFormulario && (
            <div className={mostrarFormulario ? "mainForm" : "mainForm hidden"}>
              {/* Aca tambien se importa */}
              <FormularioBueno />
            </div>
          )}
        </div>
      )}

      {rolUser !== null && (
        <>
          <div className="cerrarSesion">
            <button onClick={toggleLogoutPopup}>
              <img src="../imagenes/imagenBoton/imagenLogin.png" alt="Imagen" />
            </button>
            {showLogoutPopup && (
              <div className="popup">
                <p>¿Estás seguro de que quieres cerrar sesión?</p>
                <div className="botonesPopup">
                  <button onClick={logOut}>Cerrar sesión</button>
                  <button onClick={toggleLogoutPopup}>Cancelar</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
