import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import ProductModal from './components/ProductModal';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getNewProducts, getBestSellers, getPromotions } from './data/products';

function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Utiliser useCart avec gestion d'erreur
  let addToCart;
  try {
    const cart = useCart();
    addToCart = cart.addToCart;
  } catch (error) {
    console.error('Error with useCart:', error);
    addToCart = () => console.log('Cart not available');
  }

  const newProducts = getNewProducts();
  const bestSellers = getBestSellers();
  const promotions = getPromotions();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, size = 'M', color = null, quantity = 1) => {
    try {
      const productColor = color || (product.colors && product.colors[0]) || 'Ivoire';
      addToCart(product, size, productColor, quantity);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ProductSection
          title="Nouveautés"
          products={newProducts}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
        <ProductSection
          title="🔥 Meilleures ventes"
          products={bestSellers}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
        <ProductSection
          title="💎 Promotions"
          products={promotions}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
        <Testimonials />
        <About />
        <Newsletter />
        <Contact />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nouveautes" element={<HomePage />} />
          <Route path="/robes" element={<HomePage />} />
          <Route path="/hauts-blouses" element={<HomePage />} />
          <Route path="/pantalons-jupes" element={<HomePage />} />
          <Route path="/accessoires" element={<HomePage />} />
          <Route path="/promotions" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
