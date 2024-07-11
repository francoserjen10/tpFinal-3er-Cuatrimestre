"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "@/app/components/navHome/navBar";
import { Logo } from "@/app/components/logo/logo";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";
import { Contacto } from "@/app/components/contacto/contacto";
import InfiniteCardSlider from "@/app/components/cardsChefs/cardsChefs";
import FormularioBueno from "@/app/components/formularioSaliente/formularioSaliente";

export default function Home() {
  return (
    <>
      <div className="divBody">
        {/* Mirar porque se importa aca y tambien en NavBar */}
        <FormularioBueno />
        <Logo />
        <NavBar />
        <Carousel />
        <div style={{ marginTop: "1px" }}>
          <InfiniteCardSlider />
        </div>
        <div style={{ marginTop: "1px" }}>
          <Contacto />
        </div>
      </div>
    </>
  );
}
