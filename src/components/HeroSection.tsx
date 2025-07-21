import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, Zap, Shield, Clock, Award, ChevronDown, Users, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "", className = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

const HeroSection = ({ isScrolled, scrollToSection }: HeroSectionProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const dynamicWords = ["ELÉTRICA", "TELECOMUNICAÇÕES", "QUALIDADE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" id="hero">
      
      {/* Clean Background with Subtle Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgb(59 130 246 / 0.1) 0.5px, transparent 0.5px), linear-gradient(90deg, rgb(59 130 246 / 0.1) 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Modern Abstract Shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-32 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Header Content */}
        <div className="container mx-auto px-6 pt-20 pb-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700 ml-2">5.0 • +500 clientes satisfeitos</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                <div className="mb-2">
                  ESPECIALISTA EM
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {dynamicWords[currentWord]}
                </div>
              </h1>

              <p className="text-lg md:text-x2 text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Soluções elétricas completas com mais de 10 anos de experiência. 
                Atendimento 24h e garantia total em todos os serviços.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection('contact')}
              >
                <Zap className="w-5 h-5 mr-2" />
                ORÇAMENTO GRATUITO
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection('services')}
              >
                NOSSOS SERVIÇOS
              </Button>
            </div>

            {/* Quick Features */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Garantia Total</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Atendimento 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Truck Banner */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="relative max-w-6xl mx-auto">
            {/* Truck Image - Now the Central Hero */}
            <div className="relative z-10">
              <img 
                src="src/assets/Caminhao.png"
                alt="Caminhão de Serviços Elétricos"
                className="w-full max-w-[800px] h-auto mx-auto object-contain filter drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements Around Truck */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-20 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Stats Section - Below Truck Image */}
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossos Números</h2>
              <p className="text-gray-600">Resultados que comprovam nossa excelência</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter 
                  end={500} 
                  suffix="+" 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 block"
                />
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Projetos Concluídos</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter 
                  end={10} 
                  suffix="+" 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 block"
                />
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Anos de Experiência</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter 
                  end={24} 
                  suffix="h" 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 block"
                />
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Suporte Disponível</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter 
                  end={100} 
                  suffix="%" 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 block"
                />
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Satisfação do Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Veja nossos serviços</span>
          <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;