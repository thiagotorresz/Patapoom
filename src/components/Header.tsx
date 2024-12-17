import { useState } from 'react';
import {Menu, X, ShoppingCart } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="img/LOGO-PATAPOOM.png" alt="Logo Patapoom" width="187vw"  style={{ marginTop: '-30px' }}/>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
            <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Produtos</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contatos</a>
            <button className="relative">
              <ShoppingCart className="text-gray-700 hover:text-purple-600" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2">
            <SearchBar />
          </div>
          <nav className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Início</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-purple-600">Produtos</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600">Sobre</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-purple-600">Contatos</a>
          </nav>
        </div>
      )}
    </header>
  );
}