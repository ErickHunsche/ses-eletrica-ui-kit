
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Clock, CheckCircle, Star, ArrowLeft, Phone } from "lucide-react";

interface ServiceDetailsProps {
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
  onBack: () => void;
}

const ServiceDetails = ({ service, onBack }: ServiceDetailsProps) => {
  return (
    <div className="min-h-screen bg-electric-gray py-20">
      <div className="container mx-auto px-4">
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-8 text-electric-navy hover:text-electric-blue"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Serviços
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <FollowerPointerCard title="Serviço Profissional">
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                  <Badge className="absolute top-4 left-4 bg-electric-orange text-white">
                    ⚡ Serviço Premium
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="h-24 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-8 h-8 text-electric-blue" />
                  </div>
                  <div className="h-24 bg-electric-orange/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-electric-orange" />
                  </div>
                  <div className="h-24 bg-electric-accent/20 rounded-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-electric-accent" />
                  </div>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-electric-navy mb-4">
                  {service.title}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">{service.rating}/5</span>
                  </div>
                  <Badge variant="secondary">{service.duration}</Badge>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-electric-navy mb-4">Preço</h3>
                <p className="text-3xl font-bold text-electric-orange mb-2">{service.price}</p>
                <p className="text-gray-600">Orçamento personalizado disponível</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-electric-navy mb-4">Descrição Detalhada</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.details}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-electric-navy mb-4">O que está incluído:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-electric-blue/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-electric-navy mb-2">Garantia</h3>
                <p className="text-gray-700">{service.warranty}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="electric-orange" className="flex-1 py-3 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button variant="electric-outline" className="flex-1 py-3 text-lg">
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
