import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-care.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaHeart,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Accueil",
    link: "/#",
  },
  {
    title: "Catalogue Produits",
    link: "/#catalogue",
  },
  {
    title: "Fiche Produits",
    link: "/#shop",
  },
  {
    title: "Panier",
    link: "/#panier",
  },
];

const SocialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: FaEnvelope, href: "mailto:contact@careforu.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0f0a14] text-[#f5eef5] mt-40">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#e05478]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#120618]/40 blur-3xl" />

      <div className="container relative z-10">
        {/* Main footer content */}
        <div className="border-b border-[#ffffff10] px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="inline-flex items-center gap-2">
                <img src={logo} alt="CareForU" className="h-40 w-40 rounded-full object-cover ring-1 ring-[#e05478]/30" />
              </Link>
              <p className="text-sm leading-relaxed text-[#b8a7b8]">
                "La beauté réside dans la simplicité et l'authenticité."
              </p>
              <p className="text-xs text-[#8a7a8a]">
                Créé avec passion par Imane Boussarhane
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#f2cad6]">
                Navigation
              </h3>
              <ul className="space-y-2">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-sm text-[#d4c8d4] transition duration-300 hover:text-[#e05478]"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#f2cad6]">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="h-5 w-5 flex-shrink-0 text-[#e05478] mt-0.5" />
                  <span className="text-sm text-[#d4c8d4]">
                    Casa Street, Casablanca, 10014, Morocco
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="h-5 w-5 flex-shrink-0 text-[#e05478]" />
                  <a
                    href="tel:+212123456789"
                    className="text-sm text-[#d4c8d4] hover:text-[#e05478] transition duration-300"
                  >
                    +212 123 456 789
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="h-5 w-5 flex-shrink-0 text-[#e05478]" />
                  <a
                    href="mailto:hello@careforu.com"
                    className="text-sm text-[#d4c8d4] hover:text-[#e05478] transition duration-300"
                  >
                    hello@careforu.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#f2cad6]">
                Nous suivre
              </h3>
              <div className="flex gap-4">
                {SocialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#e05478]/40 bg-[#e05478]/10 text-[#e05478] transition duration-300 hover:border-[#e05478]/80 hover:bg-[#e05478]/25 hover:text-[#f5eef5]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ffffff10] px-4 py-6 text-center">
          <p className="text-xs text-[#8a7a8a]">
            &copy; {new Date().getFullYear()} CareForU. Tous droits réservés.
            <br className="inline md:hidden" />
            <span className="mx-2 hidden md:inline">•</span> Crafted with{" "}
            <FaHeart className="inline h-3 w-3 text-[#e05478]" /> by
            Imane Boussarhane
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

