<<<<<<< HEAD
"use client";

import { Contacto } from "@/app/components/contacto/contacto";
import { Info } from "@/app/components/infoRotiseria/infoRotiseria";
import { Logo } from "@/app/components/logo/logo";
import { Nav } from "@/app/components/nav/nav";
import { ServiciosBrindados } from "@/app/components/serviciosBrindadosHome/serviciosBrindados";

=======
import "bootstrap/dist/css/bootstrap.min.css";
import { NavHome } from "@/app/components/navHome/navHome";
import { Logo } from "@/app/components/logo/logo";
import { Info } from "@/app/components/infoRotiseria/infoRotiseria";
import { ServiciosBrindados } from "@/app/components/serviciosBrindadosHome/serviciosBrindados";
import { Contacto } from "@/app/components/contacto/contacto";
>>>>>>> origin/featuredRuben-PagesUser&Admin
// import { withRoles } from "@/app/components/HOC/withRoles";
export default function Home() {
  
  return (
    <>
      <Logo></Logo>
<<<<<<< HEAD

      <Nav></Nav>
      <Info></Info>
      <ServiciosBrindados></ServiciosBrindados>
      <Contacto></Contacto>
    </>
  );
};
=======
      
        <NavHome></NavHome>
        <Info></Info>
        <ServiciosBrindados></ServiciosBrindados>
        <Contacto></Contacto>
    </>
>>>>>>> origin/featuredRuben-PagesUser&Admin


  );
}
//export default Home;
//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
// export default withRoles(Page,[1],'/' )

