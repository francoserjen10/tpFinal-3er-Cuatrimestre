export interface IUsuario {
  id?: number;
  name: string;
  lastName: string;
  dni: number;
  password: string;
  email: string;
  rolId?: number;
}
