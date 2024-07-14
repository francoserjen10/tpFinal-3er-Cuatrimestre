"use client";
import './page.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Logo } from "@/app/components/logo/logo";
import { Info } from "@/app/components/infoRotiseria/infoRotiseria";
import { ServiciosBrindados } from "@/app/components/serviciosBrindadosHome/serviciosBrindados";
import { Contacto } from "@/app/components/contacto/contacto";
import NavBar from "@/app/components/navHome/navBar";
import FormularioBueno from "@/app/components/formularioSaliente/formularioSaliente";

export default function QuienesSomosHome() {
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

