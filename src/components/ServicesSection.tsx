import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Zap, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface ServicesSectionProps {
  onServiceSelect: (serviceId: string) => void;
  servicesData: any;
}

// Service Card Component
interface ServiceCardProps {
  serviceKey: string;
  service: any;
  index: number;
  onServiceSelect: (serviceId: string) => void;
  compact?: boolean;
}

const ServiceCard = ({ serviceKey, service, index, onServiceSelect, compact = false }: ServiceCardProps) => {
  return (
    <FollowerPointerCard title="Clique para ver detalhes">
      <div 
        data-aos="fade-up" 
        data-aos-delay={index * 150}
        className="group relative h-full"
        onClick={() => onServiceSelect(serviceKey)}
      >
        {/* Card Background with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 transition-all duration-500 group-hover:border-electric-orange/50 group-hover:shadow-2xl group-hover:shadow-electric-orange/20"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/20 to-blue-500/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:transform group-hover:scale-[1.02] cursor-pointer">
          
          {/* Image Section */}
          <div className={`relative ${compact ? 'h-32' : 'h-40 md:h-48'} overflow-hidden`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top Badge */}
            <div className="absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 bg-electric-orange/90 backdrop-blur-sm rounded-full">
              <span className="text-white text-xs font-bold">PREMIUM</span>
            </div>
            
            {/* Rating */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white text-xs ml-1">5.0</span>
              </div>
            </div>
            
            {/* Hover Arrow */}
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <div className="p-1.5 md:p-2 bg-electric-orange rounded-full">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className={`${compact ? 'p-4' : 'p-4 md:p-6'} space-y-3`}>
            <h3 className={`${compact ? 'text-base' : 'text-lg md:text-xl'} font-bold text-white mb-2 group-hover:text-electric-orange transition-colors duration-300`}>
              {service.title}
            </h3>
            
            <p className="text-white/70 text-xs md:text-sm line-clamp-2 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div>
                <p className="text-electric-orange font-bold text-sm md:text-lg">
                  {service.price}
                </p>
                <p className="text-white/50 text-xs">A partir de</p>
              </div>
              
              <Button 
                variant="outline" 
                className={`${compact ? 'px-3 py-1.5 text-xs' : 'px-4 md:px-6 py-2 text-sm'} rounded-full border-2 border-electric-orange/50 text-electric-orange hover:bg-electric-orange hover:text-white transition-all duration-300 font-semibold backdrop-blur-sm bg-white/5`}
              >
                Ver Mais
              </Button>
            </div>
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </FollowerPointerCard>
  );
};

const ServicesSection = ({ onServiceSelect, servicesData }: ServicesSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const services = Object.entries(servicesData);
  const totalSlides = Math.ceil(services.length / 2);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      scrollToSlide(currentSlide - 1);
    }
  };

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    { icon: Zap, text: "Alta Performance" },
    { icon: Shield, text: "Segurança Total" },
    { icon: Clock, text: "Entrega Rápida" }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-electric-navy to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-electric-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs md:text-sm mb-4 md:mb-6">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            <span>Serviços Premium</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
            NOSSOS
            <span className="block bg-gradient-to-r from-electric-orange to-yellow-400 bg-clip-text text-transparent">
              SERVIÇOS
            </span>
          </h2>
          
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-electric-orange to-yellow-400 rounded-full"></div>
          </div>
          
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
            Soluções elétricas de alta qualidade com tecnologia de ponta
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="p-1.5 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 md:gap-8">
          {Object.entries(servicesData).map(([key, service], index) => (
            <ServiceCard 
              key={key} 
              serviceKey={key} 
              service={service} 
              index={index} 
              onServiceSelect={onServiceSelect} 
            />
          ))}
        </div>

        {/* Services Carousel - Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map(([key, service], index) => (
              <div key={key} className="flex-none w-[calc(50%-8px)] snap-start">
                <ServiceCard 
                  serviceKey={key} 
                  service={service} 
                  index={index} 
                  onServiceSelect={onServiceSelect}
                  compact={true}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-electric-orange/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    scrollToSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-electric-orange w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-electric-orange/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-electric-orange to-yellow-400 rounded-full text-white font-bold hover:shadow-2xl hover:shadow-electric-orange/30 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <span className="text-sm md:text-lg">Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <p className="text-white/60 text-xs md:text-sm mt-3 md:mt-4">Atendimento 24/7 • Orçamento em até 2 horas</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;