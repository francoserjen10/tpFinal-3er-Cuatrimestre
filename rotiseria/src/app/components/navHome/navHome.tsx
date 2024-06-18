"use client";
import Link from "next/link";
import "./navHome.css";
import React, { useState } from "react";
import FormSaliente from "../formularioSaliente/formularioSaliente";

export const NavHome = () => {
    const [showForm, setShowForm] = useState(false);

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
                <FormSaliente />
            </div>
        </nav>
    );
};