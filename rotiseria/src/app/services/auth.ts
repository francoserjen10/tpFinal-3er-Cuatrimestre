"use client"
import { IUsuario } from '../model/user.model';
import clienteAxios from './axios';

export async function login(body: { email: string; password: string }): Promise<boolean> {
    try {
        const response = await clienteAxios.post("/access/loginAccess", body);
        console.log("response", response)

        if (response && response.data && response.data.accessToken) {
            const token = response.data.accessToken;
            localStorage.setItem("accessToken", token);
            return true;
        } else {
            console.log("Error no accedio")
            return false
        }

    } catch (e) {
        alert("error en auths front");
        return false;
    }
}

export const getInformacionUsuario = async (): Promise<{ email: string; rolId: number }> => {
    const response = await clienteAxios.get("/usuarios/info");
    return response.data;
}

export async function registerUser(user: IUsuario): Promise<boolean> {
    try {
        const response = await clienteAxios.post("/access/createUser", user);
        const token = response.data.accessToken;
        localStorage.getItem("accessToken");
        return true;
    } catch (e) {
        alert("error al crear el usuario");
        return false;
    }
}