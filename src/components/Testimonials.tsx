import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Nunca imaginei que um filhote pudesse transformar tanto nossa casa. A Luna trouxe uma alegria que não sabíamos que estava faltando. Cada dia é uma nova aventura cheia de amor e risadas!",
      rating: 5,
      puppy: "Golden Retriever - Luna",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 6 meses"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "O Max não é apenas um pet, é um membro da família. Sua lealdade e carinho são incomparáveis. A equipe da Puppy Love foi excepcional em todo o processo, desde a escolha até a entrega.",
      rating: 5,
      puppy: "Labrador - Max",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 1 ano"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      text: "Minha filha sempre sonhou com um cachorrinho. Quando a Bella chegou, foi amor à primeira vista. Ela trouxe tanta felicidade para nossa família que não conseguimos imaginar a vida sem ela!",
      rating: 5,
      puppy: "Poodle - Bella",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 8 meses"
    },
    {
      name: "Carlos Oliveira",
      location: "Brasília, DF",
      text: "Depois de perder meu companheiro de 12 anos, pensei que nunca mais teria outro cachorro. O Thor mudou completamente minha perspectiva. Ele trouxe de volta a alegria de viver.",
      rating: 5,
      puppy: "Husky Siberiano - Thor",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 4 meses"
    },
    {
      name: "Fernanda Lima",
      location: "Porto Alegre, RS",
      text: "A Mia chegou em um momento difícil da minha vida. Sua presença carinhosa e brincalhona me ajudou a superar momentos complicados. Hoje não consigo imaginar minha rotina sem ela.",
      rating: 5,
      puppy: "Shih Tzu - Mia",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 10 meses"
    },
    {
      name: "Roberto Mendes",
      location: "Salvador, BA",
      text: "O Zeus é mais que um cão de guarda, é um verdadeiro protetor da família. Inteligente, obediente e carinhoso. A Puppy Love nos entregou exatamente o que prometeu: um companheiro excepcional.",
      rating: 5,
      puppy: "Pastor Alemão - Zeus",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "Há 2 anos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Histórias de 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Amor Verdadeiro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossos filhotes transformaram a vida de centenas de famílias pelo Brasil. 
            Cada história é única, mas todas compartilham o mesmo final feliz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3">
                    <Quote className="text-white" size={20} />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{testimonial.date}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 font-semibold">5.0</span>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>

                {/* Customer info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.location}</p>
                    <div className="flex items-center">
                      <Heart className="text-red-500 fill-current mr-1" size={14} />
                      <p className="text-sm text-purple-600 font-semibold">{testimonial.puppy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Famílias Satisfeitas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Recomendariam</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Confiança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;