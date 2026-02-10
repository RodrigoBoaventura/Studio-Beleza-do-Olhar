import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[calc(100vh-96px)] pt-24 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ca5d74] to-[#e3a1b1]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca5d74]/90 to-[#e3a1b1]/90" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
           src="\logo_studio.png"
            alt="Studio Beleza do Olhar Logo"
           className="w-72 md:w-80 lg:w-96 mx-auto mb-10 object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Realçando a Beleza do Seu Olhar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/95 mb-12 font-light"
        >
          Serviços premium de maquiagem, sobrancelhas e cílios
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-[#ca5d74] hover:bg-[#b84f65] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Agendar Agora
          </Button>
          <Button 
            onClick={() => scrollToSection('servicos')}
            variant="outline"
            className="border-2 border-yellow-400 text-white hover:bg-yellow-400/20 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Conhecer Serviços
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;