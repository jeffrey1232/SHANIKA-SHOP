import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
    { icon: FaWhatsapp, href: 'https://wa.me/2250123456789', label: 'WhatsApp' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Effet décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-display font-bold text-gradient mb-4">SHANIKA SHOP</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre destination pour l'élégance et le style. Des vêtements féminins soigneusement sélectionnés pour vous.
              </p>
            </motion.div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 transition-all duration-300 border border-gray-700 hover:border-pink-500"
                    aria-label={social.label}
                  >
                    <Icon className="text-xl text-gray-300 group-hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bloc Informations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Informations</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'À propos de nous' },
                { to: '/delivery', label: 'Livraison & retours' },
                { to: '/privacy', label: 'Politique de confidentialité' },
                { to: '/terms', label: 'Conditions générales de vente' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors group"
                  >
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloc Aide & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Aide & Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-pink-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center">
                  <FiMail className="text-pink-400" />
                </div>
                <a href="mailto:contact@shanikashop.ci" className="text-gray-400 hover:text-pink-400 transition-colors">
                  contact@shanikashop.ci
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="text-pink-400" />
                </div>
                <a href="https://wa.me/2250123456789" className="text-gray-400 hover:text-pink-400 transition-colors">
                  +225 01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center">
                  <FiPhone className="text-pink-400" />
                </div>
                <span className="text-gray-400">+225 01 23 45 67 89</span>
              </li>
              <li className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-800">
                <strong className="text-gray-300">Heures d'ouverture :</strong><br />
                Lun - Ven : 9h - 18h<br />
                Samedi : 9h - 16h
              </li>
            </ul>
          </motion.div>

          {/* Bloc Paiement & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Paiement sécurisé</h3>
            <p className="text-sm mb-4 text-pink-400 font-semibold">
              Paiement 100% sécurisé
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['VISA', 'MASTERCARD', 'MoMo', 'Orange Money', 'Wave'].map((method) => (
                <div
                  key={method}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700 hover:border-pink-500 transition-colors"
                >
                  <span className="text-xs font-bold text-white">{method}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
              <p className="text-xs text-gray-400 mb-3">Recevez nos offres exclusives</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  OK
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            © 2025 <span className="text-pink-400 font-semibold">SHANIKA SHOP</span> – Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
