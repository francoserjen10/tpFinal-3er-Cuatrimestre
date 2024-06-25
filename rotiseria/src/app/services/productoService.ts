/* eslint-disable prefer-promise-reject-errors */
import { IProducto } from '../model/product.model';
import clienteAxios from './axios';

export async function getAllProductos(): Promise<IProducto[]> {
    try{
        const response = await clienteAxios.get("/product");
        return response.data || [];
    } catch (Error){
        console.error(Error)
        return [];
    }
};
