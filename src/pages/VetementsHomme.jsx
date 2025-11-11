import React from 'react';
import { motion } from 'framer-motion';
import ProductSection from '../components/ProductSection';
import { products } from '../data/products';

const VetementsHomme = ({ onProductClick, onAddToCart }) => {
  const menProducts = products.filter((p) => p.category === 'homme' || p.gender === 'homme');

  return (
    <div className="bg-white">
      <section className="relative h-[56vh] flex items-center justify-center overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1602810313339-90e5c3f3c0b0?auto=format&fit=crop&w=1600&q=80"
          alt="Collection homme urbaine"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-center text-gray-900 z-10"
        >
          
        </motion.div>
      </section>

      <ProductSection
        title="Vêtements pour homme"
        products={menProducts}
        onProductClick={onProductClick}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default VetementsHomme;
