'use client'
import Link from 'next/link';
import './navNormal.css';
import React, { useState } from 'react';

export const NavNormal = () => {
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
                    <Link className='links' href="/">QUIENES SOMOS</Link>
                </li>
                <li>
                    <Link className='links' href="/menus">MENUS</Link>
                </li>
                <li>
                    <Link className='links' href="/">¿PREGUNTAS?</Link>
                </li>
                <li>
                    <Link className='links' href="/home#linkcontacto">CONTACTENOS</Link>
                </li>
            </ul>
        </nav>
    );
};