import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import TOMFORD from '../Catalogue/SL2.jpg';
import VERSACE from '../Catalogue/SL1.jpg';
import RITUALS from '../Catalogue/SL3.jpg';
import ROCHEPOSAY from '../Catalogue/SL4.jpg';
import YSL from '../Catalogue/SL5.jpg';
import DIOR from '../Catalogue/SL6.jpg';
import LV from '../Catalogue/SL7.jpg';
import PRADA from '../Catalogue/SL8.jpg';
import GUCCI from '../Catalogue/SL9.jpg';
import GIVENCHY from '../Catalogue/SL10.jpg';
import HERMES from '../Catalogue/SL11.jpg';
import CELINE from '../Catalogue/SL12.jpg';
import CHARLOTTETILBURY from '../Catalogue/SL13.jpg';
import HUDABEAUTY from '../Catalogue/SL14.jpg';
import NARS from '../Catalogue/SL15.jpg';
import ANASTASIA from '../Catalogue/SL16.jpg';
import SEPHORA from '../Catalogue/SL17.jpg';
import GOLDENROSE from '../Catalogue/SL18.jpg';
import './swiper-custom.css';

const brands = [
  { name: 'Tom Ford', image: TOMFORD },
  { name: 'Versace', image: VERSACE },
  { name: 'Rituals', image: RITUALS },
  { name: 'La Roche-Posay', image: ROCHEPOSAY },
  { name: 'YSL', image: YSL },
  { name: 'Dior', image: DIOR },
  { name: 'Louis Vuitton', image: LV },
  { name: 'Prada', image: PRADA },
  { name: 'Gucci', image: GUCCI },
  { name: 'Givenchy', image: GIVENCHY },
  { name: 'Hermes', image: HERMES },
  { name: 'Celine', image: CELINE },
  { name: 'Charlotte Tilbury', image: CHARLOTTETILBURY },
  { name: 'Huda Beauty', image: HUDABEAUTY },
  { name: 'Nars', image: NARS },
  { name: 'Anastasia', image: ANASTASIA },
  { name: 'Sephora', image: SEPHORA },
  { name: 'Golden Rose', image: GOLDENROSE },
];

const MySwiperComponent = () => {
  return (
    <section className="catalogue-hero-section">
      <div className="catalogue-glow catalogue-glow-left" />
      <div className="catalogue-glow catalogue-glow-right" />
      
      <div className="container mx-auto py-6 md:py-8 relative z-10">
        {/* ─── Premium header ─── */}
        <div className="catalogue-header" data-aos="fade-up">
          <div className="catalogue-badge">
            <span className="catalogue-badge-dot" />
            NOS MARQUES PARTENAIRES
          </div>

          <h2 className="catalogue-title">
            Découvrez nos{" "}
            <em className="catalogue-title-italic">marques premium</em>
            <br />
            sélectionnées avec soin
          </h2>

          <p className="catalogue-description">
            Les meilleures marques de beauté et de bien-être du monde, choisies pour leur qualité, leur efficacité et leur luxe.
          </p>
        </div>
        <div className="catalogue-swiper-shell">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={18}
            coverflowEffect={{
              rotate: 18,
              stretch: 0,
              depth: 140,
              modifier: 1.4,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="catalogue-swiper custom-swiper-pagination"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="catalogue-slide">
                <div className="catalogue-slide-content">
                  <span className="catalogue-brand-name">{brand.name}</span>
                  <img src={brand.image} alt={brand.name} className="catalogue-slide-img" />
                  <Link to="/shop" className="catalogue-btn-primary">
                    Découvrir
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MySwiperComponent;
