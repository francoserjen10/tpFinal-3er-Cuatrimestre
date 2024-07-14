import './carritoTabla.css';

export const CarritoTabla = () => {
    return (
        <>
         <div className='carrito-bg'>
            <div className='principal'>
                <div className='contenedor'>
                    <section className='encabezado'>
                        <h1 className='titulo'>Carrito de compras</h1>
                    </section>

                    <section className='cuerpo'>
                        <table>
                            <thead>
                                <tr className='categorias'>
                                    <th>foto</th>
                                    <th>item</th>
                                    <th>nombre</th>
                                    <th>descripcion</th>
                                    <th>precio</th>
                                    <th>agregar/sacar</th>
                                    <th>eliminar</th>
                                </tr>
                            </thead>
                            <tbody className='descripciones'>
                                <tr>
                                    <td><img src="" alt="" /></td>
                                    <td>1</td>
                                    <td>Hamburguesa</td>
                                    <td>Hamburguesa con papas fritas</td>
                                    <td>$1000</td>
                                    <td>
                                        <button className="botonSumaResta">-</button>
                                        <button className='cantidad'>1</button>
                                        <button className='botonSumaResta'>+</button>
                                    </td>
                                    <td>
                                        <button className="trash-button">
                                            <svg className="trash-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6l-1 14H6L5 6m5 0V4h4v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <div className="contenedorFinal">
                        <div className="customSelectWrapper">
                            <select className="contenedorOptions">
                                <option>Seleccione envio</option>
                                <option value="retiro">Retiro en sucursal($0)</option>
                                <option value="motomandado">Motomandado ($2500)</option>
                            </select>
                        </div>
                        <span>SubTotal: $1000</span>
                        <span>Total a pagar: $1000</span>
                        <button className="botonPagar">Pagar</button>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
