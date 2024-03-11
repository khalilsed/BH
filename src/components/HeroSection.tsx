import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-logo bg-cover flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-6xl font-bold text-center uppercase">
          Durand
        </h1>
        
        <Link
          href="#categories-section"
          className="bg-secondary text-white font-medium px-6 py-3 rounded-xl cursor-pointer hover:scale-105 app_transition"
        >
          Découvrez nos produits
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
