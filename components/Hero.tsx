import Image from "next/image";
import React from "react";
export default function Hero(){
    return <div className="flex flex-row items-center justify-center space-x-8 py-24">
        <Image src="/vlad.png" 
        alt="Vlad's cool face"
        className="w-32 h-32 rounded-full"
        width= {468}
        height= {468} 
        />
        <div>
            <h1 className="text-4xl font-bold">Vladimir-Ramon Grinfelds-Ventura</h1>
            <p className="text-lg"> I am cool guy pls hire me</p>
        </div>
    </div>;
}