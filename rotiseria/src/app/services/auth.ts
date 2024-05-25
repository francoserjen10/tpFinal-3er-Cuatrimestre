"use client"
import clienteAxios from './axios';

export async function login(body: { email: string; password: string }): Promise<boolean> {
    try {
        const response = await clienteAxios.post("/access/loginAccess", body);
        const token = response.data.accessToken;
        localStorage.setItem("accessToken", token);
        return true;
    } catch (e) {
        alert("error en auths front");
        return false;
    }
}

export const getInformacionUsuario = async (): Promise<{ email: string; rolId: number }> => {
    const response = await clienteAxios.get("/usuarios/info");
    return response.data;
}