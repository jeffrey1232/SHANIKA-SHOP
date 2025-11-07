import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: 'Robes',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    link: '/robes',
  },
  {
    id: 2,
    name: 'Ensembles',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    link: '/ensembles',
  },
  {
    id: 3,
    name: 'Pantalons',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    link: '/pantalons-jupes',
  },
  {
    id: 4,
    name: 'Blouses',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80',
    link: '/hauts-blouses',
  },
  {
    id: 5,
    name: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    link: '/accessoires',
  },
  {
    id: 6,
    name: 'Nouveautés',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    link: '/nouveautes',
  },
];

const Categories = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block badge-new mb-4"
          >
            Explorez nos collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-gray-900"
          >
            Nos Catégories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez notre sélection soignée de vêtements pour toutes les occasions
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Link to={category.link}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 group-hover:translate-y-[-4px] transition-transform">
                      {category.name}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="flex items-center text-white text-sm font-medium"
                    >
                      <span>Découvrir</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 shimmer-effect" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
