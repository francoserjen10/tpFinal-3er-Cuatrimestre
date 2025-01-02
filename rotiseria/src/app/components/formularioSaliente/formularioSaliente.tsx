"use client";
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

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    name: "",
    lastName: "",
    dni: "",
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

  const validateInputs = () => {
    const newErrors = { email: "", password: "" };
    let hasError = false;

    if (!usuario.email) {
      newErrors.email = "El campo Email es obligatorio.";
      hasError = true;
    }

    if (!usuario.password) {
      newErrors.password = "El campo Contraseña es obligatorio.";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const validateRegisterInputs = () => {
    const newErrors = {
      name: "",
      lastName: "",
      dni: "",
      email: "",
      password: "",
    };
    let hasError = false;

    if (!usuarioRegister.name) {
      newErrors.name = "El campo Nombre es obligatorio.";
      hasError = true;
    }

    if (!usuarioRegister.lastName) {
      newErrors.lastName = "El campo Apellido es obligatorio.";
      hasError = true;
    }

    if (!usuarioRegister.dni) {
      newErrors.dni = "El campo DNI es obligatorio.";
      hasError = true;
    } else if (usuarioRegister.dni.toString().length > 8) {
      newErrors.dni = "El campo DNI no coincide con la cantidad de caracteres.";
      hasError = true;
    }

    if (!usuarioRegister.email) {
      newErrors.email = "El campo Email es obligatorio.";
      hasError = true;
    }

    if (!usuarioRegister.password) {
      newErrors.password = "El campo Contraseña es obligatorio.";
      hasError = true;
    }

    setRegisterErrors(newErrors);
    return !hasError;
  };

  const handleLogin = async () => {
    if (!validateInputs()) {
      return;
    }
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
    if (!validateRegisterInputs()) {
      return;
    }
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
          {registerErrors.name && (
            <span className="error">{registerErrors.name}</span>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            required
            value={usuarioRegister.lastName}
            onChange={(e) => handleChangeRegister(e)}
          />
          {registerErrors.lastName && (
            <span className="error">{registerErrors.lastName}</span>
          )}
          <input
            type="number"
            name="dni"
            placeholder="DNI"
            required
            value={usuarioRegister.dni}
            onChange={(e) => handleChangeRegister(e)}
          />
          {registerErrors.dni && (
            <span className="error">{registerErrors.dni}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={usuarioRegister.email}
            onChange={(e) => handleChangeRegister(e)}
          />
          {registerErrors.email && (
            <span className="error">{registerErrors.email}</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={usuarioRegister.password}
            onChange={(e) => handleChangeRegister(e)}
          />
          {registerErrors.password && (
            <span className="error">{registerErrors.password}</span>
          )}
          <button type="button" onClick={() => handleRegister()}>
            Registrarse
          </button>
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
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={usuario.password}
            onChange={(e) => handleChangeLogin(e)}
          />

          {errors.password && <span className="error">{errors.password}</span>}

          <button type="button" onClick={() => handleLogin()}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;
