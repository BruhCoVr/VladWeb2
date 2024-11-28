import React from "react";
import Intro from "@/components/Intro"
import Footer from "@/components/Footer";


export default function Home() {
  return <div className= "w-full flex  bg-black text-white flex-col items-center">

    <Intro />
    <Footer />
    </div>;
}
