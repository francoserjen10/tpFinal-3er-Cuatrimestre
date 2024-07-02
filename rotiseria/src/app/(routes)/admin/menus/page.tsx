
'use client'
import { NavHomeAdmin } from "@/app/components/navHome/navHomeAdmin";
import { Logo } from "@/app/components/logo/logo";
import { MenusAdmin } from "@/app/components/cardsAdministrador/cardMenus";
import "./page.css";
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus";
import { withRoles } from "@/app/HOC/withRoles";

const MenuAdmin = () => {
  return (
    <>
      <Logo />
      <NavHomeAdmin />
      <IntroduccionMenus />
      <div className="containerMenus">
        <MenusAdmin />
      </div>
    </>
  );
}

export default withRoles(MenuAdmin, [1], "/home");