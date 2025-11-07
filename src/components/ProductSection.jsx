import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductSection = ({ title, products, onProductClick, onAddToCart }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Effet décoratif subtil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto rounded-full"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard
                product={product}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
