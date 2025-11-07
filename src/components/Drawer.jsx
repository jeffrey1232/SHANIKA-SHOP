import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiHeart, FiShoppingCart, FiHome, FiTag, FiMail, FiLogOut, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Drawer = ({ isOpen, onClose }) => {
  const { cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
          >
            <div className="p-6">
              {/* Header du drawer */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  SHANIKA SHOP
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Barre de recherche */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un article…"
                    className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-6">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiHome className="text-xl" />
                  <span className="font-medium">Accueil</span>
                </Link>
                <Link
                  to="/nouveautes"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Nouveautés</span>
                </Link>
                <Link
                  to="/robes"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Robes</span>
                </Link>
                <Link
                  to="/hauts-blouses"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Hauts & Blouses</span>
                </Link>
                <Link
                  to="/pantalons-jupes"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Pantalons & Jupes</span>
                </Link>
                <Link
                  to="/accessoires"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Accessoires</span>
                </Link>
                <Link
                  to="/promotions"
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiTag className="text-xl" />
                  <span className="font-medium">Promotions</span>
                </Link>
              </nav>

              {/* Icônes d'action */}
              <div className="space-y-2 border-t pt-4">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors">
                  <FiUser className="text-xl" />
                  <span className="font-medium">Mon compte</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors">
                  <FiHeart className="text-xl" />
                  <span className="font-medium">Favoris</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors relative">
                  <FiShoppingCart className="text-xl" />
                  <span className="font-medium">Panier</span>
                  {cartCount > 0 && (
                    <span className="ml-auto bg-pink-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                >
                  <FiMail className="text-xl" />
                  <span className="font-medium">Contact</span>
                </Link>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors">
                  <FiLogOut className="text-xl" />
                  <span className="font-medium">Déconnexion</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;

