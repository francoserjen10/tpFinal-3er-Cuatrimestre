"use client";
import { Logo } from "@/app/components/logo/logo";
import { NavBar } from "@/app/components/navHome/navBar";
import { withRoles } from "@/app/HOC/withRoles";

const MisPedidosUser = () => {
  return (
    <>
      <Logo />
      <NavBar />
      {/* Listar historial de pedidos de este usuario */}
    </>
  );
};

export default withRoles(MisPedidosUser, [2], "/home");
