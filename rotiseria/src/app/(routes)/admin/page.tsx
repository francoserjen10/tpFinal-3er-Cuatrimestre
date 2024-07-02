"use client";
import { withRoles } from "@/app/HOC/withRoles";
import CardsAdministrador from "@/app/components/cardsAdministrador/cardsAdministrador";
import { Logo } from "@/app/components/logo/logo";
import { NavHomeAdmin } from "@/app/components/navHome/navHomeAdmin";

const PageAdmin = () => {
  return (
    <>
      <Logo />
      <NavHomeAdmin />
      <CardsAdministrador />
    </>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(PageAdmin, [1], "/home");

//TODO #
//Cambiar el boton de iniciar secion por cerras cesion
//nav:
/**
 * Menus => (tener el filtro de comidas y el crud de productos (en formato cards))
 */
