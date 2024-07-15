"use client";
import AgregarAlCarrito from "../agregarAlCarrito/agregarAlCarrito";
import "./cardMenus.css";
import { getAllProductos } from "@/app/services/productoService";
import { useEffect, useState } from "react";
import { IProducto } from "@/app/model/product.model";

export const MenusUser = () => {
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [cart, setCarrito] = useState<IProducto[]>(() => {
    // Obtener el carrito inicial desde sessionStorage
    const storedCart = sessionStorage.getItem("carrito");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productos = await getAllProductos();
        setProductos(productos);
      } catch (error) {
        console.error("Error al mostrar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    // Actualizar sessionStorage cada vez que el carrito cambie
    sessionStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (producto: IProducto) => {
    setCarrito([...cart, producto]);
  };

  return (
    <>
      <div className="productosContainer">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img
              src={producto.urlImage || "../imagenes/imagenesFiltro/nofoto.png"}
              alt={`Imagen de ${producto.name}`}
              className="card-img"
            />
            <div className="cardContent">
              <h2 className="cardTitulo">{producto.name}</h2>
              <p className="cardTexto">{producto.description}</p>

              <div className="cardBoton">
                <AgregarAlCarrito
                  id={producto.id}
                  name={producto.name}
                  price={producto.price}
                  desc={producto.description}
                  imgurl={producto.urlImage || "../imagenes/imagenesFiltro/nofoto.png"}
                  cantidad={1}
                  addToCart={agregarAlCarrito}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Carrito:</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
