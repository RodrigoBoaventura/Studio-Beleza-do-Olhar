import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#ca5d74] to-[#b84f65] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="\logo_studio.png"
                alt="Studio Beleza do Olhar Logo"
                className="w-20 h-20"
              />
              <span className="text-lg font-bold text-white">
                STUDIO BELEZA DO OLHAR
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Transformando e realçando a beleza natural através de técnicas profissionais e produtos premium.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(18) 99145-0020</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rua Machado de Assis, 180<br />Alvares Machado - SP</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <div className="space-y-2 text-sm mb-6">
              <button
                onClick={() => scrollToSection('servicos')}
                className="block hover:text-yellow-300 transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="block hover:text-yellow-300 transition-colors duration-200"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block hover:text-yellow-300 transition-colors duration-200"
              >
                Contato
              </button>
            </div>

            <h3 className="text-lg font-bold mb-4 text-white">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/message/NWJGHVB32X2HP1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/90">
            © 2026 Studio Beleza do Olhar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;