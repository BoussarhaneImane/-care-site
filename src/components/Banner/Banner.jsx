import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from '../Hero/p1.png';
import image2 from '../Hero/p2.png';
import image3 from '../Hero/p3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const Banner = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="banner-hero-like" id="box1">
      <div className="banner-glow banner-glow-left" />
      <div className="banner-glow banner-glow-right" />

      <div className="container">
        <div className="banner-shell">
          <div className="banner-media" data-aos="fade-right">
            <div className="banner-orb" />
            <div className="banner-images-grid">
              <img src={image1} alt="Produit CareForU 1" className="banner-product" />
              <img src={image2} alt="Produit CareForU 2" className="banner-product banner-product-mid" />
              <img src={image3} alt="Produit CareForU 3" className="banner-product" />
            </div>
          </div>

          <div className="banner-copy" data-aos="fade-left">
            <span className="banner-badge">
              <span className="banner-badge-dot" />
              SÉLECTION CAREFORU
            </span>

            <h1 className="banner-title">
              CareForU, la beauté
              <em> naturelle</em>
              <br />
              pensée pour vous
            </h1>

            <p className="banner-description">
              Découvrez notre gamme exclusive de produits cosmétiques conçus
              pour sublimer votre beauté naturelle. Offrez-vous des soins
              premium, des textures raffinées et une expérience qui respecte
              votre peau au quotidien.
            </p>

            <div className="banner-actions">
              <Link to="/shop" className="banner-btn-primary">
                DÉCOUVRIR
              </Link>
              <Link to="/about" className="banner-btn-secondary">
                EN SAVOIR PLUS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
