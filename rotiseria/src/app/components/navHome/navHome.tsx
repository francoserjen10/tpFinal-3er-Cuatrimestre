'use client'
import Link from 'next/link';
import './navHome.css';
import React, { useState } from 'react';
import FormSaliente from '../formularioSaliente/formularioSaliente';

export const NavHome = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <nav className="menu">
            <ul className="items">
                <li>
                    <Link className='links' href="/home">INICIO</Link>
                </li>
                <li>
                    <Link className='links' href="/home">QUIENES SOMOS</Link>
                </li>
                <li>
<<<<<<< HEAD:rotiseria/src/app/components/nav/nav.tsx
                    <Link className='links' href="/home">MENUS</Link>
=======
                    <Link className='links' href="/menus">MENUS</Link>
>>>>>>> origin/featuredRuben-PagesUser&Admin:rotiseria/src/app/components/navHome/navHome.tsx
                </li>
                <li>
                    <Link className='links' href="/home">¿PREGUNTAS?</Link>
                </li>
                <li>
                    <Link className='links' href="/home#linkcontacto">CONTACTENOS</Link>
                </li>
            </ul>
            <div className='botonSesion'>
                <FormSaliente /> {/* Usa el componente Example como un componente aquí */}
            </div>
           
        </nav>
    );
};