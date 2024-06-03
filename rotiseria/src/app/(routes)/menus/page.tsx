import { NavNormal } from "@/app/components/navNormal/navNormal"
import { Logo } from "@/app/components/logo/logo"
import { Menus } from "@/app/components/cardMenus/cardMenus"
import './page.css'
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus"
export default function Home() {
    return (
        
        <>
        <Logo></Logo>
        <NavNormal></NavNormal>
        <IntroduccionMenus/>
        <div className="containerMenus">
        <Menus/>
        <Menus/>
        <Menus/>
        <Menus/>
        <Menus/>
        <Menus/>
        </div>
        
        </>
    )
}