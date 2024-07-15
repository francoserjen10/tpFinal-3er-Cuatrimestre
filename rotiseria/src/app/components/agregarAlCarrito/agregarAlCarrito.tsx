import React from 'react';
import Button from "react-bootstrap/esm/Button";

interface AgregarAlCarritoProps {
    id: number;
    name: string;
    price: number;
    desc: string;
    imgurl: string;
    cantidad: number;
    addToCart: (product: { id: number; name: string, price: number, desc: string, imgurl: string, cantidad: number }) => void;
}

const AgregarAlCarrito: React.FC<AgregarAlCarritoProps> = ({ id, name, price, desc, imgurl, cantidad, addToCart }) => {
    const handleClick = () => {
        const product = { id, name, price, desc, imgurl, cantidad };
        addToCart(product);
        alert(`Producto ${name} con agregado al carrito`);
    };

    return (
        <Button onClick={handleClick}>
            Agregar al carrito
        </Button>
    );
}

export default AgregarAlCarrito;