import React from 'react';
import './cardsAdministrador.css';
import { MenusAdmin } from './cardMenus';
import { CrearCards } from './crearCards';
import { ActualizarProductos } from './updateProduct';
import { EliminarProducto } from './deleteProduct';

export const CardsAdministrador = () => {
  return (
    <div>
      <header className='presentacion'>
        <h1>Modificacion de Cards</h1>
      </header>

      <main>
        <div className="contenedor">
          {/* Añadir */}
          <CrearCards />

          {/* Editar */}
          <ActualizarProductos/>
          
          {/* Eliminar */}
          <EliminarProducto/>

        </div>

        {/* Mostrar el mensaje */}
        <div className="contenedorMensaje">
          <div id="mensaje"></div>
        </div>

        {/* Productos */}
        <div className="contenedorProductos">
          <h2>Productos</h2>
          <div className="mostrarProductos" id="mostrarProductos">Aca muestro los productos

          <MenusAdmin />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardsAdministrador;