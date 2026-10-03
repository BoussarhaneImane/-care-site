import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vd1 from "../Hero/vdx.mp4";
import vd2 from "../Hero/vdy.mp4";
import vd3 from "../Hero/vdz.mp4";
import "./Banner2.css";

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Banner = ({ data }) => {
  return (
    <section className="banner2-hero-like" id="box2">
      <div className="banner2-glow banner2-glow-left" />
      <div className="banner2-glow banner2-glow-right" />

      <div className="container">
        {/* ─── Premium header ─── */}
        <div className="banner2-header" data-aos="fade-up">
          <motion.div
            className="banner2-badge"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <span className="banner2-badge-dot" />
            COLLECTION VIDÉO PREMIUM
          </motion.div>

          <motion.h2
            className="banner2-title"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explorez nos{" "}
            <em className="banner2-title-italic">produits vedettes</em>
            <br />
            en action
          </motion.h2>

          <motion.p
            className="banner2-description"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Découvrez comment nos formules premium transforment votre routine beauté avec des
            résultats visibles et une expérience luxueuse.
          </motion.p>
        </div>
        <div className="banner2-shell">
          <div className="image-container" data-aos="fade-right">
            <video src={vd1} muted autoPlay playsInline className="vdexp" />
          </div>

          <div className="text-between-videos" data-aos="fade-up">
            <motion.div
              className="banner2-cta-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <p className="banner2-cta-subtitle">Prêt à transformer votre routine?</p>
              <Link to="/shop" className="banner2-btn-primary">
                ACHETER MAINTENANT
              </Link>
              <Link to="/catalogue" className="banner2-btn-secondary">
                VOIR CATALOGUE
              </Link>
            </motion.div>
          </div>

          <div className="image-container" data-aos="fade-left">
            <video src={vd2} muted autoPlay playsInline className="vdexp2" />
            <video src={vd3} muted autoPlay playsInline className="vdexp2" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
