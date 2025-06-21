import React from 'react';
import { Heart, Home, Smile, Shield } from 'lucide-react';

const EmotionalSection = () => {
  const questions = [
    {
      icon: Heart,
      question: "Quando foi a última vez que você sentiu um amor verdadeiramente incondicional?",
      answer: "Nossos filhotes oferecem exatamente isso - um amor puro e sincero que aquece o coração todos os dias."
    },
    {
      icon: Home,
      question: "Sua casa está pronta para se transformar em um lar cheio de vida?",
      answer: "Um filhote traz energia, alegria e aquele toque especial que transforma qualquer espaço em um verdadeiro lar."
    },
    {
      icon: Smile,
      question: "Você já imaginou acordar todos os dias com um sorriso no rosto?",
      answer: "A presença de um filhote traz momentos únicos de felicidade e risadas que iluminam até os dias mais difíceis."
    },
    {
      icon: Shield,
      question: "E se você pudesse ter um companheiro leal para toda a vida?",
      answer: "Nossos filhotes são criados para serem não apenas pets, mas verdadeiros membros da família, com saúde e temperamento excepcionais."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Perguntas que Tocam o 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Coração</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Às vezes, as perguntas mais simples nos levam às decisões mais importantes da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {questions.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            <Heart className="inline mr-2" size={20} />
            Encontre Seu Companheiro Ideal
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;