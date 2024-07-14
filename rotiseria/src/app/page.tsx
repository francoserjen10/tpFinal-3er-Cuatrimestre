"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return <></>;
}
