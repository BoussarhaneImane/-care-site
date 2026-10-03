import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-8 last:mb-0">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group relative overflow-hidden rounded-2xl bg-[#120618]/48 p-4 text-center shadow-[0_12px_30px_rgba(18,6,24,0.35)] ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:ring-[#e05478]/35"
            key={data.id}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#e05478]/20 blur-2xl" />

            <div className="mb-3 flex h-52 w-full items-center justify-center rounded-xl bg-white/5">
              <img
                src={data.img}
                alt={data.title}
                className="h-48 w-36 rounded-full object-cover shadow-2xl transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* hover button */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#120618]/62 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                text={"Shop"}
                bgColor={"bg-[#120618]"}
                textColor={"text-[#f5eef5]"}
                className="border border-[#e05478]/80 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] hover:bg-[#e05478]/25"
              />
            </div>

            <div className="mt-2">
              <h3 className="font-semibold text-[#f5eef5]">{data.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#f2cad6]">{data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;


