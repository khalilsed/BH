import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import DescriptionCard from "./DescriptionCard";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 gap-8 text-center px-4">
            <h1 className="text-5xl sm:text-7xl font-medium ">À Propos Nous</h1>

            <p className="text-grey text-lg ">
            Nous nous engageons à collaborer avec vous pour <br />
            comprendre vos objectifs et créer une stratégie qui les réalisera.
            </p>
            <Link href="/about" className="group flex flex-row gap-2 items-center justify-center cursor-pointer">
                <span className="text-primary text-lg font-medium">En savoir plus</span>
                <div className="group-hover:animate-pulse">
                    <MoveRight color="#234189" />
                </div>
            </Link>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-20  lg:gap-40 py-12 lg:py-24 px-12  lg:px-12  w-full mx-auto">
                <div className="flex flex-col items-start justify-start text-start gap-12">
                    <h1 className="text-5xl font-medium text-center lg:text-start w-full  ">
                        Pourquoi Nous
                        <br /> Choisir ?
                    </h1>
                    <Image
                        src="/aboutus.png"
                        alt="Why Choose Us"
                        width={487}
                        height={374}
                        className="hidden lg:block"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-start justify-center gap-11 ">
                    <DescriptionCard
                        imageUrl="/icons/mixer.png"
                        title="Polyvalence"
                        description="Durand propose une large gamme de produits pour répondre aux besoins de chaque client."
                    />
                    <DescriptionCard
                        imageUrl="/icons/rocket.png"
                        title="Innovation"
                        description="L'équipe technique de Durand mise sur des mises à jour régulières pour répondre aux besoins clients."
                    />
                    <DescriptionCard
                        imageUrl="/icons/service.png"
                        title="Assistance Technique"
                        description="Le réseau mondial de Durand assure un support commercial complet, tant avant qu'après-vente."
                    />
                </div>
            </div>
            <div className="bg-banner min-h-32 mx-full bg-cover bg-center flex flex-col lg:flex-row py-14 md:py-28 px-10 md:px-20 gap-12 bg-primary rounded-3xl text-start">
                <h2 className="text-white text-4xl  md:text-5xl lg:text-6xl font-medium">
                    Fabrication de
                    <br /> Machines de <br />
                    Qualité Mondiale
                </h2>
                <div className="flex flex-col items-start justify-center gap-8">
                    <p className="text-white text-xl ">
                    Prêt à transformer votre dresence numérique ? <br />
                    Créons de la magie ensemble! réservez nos services maintenant!
                    </p>
                    <Link href="tel:+33 01 77 99 49 47"
                        className="group bg-white hover:bg-secondary 
                    hover:scale-[103%] app_transition rounded-full py-4 px-12 text-center"
                    >
                        <span className="group-hover:text-white app_transition font-medium text-2xl ">
                            Réservez un appel
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
