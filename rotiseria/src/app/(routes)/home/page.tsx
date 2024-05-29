"use client";

import { Contacto } from "@/app/components/contacto/contacto";
import { Info } from "@/app/components/infoRotiseria/infoRotiseria";
import { Logo } from "@/app/components/logo/logo";
import { Nav } from "@/app/components/nav/nav";
import { ServiciosBrindados } from "@/app/components/serviciosBrindadosHome/serviciosBrindados";

// import { withRoles } from "@/app/components/HOC/withRoles";

const Page = () => {
  return (
    <>
      <Logo></Logo>

      <Nav></Nav>
      <Info></Info>
      <ServiciosBrindados></ServiciosBrindados>
      <Contacto></Contacto>
    </>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
// export default withRoles(Page,[1],'/' )
export default Page;
