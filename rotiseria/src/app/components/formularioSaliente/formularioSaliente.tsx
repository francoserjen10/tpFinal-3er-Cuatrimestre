'use client'
import React, { useState } from "react";
import "./formSaliente.css";
import { useRouter } from "next/navigation";
import { IUsuario } from "@/app/model/user.model";
import { login, registerUser } from "@/app/services/auth";

const FormularioBueno = () => {
  const router = useRouter();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const CerrarForm = () => {
    console.log("Botón de cerrado presionado");
    if (mostrarFormulario == false) {
      setMostrarFormulario(!mostrarFormulario);
    }
    console.log("Estado de mostrarFormulario:", !mostrarFormulario);
    document.getElementById("formSaliente")?.classList.toggle("hidden");
  };

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [usuarioRegister, setUsuarioRegister] = useState({
    name: "",
    lastName: "",
    dni: 0,
    email: "",
    password: "",
  });

  const handleChangeLogin = (e: any) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const body = {
      email: usuario.email,
      password: usuario.password,
    };
    const loginExitoso = await login(body);
    if (loginExitoso) {
      const jwt = require("jsonwebtoken");
      const token = localStorage.getItem("accessToken");
      const user: IUsuario = jwt.decode(token);

      if (user?.rolId === 1) {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } else {
      alert("Login fallido. Por favor, verifica tus credenciales.");
    }
  };

  const handleChangeRegister = (e: any) => {
    const { name, value } = e.target;
    setUsuarioRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const user: IUsuario = {
      name: usuarioRegister.name,
      lastName: usuarioRegister.lastName,
      dni: usuarioRegister.dni,
      email: usuarioRegister.email,
      password: usuarioRegister.password,
    };
    const registerExitoso = await registerUser(user);
    if (registerExitoso) {
      alert("usuario creado correctamente");
      setUsuarioRegister({
        name: "",
        lastName: "",
        dni: 0,
        email: "",
        password: "",
      });
    } else {
      alert("Error, no se creó el usuario");
    }
  };

  return (
    <div id="formSaliente" className="main hidden ">
      <input type="checkbox" id="chk" />
      <button className="botonCerrar" onClick={CerrarForm}>
        &times;
      </button>
      <div className="signup">
        <form className="formContainer">
          <label htmlFor="chk">Registrarse</label>

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={usuarioRegister.name}
            onChange={(e) => handleChangeRegister(e)}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            required
            value={usuarioRegister.lastName}
            onChange={(e) => handleChangeRegister(e)}
          />

          <input
            type="number"
            name="dni"
            placeholder="DNI"
            required
            value={usuarioRegister.dni}
            onChange={(e) => handleChangeRegister(e)}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={usuarioRegister.email}
            onChange={(e) => handleChangeRegister(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={usuarioRegister.password}
            onChange={(e) => handleChangeRegister(e)}
          />

          <button type="button" onClick={() => handleRegister()}>Registrarse</button>
        </form>
      </div>

      <div className="login">
        <form className="dflex">
          <label htmlFor="chk">Login</label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={usuario.email}
            onChange={(e) => handleChangeLogin(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={usuario.password}
            onChange={(e) => handleChangeLogin(e)}
          />

          <button type="button" onClick={() => handleLogin()}>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;
