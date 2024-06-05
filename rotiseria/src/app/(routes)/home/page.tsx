'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavHome } from "@/app/components/navHome/navHome";
import { Logo } from "@/app/components/logo/logo";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";
import { Contacto } from "@/app/components/contacto/contacto";



export default function Home() {
  return (
    <>
      <Logo />
      <NavHome />
      <div style={{ marginTop: '0px'}}>
        <Carousel />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Contacto />
      </div>
    </>
  );
}

