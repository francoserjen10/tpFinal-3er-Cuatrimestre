import { Logo } from "@/app/components/logo/logo";
import { MenusUser } from "@/app/components/cardMenusUser/cardMenus";
import "./page.css";
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus";
import NavBar from "@/app/components/navHome/navBar";
import FormularioBueno from "@/app/components/formularioSaliente/formularioSaliente";

export default function MenusHome() {
  return (
    <>
      <FormularioBueno/>
      <Logo />
      <NavBar />
      <IntroduccionMenus />
      <div className="containerMenus">
        <MenusUser />
      </div>
    </>
  );
}
