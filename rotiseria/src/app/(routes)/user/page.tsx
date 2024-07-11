"use client";
import InfiniteCardSlider from "@/app/components/cardsChefs/cardsChefs";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";
import { Contacto } from "@/app/components/contacto/contacto";
import { Logo } from "@/app/components/logo/logo";
import NavBar from "@/app/components/navHome/navBar";
import { withRoles } from "@/app/HOC/withRoles";

const HomeUser = () => {
  return (
    <>
      <Logo />
      <NavBar />
      <Carousel />
      <div style={{ marginTop: "1px" }}>
        <InfiniteCardSlider />
      </div>
      <div style={{ marginTop: "1px" }}>
        <Contacto />
      </div>
    </>
  );
};

//Se agrega de esta manera para que este componente pueda llegar como parametro a la funcion de whithRoles
export default withRoles(HomeUser, [2], "/home");
