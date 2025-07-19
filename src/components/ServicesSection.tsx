
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";

interface ServicesSectionProps {
  onServiceSelect: (serviceId: string) => void;
  servicesData: any;
}

const ServicesSection = ({ onServiceSelect, servicesData }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-electric-navy to-electric-blue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">NOSSOS SERVIÇOS</h2>
          <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Soluções elétricas completas com qualidade e segurança garantidas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Object.entries(servicesData).map(([key, service], index) => (
            <FollowerPointerCard key={key} title="Ver Detalhes do Serviço">
              <div 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer group h-full"
                onClick={() => onServiceSelect(key)}
              >
                <div className="h-40 md:h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-electric-navy mb-3 group-hover:text-electric-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{service.description}</p>
                  <p className="text-electric-orange font-bold mb-4 text-sm md:text-base">{service.price}</p>
                  <Button variant="outline" className="w-full rounded-full border-electric-orange text-electric-orange hover:bg-electric-orange hover:text-white text-sm">
                    VER DETALHES
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
