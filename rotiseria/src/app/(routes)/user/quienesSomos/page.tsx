"use client";
import './page.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Logo } from "@/app/components/logo/logo";
import { Info } from "@/app/components/infoRotiseria/infoRotiseria";
import { ServiciosBrindados } from "@/app/components/serviciosBrindadosHome/serviciosBrindados";
import { Contacto } from "@/app/components/contacto/contacto";
import { withRoles } from "@/app/HOC/withRoles";
import { NavBar } from "@/app/components/navHome/navBar";

const quienesSomosUser = () => {
  return (
    <>
    <div className='imagen-bg'>
      <Logo />
      {/* <NavHomeUser /> */}
      <NavBar />
      <Info />
      <ServiciosBrindados />
      <Contacto />
      </div>
    </>
  );
};

export default withRoles(quienesSomosUser, [2], "/home");
