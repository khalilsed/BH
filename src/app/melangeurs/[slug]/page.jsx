"use client";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { melangeurs } from "../../../models/inventory";
import Link from "next/link";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const slug = window.location.pathname.split("/").pop();

    const product = melangeurs.find((product) => product.slug === slug);
    setProduct(product);
  }, []);

  if (!product) return <div>Chargement...</div>;
  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">Mélangeurs</h1>
        <p className="text-sm md:text-base">
          Optimisez votre expérience de pâtisserie avec nos mélangeurs
          professionnels de pâte.
        </p>
      </section>
      <section className="flex flex-col  py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">Produits</span>
          <ChevronRight strokeWidth={4} size={16} />
          <Link href="/melangeurs">
            <span className="text-xl text-primary">Mélangeurs</span>
          </Link>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
          <div className="col-span-2 border-[1px] border-[#D4D2E3] rounded-3xl overflow-hidden flex items-center justify-center">
            <Image
              alt={`Main ${product.name} image`}
              width={600}
              height={750}
              src={product.images[selectedImage]}
            />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-bold text-4xl text-primary">
                {product.name}
              </h3>

              <p>{product.description}</p>
              <div className="rounded-2xl bg-gray-200 w-fit px-4 py-2">
                <p className="font-semibold text-sm text-green-600 capitalize">
                  {product.stock === "available" ? (
                    <span className="text-green-500">En Stock</span>
                  ) : (
                    <span className="text-red-500">Indisponible</span>
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center justify-center gap-y-2 gap-x-2 w-full">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="border-[1px] border-[#D4D2E3] rounded-3xl p-4 cursor-pointer hover:scale-[101%] app_transition w-full h-full flex items-center justify-center"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    key={index}
                    src={product.images[index]}
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl">Fiche Technique:</h2>
        <div className="hidden md:block w-full">
          <table className="table-big table-auto text-center w-full ">
            <thead className="bg-secondary">
              <tr>
                {product.specifications &&
                  Object.keys(product.specifications).map((key, index) => (
                    <th key={index} className="py-2 px-2 sm:px-4 capitalize">
                      {key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {product.specifications &&
                  Object.values(product.specifications).map((value, index) => (
                    <td key={index} className="py-2 px-2 sm:px-4">
                      {value}
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" table-small md:hidden w-full flex flex-col items-center justify-center gap-4">
          <table className="table-auto text-center w-full">
            <tbody>
              {product.specifications &&
                Object.keys(product.specifications).map((key, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 capitalize font-semibold">
                      {key}
                    </td>
                    <td className="py-2 px-4">{product.specifications[key]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
