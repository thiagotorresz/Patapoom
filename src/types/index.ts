export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'cães' | 'rações' | 'brinquedos' | 'casinhas' | 'acessórios';
}

export interface CartItem extends Product {
  quantity: number;
}