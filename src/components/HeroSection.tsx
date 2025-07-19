
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Star } from "lucide-react";
import heroExpert from "@/assets/hero-expert.jpg";

interface HeroSectionProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ isScrolled, scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(255,107,53,0.8), rgba(12,50,130,0.8)), url(${heroExpert})`,
          transform: `translateY(${isScrolled ? '-20px' : '0px'})`
        }}
      ></div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="text-white space-y-4 md:space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm md:text-base">Avaliação 5 Estrelas</span>
              </div>
              <PointerHighlight>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  O ESPECIALISTA<br />
                  EM <span className="text-electric-orange">ELÉTRICA</span>
                </h1>
              </PointerHighlight>
              <p className="text-base md:text-lg lg:text-xl opacity-90">
                Soluções elétricas completas com mais de 10 anos de experiência. 
                Qualidade garantida e atendimento 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-electric-orange hover:bg-electric-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  SOLICITAR ORÇAMENTO
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-electric-navy px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-sm"
                  onClick={() => scrollToSection('services')}
                >
                  NOSSOS SERVIÇOS
                </Button>
              </div>
            </div>

            {/* Right Stats with Animated Counters */}
            <div data-aos="fade-left" className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-electric-orange mb-2"
                />
                <div className="text-white text-sm md:text-base">Projetos Concluídos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                <AnimatedCounter 
                  end={10} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-electric-orange mb-2"
                />
                <div className="text-white text-sm md:text-base">Anos de Experiência</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                <AnimatedCounter 
                  end={24} 
                  suffix="h" 
                  className="text-3xl md:text-4xl font-bold text-electric-orange mb-2"
                />
                <div className="text-white text-sm md:text-base">Atendimento</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                <AnimatedCounter 
                  end={100} 
                  suffix="%" 
                  className="text-3xl md:text-4xl font-bold text-electric-orange mb-2"
                />
                <div className="text-white text-sm md:text-base">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
