import React from "react";
import {
  Award,
  Gem,
  HeartHandshake,
  Tag,
  ArrowRight,
} from "lucide-react";

const ServiceData = [
  {
    id: 1,
    icon: Gem,
    iconStyle:
      "text-[#f2cad6] bg-[#e05478]/20 group-hover:bg-[#e05478]/30 group-hover:text-[#f5eef5]",
    title: "Produits de Qualité",
    description: "Sélection soignée d'articles de premier choix",
  },
  {
    id: 2,
    icon: HeartHandshake,
    iconStyle:
      "text-[#f2cad6] bg-[#e05478]/20 group-hover:bg-[#e05478]/30 group-hover:text-[#f5eef5]",
    title: "Service Client",
    description: "Équipe de support dédiée disponible 24/7",
  },
  {
    id: 3,
    icon: Award,
    iconStyle:
      "text-[#f2cad6] bg-[#e05478]/20 group-hover:bg-[#e05478]/30 group-hover:text-[#f5eef5]",
    title: "Meilleures Évaluations",
    description: "Produits très bien notés par des clients satisfaits",
  },
  {
    id: 4,
    icon: Tag,
    iconStyle:
      "text-[#f2cad6] bg-[#e05478]/20 group-hover:bg-[#e05478]/30 group-hover:text-[#f5eef5]",
    title: "Offres Exclusives",
    description: "Accès à des offres spéciales et des promotions",
  },
];

const Services = () => {
  return (
    <section className="py-14 md:py-20 px-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-[#ffffff24] bg-gradient-to-br from-[#120618] via-[#3c0619] to-[#881a3a] p-6 shadow-[0_26px_70px_rgba(60,6,25,0.45)] md:p-10">
          <div className="absolute -top-14 -left-14 h-44 w-44 rounded-full bg-[#e05478]/20 blur-2xl" />
          <div className="absolute -bottom-20 -right-14 h-52 w-52 rounded-full bg-[#120618]/45 blur-2xl" />

          <div className="relative mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2cad6]">
                Nos Engagements
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#f5eef5] md:text-3xl">
                Pourquoi nos clients nous choisissent
              </h2>
            </div>
            <ArrowRight className="hidden h-7 w-7 text-[#f2cad6]/80 md:block" />
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ServiceData.map((data) => {
              const Icon = data.icon;

              return (
                <article
                  key={data.id}
                  className="group rounded-2xl border-2 border-[#1e3a8a]/20 bg-[#120618]/20 p-5 backdrop-blur-sm  transition duration-300 hover:-translate-y-1 hover:border-[#cbd6f4] hover:ring-[#cdd9f4] hover:shadow-[0_18px_45px_rgba(30,64,175,0.28)]"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition ${data.iconStyle}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#f5eef5]">{data.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#e3ccda]">
                    {data.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
