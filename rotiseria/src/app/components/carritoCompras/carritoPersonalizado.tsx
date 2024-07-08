import './carritoPersonalizado.css';

export const CarritoPersonalizado = () => {
    return (
        <>
            <div className="contenedorCarrito">
                <div className="row">
                    <div className="col-md-8 carrito">
                        <div className="presentacion">
                            <h2>Carrito de compras</h2>
                            <div className='cantidadItems'>items: 3</div>
                        </div>
                        <hr className="lineaDivisoria" />

                        <div className="item">
                            <div className="main">
                                <div className="hilera">
                                    <div><img src='' className="imagenProducto" alt="Imagen del producto" /></div>
                                    <div className="detalleProductos">
                                        <div className="titulo">Hamburguesa</div>
                                        <div>Hamburguesa con jamon crudo</div>
                                    </div>
                                    <div className="cantidad">
                                        <a>-</a><a>1</a><a>+</a>
                                    </div>
                                    <div className="precio">&euro; 44.00 <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contenedorEncargue'>
                
            </div>
        </>
    )
}

export default CarritoPersonalizado;
