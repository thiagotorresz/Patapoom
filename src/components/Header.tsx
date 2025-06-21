import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="./patapoom.png" 
              alt="Patapoom Logo" 
              className="h-20 w-auto filter brightness-0 invert drop-shadow-lg"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-300 font-medium transition-colors drop-shadow-lg">
              Início
            </a>
            <a href="#filhotes" className="text-white hover:text-yellow-300 font-medium transition-colors drop-shadow-lg">
              Nossos Filhotes
            </a>
            <a href="#sobre" className="text-white hover:text-yellow-300 font-medium transition-colors drop-shadow-lg">
              Sobre Nós
            </a>
            <a href="#contato" className="text-white hover:text-yellow-300 font-medium transition-colors drop-shadow-lg">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-white drop-shadow-lg">
              <Phone size={16} />
              <span className="text-sm font-medium">(11) 99999-9999</span>
            </div>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <Heart size={16} className="inline mr-2" />
              Quero Meu Filhote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;