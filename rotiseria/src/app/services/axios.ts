/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

const createClient = () => {
    //Me aseguro de acceder al local storage cuando estoy del lado del cliente
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let token = null;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem("accessToken");
    }
    const cliente = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return cliente;
}

const clienteAxios = createClient();

export default clienteAxios;
