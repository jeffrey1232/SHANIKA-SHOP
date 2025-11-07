import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Amielle G',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'Les robes sont magnifiques 😍 et la livraison rapide ! Je recommande vivement.',
    location: 'Abidjan',
  },
  {
    id: 2,
    name: 'Donnelle G',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'Qualité exceptionnelle et prix très raisonnables. J\'adore cette boutique !',
    location: 'Yamoussoukro',
  },
  {
    id: 3,
    name: 'Mariam S.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
    rating: 5,
    text: 'Service client au top et produits de très bonne qualité. Je suis cliente fidèle !',
    location: 'Bouaké',
  },
  {
    id: 4,
    name: 'Aminata T.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
    rating: 5,
    text: 'Les vêtements sont élégants et confortables. Parfait pour le quotidien !',
    location: 'Korhogo',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Effet décoratif de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block badge-new mb-4"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-gray-900"
          >
            Ce que disent nos clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez les avis authentiques de nos clientes satisfaites
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="card-glass p-6 relative group"
            >
              {/* Icône de citation */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-4xl text-pink-600 font-serif">"</span>
              </div>

              {/* Étoiles */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <FiStar className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Informations client */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-200 group-hover:ring-pink-400 transition-all"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
