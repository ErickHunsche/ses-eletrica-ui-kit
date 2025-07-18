
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Star, ArrowLeft, ShoppingCart, Zap, Shield, Truck } from "lucide-react";

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: string;
    originalPrice?: string;
    image: string;
    specifications: { [key: string]: string };
    features: string[];
    rating: number;
    inStock: boolean;
    category: string;
  };
  onBack: () => void;
}

const ProductDetails = ({ product, onBack }: ProductDetailsProps) => {
  return (
    <div className="min-h-screen bg-electric-gray py-20">
      <div className="container mx-auto px-4">
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-8 text-electric-navy hover:text-electric-blue"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Produtos
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <FollowerPointerCard title="Produto Premium">
              <div className="relative">
                <div className="h-96 bg-white rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-electric-blue">⚡</div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">Fora de Estoque</span>
                    </div>
                  )}
                  <Badge className="absolute top-4 right-4 bg-electric-orange text-white">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="h-20 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div className="h-20 bg-electric-orange/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-electric-orange" />
                  </div>
                  <div className="h-20 bg-electric-accent/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-electric-accent" />
                  </div>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-electric-navy mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">{product.rating}/5</span>
                  </div>
                  <Badge variant={product.inStock ? "default" : "destructive"}>
                    {product.inStock ? "Em Estoque" : "Fora de Estoque"}
                  </Badge>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-electric-orange">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600">Preço à vista ou parcelado em até 12x</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-electric-navy mb-4">Descrição</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-electric-navy mb-4">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-electric-orange rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-electric-navy mb-4">Especificações:</h3>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="electric-orange" 
                  className="flex-1 py-3 text-lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Solicitar Compra" : "Produto Indisponível"}
                </Button>
                <Button variant="electric-outline" className="flex-1 py-3 text-lg">
                  Consultar Disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
