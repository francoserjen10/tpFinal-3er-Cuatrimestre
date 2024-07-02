export const ActualizarProductos = () => {
  return (
    <>
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

          <button className="botonesCards">Editar</button>
        </form>
      </div>
    </>
  );
};
