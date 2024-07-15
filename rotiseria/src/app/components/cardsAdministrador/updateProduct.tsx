import { IProducto } from "@/app/model/product.model";
import { getAllProductos, updateProduct } from "@/app/services/productoService";
import { useEffect, useState } from "react";

export const ActualizarProductos = ({
  updateProductList,
}: {
  updateProductList: () => Promise<IProducto[] | undefined>;
}) => {
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [SelectedProduct, setSelectedProduct] = useState<IProducto | null>(
    null
  );
  const [fileState, setFileState] = useState<File | null>(null);

  const handleProductChange = (e: any) => {
    const productId = Number(e.target.value);
    const product = productos.find((p) => p.id === productId) || null;
    setSelectedProduct(product);
  };

  const handleInputChange = (e: any) => {
    if (SelectedProduct) {
      const { name, value } = e.target;
      setSelectedProduct({
        ...SelectedProduct,
        [name]: value,
      });
    }
  };

  // Esto tengo que manejar
  const handleFileProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileState(e.target.files[0]);
    }
  };

  const handleProductUpdate = async () => {
    if (!SelectedProduct || !SelectedProduct.id) return;

    const formData = new FormData();
    formData.append("data", JSON.stringify(SelectedProduct));
    if (fileState) {
      formData.append("file", fileState);
    }

    try {
      const productUpdateSuccessfully = await updateProduct(
        SelectedProduct.id,
        formData
      );
      alert("Producto actualizado con exito!");
      updateProductList();
      setSelectedProduct({
        name: "",
        description: "",
        price: 0,
        categoryId: "",
        urlImage: "",
      });
      setFileState(null);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

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

  return (
    <>
      <div>
        <h2>Editar</h2>
        <form>
          <label>Producto</label>

          <select
            id="productoEditar"
            value={SelectedProduct?.id ?? ""}
            onChange={handleProductChange}
          >
            <option value="">---</option>
            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <label>Nombre</label>
          <input
            type="text"
            id="nombreEditar"
            name="name"
            value={SelectedProduct?.name ?? ""}
            onChange={handleInputChange}
          />

          <label>Descripcion</label>
          <input
            type="text"
            id="descripcionEditar"
            name="description"
            value={SelectedProduct?.description ?? ""}
            onChange={handleInputChange}
          />

          <label>Precio</label>
          <input
            type="number"
            id="valorEditar"
            name="price"
            value={SelectedProduct?.price ?? ""}
            onChange={handleInputChange}
          />

          {/* Aca en categoria podria ponerlo en formato select, donde :
-Tengo que obtener todos los rubros,
-Recorrerlos,
-Asignarlos al select */}
          <label>Categoria</label>
          <input
            type="text"
            id="ImagenEditar"
            name="categoryId"
            value={SelectedProduct?.categoryId ?? ""}
            onChange={handleInputChange}
          />

          <label>Url Imagen</label>
          <input
            type="file"
            id="ImagenEditar"
            name="urlImage"
            // Aca tengo que obtener el valor
            onChange={handleFileProduct}
          />

          {/* Existencia seria parte de lo que tengo que hacer con lucho de si el producto essta disponible o no */}
          {/* <label>Existencia</label>
          <input type="number" id="existenciaEditar" /> */}

          <button
            className="botonesCards"
            type="button"
            onClick={() => handleProductUpdate()}
          >
            Editar
          </button>
        </form>
      </div>
    </>
  );
};
