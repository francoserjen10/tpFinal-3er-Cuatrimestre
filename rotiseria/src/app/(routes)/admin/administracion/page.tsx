"use client";
import { Logo } from "@/app/components/logo/logo";
import "./page.css";
import { withRoles } from "@/app/HOC/withRoles";
import { NavBar } from "@/app/components/navHome/navBar";

const administracionAdmin = () => {
  return (
    <>
      <Logo />
      <NavBar />
      {/* Aca van los datos de los pedidos que se realizaron */}
    </>
  );
};

export default withRoles(administracionAdmin, [1], "/home");
