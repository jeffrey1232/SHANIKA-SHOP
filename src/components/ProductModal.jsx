import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart, FiStar, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Ivoire');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = product.colors || ['Ivoire', 'Rouge', 'Noir', 'Rose'];

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden custom-scrollbar"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative bg-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                  >
                    <FiX className="text-xl text-gray-700" />
                  </motion.button>
                  <div className="aspect-square md:h-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badges sur l'image */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isBestSeller && (
                      <span className="badge-bestseller shadow-md">🔥 Meilleure vente</span>
                    )}
                    {product.discount && (
                      <span className="badge-sale shadow-md">-{product.discount}%</span>
                    )}
                  </div>
                </div>

                {/* Informations */}
                <div className="p-8 overflow-y-auto custom-scrollbar max-h-[90vh]">
                  <div className="space-y-6">
                    {/* Titre et prix */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
                        {product.name}
                      </h2>
                      <div className="flex items-baseline space-x-3 mb-4">
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-lg">
                            {formatPrice(product.originalPrice)} FCFA
                          </span>
                        )}
                        <span className={`text-3xl font-bold ${product.originalPrice ? 'text-red-600' : 'text-gray-900'}`}>
                          {formatPrice(product.price)} FCFA
                        </span>
                      </div>
                      {product.rating && (
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({product.reviews} avis)</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="border-t border-b border-gray-200 py-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                        Description
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Taille */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Taille
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <motion.button
                            key={size}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedSize(size)}
                            className={`relative px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                              selectedSize === size
                                ? 'border-pink-600 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-600 shadow-md'
                                : 'border-gray-200 text-gray-700 hover:border-pink-300 hover:bg-pink-50'
                            }`}
                          >
                            {size}
                            {selectedSize === size && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-pink-600 rounded-full p-1"
                              >
                                <FiCheck className="text-white text-xs" />
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Couleur */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Couleur
                      </label>
                      <div className="flex flex-wrap gap-3 mb-3">
                        {colors.map((color) => {
                          const colorMap = {
                            Ivoire: '#FFF8E7',
                            Rouge: '#EF4444',
                            Noir: '#1F2937',
                            Rose: '#EC4899',
                            Bleu: '#3B82F6',
                            Vert: '#10B981',
                            Blanc: '#FFFFFF',
                            Beige: '#F5F5DC',
                            Gris: '#808080',
                          };
                          return (
                            <motion.button
                              key={color}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSelectedColor(color)}
                              className={`relative w-12 h-12 rounded-full border-4 transition-all shadow-md ${
                                selectedColor === color
                                  ? 'border-pink-600 scale-110 ring-4 ring-pink-200'
                                  : 'border-gray-300 hover:border-pink-400'
                              }`}
                              style={{ backgroundColor: colorMap[color] || '#CCC' }}
                              title={color}
                            >
                              {selectedColor === color && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute inset-0 flex items-center justify-center"
                                >
                                  <FiCheck className="text-white text-lg drop-shadow-lg" />
                                </motion.div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                      <p className="text-sm text-gray-600">
                        Couleur sélectionnée : <span className="font-semibold text-gray-900">{selectedColor}</span>
                      </p>
                    </div>

                    {/* Quantité */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Quantité
                      </label>
                      <div className="flex items-center space-x-4 w-fit">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors font-semibold text-gray-700"
                        >
                          <FiMinus />
                        </motion.button>
                        <span className="text-2xl font-bold w-16 text-center text-gray-900">{quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-pink-600 hover:bg-pink-50 flex items-center justify-center transition-colors font-semibold text-gray-700"
                        >
                          <FiPlus />
                        </motion.button>
                      </div>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center space-x-2">
                      {product.inStock ? (
                        <>
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-green-600 font-semibold">En stock</span>
                        </>
                      ) : (
                        <>
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <span className="text-red-600 font-semibold">Rupture de stock</span>
                        </>
                      )}
                    </div>

                    {/* Bouton Ajouter au panier */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiShoppingCart className="text-xl" />
                      <span>Ajouter au panier</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
