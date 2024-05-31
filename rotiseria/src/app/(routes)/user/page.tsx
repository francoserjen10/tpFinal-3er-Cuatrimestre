"use client";
import { withRoles } from "@/app/HOC/withRoles";

const Page = () => {
  return (
    // Es pagina de prueba para el ruteo
    <div>
      <h1>Usuario</h1>
    </div>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(Page, [2], "/home");
