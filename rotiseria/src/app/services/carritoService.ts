import { ICarrito } from "../model/carrito";
import clienteAxios from "./axios";

export async function createCarrito(body: ICarrito): Promise<ICarrito | string> {
    console.log("carrito", body);
    try {
        const response = await clienteAxios.post("/usuario-carrito/create-usuario-carrito", body);
        return response.data || [];
    } catch (Error) {
        console.error(Error)
        return "Errooooorr!!!!! del front servicio al crear un carrito";
    }
};