'use client'
import { CarritoTabla } from "@/app/components/CarritoTabla/carritoTabla"
import { Logo } from "@/app/components/logo/logo"
import NavBar from "@/app/components/navHome/navBar"
import './page.css'
export default function Home() {
    return (
        <body className="carrito-bg">
            <Logo />
            <NavBar />
            <CarritoTabla />
        </body>
    )
}