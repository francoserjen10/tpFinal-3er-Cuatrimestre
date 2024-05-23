"use client"
import { jwtDecode } from 'jwt-decode';
import clienteAxios from './axios';

export async function login(body: { email: string; password: string }): Promise<boolean> {
    try {
        const response = await clienteAxios.post('/login', body);

        const token = response.data.accessToken;

        //  Local storage es un objeto que tienen los navegadores para almacenar informacion(local storage != session storage)
        localStorage.setItem('accessToken', token);

        return true;
    } catch (error) {
        return false;
    }
}

export const getInformacionUsuario = async (): Promise<{ name: string; lastName: string; role: number }> => {
    const response = await clienteAxios.get("/usuarios/info");
    return response.data;
}