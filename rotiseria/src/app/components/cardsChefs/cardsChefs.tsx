import React from 'react';
import './cardsChefs.css'; // Estilos específicos para este componente

export const InfiniteCardSlider = () => {
  return (
    <div className='contenedorPrincipal'>
    <div className="wrapper">
      <h1>CHEFS PROGRAMING</h1>
      <ul className="carousel">
        <li className="card">
          <div className="img"><img src="../imagenes/imagenesChefs/franco.jpeg" alt="img" draggable={false} /></div>
          <h2>Franco Serjen</h2>
          <span>Maestro Pizzero</span>
        </li>
        
        <li className="card">
          <div className="img"><img src="../imagenes/imagenesChefs/ruben.jpeg" alt="img" draggable={false} /></div>
          <h2>Ruben Torres</h2>
          <span>Chef Profesional</span>
        </li>
        
        <li className="card">
          <div className="img"><img src="../imagenes/imagenesChefs/lucho.jpeg" alt="img" draggable={false} /></div>
          <h2>Lucho Rios</h2>
          <span>Experto En Pastas</span>
        </li>
      </ul>
      
    </div>
    </div>
  );
}

export default InfiniteCardSlider;
