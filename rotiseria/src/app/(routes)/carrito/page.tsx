'use client'
import { CarritoTabla } from "@/app/components/CarritoTabla/carritoTabla"
import { Logo } from "@/app/components/logo/logo"
import NavBar from "@/app/components/navHome/navBar"
export default function Home() {
    return(
        <>
        <Logo/>
        <NavBar/>
        <CarritoTabla/>
        </>
    
    )
}