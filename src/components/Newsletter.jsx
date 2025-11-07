import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Générer les positions des particules une seule fois
  const particles = useMemo(() => 
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }))
  , []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600" />
      
      {/* Effet de particules */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{
              y: [`${particle.y}%`, `${(particle.y + 40) % 100}%`],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="badge bg-white/20 backdrop-blur-sm text-white border border-white/30">
              Newsletter
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
          >
            Restez stylée
            <br />
            <span className="text-pink-200">abonnez-vous à nos nouveautés</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Recevez nos nouveautés et réductions exclusives directement dans votre boîte mail. Ne manquez aucune offre spéciale !
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <FiMail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                className="w-full pl-14 pr-5 py-4 rounded-full bg-white/95 backdrop-blur-sm border-2 border-white/50 focus:outline-none focus:ring-4 focus:ring-white/50 focus:border-white text-gray-900 placeholder-gray-500 text-lg shadow-xl"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 min-w-[180px]"
            >
              {submitted ? (
                <>
                  <FiCheck className="text-xl" />
                  <span>Abonné !</span>
                </>
              ) : (
                <span>S'abonner</span>
              )}
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-pink-200 mt-6"
          >
            🔒 Vos données sont protégées. Désabonnez-vous à tout moment.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
