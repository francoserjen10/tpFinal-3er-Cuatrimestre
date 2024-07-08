'use client'
import { CarritoTabla } from "@/app/components/CarritoTabla/carritoTabla"
import { Logo } from "@/app/components/logo/logo"
import { NavHome } from "@/app/components/navHome/navHome"
export default function Home() {
    return(
        <>
        <Logo/>
        <NavHome/>
        <CarritoTabla/>
        </>
    
    )
}