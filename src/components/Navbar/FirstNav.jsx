import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import './FirstNav.css';

const PROMO_MESSAGES = [
  { icon: '✨', text: "Livraison gratuite dès 350 DH d'achat" },
  { icon: '💄', text: 'Nouveautés printemps — découvrez la collection' },
  { icon: '🌿', text: 'Formules naturelles, résultats visibles' },
];

const LANGS = ['FR', 'EN', 'AR'];

const FirstNav = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [slide, setSlide] = useState('in');
  const [lang, setLang] = useState('FR');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide('out');
      setTimeout(() => {
        setPromoIndex((i) => (i + 1) % PROMO_MESSAGES.length);
        setSlide('in');
      }, 380);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const current = PROMO_MESSAGES[promoIndex];

  return (
    <div className="firstnav-bar">
      {/* Top shimmer glow */}
      <div className="firstnav-shimmer-top" />
      {/* Bottom separator */}
      <div className="firstnav-shimmer-bottom" />

      <div className="firstnav-inner">

        {/* ── LEFT : brand tag + lang switcher ── */}
        <div className="firstnav-left">
          <HiSparkles className="firstnav-sparkle" />
          <span className="firstnav-brand">CareForU</span>
          <span className="firstnav-divider" />
          <div className="firstnav-langs">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`firstnav-lang-btn${lang === l ? ' active' : ''}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* ── CENTER : animated promo ── */}
        <div className="firstnav-center">
          <span className={`firstnav-promo firstnav-promo-${slide}`}>
            <span className="firstnav-promo-icon">{current.icon}</span>
            {current.text}
          </span>
        </div>

        {/* ── RIGHT : contact + socials ── */}
        <div className="firstnav-right">
          <a href="tel:+212612345678" className="firstnav-contact-link">
            <FaPhone className="firstnav-contact-icon" />
            <span>+212 6 12 34 56 78</span>
          </a>
          <span className="firstnav-divider" />
          <a href="#location" className="firstnav-contact-link">
            <FaLocationDot className="firstnav-contact-icon" />
            <span>Casablanca</span>
          </a>
          <span className="firstnav-divider" />
          <div className="firstnav-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="firstnav-social-icon">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="firstnav-social-icon">
              <FaFacebookF />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="firstnav-social-icon">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FirstNav;

