'use client'
import Link from 'next/link';
import './navNormal.css';
import React from 'react';

export const NavNormal = () => {

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
                    <Link className='links' href="/">¿PREGUNTAS?</Link>
                </li>
                <li>
                    <Link className='links' href="/home#linkcontacto">CONTACTENOS</Link>
                </li>
            </ul>
        </nav>
    );
};