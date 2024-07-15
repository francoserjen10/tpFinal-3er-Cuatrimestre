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
    console.log("formData", formData);
    try {
        const response = await clienteAxios.post("/product/create-product", formData);
        return response.data || [];
    } catch (Error) {
        console.error(Error)
        return "Errooooorr!!!!! del front servicio";
    }
};

export async function updateProduct(id: number, formData: FormData): Promise<IProducto | string> {
    try {
        // Aca va  el id pero tenog fomr data
        const response = await clienteAxios.put(`/product/${id}`, formData);
        return response.data || [];
    } catch (Error) {
        console.error(Error)
        return "Entre al retorno del servicio de update ERRORRR!!!"
    }
}

export async function deleteProductById(id: number): Promise<any> {
    try {
        const response = await clienteAxios.delete(`/product/${id}`);
        return response || [];
    } catch (Error) {
        console.error(Error)
        return "Ocurrio un error al eliminar el producto";
    }
};