"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return <></>;
}

/*'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./components/nav/nav";
import { Logo } from "./components/logo/logo";
import { Info } from "./components/infoRotiseria/infoRotiseria";
import { ServiciosBrindados } from "./components/serviciosBrindadosHome/serviciosBrindados";
import { Contacto } from "./components/contacto/contacto";

export default function Home() {
  return(
    <Page></Page>
  );
}*/
