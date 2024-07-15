import React, { useEffect, useState } from "react";
import "./carritoTabla.css";
import { ICarrito } from "@/app/model/carrito";
import { createCarrito } from "@/app/services/carritoService";

export const CarritoTabla = () => {
    // Estado para almacenar los datos del carrito
    const [carrito, setCarrito] = useState<any[]>([]);
    // Estado para almacenar la opción seleccionada de envío
    const [envioSeleccionado, setEnvioSeleccionado] = useState("");

    useEffect(() => {
        // Obtener datos del sessionStorage al cargar el componente
        const cartData =
            JSON.parse(sessionStorage.getItem("carrito") || "{}") || [];

        const carritoActualizado = encontrarDuplicadosYAcumular(cartData);
        setCarrito(carritoActualizado);
    }, []);

    const createNuevoCarrito = async (): Promise<ICarrito | undefined> => {
        var idusuario = localStorage.getItem("idUsuario");
        var idusuarioInt = 0;
        console.log(idusuario);
        if(idusuario != null){
            var idusuarioInt: number = +idusuario;
        }
        const body = {
            id: 0,
            usuarioId: idusuarioInt,
          };
        try {
            const nuevoCarrito = await createCarrito(body);
            console.log(idusuarioInt);
            //setProductos(nuevaLista);
            console.log(nuevoCarrito);
            sessionStorage.setItem("carrito", "");
            return nuevoCarrito;
        } catch (error) {
            console.error("error al crear un nuevo carrito:", error);
        }
    };


    // Función para calcular el precio de envío según la opción seleccionada
    const calcularPrecioEnvio = () => {
        switch (envioSeleccionado) {
            case "retiro":
                return 0;
            case "motomandado":
                return 2500; // Ejemplo: costo fijo por motomandado
            default:
                return 0;
        }
    };

    // Función para calcular el subtotal
    const calcularSubtotal = () => {
        return carrito.reduce(
            (total, producto) => total + producto.price * producto.cantidad,
            0
        );
    };

    // Función para calcular el total a pagar
    const calcularTotal = () => {
        const subtotal = calcularSubtotal();
        const costoEnvio = calcularPrecioEnvio();
        return subtotal + costoEnvio;
    };

    // Manejar cambio en la selección de envío
    const handleEnvioChange = (e: any) => {
        setEnvioSeleccionado(e.target.value);
    };

    // Función para eliminar un producto del carrito
    const eliminarProducto = (index: any) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(index, 1); // Elimina el elemento en el índice especificado
        setCarrito(nuevoCarrito);
        sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Actualiza sessionStorage
    };

    // Función para encontrar duplicados y acumular cantidades
    const encontrarDuplicadosYAcumular = (productos: any) => {
        // Crear un mapa para almacenar productos únicos por su ID
        const mapaProductos = new Map();

        // Iterar sobre la lista de productos
        productos.forEach((producto: any) => {
            if (mapaProductos.has(producto.id)) {
                // Si el producto ya existe en el mapa, aumentar la cantidad
                const productoExistente = mapaProductos.get(producto.id);
                productoExistente.cantidad += producto.cantidad; // Sumar la cantidad
            } else {
                // Si el producto no existe en el mapa, agregarlo con su cantidad inicial
                mapaProductos.set(producto.id, { ...producto });
            }
        });

        // Convertir el mapa de vuelta a un array de objetos de productos únicos
        const productosUnicos = Array.from(mapaProductos.values());

        return productosUnicos;
    };

    // Función para aumentar la cantidad de un producto
    const aumentarCantidad = (index: any) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[index].cantidad++;
        setCarrito(nuevoCarrito);
        sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Actualiza sessionStorage
    };

    // Función para reducir la cantidad de un producto
    const reducirCantidad = (index: any) => {
        const nuevoCarrito = [...carrito];
        if (nuevoCarrito[index].cantidad > 1) {
            nuevoCarrito[index].cantidad--;
            setCarrito(nuevoCarrito);
            sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Actualiza sessionStorage
        } else {
            // Eliminar el producto si la cantidad es 0 o menos (aunque no debería ser negativa)
            nuevoCarrito.splice(index, 1);
            setCarrito(nuevoCarrito);
            sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Actualiza sessionStorage
        }
    };

    const handleCarritoCreation = () => {
        alert("Se compro")
        createNuevoCarrito;
    }

    return (
        <>
            <div className="carrito-bg">
                <div className="principal">
                    <div className="contenedor">
                        <section className="encabezado">
                            <h1 className="titulo">Carrito de compras</h1>
                        </section>

                        <section className="cuerpo">
                            <table>
                                <thead>
                                    <tr className="categorias">
                                        <th>foto</th>
                                        <th>nombre</th>
                                        <th>descripcion</th>
                                        <th>precio</th>
                                        <th>agregar/sacar</th>
                                        <th>eliminar</th>
                                    </tr>
                                </thead>
                                <tbody className="descripciones">
                                    {carrito.map((producto, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={producto.imgurl} alt={producto.name} />
                                            </td>
                                            <td>{producto.name}</td>
                                            <td>{producto.desc}</td>
                                            <td>${producto.price}</td>
                                            <td>
                                                <button
                                                    className="botonSumaResta"
                                                    onClick={() => reducirCantidad(index)}
                                                >
                                                    -
                                                </button>
                                                <button className="cantidad">
                                                    {producto.cantidad}
                                                </button>
                                                <button
                                                    className="botonSumaResta"
                                                    onClick={() => aumentarCantidad(index)}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="trash-button"
                                                    onClick={() => eliminarProducto(index)}
                                                >
                                                    <svg
                                                        className="trash-icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6l-1 14H6L5 6m5 0V4h4v2"></path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <div className="contenedorFinal">
                            <div className="customSelectWrapper">
                                <select
                                    className="contenedorOptions"
                                    value={envioSeleccionado}
                                    onChange={handleEnvioChange}
                                >
                                    <option>Seleccione envio</option>
                                    <option value="retiro">Retiro en sucursal($0)</option>
                                    <option value="motomandado">Motomandado ($2500)</option>
                                </select>
                            </div>
                            <span>SubTotal: ${calcularSubtotal()}</span>
                            <span>Total a pagar: ${calcularTotal()}</span>
                            <button className="botonPagar" type="button" onClick={() => createNuevoCarrito()}>
                                Pagar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
