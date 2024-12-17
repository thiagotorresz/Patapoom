import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchProvider } from './contexts/SearchContext';
import { useSearch } from './contexts/SearchContext';

function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchResults } = useSearch();

  const filteredProducts = searchResults.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <section id="products" className="mb-16">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Features />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção selecionada de animais de estimação e acessórios premium.
              Produtos de qualidade para seus queridos companheiros.
            </p>
          </section>

          <ProductSection />

          <section id="about" className="mb-16 bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About PATAPOOM PET</h2>
              <p className="text-gray-600 mb-8">
                At PATAPOOM PET, we believe every pet deserves the best. Our carefully curated selection
                of pets and premium accessories ensures that you and your furry friend receive nothing
                but the highest quality products and care.
              </p>
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9"
                alt="Happy dog"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </section>

          <section id="contact" className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or services? We're here to help!
                Reach out to us through WhatsApp for immediate assistance.
              </p>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition-colors"
              >
                Contact via WhatsApp
              </a>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PATAPOOM PET</h3>
                <p className="text-gray-400">
                  Your trusted destination for premium pets and pet accessories.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#products" className="text-gray-400 hover:text-white">Shop</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-400">
                  123 Pet Street<br />
                  New York, NY 10001<br />
                  Phone: (123) 456-7890<br />
                  Email: info@patapoompet.com
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 PATAPOOM PET. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </SearchProvider>
  );
}

export default App;