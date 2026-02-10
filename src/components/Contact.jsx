import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Success toast
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ca5d74] to-[#b84f65] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Entre em contato e agende seu horário
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ca5d74]focus:ring-2 focus:ring-[#ca5d74]/30outline-none transition-all bg-white text-gray-900"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white text-gray-900"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white text-gray-900"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Serviço *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white text-gray-900"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="maquiagem">Maquiagem Profissional</option>
                  <option value="sobrancelhas">Design de Sobrancelhas</option>
                  <option value="cilios">Extensão de Cílios</option>
                  <option value="skincare">Skincare Premium</option>
                  <option value="lash">Lash Lifting</option>
                  <option value="consultoria">Consultoria de Beleza</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none bg-white text-gray-900"
                  placeholder="Conte-nos mais sobre o que você precisa..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ca5d74] hover:bg-[#b84f65] text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#fdf2f5] to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ca5d74] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">(18) 991450020</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ca5d74] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contato@studiobelezadoolhar.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#ca5d74] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua Machado de Assis, 180<br/>
                      Álvares Machado - SP<br/>
                      CEP: 19160-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f6dce3] to-[#e8a1b1]">
                <p className="text-gray-600 font-semibold">Mapa do Google (Em breve)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;