'use client';

import React, { useState } from 'react';
import './formSaliente.css';
import { IUsuario } from '@/app/model/user.model';
import { getInformacionUsuario, login, registerUser } from '@/app/services/auth';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

interface FormSalienteProps {
  setUserName: (name: string) => void;
  show: boolean;
  handleClose: () => void;
}

function FormSalienteNuevo({ setUserName, show, handleClose }: FormSalienteProps) {
  const mostrarAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registrado",
      html: "<p>Usuario <b>Nombre del usuario creado</b> creado con éxito!</p>",
    });
  };

  const [register, setRegister] = useState(false);

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

  const router = useRouter();

  const handleChangeLogin = (e: any) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeRegister = (e: any) => {
    const { name, value } = e.target;
    setUsuarioRegister((prevState) => ({
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
      const userData = await getInformacionUsuario();
      setUserName(userData?.nombre);  // Asumiendo que la respuesta contiene el nombre del usuario
      if (userData?.rolId === 1) {
        router.push("/admin");
      } else {
        router.push("/user");
      }
      handleClose();  // Cerrar el modal después del login exitoso
    } else {
      alert("Login fallido. Por favor, verifica tus credenciales.");
    }
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
      mostrarAlert();
      setUsuarioRegister({
        name: "",
        lastName: "",
        dni: 0,
        email: "",
        password: "",
      });
      toggleForms("login");
    } else {
      alert("Error, no se creó el usuario");
    }
  };

  const toggleForms = (val: string) => {
    setRegister(val === "register");
  };

  const handleLoginAndToggle = () => {
    toggleForms("login");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="form-overlay">
      <div className="form-saliente-main-slide">
        <input type="checkbox" id="chk" aria-hidden="true" className="form-saliente-chk" />

        <div className="form-saliente-signup">
          <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
            <label htmlFor="chk" aria-hidden="true" className="form-saliente-label">Sign up</label>
            <input type="text" name="name" placeholder="User name" required className="form-saliente-input" value={usuarioRegister.name} onChange={handleChangeRegister} />
            <input type="email" name="email" placeholder="Email" required className="form-saliente-input" value={usuarioRegister.email} onChange={handleChangeRegister} />
            <input type="password" name="password" placeholder="Password" required className="form-saliente-input" value={usuarioRegister.password} onChange={handleChangeRegister} />
            <button className="form-saliente-button" type="submit">Sign up</button>
          </form>
        </div>

        <div className="form-saliente-login">
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <label htmlFor="chk" aria-hidden="true" className="form-saliente-label">Login</label>
            <input type="email" name="email" placeholder="Email" required className="form-saliente-input" value={usuario.email} onChange={handleChangeLogin} />
            <input type="password" name="password" placeholder="Password" required className="form-saliente-input" value={usuario.password} onChange={handleChangeLogin} />
            <button className="form-saliente-button" type="submit">Login</button>
          </form>
        </div>
        <button onClick={handleClose} className="close-button">X</button>
      </div>
    </div>
  );
}

export default FormSalienteNuevo;