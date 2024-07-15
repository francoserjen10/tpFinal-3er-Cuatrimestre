'use client'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './carruselOfertas.css';
import router from 'next/router';

const Carousel: React.FC = () => {
    const handleNextClick = () => {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        if (slide && items.length > 0) {
            slide.appendChild(items[0]);
        }
    };

    const handlePrevClick = () => {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        if (slide && items.length > 0) {
            slide.prepend(items[items.length - 1]);
        }
    };

    return (
        <div className="container">
            <div className="slide">
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/empanadas.jpeg)" }}>
                    <div className="content">
                        <h1 className="titulo">Empanadas</h1>
                        <h6 className="descripcion">Empanadas de Jamon y Queso, Carne a cuchillo o caprese</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/fideosTuco.jpeg)" }}>
                    <div className="content">
                        <h1 className="titulo">Fideos con tuco</h1>
                        <h6 className="descripcion">Fideos con salsa bolognesa o salsa blanca,a eleccion</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/raviolesSalsa.jpeg)" }}>
                    <div className="content">
                        <h1 className="titulo">Ravioles con salsa</h1>
                        <h6 className="descripcion">Ravioles con salsa blanca o bolognesa a eleccion</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/pizzaBuena.jpeg)" }}>
                    <div className="content">
                        <h1 className="titulo">Pizza</h1>
                        <h6 className="descripcion">Pizza con verduras a eleccion</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/milanesa.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Milanesa con papas fritas</h1>
                        <h6 className="descripcion">Milanesa de pollo o carne con papas fritas clasicas o rusticas a eleccion</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/carne.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Carne asada</h1>
                        <h6 className="descripcion">Marucha cocinada en parrila</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>

                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/hamburguesa.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Hamburguesa</h1>
                        <h6 className="descripcion">Hamburguesa con aji picante</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/pizza.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Pizza con aceitunas</h1>
                        <h6 className="descripcion">Pizza con salsa y queso</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>  

                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/carne1.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Bistec asado</h1>
                        <h6 className="descripcion">Bistec asado con barbacoa</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>

                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/papasFritas.jpg)" }}>
                    <div className="content">
                        <h1 className="titulo">Papas Fritas</h1>
                        <h6 className="descripcion">Papas fritas con guarnicion</h6>
                        <button className='botonEncargar'>Encargar</button>
                    </div>
                </div>

            </div>

            <div className="button">
                <button className="prev" onClick={handlePrevClick}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={handleNextClick}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Carousel;