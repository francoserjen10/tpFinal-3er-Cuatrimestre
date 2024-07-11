import './carritoTabla.css';

export const CarritoTabla = () => {
    return (
        <>

            <div className='principal'>
                <div className='contenedor'>
                    <section className='encabezado'>

                        <h1 className='titulo'>Carito de compras</h1>

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
                                        <button className="botonResta">-</button>
                                        <button className='cantidad'>1</button>
                                        <button className='botonSuma'>+</button>
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
                            </tbody >
                        </table>
                    </section>
                </div>

                <div className='contenedorFinal'>
                    <section className='cuerpoFinal'>
                        <table>
                            <thead>
                                <tr className='categoriasFinal'>
                                    <th>Metodo de Envio</th>
                                    <th>Forma de pago</th>
                                    <th>precio</th>
                                    <th>Pagar</th>

                                </tr>
                            </thead>

                            <tbody className='descripcionesFinal'>
                                <tr>
                                    <td>
                                        <select>
                                            <option value="">Motomandado</option>
                                            <option value="">Bicimandado</option>
                                            <option value="">Retiro en sucursal</option>
                                        </select>
                                    </td>
                                    <td><select>
                                            <option value="">Tarjeta</option>
                                            <option value="">Billetera virtual</option>
                                            <option value="">Efectivo</option>
                                        </select></td>
                                    <td className='precios'><p>subtotal: 1000</p><p>total:1000</p></td>
                                    <td><button className='botonPagar'>Pagar</button></td>
                                </tr>
                            </tbody >
                        </table>
                    </section>
                </div>


            </div >
        </>
    )
}

/* <tr><b>Total de items</b><td>items 3</td></tr>
                                        <tr><b>Subtotal</b><td>subt 100</td></tr>
                                        <tr><b>Total</b><td>totl 100</td></tr> */ 