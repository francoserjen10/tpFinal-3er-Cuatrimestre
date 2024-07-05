import { IProducto } from "@/app/model/product.model";
import { createProduct } from "@/app/services/productoService";
import { useState } from "react";

export const CrearCards = () => {
  const [productState, setProductState] = useState<IProducto>({
    name: "",
    description: "",
    price: 0,
    categoryId: "",
    urlImage: "",
  });

  const [fileState, setFileState] = useState<File | null>(null);

  // Manejo los cambios de los inputs
  const handleChangeProduct = (e: any) => {
    const { name, value } = e.target;
    setProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejo los cambios del input de imagen
  const handleFileProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
   if(e.target.files && e.target.files[0]) {
    setFileState(e.target.files[0]);
   }
  }

  const handleProductCreation = async (e: React.FormEvent) => {
   e.preventDefault();
   const formData = new FormData();
   formData.append('data', JSON.stringify(productState));
   if(fileState) {
     formData.append('file', fileState);
   }
    
   const productCreateSuccessfully = await createProduct(formData);
   if (productCreateSuccessfully) {
     setProductState({
       name: "",
       description: "",
       price: 0,
       categoryId: "",
       urlImage: "",
     });
     setFileState(null);
   } else {
     alert("Error, no se creo el producto");
   }
  };
  
  return (
    <>
      <div>
        <h2>Añadir</h2>
        <form onSubmit={handleProductCreation}>
          <label>Nombre del producto</label>
          <input 
          type="text"
          id="productoAñadir"
          name="name"
          value={productState.name}
          onChange={handleChangeProduct}  />

          <label>Descripcion</label>
          <input 
          type="text" 
          id="descripcionAñadir"
          name="description"
          value={productState.description}
          onChange={handleChangeProduct}
           />

          <label>Precio</label>
          <input 
          type="number" 
          id="valorAñadir"
          name="price"
          value={productState.price}
          onChange={handleChangeProduct} />

          {/* Aca en categoria podria ponerlo en formato select, donde :
-Tengo que obtener todos los rubros,
-Recorrerlos,
-Asignarlos al select */}
          <label>Categoria</label>
          <input 
          type="text" 
          id="ImagenAñadir"
          name="categoryId"
          value={productState.categoryId}
          onChange={handleChangeProduct} />

          <label>Url Imagen</label>
          <input 
          type="file" 
          id="ImagenAñadir"
          name="urlImage"
          onChange={handleFileProduct} />

          {/* Existencia seria parte de lo que tengo que hacer con lucho de si el producto essta disponible o no */}
          {/* <label>Existencia</label>
          <input type="number" id="existenciaAñadir" /> */}

          <button
            className="botonesCards"
            type="submit"
          >
            Añadir
          </button>
        </form>
      </div>
    </>
  );
};
