'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import { Nav } from "./components/nav/nav";
import { Logo } from "./components/logo/logo";
import { Info } from "./components/infoRotiseria/infoRotiseria";
import { ServiciosBrindados } from "./components/serviciosBrindadosHome/serviciosBrindados";
import { Contacto } from "./components/contacto/contacto";

export default function Home() {
  
  return (
    <>
      <Logo></Logo>
      
        <Nav></Nav>
        <Info></Info>
        <ServiciosBrindados></ServiciosBrindados>
        <Contacto></Contacto>
    </>


  );
}
