import Link from 'next/link';
import './nav.css';
import React, { useState } from 'react';
import FormSaliente from '../formularioSaliente/formularioSaliente';

export const Nav = () => {
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
                    <Link className='links' href="/home">MENUS</Link>
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