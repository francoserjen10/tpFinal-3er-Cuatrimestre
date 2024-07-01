import React from 'react';
import './cardsChefs.css'; // Estilos específicos para este componente

export const InfiniteCardSlider = () => {
  return (
    <div className='contenedorPrincipal'>
    <div className="wrapper">
      <h1>CHEFS PROGRAMING</h1>
      <ul className="carousel">
        <li className="card">
          <div className="img"><img src="data:image/jpeg;base64,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" alt="img" draggable={false} /></div>
          <h2>Franco Serjen</h2>
          <span>Maestro Pizzero</span>
        </li>
        
        <li className="card">
          <div className="img"><img src="data:image/jpeg;base64,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" alt="img" draggable={false} /></div>
          <h2>Ruben Torres</h2>
          <span>Chef Profesional</span>
        </li>
        
        <li className="card">
          <div className="img"><img src="data:image/jpeg;base64,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" alt="img" draggable={false} /></div>
          <h2>Lucho Rios</h2>
          <span>Experto En Pastas</span>
        </li>
      </ul>
      
    </div>
    </div>
  );
}

export default InfiniteCardSlider;
