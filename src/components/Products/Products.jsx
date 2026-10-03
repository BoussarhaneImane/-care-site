import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

// images import
import CreamImg from "../../assets/imgs/m1.jpg";
import SerumImg from "../../assets/imgs/m2.jpg";
import CleanserImg from "../../assets/imgs/m3.jpg";
import PerfumeImg from "../../assets/imgs/m4.jpg";
import MistImg from "../../assets/imgs/s1.jpg";
import MaskImg from "../../assets/imgs/s2.jpg";
import LipBalmImg from "../../assets/imgs/s3.jpg";
import EyeCreamImg from "../../assets/imgs/s4.jpg";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: CreamImg,
    title: "Hydrating Day Cream",
    price: "$25",
    aosDelay: "0",
    category: "Soin",
    shopCategory: "soin",
    shopId: 4,
  },
  {
    id: 2,
    img: SerumImg,
    title: "Vitamin C Serum",
    price: "$35",
    aosDelay: "200",
    category: "Soin",
    shopCategory: "soin",
    shopId: 5,
  },
  {
    id: 3,
    img: CleanserImg,
    title: "Gentle Cleansing Foam",
    price: "$20",
    aosDelay: "400",
    category: "Soin",
    shopCategory: "soin",
    shopId: 6,
  },
  {
    id: 4,
    img: PerfumeImg,
    title: "Eau de Parfum",
    price: "$50",
    aosDelay: "600",
    category: "Parfum",
    shopCategory: "parfum",
    shopId: 2,
  },
  {
    id: 5,
    img: MistImg,
    title: "Refreshing Facial Mist",
    price: "$15",
    aosDelay: "0",
    category: "Soin",
    shopCategory: "soin",
    shopId: 11,
  },
  {
    id: 6,
    img: MaskImg,
    title: "Detoxifying Clay Mask",
    price: "$30",
    aosDelay: "200",
    category: "Soin",
    shopCategory: "soin",
    shopId: 12,
  },
  {
    id: 7,
    img: LipBalmImg,
    title: "Moisturizing Lip Balm",
    price: "$10",
    aosDelay: "400",
    category: "Maquillage",
    shopCategory: "maquillage",
    shopId: 7,
  },
  {
    id: 8,
    img: EyeCreamImg,
    title: "Revitalizing Eye Cream",
    price: "$40",
    aosDelay: "600",
    category: "Soin",
    shopCategory: "soin",
    shopId: 8,
  },
];

const categories = ["Tous", "Soin", "Parfum", "Maquillage"];
const pageSize = 4;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Tous") return ProductsData;
    return ProductsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const buildShopLink = (product, openCart = false) => {
    const params = new URLSearchParams({
      category: product.shopCategory,
      product: String(product.shopId),
    });
    if (openCart) params.set("openCart", "1");
    return `/shop?${params.toString()}`;
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute -left-24 -top-10 h-64 w-64 rounded-full bg-[#e05478]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-[#120618]/45 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-[#120618]/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4c8d4]">
            NOS INCONTOURNABLES
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-[#430729] md:text-5xl">
            Des produits premium pour
            <em className="bg-gradient-to-r from-[#a0246a] via-[#881a3a] to-[#5e0f28] bg-clip-text text-transparent not-italic">
              {" "}révéler votre éclat
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#4f4050] md:text-base">
            Une sélection experte inspirée de notre univers Hero: textures raffinées,
            ingrédients ciblés et résultats visibles au quotidien.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  activeCategory === category
                    ? "border-[#e05478]/70 bg-[#e05478]/20 text-[#f5eef5]"
                    : "border-white/10 bg-[#120618]/55 text-[#d4c8d4] hover:border-[#e05478]/35 hover:text-[#f5eef5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7f7180]">
            <span className="rounded-full border border-white/10 px-3 py-1">Produit</span>
            <span>→</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Open Cart</span>
            <span>→</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Shop</span>
            <span>→</span>
            <span className="rounded-full border border-[#e05478]/30 bg-[#e05478]/10 px-3 py-1 text-[#e05478]">Paiement Carte</span>
          </div>
        </div>

        <div className="rounded-[30px] bg-gradient-to-br from-[#120618] via-[#3c0619] to-[#881a3a] p-5 shadow-[0_30px_85px_rgba(8,2,12,0.45)] ring-1 ring-white/5 md:p-8">
          <ProductCard data={paginatedProducts} buildShopLink={buildShopLink} />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 min-w-9 rounded-full border text-xs font-bold transition ${
                  currentPage === page
                    ? "border-[#e05478]/80 bg-[#e05478]/20 text-[#f5eef5]"
                    : "border-white/15 bg-[#120618]/40 text-[#d4c8d4] hover:border-[#e05478]/35 hover:text-[#f5eef5]"
                }`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center rounded-full border border-[#e05478]/35 bg-[#120618]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#f2cad6] transition hover:border-[#e05478]/70 hover:bg-[#e05478]/15 hover:text-[#f5eef5]"
            >
              Voir tout le shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
