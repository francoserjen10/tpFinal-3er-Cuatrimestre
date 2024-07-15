import { Logo } from "@/app/components/logo/logo";
import { MenusUser } from "@/app/components/cardMenusUser/cardMenus";
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus";
import NavBar from "@/app/components/navHome/navBar";
import FormularioBueno from "@/app/components/formularioSaliente/formularioSaliente";
import './page.css'
export default function MenusHome() {
  return (
    <div className="fondoPagina">
      <FormularioBueno/>
      <Logo />
      <NavBar />
      <IntroduccionMenus />
        <MenusUser />
        </div>
  );
}
