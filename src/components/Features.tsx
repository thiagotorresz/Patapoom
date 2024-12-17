import { Truck, Shield, Stethoscope } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: 'Entrega Grátis',
      description: 'Em BH e Região Metropolitana',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Pagamento Seguro',
      description: 'Pague Apenas no Ato da Entrega',
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-600" />,
      title: 'Criação Profissional',
      description: 'Acompanhamento Veterinário',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm transition-all duration-300 group hover:shadow-[0_0_20px_0_rgba(0,255,117,0.5)]"
            >
              {/* Overlay com Gradiente apenas no Hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#00ff70] to-[#3700ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Conteúdo */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500 font-semibold">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
