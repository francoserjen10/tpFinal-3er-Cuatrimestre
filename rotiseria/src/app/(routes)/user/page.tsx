"use client";
// import { withRoles } from "@/app/components/HOC/withRoles";
import { useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);

  return (
    // Es pagina de prueba para el ruteo
    <div>
      <h1>Usuario</h1>
    </div>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
// export default withRoles(Page,[2],'/' )
export default Page;
