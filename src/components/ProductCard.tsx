import { Product } from '../types';
import { MessageCircle, Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${product.name} (${product.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })})`
    );
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-pink-600 mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
          >
            <MessageCircle size={20} />
            <span>Mensagem</span>
          </button>
        </div>
      </div>
    </div>
  );
}