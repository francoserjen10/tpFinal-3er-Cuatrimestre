'use client'
import ShoppingCart from "@/app/components/carritoCompras/carritoCompras"
import CarritoPersonalizado from "@/app/components/carritoCompras/carritoPersonalizado"
import { Logo } from "@/app/components/logo/logo"
import { NavHome } from "@/app/components/navHome/navHome"
export default function Home() {
    return(
        <>
        <Logo/>
        <NavHome/>
        <CarritoPersonalizado/>
        <ShoppingCart/>
        </>
    
    )
}