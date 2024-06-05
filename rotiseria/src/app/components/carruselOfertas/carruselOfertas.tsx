import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './carruselOfertas.css';

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
                        <div className="name">Empanadas</div>
                        <div className="des">Empanadas de Jamon y Queso, Carne a cuchillo o caprese</div>
                        <button>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/fideosTuco.jpeg)" }}>
                    <div className="content">
                        <div className="name">Fideos con tuco</div>
                        <div className="des">Fideos con salsa bolognesa o salsa blanca,a eleccion</div>
                        <button>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/raviolesSalsa.jpeg)" }}>
                    <div className="content">
                        <div className="name">Ravioles con salsa</div>
                        <div className="des">Ravioles con salsa blanca o bolognesa a eleccion</div>
                        <button>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/pizzaBuena.jpeg)" }}>
                    <div className="content">
                        <div className="name">Pizza</div>
                        <div className="des">Pizza con verduras a eleccion</div>
                        <button>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/milanesa.jpg)" }}>
                    <div className="content">
                        <div className="name">Milanesa con papas fritas</div>
                        <div className="des">Milanesa de pollo o carne con papas fritas clasicas o rusticas a eleccion</div>
                        <button>Encargar</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(../imagenes/imagenesCarrusel/carne.jpg)" }}>
                    <div className="content">
                        <div className="name">Carne asada</div>
                        <div className="des">Marucha cocinada en parrila</div>
                        <button>Encargar</button>
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