"use client";
import "./cardMenus.css";
// import { getAllProductos } from "@/app/services/productoService";
// import { useEffect, useState } from "react";
import { IProducto } from "@/app/model/product.model";

export const MenusAdmin = ({ productos }: {productos: IProducto[]}) => {


  return (
    <>
      <div className="productosContainer">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img
              src={producto.urlImage}
              alt={`Imagen de ${producto.name}`}
              className="card-img"
            />
            <div className="card-content">
              <h2 className="cardTitulo">{producto.name}</h2>
              <p className="cardTexto">{producto.description}</p>

              <div className="updateCardBoton">
                <button></button>
                {/*aca se agregar Actualizar el producto*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
