import React from 'react';
import { Heart, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Banner Full-Screen com apenas a logo */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        {/* Logo centralizada */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="./logocao.png" 
            alt="Puppy Love Logo" 
            className="h-48 w-auto animate-puls bg-[#4CCAB2] rounded-full"
          />
        </div>
      </section>

      {/* Conteúdo após o banner */}
      <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 text-purple-600">
                  <Star className="fill-current" size={24} />
                  <span className="text-lg font-semibold uppercase tracking-wider">Filhotes de Raça Premium</span>
                  <Star className="fill-current" size={24} />
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Você já imaginou como seria a sua vida com um 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> novo amigo fiel</span> ao seu lado?
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Desperte o amor incondicional que só um filhote pode oferecer. 
                  Nossos cãezinhos de raça são criados com carinho, saúde garantida 
                  e prontos para transformar sua casa em um lar cheio de alegria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Heart className="mr-3 group-hover:animate-pulse" size={24} />
                  Encontrar Meu Filhote
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                </button>
                
                <button className="border-2 border-purple-600 text-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Ver Disponíveis
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Famílias Felizes</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Raças Disponíveis</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Saúde Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;