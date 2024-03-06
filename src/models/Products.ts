interface CommonSpecifications {
  modèle: string;
  poids: string;
  dimensions: string;
}

interface MelangeursSpecifications extends CommonSpecifications {
  capacitéCuve: string;
  puissance: string;
  vitesseDuFouet: string;
  alimentation: string;
}

interface MixeursSpecifications extends CommonSpecifications {
  capacitéDeFarine: string;
  capacitéDePâte: string;
  volumeDuBol: string;
  puissanceÉlectrique: string;
}

type ProductSpecifications = MelangeursSpecifications | MixeursSpecifications;

interface Product {
  _id: string;
  category: "Mixeurs" | "Mélangeurs";
  name: string;
  ref: string;
  description: string;
  stock: "available" | "out_of_stock";
  images: string[];
  slug: string;
  specifications: ProductSpecifications;
}

export default Product;
