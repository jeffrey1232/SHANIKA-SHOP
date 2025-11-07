import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Contactez-nous
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                {submitted ? 'Message envoyé ! ✓' : 'Envoyer le message'}
              </button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Nos coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <FiMail className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <a href="mailto:contact@shanikashop.ci" className="text-gray-600 hover:text-pink-600 transition-colors">
                    contact@shanikashop.ci
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <FiPhone className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <a href="tel:+2250123456789" className="text-gray-600 hover:text-pink-600 transition-colors">
                    +225 01 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <FiMapPin className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    Abidjan, Cocody<br />
                    Côte d'Ivoire
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Heures d'ouverture</h4>
                <p className="text-gray-600">
                  Lundi - Vendredi : 9h - 18h<br />
                  Samedi : 9h - 16h<br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

