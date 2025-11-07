import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar, FiEye } from 'react-icons/fi';
import { useState } from 'react';

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="product-card cursor-pointer group"
      onClick={() => onProductClick(product)}
    >
      {/* Image du produit */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay avec boutons au survol */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white text-pink-600 px-5 py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
          >
            <FiShoppingCart />
            <span>Ajouter</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product);
            }}
            className="bg-white text-pink-600 px-5 py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
          >
            <FiEye />
            <span>Voir</span>
          </motion.button>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="badge-bestseller shadow-md"
            >
              🔥 Meilleure vente
            </motion.div>
          )}
          {product.isNew && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="badge-new shadow-md"
            >
              Nouveau
            </motion.div>
          )}
        </div>
        
        {product.discount && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            className="absolute top-3 right-3 badge-sale shadow-md text-sm font-bold"
          >
            -{product.discount}%
          </motion.div>
        )}
      </div>

      {/* Informations du produit */}
      <div className="p-5 bg-white">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Étoiles */}
        {product.rating && (
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="inline-block"
              >
                <FiStar
                  className={`text-sm ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </motion.div>
            ))}
            <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
          </div>
        )}
        
        {/* Prix */}
        <div className="flex items-baseline space-x-2 mb-4">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(product.originalPrice)} FCFA
            </span>
          )}
          <span className={`font-bold text-xl ${product.originalPrice ? 'text-red-600' : 'text-gray-900'}`}>
            {formatPrice(product.price)} FCFA
          </span>
        </div>

        {/* Bouton Commander */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full btn-primary py-3 flex items-center justify-center space-x-2"
        >
          <FiShoppingCart className="text-lg" />
          <span>Commander</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
