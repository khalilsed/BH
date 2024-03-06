import Product from "./Products";

const melangeurs: Product[] = [
  {
    _id: "1",
    category: "Mélangeurs",
    name: "Batteurs-Mélangeurs",
    ref: "DR-20",
    slug: "melangeur-DR-20",
    description: `Le batteur professionnel DR 20 de la marque Durand est un équipement indispensable pour les boulangeries et les pâtisseries qui recherchent un outil fiable et performant pour leurs préparations de pâte. Avec une capacité de cuve de 20 litres, ce batteur peut traiter des quantités suffisantes de pâte à pain, de pâte à gâteaux, et plus encore. Sa puissance de 0,75 kW garantit une efficacité optimale et une adaptabilité à vos besoins de préparation.
    Conçu pour offrir des performances durables, ce batteur professionnel est alimenté en 80 V et possède des dimensions compactes de 660x500x760 mm, ce qui le rend facile à installer et à utiliser dans n'importe quelle boulangerie ou pâtisserie.
    Offrez-vous le batteur professionnel DR 20 pour un fonctionnement optimal de votre boulangerie ou pâtisserie. Commandez dès maintenant pour une livraison rapide et gratuite en ile de France !
    `,
    images: [
      "/products/melangeurs/DR20-1.jpg",
      "/products/melangeurs/DR20-2.jpg",
    ],
    stock: "available",
    specifications: {
      modèle: "DR-20",
      poids: "80 kg",
      alimentation: "0/100 V",
      dimensions: "660 x 500 x 760 mm",
      capacitéCuve: "20 L",
      puissance: "0.75 kW",
      vitesseDuFouet: "0/360",
    },
  },
  {
    _id: "2",
    category: "Mélangeurs",
    name: "Batteurs-Mélangeurs",
    ref: "DR-40",
    slug: "melangeur-DR-40",
    description: `Le batteur professionnel DR 40 de la marque Durand est l'outil indispensable pour toute boulangerie ou pâtisserie cherchant à optimiser ses processus de production. Avec sa capacité de cuve de 40 litres, ce batteur peut facilement traiter de grandes quantités de pâte à pain, pâte à gâteaux, et bien plus encore. Sa plage de puissance de 1 à 1,7 kW garantit une grande efficacité et adaptabilité à vos besoins de préparation.
    Conçu pour être performant et durable, ce batteur professionnel est alimenté en 220 V et possède des dimensions compactes de 680x940x160 mm, ce qui le rend facile à installer et à utiliser dans n'importe quelle boulangerie ou pâtisserie.
    Offrez-vous le batteur professionnel DR 40 pour un fonctionnement optimal de votre boulangerie ou pâtisserie. Commandez dès maintenant pour une livraison rapide et gratuite en ile de France !"    
    `,
    images: ["/products/melangeurs/DR40-1.jpg"],
    stock: "available",
    specifications: {
      modèle: "DR-40",
      poids: "220 kg",
      alimentation: "55/110/120 V",
      dimensions: "680 x 940 x 1600 mm",
      capacitéCuve: "40 L",
      puissance: "1-1.4-1.7 kW",
      vitesseDuFouet: "140/280/560",
    },
  },
  {
    _id: "3",
    category: "Mélangeurs",
    name: "Batteurs-Mélangeurs",
    ref: "DR-60",
    slug: "melangeur-DR-60",
    description: `Le batteur professionnel DR 60 de la marque Durand est l'outil parfait pour les boulangeries et les pâtisseries qui ont besoin d'un équipement fiable et robuste pour la préparation de pâtes en grande quantité. Avec une capacité de cuve de 60 litres, ce batteur peut facilement manipuler de grandes quantités de pâte à pain, de pâte à gâteaux, et bien plus encore. Sa plage de puissance de 1 à 1,7 kW garantit une grande efficacité et adaptabilité à vos besoins de préparation.
    Conçu pour être performant et durable, ce batteur professionnel est alimenté en 220 V et possède des dimensions compactes de 680x940x1600 mm, ce qui le rend facile à installer et à utiliser dans n'importe quelle boulangerie ou pâtisserie.
    Offrez-vous le batteur professionnel DR 60 pour un fonctionnement optimal de votre boulangerie ou pâtisserie. Commandez dès maintenant pour une livraison rapide et gratuite en ile de France !      
    `,
    images: ["/products/melangeurs/DR60-1.jpg"],
    stock: "available",
    specifications: {
      modèle: "DR-60",
      poids: "245 kg",
      alimentation: "55/110/120 V",
      dimensions: "680 x 940 x 1600 mm",
      capacitéCuve: "60 L",
      puissance: "1-1.4-1.7 kW",
      vitesseDuFouet: "140/280/560",
    },
  },
];

