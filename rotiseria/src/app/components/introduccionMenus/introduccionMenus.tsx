"use client";
import "./introduccionMenus.css";

const ClikearFiltro = () => {
  return (
    <>
      <button className="contenedorEleccion estiloEmpanadas">
        <p className="posicionTexto">Empanadas</p>
        <img
          src="../imagenes/imagenesFiltro/empanada/empanada.png"
          alt=""
        />
      </button>
    
      <button className="contenedorEleccion estiloEnsaladas">
        <p className="posicionTexto">Ensaladas</p>
        <img
          src="../imagenes/imagenesFiltro/ensalada/ensalada.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloCarnes">
        <p className="posicionTexto">Carnes</p>
        <img
          src="../imagenes/imagenesFiltro/carne/imagenCarne.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPastas">
        <p className="posicionTexto">Pastas</p>
        <img
          src="../imagenes/imagenesFiltro/pastas/imagenPastas.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloSalsas">
        <p className="posicionTexto">Salsas</p>
        <img
          src="../imagenes/imagenesFiltro/salsa/salsa.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloGuarniciones">
        <p className="posicionTexto">Guarniciones</p>
        <img
          src="../imagenes/imagenesFiltro/guarniciones/guarnision.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloBebidas">
        <p className="posicionTexto">Bebidas</p>
        <img
          src="../imagenes/imagenesFiltro/bebida/bebidas.png"
          alt=""
        />
      </button>

      <button className="contenedorEleccion estiloPizzas">
        <p className="posicionTexto">Pizzas</p>
        <img
          src="../imagenes/imagenesFiltro/pizza/pizza.png"
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
