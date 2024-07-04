'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import { NavHome } from "@/app/components/navHome/navHome";
import { Logo } from "@/app/components/logo/logo";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";
import { Contacto } from "@/app/components/contacto/contacto";
import FormularioBueno from "@/app/components/formularioSaliente/formularioNuevo";
//import FormSalienteNuevo from "@/app/components/formularioSaliente/formSaliente";

export default function Home() {
 // const [userName, setUserName] = useState<string | null>(null);

  return (
    <>
    
    <div className="divBody">
      <FormularioBueno/>
      <Logo />
      <NavHome /*userName={userName} setUserName={setUserName}*//>
      <Carousel />
      <Contacto />
    </div>
    </>
  );
}