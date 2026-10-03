import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Catalogue from "./components/Catalogue/Catalogue.jsx"
import Panier from "./components/Panier/Panier.jsx";
import Clients from "./components/Clients/Clients.jsx"
import Login from "./Login.jsx"; // Assurez-vous d'avoir le bon chemin d'import
import Register from "./Register.jsx"; // Assurez-vous d'avoir le bon chemin d'import
import ShopPage from './components/Shop/components/ShopPage.jsx';
import FirstNav from './components/Navbar/FirstNav.jsx';

const BannerData = {
  discount: "25%",
  title: "Glowing Skin Special",
  date: "Valid until March 31st",
  title2: "Skin Brightening Serum",
  title3: "Radiant Skin Sale",
  title4: "Achieve luminous skin with our skin brightening serum, suitable for all skin tones.",
};

const BannerData2 = {
  discount: "30%",
  title: "Hydration Boost",
  date: "Valid until April 15th",
  title2: "Moisturizing Cream",
  title3: "Hydrating Essentials Sale",
  title4: "Quench your skin's thirst with our moisturizing cream, perfect for every complexion.",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-100 text-slate-900">
      <Router>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
        
                <Navbar />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Category />
                <Category2 />
                <Services />
                <Banner data={BannerData} />
                <Products />
                <Banner2 data={BannerData2} />
                <Footer />
                <Popup
                  orderPopup={orderPopup}
                  handleOrderPopup={handleOrderPopup}
                />
              </>
            }
          />
          <Route path="/shop" element={
            <>
              <Navbar />
              <ShopPage/>
              <Footer/>
            </>
          }/>
          <Route path="/catalogue" element={
            <>
              <Navbar />
              <Catalogue/>
              <Footer/>
            </>
          }/>
          <Route path="/panier" element={
            <>
              <Navbar />
              <Panier/>
            </>
          }/> 
          <Route path="/compte" element={
            <>
              <Navbar />
              <Clients/>
            </>
          }/> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


