"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function RecordsPageClient({
    albums
}) {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">My Record Collection</h1>
      {/* {loading ? (
        <p>Loading albums...</p>
      ) : ( */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <li key={album.id} className="flex flex-col items-center">
              <img
                src={album.basic_information.cover_image}
                alt={album.basic_information.title}
                className="w-48 h-48 object-cover mb-2"
              />
              <div className="text-center">
                <h2 className="text-xl font-semibold">
                  {album.basic_information.title}
                </h2>
                <p className="text-gray-400">
                  {album.basic_information.artists[0].name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      {/* )} */}
      <Footer />
    </div>
  );
}
