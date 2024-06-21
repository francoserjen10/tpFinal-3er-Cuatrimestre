'use client';

import Link from 'next/link';
import './navHome.css';
import React, { useState } from 'react';


interface NavHomeProps {
  userName: string | null;
  setUserName: (name: string) => void;
}

export const NavHome: React.FC<NavHomeProps> = ({ userName, setUserName }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <nav className="menu">
      <ul className="items">
        <li>
          <Link className='links' href="/home">INICIO</Link>
        </li>
        <li>
          <Link className='links' href="/quienesSomos">QUIENES SOMOS</Link>
        </li>
        <li>
          <Link className='links' href="/menus">MENUS</Link>
        </li>
        <li>
          <Link className='links' href="/home">¿PREGUNTAS?</Link>
        </li>
        <li>
          <Link className='links' href="/home#linkcontacto">CONTACTENOS</Link>
        </li>
      </ul>
      <div className='botonSesion'>
        {userName ? (
          <p>Hola, {userName}</p>
        ) : (
          <button onClick={handleLoginClick} className='links'>Iniciar Sesión</button>
        )}
        {showLogin && (
          <FormSalienteNuevo setUserName={setUserName} show={showLogin} handleClose={handleClose}/>
        )}
      </div>
    </nav>
  );
};

export default NavHome;