import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { StatefulButton } from "@/components/ui/stateful-button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronDown, Truck, HardHat, ShoppingCart, Headphones, Settings, Shield, Zap, Snowflake, Star, Award, Users, Clock, CheckCircle, Sun, Moon } from "lucide-react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ServiceModal from "@/components/ServiceModal";
import ProductFilter from "@/components/ProductFilter";
import ProductDetails from "@/components/ProductDetails";
import TestimonialSlider from "@/components/TestimonialSlider";
import Map from "@/components/Map";
import heroExpert from "@/assets/hero-expert.jpg";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const servicesData = {
    "postes": {
      id: "postes",
      title: "Instalação de Postes",
      description: "Instalação profissional de postes elétricos com segurança e qualidade garantida.",
      price: "A partir de R$ 850,00",
      image: servicePoles,
      features: [
        "Análise técnica do local",
        "Fornecimento do poste",
        "Instalação completa",
        "Ligação elétrica",
        "Teste de funcionamento",
        "Limpeza do local"
      ],
      duration: "4-6 horas",
      warranty: "12 meses de garantia em material e mão de obra",
      rating: 5,
      details: "Nosso serviço de instalação de postes inclui análise técnica completa do local, fornecimento de postes de alta qualidade, instalação seguindo todas as normas de segurança, e garantia estendida. Trabalhamos com diferentes tipos de postes para atender suas necessidades específicas."
    },
    "cameras": {
      id: "cameras",
      title: "Sistema de Segurança",
      description: "Sistemas de segurança com câmeras de alta qualidade e monitoramento 24h.",
      price: "A partir de R$ 450,00",
      image: serviceCameras,
      features: [
        "Câmeras HD/4K",
        "Sistema de gravação",
        "Acesso remoto via app",
        "Visão noturna",
        "Instalação completa",
        "Configuração do sistema"
      ],
      duration: "6-8 horas",
      warranty: "24 meses de garantia no sistema completo",
      rating: 5,
      details: "Oferecemos sistemas de segurança completos com as melhores câmeras do mercado. Incluímos instalação, configuração e treinamento para uso do sistema. Acesso remoto garantido via smartphone."
    },
    "eletrica": {
      id: "eletrica",
      title: "Instalações Elétricas",
      description: "Instalações elétricas residenciais e comerciais com total segurança.",
      price: "A partir de R$ 180,00",
      image: serviceElectrical,
      features: [
        "Projeto elétrico",
        "Instalação de fiação",
        "Quadros de distribuição",
        "Tomadas e interruptores",
        "Teste de segurança",
        "Certificação"
      ],
      duration: "1-3 dias",
      warranty: "18 meses de garantia completa",
      rating: 5,
      details: "Realizamos instalações elétricas completas seguindo rigorosamente as normas técnicas. Nossos profissionais são certificados e utilizamos apenas materiais de primeira qualidade."
    },
    "ar-condicionado": {
      id: "ar-condicionado",
      title: "Ar Condicionado",
      description: "Instalação e manutenção de sistemas de climatização para máximo conforto.",
      price: "A partir de R$ 320,00",
      image: serviceElectrical,
      features: [
        "Instalação profissional",
        "Teste de funcionamento",
        "Limpeza pós-instalação",
        "Orientações de uso",
        "Manutenção preventiva",
        "Suporte técnico"
      ],
      duration: "3-4 horas",
      warranty: "12 meses de garantia na instalação",
      rating: 5,
      details: "Instalação especializada de aparelhos de ar condicionado com técnicos certificados. Incluímos manutenção preventiva e suporte técnico completo."
    }
  };

  const allProducts = [
    {
      title: "Cabos Elétricos Premium",
      description: "Cabos de alta qualidade para instalações residenciais e comerciais com certificação INMETRO",
      price: "A partir de R$ 15,00/m",
      category: "eletrico",
      features: ["Certificação INMETRO", "Alta durabilidade", "Resistente a intempéries", "Fácil instalação"],
      specifications: {
        "Tensão": "750V",
        "Material": "Cobre",
        "Isolamento": "PVC",
        "Temperatura": "-10°C a +70°C"
      },
      warranty: "5 anos de garantia",
      rating: 5
    },
    {
      title: "Disjuntores de Proteção",
      description: "Proteção segura para seus circuitos elétricos com certificação internacional",
      price: "A partir de R$ 45,00",
      category: "protecao",
      features: ["Proteção contra sobrecarga", "Fácil instalação", "Alta confiabilidade", "Certificação internacional"],
      specifications: {
        "Corrente": "10A - 63A",
        "Tensão": "220V/380V",
        "Poder de ruptura": "6kA",
        "Curva": "B e C"
      },
      warranty: "3 anos de garantia",
      rating: 5
    },
    {
      title: "Luminárias LED Inteligentes",
      description: "Iluminação moderna e econômica com controle via smartphone",
      price: "A partir de R$ 89,00",
      category: "iluminacao",
      features: ["Controle via app", "Dimmerizável", "Cores RGB", "Economia de energia"],
      specifications: {
        "Potência": "9W - 15W",
        "Fluxo luminoso": "800lm - 1200lm",
        "Temperatura de cor": "2700K - 6500K",
        "Vida útil": "25.000 horas"
      },
      warranty: "2 anos de garantia",
      rating: 4
    },
    {
      title: "Quadros Elétricos Completos",
      description: "Distribuição elétrica organizada e segura com barramento de cobre",
      price: "A partir de R$ 180,00",
      category: "eletrico",
      features: ["Barramento de cobre", "Proteção IP65", "Modular", "Fácil manutenção"],
      specifications: {
        "Material": "Chapa de aço",
        "Proteção": "IP65",
        "Dimensões": "300x400x200mm",
        "Disjuntores": "Até 24 polos"
      },
      warranty: "10 anos de garantia",
      rating: 5
    },
    {
      title: "Tomadas e Interruptores",
      description: "Acabamentos de qualidade superior para sua instalação elétrica",
      price: "A partir de R$ 25,00",
      category: "eletrico"
    },
    {
      title: "Condutores Flexíveis",
      description: "Fios e cabos flexíveis para todas as suas necessidades elétricas",
      price: "A partir de R$ 8,00/m",
      category: "eletrico"
    },
    {
      title: "Eletrodutos e Conexões",
      description: "Sistema completo de proteção para fiação elétrica residencial",
      price: "A partir de R$ 12,00/m",
      category: "protecao"
    },
    {
      title: "Ferramentas Profissionais",
      description: "Equipamentos profissionais certificados para instalação elétrica",
      price: "A partir de R$ 150,00",
      category: "ferramentas"
    }
  ];

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, []);

  const handleFilterChange = (category: string, search: string) => {
    let filtered = allProducts;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSubmitForm = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData({ name: '', phone: '', service: '', message: '' });
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Top Contact Bar */}
      <div className="bg-electric-light-blue py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white text-xs md:text-sm">
            <div className="flex items-center space-x-3 md:space-x-6">
              <span className="hidden md:inline">seseletrica@ses.com.br</span>
              <span>(51)99999-9999</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Instagram className="w-4 h-4" />
              <span className="hidden md:inline">@SESELETRICA</span>
              <Facebook className="w-4 h-4" />
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header with better mobile responsivity */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'h-14 md:h-16 bg-electric-navy/95 backdrop-blur-md shadow-2xl' 
          : 'h-20 md:h-32 bg-electric-navy border-b border-electric-blue/20'
      }`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left - Location - Hidden on mobile when scrolled */}
            <div className={`flex items-center space-x-2 text-white transition-all duration-300 ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
              <MapPin className="w-4 h-4" />
              <span className={`font-light transition-all duration-300 ${isScrolled ? 'text-xs md:text-sm' : 'text-sm md:text-lg'}`}>
                ROCA SALES - RS
              </span>
            </div>

            {/* Center - Logo and Navigation */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-1 md:mb-2">
                <h1 className={`text-white font-medium transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'}`}>
                  S&S ENERGIA
                </h1>
              </div>
              
              {/* Compact Navigation - More responsive */}
              <div className={`flex items-center space-x-1 md:space-x-2 transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('contact')}
                >
                  CONTATO
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('services')}
                >
                  ORÇAMENTO
                </Button>
                
                <div className={`bg-electric-gray rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-6 h-6 md:w-8 md:h-8' : 'w-8 h-8 md:w-10 md:h-10'}`}>
                  <span className={`text-electric-navy font-bold transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-xs md:text-sm'}`}>S&S</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('services')}
                >
                  SERVIÇOS
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1 hidden md:flex' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('about')}
                >
                  SOBRE
                </Button>
              </div>
            </div>

            {/* Right - Contact Button */}
            <Button 
              className={`bg-electric-light-blue hover:bg-electric-light-blue/90 transition-all duration-300 rounded-full ${
                isScrolled ? 'px-2 py-1 text-xs md:px-3 md:py-1 md:text-xs' : 'px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm'
              }`}
              onClick={() => scrollToSection('contact')}
            >
              CONTATO
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax Effect and Pointer Highlight */}
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
                  >
                    SOLICITAR ORÇAMENTO
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-electric-navy px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-sm"
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

      {/* Services Section with Cards - Better mobile grid */}
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
                  onClick={() => setSelectedService(key)}
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

      {/* Products Section with Enhanced Filter and Mobile Responsivity */}
      <section id="products" className="py-16 md:py-20 bg-gradient-to-r from-electric-blue to-electric-light-blue relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">PRODUTOS EM DESTAQUE</h2>
            <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Materiais elétricos de primeira qualidade com certificação INMETRO
            </p>
          </div>

          <ProductFilter onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <FollowerPointerCard key={index} title="Ver Detalhes do Produto">
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={index * 50}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer h-full"
                  onClick={() => setSelectedProduct(product)}
                >
                  <h3 className="text-base md:text-lg font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-white/80 mb-4 text-sm">{product.description}</p>
                  <p className="text-electric-orange font-bold mb-4 text-sm md:text-base">{product.price}</p>
                  <Button className="w-full bg-electric-orange hover:bg-electric-orange/90 rounded-full text-sm">
                    VER DETALHES
                  </Button>
                </div>
              </FollowerPointerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-electric-navy relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">QUEM SOMOS?</h2>
              <div className="w-24 h-1 bg-electric-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FollowerPointerCard title="Nossa História">
                <div data-aos="fade-right" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-3xl font-bold text-white mb-4">Tradição e Inovação</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Somos uma empresa especializada em serviços elétricos com mais de 10 anos de experiência no mercado. 
                    Nossa equipe altamente qualificada oferece soluções completas em instalações elétricas, 
                    sistemas de segurança e infraestrutura elétrica.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <Settings className="w-8 h-8 text-electric-orange mx-auto mb-2" />
                      <p className="text-white text-sm">Experiência</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-electric-orange mx-auto mb-2" />
                      <p className="text-white text-sm">Tecnologia</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-electric-orange mx-auto mb-2" />
                      <p className="text-white text-sm">Confiança</p>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>

              <div data-aos="fade-left" className="space-y-6">
                <div className="bg-gradient-to-br from-electric-orange to-yellow-400 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Equipamentos Modernos</h4>
                  <p className="text-white/90">Ferramentas de última geração para máxima qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Mobile Improvements */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-r from-electric-blue to-electric-light-blue relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">ENTRE EM CONTATO</h2>
            <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Solicite seu orçamento sem compromisso. Atendimento rápido e profissional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Info */}
            <div data-aos="fade-right" className="space-y-4 md:space-y-6">
              {[
                { icon: Phone, title: "Telefone", info: "(51)99999-9999" },
                { icon: Mail, title: "Email", info: "seseletrica@ses.com.br" },
                { icon: MapPin, title: "Localização", info: "ROCA SALES - RS" },
                { icon: Instagram, title: "Instagram", info: "@SESELETRICA" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 backdrop-blur-sm">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg">{item.title}</h3>
                    <p className="font-light text-sm md:text-base">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div data-aos="fade-up" className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-6">Solicite um Orçamento</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                  placeholder="Nome completo"
                />
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                  placeholder="(51) 99999-9999"
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base">
                  <option value="" className="text-gray-800">Selecione um serviço</option>
                  <option value="postes" className="text-gray-800">Instalação de Postes</option>
                  <option value="cameras" className="text-gray-800">Sistema de Segurança</option>
                  <option value="eletrica" className="text-gray-800">Instalações Elétricas</option>
                  <option value="ar-condicionado" className="text-gray-800">Ar Condicionado</option>
                </select>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                  placeholder="Descreva seu projeto..."
                ></textarea>
                <StatefulButton 
                  onClick={handleSubmitForm}
                  className="w-full py-3 text-base md:text-lg bg-electric-orange hover:bg-electric-orange/90"
                >
                  ENVIAR SOLICITAÇÃO
                </StatefulButton>
              </form>
            </div>

            {/* Map */}
            <div data-aos="fade-left" className="h-full min-h-[300px] md:min-h-[400px]">
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-electric-navy py-8 md:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div>
              <h3 className="font-medium text-lg mb-4 text-electric-orange">SERVIÇOS</h3>
              <ul className="space-y-2 font-light text-sm">
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Instalação de Postes</li>
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Sistema de Segurança</li>
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Instalações Elétricas</li>
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Ar Condicionado</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-electric-orange">EMPRESA</h3>
              <p className="font-light text-sm mb-4">
                Empresa especializada em serviços elétricos com foco em qualidade, segurança e inovação.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Avaliação 5 estrelas</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-electric-orange">PRODUTOS</h3>
              <ul className="space-y-2 font-light text-sm">
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Materiais Elétricos</li>
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Sistemas de Segurança</li>
                <li className="hover:text-electric-orange transition-colors cursor-pointer">Equipamentos Profissionais</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-electric-orange">CONTATO</h3>
              <ul className="space-y-2 font-light text-sm">
                <li>(51)99999-9999</li>
                <li>seseletrica@ses.com.br</li>
                <li>ROCA SALES - RS</li>
                <li>@SESELETRICA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-electric-blue/30 mt-8 pt-8 text-center text-white/80 text-sm">
            <p>&copy; 2024 S&S Energia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={servicesData[selectedService as keyof typeof servicesData]}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
