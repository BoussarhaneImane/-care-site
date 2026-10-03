import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image1 from "../../assets/imgs/img5.png";
import Image2 from "../../assets/imgs/img2.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const Category = () => {

  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-24 top-2 h-56 w-56 rounded-full bg-[#881a3a]/20 blur-3xl"
          animate={{ y: [0, -16, 0] }}
          transition={floatTransition}
        />
        <motion.div
          className="absolute -right-20 bottom-2 h-64 w-64 rounded-full bg-[#3c0619]/35 blur-3xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ ...floatTransition, duration: 5.2 }}
        />
      </div>

      <div className="container">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative flex h-[330px] items-end overflow-hidden rounded-[30px] border border-white/10 bg-[#120618] px-6 py-8 text-[#f5eef5] shadow-[0_26px_70px_rgba(18,6,24,0.52)] sm:col-span-2 lg:col-span-2"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#120618] via-[#120618]/90 to-transparent" />
            <div className="pointer-events-none absolute -right-12 top-10 h-40 w-40 rounded-full bg-[#e05478]/20 blur-2xl" />

            <motion.div
              className="pointer-events-none absolute left-6 top-6 h-2 w-2 rounded-full bg-[#f39ab6]"
              animate={{ opacity: [0.28, 1, 0.28], scale: [1, 1.55, 1] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-[62%]">
              <p className="mb-3 inline-flex rounded-full border border-[#e05478]/40 bg-[#e05478]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2cad6]">
                Collection
              </p>
              <p className="text-3xl font-bold leading-tight xl:text-4xl">Makeup</p>
              <p className="mb-3 text-3xl font-bold leading-tight xl:text-4xl">Premium</p>
              <p className="mb-5 text-sm leading-relaxed text-[#e3ccda]">
                Teintes iconiques,  finition professionnelle.
              </p>
              <Link
                to="/shop"
                className="nb-cta inline-flex min-w-[148px] justify-center"
              >
                Acheter
              </Link>
            </div>

            <motion.img
              src={Image1}
              alt="Produit makeup"
              className="absolute -right-6 bottom-0 h-[100%] w-[205px] object-contain sm:w-[235px] md:w-[265px] lg:w-[290px]"
              whileHover={{  rotate: 0.8 }}
            />
          </motion.article>

          <motion.article
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative flex h-[330px] items-end overflow-hidden rounded-[30px] border border-[#ffffff24] bg-gradient-to-br from-[#3c0619] via-[#5e0f28] to-[#881a3a] px-6 py-8 text-white shadow-[0_26px_70px_rgba(60,6,25,0.5)] sm:col-span-2 lg:col-span-3"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#13010b]/10" />

            <div className="relative z-10 max-w-[62%]">
              <p className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                Signature
              </p>
              <p className="text-3xl font-bold leading-tight xl:text-4xl">Parfum</p>
              <p className="mb-3 text-3xl font-bold leading-tight xl:text-4xl">Luxe</p>
              <p className="mb-5 text-sm leading-relaxed text-white/85">
                Sillage sophistiqué, notes fruitées et sensation haut de gamme.
              </p>
              <Link
                to="/shop"
                className="bg-white text-rose-950 rounded-full p-1 hover:text-rose-900 hover:scale-105 inline-flex min-w-[148px] justify-center"
              >
                Acheter
              </Link>
            </div>

            <motion.img
              src={Image2}
              alt="Produit parfum"
             className="absolute -right-6 bottom-0 h-[100%] w-[205px] object-contain sm:w-[235px] md:w-[265px] lg:w-[290px]"
              whileHover={{  rotate: 0.8 }}
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
