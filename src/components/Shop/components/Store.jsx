import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import img1 from './imgs/m1.jpeg';

import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img4.jpeg";
import img4 from "./imgs/img18.jpeg";
import img5 from "./imgs/img8.jpeg";
import img6 from "./imgs/img24.jpeg";
import img7 from "./imgs/m1.jpeg";
import img8 from "./imgs/img5.jpeg";
import img9 from "./imgs/m4.jpeg";
import img10 from "./imgs/m5.jpeg";
import img11 from "./imgs/m6.jpeg";
import img12 from "./imgs/m7.jpeg";
import './styleShop.css';

const ITEMS_PER_PAGE = 6;

const baseProducts = [
  { id: 1, name: 'TOM FORD', price: 1000.99, imgUrl: img1, category: 'parfum' },
  { id: 2, name: 'VERSACE PARFUM', price: 1199, imgUrl: img2, category: 'parfum' },
  { id: 3, name: 'CRISTAL NOIR', price: 200, imgUrl: img3, category: 'parfum' },
  { id: 4, name: 'GLOSS DIOR', price: 140, imgUrl: img4, category: 'soin' },
  { id: 5, name: 'POUDRE', price: 14060, imgUrl: img5, category: 'soin' },
  { id: 6, name: 'GLOSS', price: 14000, imgUrl: img6, category: 'soin' },
  { id: 7, name: 'ROUGE A LEVRE', price: 800, imgUrl: img7, category: 'maquillage' },
  { id: 8, name: 'HIGHLIGHTER', price: 190, imgUrl: img8, category: 'soin' },
  { id: 9, name: 'FLULESS', price: 980, imgUrl: img9, category: 'maquillage' },
  { id: 10, name: 'AIR', price: 150, imgUrl: img10, category: 'maquillage' },
  { id: 11, name: 'POUDRE', price: 950, imgUrl: img11, category: 'soin' },
  { id: 12, name: 'PACK', price: 800, imgUrl: img12, category: 'soin' },
];

const Store = ({ onTrackEvent }) => {
  const { addToCart } = useShoppingCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = (queryParams.get('category') || 'all').toLowerCase();
  const selectedProductId = Number(queryParams.get('product'));

  const [products] = useState(baseProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(selectedCategory);
  const [sortByPrice, setSortByPrice] = useState('none');

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchText =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchCategory && matchText;
    });

    const withPriority = filtered.sort((a, b) => {
      if (!selectedProductId) return 0;
      if (a.id === selectedProductId) return -1;
      if (b.id === selectedProductId) return 1;
      return 0;
    });

    if (sortByPrice === 'asc') {
      return [...withPriority].sort((a, b) => a.price - b.price);
    }

    if (sortByPrice === 'desc') {
      return [...withPriority].sort((a, b) => b.price - a.price);
    }

    return withPriority;
  }, [products, categoryFilter, searchTerm, selectedProductId, sortByPrice]);

  useEffect(() => {
    setCategoryFilter(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, searchTerm, sortByPrice]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / ITEMS_PER_PAGE));
  const pageProducts = visibleProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    if (onTrackEvent) {
      onTrackEvent({
        type: 'ADD_TO_CART',
        product,
      });
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter(selectedCategory);
    setSortByPrice('none');
  };

  return (
    <div className="shop-layout">
      <section className="shop-panel">
        <h3 className="shop-panel-title">Mode recherche</h3>
        <p className="shop-panel-subtitle">Affinez rapidement le catalogue selon vos besoins.</p>
        <Form className="shop-product-form" onSubmit={(event) => event.preventDefault()}>
          <Form.Group>
            <Form.Label>Recherche</Form.Label>
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Ex: serum, gloss, parfum"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Catégorie</Form.Label>
            <Form.Select
              name="categoryFilter"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option value="all">Tout</option>
              <option value="parfum">Parfum</option>
              <option value="soin">Soin</option>
              <option value="maquillage">Maquillage</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Trier par prix</Form.Label>
            <Form.Select
              name="sortByPrice"
              value={sortByPrice}
              onChange={(event) => setSortByPrice(event.target.value)}
            >
              <option value="none">Pertinence</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix decroissant</option>
            </Form.Select>
          </Form.Group>
          <Button type="button" className="button-custom w-100 mt-2" onClick={handleResetFilters}>
            Reinitialiser les filtres
          </Button>
        </Form>
      </section>

      <section className="shop-grid-wrap">
        <div className="shop-results-toolbar">
          <p className="shop-results-count">
            {visibleProducts.length} produit{visibleProducts.length > 1 ? 's' : ''} trouve
            {visibleProducts.length > 1 ? 's' : ''}
          </p>
          <p className="shop-results-hint">Utilisez la recherche pour filtrer rapidement le catalogue.</p>
        </div>

        <div className="shop-grid">
          {pageProducts.map((product, index) => (
            <Card
              key={product.id}
              className="card-custom"
              style={{
                border: product.id === selectedProductId ? '1px solid #e05478' : undefined,
                '--card-delay': `${index * 70}ms`,
              }}
            >
              <Card.Img variant="top" src={product.imgUrl} className="fixed-size-image" />
              <Card.Body>
                <Card.Title className="card-title-custom">{product.name}</Card.Title>
                <Card.Text className="card-text-custom">${product.price.toFixed(2)}</Card.Text>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="product-category">{product.category}</span>
                  {product.isCustom && <span className="product-custom-badge">Nouveau</span>}
                </div>
                <Button
                  variant="primary"
                  className="button-custom mt-3"
                  onClick={() => handleAddToCart(product)}
                >
                  Ajouter au panier
                </Button>
              </Card.Body>
            </Card>
          ))}

          {!pageProducts.length && (
            <div className="shop-empty-state" role="status" aria-live="polite">
              <h4>Aucun produit ne correspond a votre recherche</h4>
              <p>Essayez une autre categorie ou reinitialisez les filtres.</p>
            </div>
          )}
        </div>

        <div className="shop-pagination">
          <Button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            Precedent
          </Button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={`page-dot ${page === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
              type="button"
            >
              {page}
            </button>
          ))}
          <Button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          >
            Suivant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Store;
