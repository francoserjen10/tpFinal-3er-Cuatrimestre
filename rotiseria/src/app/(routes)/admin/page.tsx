"use client";
import { withRoles } from "@/app/HOC/withRoles";
import { Contacto } from "@/app/components/contacto/contacto";
import { Logo } from "@/app/components/logo/logo";
import { NavHomeAdmin } from "@/app/components/navHome/navHomeAdmin";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";

const Page = () => {
  return (
    <>
      <Logo />
      {/* Home nuevo del ADMIN */}
      <NavHomeAdmin />
      <div style={{ marginTop: "20px" }}>
        <Carousel />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Contacto />
      </div>
    </>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(Page, [1], "/home");

//TODO #
//Cambiar el boton de iniciar secion por cerras cesion
//nav:
/**
 * Menus => (tener el filtro de comidas y el crud de productos (en formato cards))
 */
