/* eslint-disable prefer-promise-reject-errors */
import { IProducto } from '../model/product.model';
import clienteAxios from './axios';

export async function getAllProductos(): Promise<IProducto[]> {
    try {
        const response = await clienteAxios.get("/product");
        return response.data || [];
    } catch (Error) {
        console.error(Error)
        return [];
    }
};

export async function createProduct(formData: FormData): Promise<IProducto | string> {
    try {
        const response = await clienteAxios.post("/product/create-product", formData);
        return response.data || [];
    } catch (Error) {
        console.error(Error)
        return "Ocurrio un error al crear el producto";
    }
};

export async function deleteProductById(id:number): Promise<any> {
    try {
        const response = await clienteAxios.delete(`/product/${id}`);
        return response || [];
    } catch (Error) {
        console.error(Error)
        return "Ocurrio un error al eliminar el producto";
    } 
};