import { NavNormal } from "@/app/components/navNormal/navNormal";
import { Logo } from "@/app/components/logo/logo";
import { MenusUser } from "@/app/components/cardMenusUser/cardMenus";
import "./page.css";
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus";

export default function HomeUser() {
  return (
    <>
      <Logo />
      <NavNormal />
      <IntroduccionMenus />
      <div className="containerMenus">
        <MenusUser />
      </div>
    </>
  );
}
