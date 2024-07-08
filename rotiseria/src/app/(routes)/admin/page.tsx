"use client";
import { withRoles } from "@/app/HOC/withRoles";
import { ModificacionesAdmin } from "@/app/components/cardsAdministrador/cardsAdministrador";
import { Logo } from "@/app/components/logo/logo";
import { NavBar } from "@/app/components/navHome/navBar";

const HomeAdmin = () => {
  return (
    <>
      <Logo />
      <NavBar />
      <ModificacionesAdmin />
    </>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(HomeAdmin, [1], "/home");

  