import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      {/* Bannière promotionnelle */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white text-center py-2.5 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 shimmer-effect opacity-30" />
        <p className="text-sm font-semibold relative z-10">
          🎉 Livraison gratuite à partir de 25.000 FCFA !
        </p>
      </motion.div>

      {/* Header principal */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl lg:text-3xl font-display font-bold text-gradient"
            >
              SHANIKA SHOP
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { to: '/', label: 'Accueil' },
              { to: '/nouveautes', label: 'Nouveautés' },
              { to: '/robes', label: 'Robes' },
              { to: '/hauts-blouses', label: 'Hauts & Blouses' },
              { to: '/pantalons-jupes', label: 'Pantalons & Jupes' },
              { to: '/vetements-homme', label: 'Vêtements pour homme' },
              { to: '/accessoires', label: 'Accessoires' },
              { to: '/promotions', label: 'Promotions' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Barre de recherche desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher un article…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-styled pl-11 pr-4 py-2.5 text-sm"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Icônes d'action */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Mon compte */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200 group"
            >
              <FiUser className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Mon compte</span>
            </motion.button>

            {/* Favoris */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2.5 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
            >
              <FiHeart className="text-xl" />
            </motion.button>

            {/* Panier */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2.5 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
            >
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg"
                  style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Menu mobile */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </motion.button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden flex flex-col space-y-3 py-4 border-t border-gray-100"
          >
            {[
              { to: '/', label: 'Accueil' },
              { to: '/nouveautes', label: 'Nouveautés' },
              { to: '/robes', label: 'Robes' },
              { to: '/hauts-blouses', label: 'Hauts & Blouses' },
              { to: '/pantalons-jupes', label: 'Pantalons & Jupes' },
              { to: '/vetements-homme', label: 'Vêtements pour homme' },
              { to: '/accessoires', label: 'Accessoires' },
              { to: '/promotions', label: 'Promotions' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Barre de recherche mobile */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un article…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-styled pl-11 pr-4 py-2.5 text-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
