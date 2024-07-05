import React from 'react';
import './carritoCompras.css';

const ShoppingCart: React.FC = () => {
    return (
        <div className="card">
            <div className='row'>

                <div className="col-md-8 cart">
                    <div className="title">
                    <div className="row">
                            <div className="col"><h4><b>Carrito de compras</b></h4></div>
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>
                    
                    <hr className="divider" />
                    <div className="item">

                        <div className="main">
                            <div><img className="imagenCarrito" src="https://i.imgur.com/1GrakTl.jpg" alt="Item 1" /></div>
                            <div className=" product-details">
                                <div className="titulo">Hamburguesa</div>
                                <div>Hamburguesa con jamon crudo</div>
                            </div>
                            <div className="quantity"> {/* Añadido text-center para centrar */}
                                <a>-</a><a>1</a><a>+</a>
                            </div>
                            <div className="col price">&euro; 44.00 <span className="close">&#10005;</span></div>
                        </div>
                        
                    </div>
                    <hr className="divider" />
                    {/* Otros elementos del carrito */}
                    <div className="back-to-shop"><a>&leftarrow; </a><span className="text-muted">Volver</span></div>
                </div>


                <div className="col-md-4 summary">
                    <div><h5><b>Resumen</b></h5></div>
                    <hr className="divider" />
                    <div className="row">
                        <div className="col">ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>Envio</p>
                        <select>
                            <option>Pedidos Ya &euro;5.00</option>
                            <option>Retiro en local &euro;00,00</option>
                        </select>
                        <p>Codigo de descuento</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <hr className="divider" />
                    <div className="row">
                        <div className="col">Precio Final</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn">Encagar</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
