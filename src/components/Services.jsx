import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smile, Eye, Leaf, Sparkles, Moon as Mirror } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Maquiagem Profissional',
      description: 'Maquiagem personalizada para eventos, festas e ocasiões especiais com produtos de alta qualidade'
    },
    {
      icon: Smile,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem e design de sobrancelhas com técnicas modernas para realçar seu olhar'
    },
    {
      icon: Eye,
      title: 'Extensão de Cílios',
      description: 'Alongamento de cílios fio a fio com técnicas seguras e duradouras'
    },
    {
      icon: Leaf,
      title: 'Skincare Premium',
      description: 'Tratamentos faciais personalizados com produtos premium para uma pele radiante'
    },
    {
      icon: Sparkles,
      title: 'Lash Lifting',
      description: 'Curvatura natural dos cílios para um olhar mais aberto e expressivo'
    },
    {
      icon: Mirror,
      title: 'Consultoria de Beleza',
      description: 'Orientação personalizada sobre cuidados e técnicas de beleza para seu perfil'
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gradient-to-br from-[#fdf2f5] to-[#f6dce3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ca5d74] to-[#b84f65] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Serviços especializados para realçar sua beleza natural
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#ca5d74] to-[#b84f65] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;