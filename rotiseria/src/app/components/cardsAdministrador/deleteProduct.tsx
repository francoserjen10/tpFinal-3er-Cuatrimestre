import { IProducto } from "@/app/model/product.model";
import {
  deleteProductById,
  getAllProductos,
} from "@/app/services/productoService";
import { useEffect, useState } from "react";

export const EliminarProducto = ({
  updateProductList,
}: {
  updateProductList: () => Promise<IProducto[] | undefined>;
}) => {
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [SelectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

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

  const handleDeleteProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (SelectedProductId !== null) {
      const response = await deleteProductById(SelectedProductId);
      if (response) {
        const updatedProducts = await updateProductList();
        setProductos(updatedProducts || []);
        setSelectedProductId(null);
      } else {
        console.log("Hubo un error al eliminar el producto!!!!!!!");
      }
    }
  };

  return (
    <>
      <div>
        <h2>Eliminar</h2>
        <form onSubmit={handleDeleteProduct}>
          <label>Nombre del producto</label>
          <select
            id="productoEliminar"
            //   Aca se utiliza un operador llamado de coalescencia. A diferencia de un operador ternario, permite darle un valor por defecto si el valor de la izquierda (SelectedProductId) es null o undefined
            value={SelectedProductId ?? ""}
            // Aca se utiliza esto para manejar los cambios de valores de id que el usuario va a proporsionar cada vez que clickee un producto
            // (Number(e.target.value)) Esto conviete el valor del select en un numero
            onChange={(e) => setSelectedProductId(Number(e.target.value))}
          >
            <option value="">---</option>
            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <button type="submit" className="botonesCards">
            Eliminar
          </button>
        </form>
      </div>
    </>
  );
};
