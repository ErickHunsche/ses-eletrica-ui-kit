
import React from 'react';
import { X, Star, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceModalProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    features: string[];
    duration: string;
    warranty: string;
    rating: number;
    details: string;
  };
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative">
          <div className="h-64 bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-white/90 text-sm">({service.rating}/5)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-electric-orange">{service.price}</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-electric-blue" />
                <div>
                  <p className="font-medium">Duração</p>
                  <p className="text-sm text-gray-600">{service.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium">Garantia</p>
                  <p className="text-sm text-gray-600">{service.warranty}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Incluso no Serviço:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700">{service.details}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <Button className="flex-1 bg-electric-orange hover:bg-electric-orange/90">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" className="flex-1">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
