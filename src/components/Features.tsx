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
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}