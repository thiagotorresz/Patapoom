import { useState } from 'react';
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SOBRE PATAPOOM PET</h2>
              <p className="text-gray-600 mb-8">
                Na PataPoom Pet, o bem-estar animal é nossa maior prioridade. Com mais de 4 anos de experiência, criamos um ambiente acolhedor e seguro para nossos filhotes, onde eles recebem todo o cuidado e atenção que precisam. Nossa equipe de profissionais qualificados garante que cada filhote seja saudável e feliz antes de encontrar sua nova família. Oferecemos total transparência em todas as etapas, desde a criação até a entrega, e garantimos suporte veterinário personalizado para você e seu novo companheiro. Escolha PataPoom Pet e adquira um amigo para a vida toda.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em contato</h2>
              <p className="text-gray-600 mb-8">
                Tem dúvidas sobre nossos produtos ou serviços? Estamos aqui para ajudar!
                Entre em contato conosco pelos nossos canais oficiais para assistência imediata.
              </p>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-md hover:transition-colors"
              >
                <div className="card">
                  <a className="socialContainer containerOne" href="https://www.instagram.com/" target="_blank">
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                  </a>

                  {/* <!-- WhatsApp Icon --> */}
                  <a className="socialContainer containerFour" href="https://wa.me/+1234567890" target="_blank">
                    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </a>
                </div>
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
                  Seu destino confiável para animais de estimação e acessórios premium.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="#products" className="text-gray-400 hover:text-white">Pets e Acessórios</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-400">
                  Belo Horizonte, MG<br />
                  Telefone: (31) 1234-5678<br />
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