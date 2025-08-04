import React from 'react';
import { X, Star, Award, Shield, Clock, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product: {
    title: string;
    description: string;
    price: string;
    category: string;
    image: string; // Campo obrigatório
    features?: string[];
    specifications?: { [key: string]: string };
    warranty?: string;
    rating?: number;
  };
  onClose: () => void;
  whatsappNumber?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  onClose,
  whatsappNumber = "5551999999999" 
}) => {
  const handleWhatsAppContact = () => {
    const message = `Tenho interesse neste produto: ${product.title} - ${product.description}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-electric-navy pr-4">{product.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-6">
          {/* Product Image */}
          <div className="w-full rounded-xl overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/600/400';
              }}
            />
          </div>

          {/* Price and Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-2xl md:text-3xl font-bold text-electric-orange">{product.price}</div>
            {product.rating && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < product.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600 text-sm md:text-base">({product.rating}/5)</span>
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
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
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
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-600 text-sm md:text-base">{key}:</span>
                    <span className="font-medium text-gray-900 text-sm md:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warranty */}
          {product.warranty && (
            <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Garantia</h4>
                <p className="text-green-700 text-sm md:text-base">{product.warranty}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              className="bg-electric-orange hover:bg-electric-orange/90"
            >
              <Clock className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              className="border-electric-navy text-electric-navy hover:bg-electric-navy hover:text-white"
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