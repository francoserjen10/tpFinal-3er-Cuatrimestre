"use client"
import { jwtDecode } from 'jwt-decode';
import clienteAxios from './axios';

export async function login(body: { email: string; password: string }) {
    const response = await clienteAxios.post('/login', {
        body
    });
    const token = response.data.accessToken;
    //Local storage es un objeto que tienen los navegadores para almacenar informacion(local storage != session storage)
    localStorage.setItem('accessToken', token);
}