import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      review: 'Oi meu amor, você é simplesmente maravilhosa, adoro quando chego com autoestima baixa e você consegue levantar meu olhar, seus procedimentos são top e me encanta!! Você nasceu pra isso!! Você arrasa nos meus cílios e sobrancelha 👏😍❤️',
      rating: 5
    },
    {
      review: 'Boa tarde Darla, tudo bem? Eu amei os cílios e a unha que fizeram, vim até de sapatinho aberto hoje pro serviço para não estragar. ❤️ Eu amei 😍😍',
      rating: 5
    },
    {
      review: 'Menina!!! Amei seu trabalho. Impecável. Você ganhou uma cliente.',
      rating: 5
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section id="depoimentos" className="py-16 bg-gradient-to-br from-[#fdf2f5] to-[#f6dce3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ca5d74] to-[#b84f65] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            O que nossas clientes dizem sobre nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#ca5d74] to-[#b84f65] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-white mb-4 leading-relaxed italic">
                "{testimonial.review}"
              </p>
          
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;