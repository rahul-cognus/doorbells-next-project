"use client"
import React from 'react'
import Image from "next/image";
import Header from "@/ui/layout/Header";

export default function Home() {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <Header/>
    </>
  );
}
