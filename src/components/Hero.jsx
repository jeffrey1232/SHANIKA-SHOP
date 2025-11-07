import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useMemo } from 'react';

const Hero = () => {
  // Générer les positions des particules une seule fois
  const particles = useMemo(() => 
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  , []);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Image de fond avec overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Effet de particules décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/30 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{
              y: [`${particle.y}%`, `${(particle.y + 30) % 100}%`],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Contenu */}
      <div className="relative container mx-auto px-4 lg:px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="badge-new text-sm px-4 py-1.5">Nouvelle Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Soyez élégante,
            <br />
            <span className="bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">
              chaque jour
            </span>{' '}
            🌸
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 max-w-2xl leading-relaxed"
          >
            Découvrez notre nouvelle collection de vêtements féminins, alliant style, confort et élégance pour sublimer votre quotidien.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-2 group"
            >
              <span>Découvrir la collection</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-4 border-white text-white hover:bg-white/10"
            >
              En savoir plus
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
