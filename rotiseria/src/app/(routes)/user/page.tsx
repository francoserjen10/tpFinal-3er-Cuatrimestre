"use client";
import { withRoles } from "@/app/HOC/withRoles";
import Link from "next/link";

const Page = () => {
  return (
    // Es pagina de prueba para el ruteo
    <div>
      <h1>Usuario</h1>


        <Link className="links" href="/user/menus">
          MENUS
        </Link>
    </div>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(Page, [2], "/home");
