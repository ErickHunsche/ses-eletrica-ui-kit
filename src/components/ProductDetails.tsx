
import React from 'react';
import { X, Star, Award, Shield, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product: {
    title: string;
    description: string;
    price: string;
    category: string;
    features?: string[];
    specifications?: { [key: string]: string };
    warranty?: string;
    rating?: number;
  };
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-electric-navy">{product.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-electric-orange">{product.price}</div>
            {product.rating && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.rating}/5)</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-electric-navy mb-2">Descrição</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          {product.features && (
            <div>
              <h3 className="text-lg font-semibold text-electric-navy mb-3">Características</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-electric-orange flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          {product.specifications && (
            <div>
              <h3 className="text-lg font-semibold text-electric-navy mb-3">Especificações</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warranty */}
          {product.warranty && (
            <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-800">Garantia</h4>
                <p className="text-green-700">{product.warranty}</p>
              </div>
            </div>
          )}

          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 bg-electric-orange hover:bg-electric-orange/90"
            >
              <Clock className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-electric-navy text-electric-navy hover:bg-electric-navy hover:text-white"
            >
              Mais Informações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
