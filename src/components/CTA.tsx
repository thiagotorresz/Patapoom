import React from 'react';
import { Heart, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Seu Melhor Amigo Está 
            <span className="text-yellow-300"> Esperando Por Você!</span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Não deixe para amanhã a felicidade que pode começar hoje. 
            Nossos filhotes estão prontos para transformar sua vida com amor incondicional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center">
              <Heart className="mr-2 group-hover:animate-pulse" size={24} />
              Quero Meu Filhote Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <MessageCircle size={24} />
              </button>
              <button className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Phone size={24} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24h</div>
              <div className="text-white">Atendimento Disponível</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-white">Garantia de Saúde</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-white">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;