const mixeurs: Product[] = [
  {
    _id: "1",
    category: "Mixeurs",
    name: "Pétrins à spirale",
    ref: "DR-50",
    slug: "mixeur-DR-50",
    description: `Le pétrin spirale DR 50 de Durand est un équipement de boulangerie et de pâtisserie professionnel qui répond aux normes les plus élevées. Il est spécifiquement conçu pour les professionnels de la boulangerie et de la pâtisserie, leur permettant de pétrir de grandes quantités de pâte de manière rapide et efficace. Son design solide et stable en fait un choix idéal pour une utilisation intensive dans un environnement professionnel.     
    `,
    images: [
      "/products/mixeurs/DR50-1.jpg",
      "/products/mixeurs/DR50-2.jpg",
      "/products/mixeurs/DR50-3.jpg",
    ],
    stock: "available",
    specifications: {
      modèle: "DR-50",
      capacitéDeFarine: "25 kg",
      capacitéDePâte: "45 kg",
      volumeDuBol: "70 L",
      puissanceÉlectrique: "1.5/2.5",
      poids: "225 kg",
      dimensions: "560*975*1135",
    },
  },

  {
    _id: "2",
    category: "Mixeurs",
    name: "Pétrins à spirale",
    ref: "DR-60",
    slug: "mixeur-DR-60",
    description: `Le pétrin spirale DR 60 de Durand est un équipement de boulangerie et de pâtisserie professionnel qui répond aux normes les plus élevées. Il est spécifiquement conçu pour les professionnels de la boulangerie et de la pâtisserie, leur permettant de pétrir de grandes quantités de pâte de manière rapide et efficace. Son design solide et stable en fait un choix idéal pour une utilisation intensive dans un environnement professionnel. `,
    images: ["/products/mixeurs/DR60-1.jpg", "/products/mixeurs/DR60-2.jpg"],
    stock: "available",
    specifications: {
      modèle: "DR-60",
      capacitéDeFarine: "35 kg",
      capacitéDePâte: "90 kg",
      volumeDuBol: "70 L",
      puissanceÉlectrique: "2.5/3.2",
      poids: "300 kg",
      dimensions: "640*1130*1200",
    },
  },

  {
    _id: "3",
    category: "Mixeurs",
    name: "Pétrins à spirale",
    ref: "DR-100",
    slug: "mixeur-DR-100",
    description: `Le pétrin spirale DR 100 de Durand est un équipement de boulangerie et de pâtisserie professionnel qui répond aux normes les plus élevées. Il est spécifiquement conçu pour les professionnels de la boulangerie et de la pâtisserie, leur permettant de pétrir de grandes quantités de pâte de manière rapide et efficace. Son design solide et stable en fait un choix idéal pour une utilisation intensive dans un environnement professionnel. `,
    images: ["/products/mixeurs/DR100-1.jpg", "/products/mixeurs/DR100-2.jpg"],
    stock: "available",
    specifications: {
      modèle: "DR-100",
      capacitéDeFarine: "62 kg",
      capacitéDePâte: "100 kg",
      volumeDuBol: "150 L",
      puissanceÉlectrique: "7.5",
      poids: "460 kg",
      dimensions: "720*1250*1400",
    },
  },
];

export { melangeurs, mixeurs };
