import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo-care.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/catalogue', label: 'Catalogue' },
    { to: '/shop', label: 'Produits' },
    { to: '/compte', label: 'Espace client' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nb-root">
      <div className="nb-accent-line" />

      <div className="nb-inner">
        {/* ── Logo ── */}
        <Link to="/" className="nb-logo-link">
          <div className="nb-logo-ring">
            <img src={logo} alt="CareForU" className="nb-logo-img" />
          </div>
          <div className="nb-logo-text">
            <span className="nb-logo-name">CareForU</span>
            <span className="nb-logo-tagline">Beauté &amp; Bien-être</span>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <div className="nb-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nb-link${isActive(link.to) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Mobile toggle ── */}
        <div className="nb-mobile-toggle">
          <button
            className="nb-mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`nb-drawer${isMobileMenuOpen ? ' open' : ''}`}>
        <div className="nb-drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nb-drawer-link${isActive(link.to) ? ' active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar; 