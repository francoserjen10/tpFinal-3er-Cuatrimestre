import React from 'react';
import Button from "react-bootstrap/esm/Button";

interface AgregarAlCarritoProps {
    id: number;
    name: string;
    price: number;
    addToCart: (product: { id: number; name: string; price: number }) => void;
}

const AgregarAlCarrito: React.FC<AgregarAlCarritoProps> = ({ id, name, price, addToCart }) => {
    const handleClick = () => {
        const product = { id, name, price };
        addToCart(product);
        alert(`Producto ${name} con ID ${id} agregado al carrito`);
    };

    return (
        <Button onClick={handleClick}>
            Agregar al carrito
        </Button>
    );
}

export default AgregarAlCarrito;