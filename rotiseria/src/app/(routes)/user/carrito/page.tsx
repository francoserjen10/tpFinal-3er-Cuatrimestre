"use client";
import ShoppingCart from "@/app/components/carritoCompras/carritoCompras";
import CarritoPersonalizado from "@/app/components/carritoCompras/carritoPersonalizado";
import { Logo } from "@/app/components/logo/logo";
import { NavBar } from "@/app/components/navHome/navBar";
import { withRoles } from "@/app/HOC/withRoles";

const MiCarritoUser = () => {
  return (
    <>
      <Logo />
      <NavBar />
      <CarritoPersonalizado />
      <ShoppingCart />
    </>
  );
};

export default withRoles(MiCarritoUser, [2], "/home");
