import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiTruck, FiStar } from 'react-icons/fi';

const features = [
  {
    icon: FiHeart,
    title: 'Passion pour l\'élégance',
    description: 'Chaque pièce est sélectionnée avec soin pour vous offrir le meilleur.',
  },
  {
    icon: FiShield,
    title: 'Qualité garantie',
    description: 'Nous garantissons la qualité de tous nos produits.',
  },
  {
    icon: FiTruck,
    title: 'Livraison rapide',
    description: 'Livraison gratuite à partir de 25.000 FCFA partout en Côte d\'Ivoire.',
  },
  {
    icon: FiStar,
    title: 'Service client',
    description: 'Notre équipe est à votre écoute pour répondre à toutes vos questions.',
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Effet décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block badge-new mb-4"
            >
              Notre histoire
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900"
            >
              À propos de SHANIKA SHOP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-700 leading-relaxed mb-4"
            >
              SHANIKA SHOP est une marque ivoirienne dédiée à la femme moderne, alliant élégance et confort au quotidien.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Nous proposons une sélection soignée de vêtements féminins qui reflètent votre personnalité et votre style unique.
              Chaque pièce est choisie avec soin pour vous offrir qualité, confort et élégance.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="card-glass p-6 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
