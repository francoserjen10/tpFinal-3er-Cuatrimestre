"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavHome } from "@/app/components/navHome/navHome";
import { Logo } from "@/app/components/logo/logo";
import Carousel from "@/app/components/carruselOfertas/carruselOfertas";
import { Contacto } from "@/app/components/contacto/contacto";
import InfiniteCardSlider from "@/app/components/cardsChefs/cardsChefs";
export default function Home() {
 // const [userName, setUserName] = useState<string | null>(null);

  return (
    <>
    
    <div className="divBody">
      <FormularioBueno/>
      <Logo />
      <NavHome />
      <Carousel />
      <div style={{marginTop: "1px"}}>
      <InfiniteCardSlider/>
      </div>
      <div style={{ marginTop: "1px" }}>
      <Contacto />
      </div>
    </>
  );
}