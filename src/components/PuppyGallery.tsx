import React from 'react';
import { Heart, Star, Eye } from 'lucide-react';

const PuppyGallery = () => {
  const puppies = [
    {
      id: 1,
      name: "Luna",
      breed: "Golden Retriever",
      age: "8 semanas",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Carinhosa e brincalhona"
    },
    {
      id: 2,
      name: "Max",
      breed: "Labrador",
      age: "10 semanas",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Energético e leal"
    },
    {
      id: 3,
      name: "Bella",
      breed: "Poodle",
      age: "9 semanas",
      image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Inteligente e elegante"
    },
    {
      id: 4,
      name: "Thor",
      breed: "Husky Siberiano",
      age: "12 semanas",
      image: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Aventureiro e protetor"
    },
    {
      id: 5,
      name: "Mia",
      breed: "Shih Tzu",
      age: "8 semanas",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Doce e companheira"
    },
    {
      id: 6,
      name: "Zeus",
      breed: "Pastor Alemão",
      age: "11 semanas",
      image: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: "Corajoso e inteligente"
    }
  ];

  return (
    <section id="filhotes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Conheça Nossos 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Pequenos Tesouros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada filhote tem uma personalidade única e está esperando para encontrar sua família perfeita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <div 
              key={puppy.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={puppy.image} 
                  alt={puppy.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="text-red-500 hover:fill-current transition-all cursor-pointer" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Disponível
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{puppy.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-purple-600 font-semibold">{puppy.breed}</p>
                  <p className="text-gray-600">{puppy.age} • {puppy.personality}</p>
                </div>

                <div className="flex items-center justify-center">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Eye size={16} className="mr-2" />
                    Conhecer {puppy.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
            Ver Todos os Filhotes Disponíveis
          </button>
        </div>
      </div>
    </section>
  );
};

export default PuppyGallery;