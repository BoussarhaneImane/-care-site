import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Store from "./Store";
import Cart from "./Cart";
import { useShoppingCart } from "./ShoppingCartContext";
import { useLocation } from "react-router-dom";
import {
  buildWhatsAppCheckoutLink,
  createOpenCartOrder,
} from "./openCartService";
import './shop.css';

const ShopPageContent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [checkoutStage, setCheckoutStage] = useState("catalogue");
  const [trackedProductName, setTrackedProductName] = useState("");
  const [orderReference, setOrderReference] = useState("");
  const { state } = useShoppingCart(); 
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "all";
  const trackedProductId = queryParams.get("product");

  useEffect(() => {
    if (queryParams.get("openCart") === "1") {
      setCartOpen(true);
      setCheckoutStage("panier");
    }
  }, [location.search]);

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

  const journeySteps = [
    { key: "catalogue", label: "Catalogue" },
    { key: "panier", label: "Panier" },
    { key: "checkout", label: "Checkout OpenCart" },
    { key: "paid", label: "Paiement / Confirmation" },
  ];

  const checkoutStageIndex = journeySteps.findIndex((step) => step.key === checkoutStage);

  const handleTrackEvent = ({ type, product }) => {
    if (type === "PRODUCT_CREATED" && product) {
      setCheckoutMessage(`Produit ajoute au catalogue: ${product.name}`);
      return;
    }

    if (type === "ADD_TO_CART" && product) {
      setTrackedProductName(product.name);
      setCheckoutStage("panier");
      setCheckoutMessage(`Produit ajoute au panier: ${product.name}`);
    }
  };

  const handleCheckoutWhatsApp = async ({ items, totalPrice }) => {
    if (!items.length || isCheckingOut) {
      return;
    }

    try {
      setIsCheckingOut(true);
      setCheckoutStage("checkout");
      setCheckoutMessage("Creation de la commande OpenCart en cours...");

      const order = await createOpenCartOrder({
        items,
        totalPrice,
        currency: "MAD",
        checkoutMethod: "whatsapp",
      });

      setOrderReference(order.orderReference);

      const whatsappLink = buildWhatsAppCheckoutLink({
        items,
        totalPrice,
        orderReference: order.orderReference,
      });

      setCheckoutStage("paid");
      setCheckoutMessage("Commande prete. Vous allez etre redirige vers WhatsApp pour finaliser.");
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
    } catch (error) {
      setCheckoutMessage("Echec integration WhatsApp/OpenCart. Verifiez la configuration API.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Container className="shop-page mb-4">
      <div className="shop-hero">
        <p className="shop-eyebrow">Parcours OpenCart</p>
        <h2>Boutique client avec checkout WhatsApp</h2>
        <p className="mb-0">
          Categorie active: <strong>{selectedCategory}</strong>
          {trackedProductId ? ` | Produit cible: #${trackedProductId}` : ""}
          {trackedProductName ? ` | Dernier produit ajoute: ${trackedProductName}` : ""}
          {` | Mode: whatsapp`}
          {orderReference ? ` | Reference commande: ${orderReference}` : ""}
        </p>
      </div>

      <div className="journey-wrap">
        {journeySteps.map((step, index) => {
          const isCompleted = index <= checkoutStageIndex;
          return (
            <div key={step.key} className={`journey-step ${isCompleted ? "is-active" : ""}`}>
              <span className="journey-dot">{index + 1}</span>
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>

      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}

      <div className="d-flex align-items-center mb-3">
        <button onClick={() => setCartOpen(true)} className="btn-open">Open Cart</button>
        {totalItems > 0 && (
          <span className="badge">{totalItems}</span>
        )}
      </div>

      <Store onTrackEvent={handleTrackEvent} />
      <Cart
        isOpen={cartOpen}
        onHide={() => setCartOpen(false)}
        onCheckoutWhatsApp={handleCheckoutWhatsApp}
        isCheckingOut={isCheckingOut}
      />
    </Container>
  );
};

export default ShopPageContent;
