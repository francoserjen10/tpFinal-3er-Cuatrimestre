import React, { useEffect, useState } from "react";
import "./cardsAdministrador.css";
import { MenusAdmin } from "./cardMenus";
import { CrearCards } from "./crearCards";
import { ActualizarProductos } from "./updateProduct";
import { EliminarProducto } from "./deleteProduct";
import { IProducto } from "@/app/model/product.model";
import { getAllProductos } from "@/app/services/productoService";

export const ModificacionesAdmin = () => {
  const [productos, setProductos] = useState<IProducto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productos = await getAllProductos();
        setProductos(productos);
      } catch (error) {
        console.error("error al mostrar los productos:", error);
      }
    };
    fetchProductos();
  }, []);

  const updateProductList = async (): Promise<IProducto[] | undefined> => {
    try {
      const nuevaLista = await getAllProductos();
      setProductos(nuevaLista);
      return nuevaLista;
    } catch (error) {
      console.error("error al actualizar la lista de los productos:", error);
    }
  };

  return (
    <div>
      <header className="presentacion">
        <h1>Modificacion de Cards</h1>
      </header>

      <main>
        <div className="contenedor">
          {/* Añadir */}
          <CrearCards updateProductList={updateProductList} />

          {/* Editar */}
          <ActualizarProductos />

          {/* Eliminar */}
          <EliminarProducto updateProductList={updateProductList} />
        </div>

        {/* Mostrar el mensaje */}
        <div className="contenedorMensaje">
          <div id="mensaje"></div>
        </div>

        {/* Productos */}
        <div className="contenedorProductos">
          <h2>Productos</h2>
          <div className="mostrarProductos" id="mostrarProductos">
            Aca muestro los productos
            <MenusAdmin productos={productos} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModificacionesAdmin;
