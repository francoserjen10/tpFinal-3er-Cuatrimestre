import React from 'react';
import './cardsAdministrador.css';

export const CardsAdministrador = () => {
  return (
    <div>
      <header className='presentacion'>
        <h1>Modificacion de Cards</h1>
      </header>

      <main>
        <div className="contenedor">
          {/* Añadir */}
          <div>
            <h2>Añadir</h2>
            <form>
              <label>Nombre del producto</label>
              <input type="text" id="productoAñadir" name="nombreDelProducto" />

              <label>Valor del producto</label>
              <input type="number" id="valorAñadir" />

              <label>Existencia</label>
              <input type="number" id="existenciaAñadir" />

              <label>Url Imagen</label>
              <input type="text" id="ImagenAñadir" />
            
                <button className='botonesCards'>Añadir</button>
              
            </form>
          </div>

          {/* Editar */}
          <div>
            <h2>Editar</h2>
            <form>
              <label>Nombre del producto</label>
              <select id="productoEditar">
                <option value="">---</option>
              </select>

              <label>Atributo</label>
              <select id="atributoEditar">
                <option value="">---</option>
              </select>

              <label>Nuevo valor</label>
              <input type="text" id="nuevoAtributo" />

              <button className='botonesCards'>Editar</button>
            </form>
          </div>

          {/* Eliminar */}
          <div>
            <h2>Eliminar</h2>
            <form>
              <label>Nombre del producto</label>
              <select id="productoEliminar">
                <option value="">---</option>
              </select>
              <button className='botonesCards'>Eliminar</button>
            </form>
          </div>
        </div>

        {/* Mostrar el mensaje */}
        <div className="contenedorMensaje">
          <div id="mensaje"></div>
        </div>

        {/* Productos */}
        <div className="contenedorProductos">
          <h2>Productos</h2>
          <div className="mostrarProductos" id="mostrarProductos">Aca muestro los productos</div>
        </div>
      </main>
    </div>
  );
};

export default CardsAdministrador;