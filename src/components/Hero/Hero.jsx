import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { motion, useInView } from 'framer-motion';
import homeVideo from './vds.mp4';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.86 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const zoomOut = {
  hidden: { opacity: 0, scale: 1.18 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const useCountUp = (endValue, duration, startAnimation) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let frame;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(endValue * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [duration, endValue, startAnimation]);

  return value;
};

const Hero = ({ handleOrderPopup }) => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const clientsCount = useCountUp(4800, 1900, statsInView);
  const naturalCount = useCountUp(100, 1500, statsInView);
  const ratingCount = useCountUp(5, 1300, statsInView);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="hero-dark-section">
      {/* Background glow blobs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-dark-inner">
        {/* ─── LEFT : circular visual ─── */}
        <motion.div
          className="hero-visual-col"
          variants={zoomIn}
          initial="hidden"
          animate="show"
        >
          {/* Crimson circle */}
          <div className="hero-circle">
            <video
              className="hero-circle-video"
              src={homeVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Floating pill labels */}
          <div className="hero-pill hero-pill-top">
            <span className="hero-pill-dot" />
            naturelle
          </div>
          <div className="hero-pill hero-pill-left">
            <span className="hero-pill-dot" />
            Routine Premium
          </div>
          <div className="hero-pill hero-pill-bottom">
            <span className="hero-pill-dot" />
            Livraison rapide &middot; Maroc
          </div>

          {/* Scroll-down arrow */}
          <button onClick={scrollToNext} className="hero-scroll-btn" aria-label="Scroll down">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </motion.div>

        {/* ─── RIGHT : text content ─── */}
        <motion.div
          className="hero-text-col"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="show">
            <span className="hero-badge-dot" />
            ROUTINE BEAUTÉ PREMIUM
          </motion.div>

          {/* Heading */}
          <motion.h1 className="hero-heading" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}>
            La beauté{' '}
            <em className="hero-heading-italic">naturelle</em>
            <br />
            sublimée avec nos soins
          </motion.h1>

          {/* Body text */}
          <motion.p className="hero-body" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
            Découvrez notre gamme exclusive de cosmétiques conçus pour révéler votre beauté
            naturel — interface légère, sélection experte, expérience raffinée.
          </motion.p>

          {/* CTA buttons */}
          <motion.div className="hero-cta-row" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.28 }}>
            <Link to="/shop" className="hero-btn-primary">
              DÉCOUVRIR
            </Link>
            <Link to="/about" className="hero-btn-secondary">
              EN SAVOIR PLUS
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            className="hero-stats"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div className="hero-stat" variants={zoomIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="hero-stat-number">{clientsCount.toLocaleString('fr-FR')}+</span>
              <span className="hero-stat-label">CLIENTES SATISFAITES</span>
            </motion.div>
            <div className="hero-stat-divider" />
            <motion.div className="hero-stat" variants={zoomOut} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="hero-stat-number">{naturalCount}%</span>
              <span className="hero-stat-label">INGRÉDIENTS NATURELS</span>
            </motion.div>
            <div className="hero-stat-divider" />
            <motion.div className="hero-stat" variants={zoomIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="hero-stat-number">{ratingCount}★</span>
              <span className="hero-stat-label">AVIS CLIENTS</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
