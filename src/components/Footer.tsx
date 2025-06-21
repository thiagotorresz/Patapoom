import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Prancheta 1.png" 
                alt="Puppy Love Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Conectando corações e criando famílias felizes há mais de 15 anos. 
              Nossos filhotes são criados com amor e cuidado especial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#filhotes" className="text-gray-400 hover:text-white transition-colors">Nossos Filhotes</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Raças Disponíveis</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Golden Retriever</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Labrador</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Poodle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Husky Siberiano</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ver Todas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={20} />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={20} />
                <span className="text-gray-400">contato@puppylove.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-purple-400" size={20} />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Puppy Love. Todos os direitos reservados. 
            <Heart className="inline mx-2 text-red-500 fill-current" size={16} />
            Feito com amor para conectar famílias.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;