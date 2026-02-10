import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Galeria', id: 'galeria' },
    { name: 'Depoimentos', id: 'depoimentos' },
    { name: 'Contato', id: 'contato' },
  ];

  const agendarButtonClass =
    'bg-[#ca5d74] hover:bg-[#b84f65] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-[#ca5d74] font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Botão desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className={agendarButtonClass}
            >
              Agendar
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-[#ca5d74] font-medium transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection('contato')}
                className={agendarButtonClass}
              >
                Agendar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
