"use client";
import "./introduccionMenus.css";

const ClikearFiltro = () => {
  return (
    <>
      <button className="contenedorEleccion estiloCarnes">
        <p className="posicionTexto">Ensaladas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/ensalada/ensalada.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloBebidas">
        <p className="posicionTexto">Pastas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/pastas/imagenPastas.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Carnes</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/carne/imagenCarne.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Guarniciones</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/guarniciones/guarnision.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Bebidas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/cerveza/cervezaCorona1.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Salsas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/salsa/salsa.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Pizzas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/pizza/pizza.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas empanadas">
        <p className="posicionTexto">Empanadas</p>
        <img
          className="regularImagen"
          src="../imagenes/imagenesFiltro/empanada/empanada.png"
          alt=""
        />
      </button>
    </>
  );
};

export const IntroduccionMenus = () => {
  return (
    <>
      <div className="introduccion">
        {/* Esto es el boton del filtro de las comidas */}
        <ClikearFiltro />
      </div>
    </>
  );
};
