"use client"
import React from 'react'
import Image from "next/image";
import Header from "@/ui/layout/Header";
import "@/public/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/public/vendor/font-awesome/css/all.min.css"

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
