
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { StatefulButton } from "@/components/ui/stateful-button";
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronDown, Truck, HardHat, ShoppingCart, Headphones, Settings, Shield, Zap, Snowflake, Star, Award, Users, Clock, CheckCircle } from "lucide-react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ServiceDetails from "@/components/ServiceDetails";
import ProductDetails from "@/components/ProductDetails";
import Map from "@/components/Map";
import heroExpert from "@/assets/hero-expert.jpg";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
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

  // Detailed services data
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

  // Detailed products data
  const productsData = {
    "cabos": {
      id: "cabos",
      title: "Cabos Elétricos Premium",
      description: "Cabos de alta qualidade para instalações residenciais e comerciais",
      price: "R$ 15,00/m",
      originalPrice: "R$ 18,00/m",
      image: "",
      specifications: {
        "Material": "Cobre puro",
        "Isolação": "PVC 70°C",
        "Tensão": "450/750V",
        "Norma": "NBR NM 247-3"
      },
      features: [
        "Cobre 99,9% puro",
        "Isolação dupla",
        "Resistente à temperatura",
        "Certificado pelo INMETRO",
        "Disponível em várias bitolas"
      ],
      rating: 5,
      inStock: true,
      category: "Elétrico"
    },
    "disjuntores": {
      id: "disjuntores",
      title: "Disjuntores de Proteção",
      description: "Proteção segura para seus circuitos elétricos",
      price: "R$ 45,00",
      image: "",
      specifications: {
        "Corrente": "10A a 100A",
        "Tensão": "220V/380V",
        "Curva": "B, C, D",
        "Norma": "NBR IEC 60898"
      },
      features: [
        "Proteção contra sobrecarga",
        "Proteção contra curto-circuito",
        "Fácil instalação",
        "Longa durabilidade",
        "Certificação internacional"
      ],
      rating: 5,
      inStock: true,
      category: "Proteção"
    }
  };

  const products = [
    {
      title: "Cabos Elétricos Premium",
      description: "Cabos de alta qualidade para instalações residenciais e comerciais com certificação INMETRO",
      price: "A partir de R$ 15,00/m",
      onClick: () => setSelectedProduct("cabos")
    },
    {
      title: "Disjuntores de Proteção",
      description: "Proteção segura para seus circuitos elétricos com certificação internacional",
      price: "A partir de R$ 45,00",
      onClick: () => setSelectedProduct("disjuntores")
    },
    {
      title: "Luminárias LED Inteligentes",
      description: "Iluminação moderna e econômica com controle via smartphone",
      price: "A partir de R$ 89,00"
    },
    {
      title: "Quadros Elétricos Completos",
      description: "Distribuição elétrica organizada e segura com barramento de cobre",
      price: "A partir de R$ 180,00"
    },
    {
      title: "Tomadas e Interruptores",
      description: "Acabamentos de qualidade superior para sua instalação elétrica",
      price: "A partir de R$ 25,00"
    },
    {
      title: "Condutores Flexíveis",
      description: "Fios e cabos flexíveis para todas as suas necessidades elétricas",
      price: "A partir de R$ 8,00/m"
    },
    {
      title: "Eletrodutos e Conexões",
      description: "Sistema completo de proteção para fiação elétrica residencial",
      price: "A partir de R$ 12,00/m"
    },
    {
      title: "Ferramentas Profissionais",
      description: "Equipamentos profissionais certificados para instalação elétrica",
      price: "A partir de R$ 150,00"
    }
  ];

  const handleSubmitForm = async () => {
    // Simulate form submission
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData({ name: '', phone: '', service: '', message: '' });
        resolve(true);
      }, 2000);
    });
  };

  if (selectedService) {
    return (
      <ServiceDetails 
        service={servicesData[selectedService as keyof typeof servicesData]}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  if (selectedProduct) {
    return (
      <ProductDetails 
        product={productsData[selectedProduct as keyof typeof productsData]}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-electric-gray font-kanit">
      {/* Top Contact Bar */}
      <div className="bg-electric-light-blue py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center space-x-6">
              <span>seseletrica@ses.com.br</span>
              <span>(51)99999-9999</span>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="w-4 h-4" />
              <span>@SESELETRICA</span>
              <span>(51)99999-9999</span>
              <Facebook className="w-4 h-4" />
              <span>@SESELETRICA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header */}
      <header className={`bg-[#0C3282] shadow-lg sticky top-0 z-50 border-b border-[#1F1520] transition-all duration-300 ${isScrolled ? 'h-[160px] shadow-2xl' : 'h-[272px]'}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left side - Location */}
            <div className="flex items-center space-x-3 text-white">
              <MapPin className="w-6 h-6" />
              <span className={`font-light transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>ROCA SALES - RS</span>
            </div>

            {/* Center - Logo and Company Name */}
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div>
                  <h1 className={`text-white font-medium transition-all duration-300 ${isScrolled ? 'text-3xl' : 'text-5xl'}`}>S&S ENERGIA</h1>
                  <p className={`text-white font-light transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-3xl'}`}>Soluções Elétricas</p>
                </div>
              </div>
              
              {/* Enhanced Navigation Links */}
              <div className={`flex items-center justify-center space-x-4 transition-all duration-300 ${isScrolled ? 'mt-2' : 'mt-4'}`}>
                <Button 
                  variant="ghost" 
                  className="text-white font-bold text-sm bg-electric-navy/50 hover:bg-electric-navy/70 transition-all duration-300 rounded-2xl px-6 py-2 border border-white/20 backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  CONTATO
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white font-bold text-sm bg-electric-navy/50 hover:bg-electric-navy/70 transition-all duration-300 rounded-2xl px-6 py-2 border border-white/20 backdrop-blur-sm"
                  onClick={() => scrollToSection('services')}
                >
                  ORÇAMENTO
                </Button>
                
                <div className={`bg-electric-gray rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'}`}>
                  <span className={`text-[#0C3282] font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>S&S</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-white font-bold text-sm bg-electric-navy/50 hover:bg-electric-navy/70 transition-all duration-300 rounded-2xl px-6 py-2 border border-white/20 backdrop-blur-sm"
                  onClick={() => scrollToSection('services')}
                >
                  SERVIÇOS
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white font-bold text-sm bg-electric-navy/50 hover:bg-electric-navy/70 transition-all duration-300 rounded-2xl px-6 py-2 border border-white/20 backdrop-blur-sm"
                  onClick={() => scrollToSection('about')}
                >
                  QUEM SOMOS?
                </Button>
              </div>
            </div>

            {/* Right side - Contact Button */}
            <div className="text-white">
              <Button 
                className={`bg-electric-light-blue text-white font-light rounded-2xl hover:bg-electric-light-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl ${isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-lg'}`}
                onClick={() => scrollToSection('contact')}
              >
                ENTRE EM CONTATO
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="h-[700px] bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 relative flex items-center justify-between overflow-hidden">
        <div className="absolute inset-0 bg-electric-navy/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Left side - Enhanced Text */}
        <div className="relative z-10 max-w-lg mx-auto px-8 text-white">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold">Avaliação 5 Estrelas</span>
            </div>
            <h2 className="text-6xl font-bold mb-4 leading-tight">
              O ESPECIALISTA<br />
              EM ELÉTRICA
            </h2>
          </div>
          
          <FollowerPointerCard title="Clique para mais informações">
            <div className="bg-electric-navy/90 backdrop-blur-sm p-6 rounded-lg mb-6 border border-white/10">
              <h3 className="text-2xl font-medium mb-4 text-orange-400">Nenhum Trabalho é Pequeno Demais</h3>
              <p className="text-sm leading-relaxed mb-4">
                Oferecemos soluções elétricas completas com mais de 10 anos de experiência. 
                Qualidade garantida e atendimento 24 horas para emergências.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-400" />
                  <span className="text-orange-400 font-bold text-sm">Emergências 24h</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-400 font-bold text-sm">Garantia Total</span>
                </div>
              </div>
              <Button variant="electric-orange" className="px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                SAIBA MAIS
              </Button>
            </div>
          </FollowerPointerCard>
        </div>

        {/* Right side - Professional Image */}
        <div 
          className="relative z-10 flex-1 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroExpert})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-500/30"></div>
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-electric-blue" />
              <span className="font-bold text-electric-navy">+500 Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Icons Section */}
      <section className="py-16 bg-electric-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-navy to-electric-blue opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <FollowerPointerCard title="Nossos Serviços">
              <div className="text-white group cursor-pointer">
                <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <Truck className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium">SERVIÇOS</h3>
                  <ChevronDown className="w-6 h-6 opacity-60" />
                </div>
              </div>
            </FollowerPointerCard>
            
            <FollowerPointerCard title="Conheça Nossa Empresa">
              <div className="text-white group cursor-pointer" onClick={() => scrollToSection('about')}>
                <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <HardHat className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium">QUEM SOMOS?</h3>
                  <ChevronDown className="w-6 h-6 opacity-60" />
                </div>
              </div>
            </FollowerPointerCard>
            
            <FollowerPointerCard title="Produtos de Qualidade">
              <div className="text-white group cursor-pointer" onClick={() => scrollToSection('products')}>
                <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium">PRODUTOS</h3>
                  <ChevronDown className="w-6 h-6 opacity-60" />
                </div>
              </div>
            </FollowerPointerCard>
            
            <FollowerPointerCard title="Fale Conosco">
              <div className="text-white group cursor-pointer" onClick={() => scrollToSection('contact')}>
                <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <Headphones className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium">CONTATO</h3>
                  <ChevronDown className="w-6 h-6 opacity-60" />
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-navy to-electric-blue opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">NOSSOS SERVIÇOS</h2>
            <div className="w-24 h-1 bg-electric-accent mx-auto mb-6"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Soluções elétricas completas com qualidade e segurança garantidas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <FollowerPointerCard title="Instalação Profissional">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedService("postes")}>
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${servicePoles})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE POSTES</h3>
                  <p className="text-gray-600 mb-4 text-sm">Instalação profissional de postes elétricos com segurança e qualidade garantida.</p>
                  <p className="text-electric-orange font-bold mb-4">A partir de R$ 850,00</p>
                  <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                    VER DETALHES
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Service 2 */}
            <FollowerPointerCard title="Sistema de Segurança">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedService("cameras")}>
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${serviceCameras})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-electric-navy mb-4">SISTEMA DE SEGURANÇA</h3>
                  <p className="text-gray-600 mb-4 text-sm">Sistemas de segurança com câmeras HD/4K e monitoramento 24h via smartphone.</p>
                  <p className="text-electric-orange font-bold mb-4">A partir de R$ 450,00</p>
                  <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                    VER DETALHES
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Service 3 */}
            <FollowerPointerCard title="Instalações Elétricas">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedService("eletrica")}>
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${serviceElectrical})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÕES ELÉTRICAS</h3>
                  <p className="text-gray-600 mb-4 text-sm">Instalações elétricas residenciais e comerciais com total segurança e certificação.</p>
                  <p className="text-electric-orange font-bold mb-4">A partir de R$ 180,00</p>
                  <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                    VER DETALHES
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Service 4 - Air Conditioning Service */}
            <FollowerPointerCard title="Climatização">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                   onClick={() => setSelectedService("ar-condicionado")}>
                <div className="h-64 bg-blue-200 flex items-center justify-center">
                  <Snowflake className="w-24 h-24 text-electric-blue" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-electric-navy mb-4">AR CONDICIONADO</h3>
                  <p className="text-gray-600 mb-4 text-sm">Instalação e manutenção de sistemas de climatização para máximo conforto.</p>
                  <p className="text-electric-orange font-bold mb-4">A partir de R$ 320,00</p>
                  <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                    VER DETALHES
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="products" className="py-20 bg-electric-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-light-blue opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">PRODUTOS EM DESTAQUE</h2>
            <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Materiais elétricos de primeira qualidade com certificação INMETRO
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <HoverEffect items={products} />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-electric-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-navy to-electric-dark-blue"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">QUEM SOMOS?</h2>
              <div className="w-24 h-1 bg-electric-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Company Info */}
              <FollowerPointerCard title="Nossa História">
                <div className="bg-electric-navy/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg mr-4">
                      R
                    </div>
                    <span className="text-white text-xl font-medium">ROCA SALES</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4">Quem Somos</h3>
                  <h4 className="text-3xl font-bold text-orange-400 mb-6">Tradição e Inovação</h4>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Somos uma empresa especializada em serviços elétricos com mais de 10 anos de experiência no mercado. 
                    Nossa equipe altamente qualificada oferece soluções completas em instalações elétricas, 
                    sistemas de segurança e infraestrutura elétrica.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-orange-400">500+</div>
                      <div className="text-white text-sm">Projetos Concluídos</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-orange-400">10+</div>
                      <div className="text-white text-sm">Anos de Experiência</div>
                    </div>
                  </div>
                  
                  <Button variant="electric-orange" className="px-8 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    Conheça Nossa Equipe
                  </Button>
                  
                  {/* Benefits Icons */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">Experiência</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">Tecnologia</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">Confiança</p>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>

              {/* Right side - Enhanced Tools Display */}
              <FollowerPointerCard title="Ferramentas Profissionais">
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                    <div className="text-center relative z-10">
                      <div className="text-6xl mb-4">🔧</div>
                      <h4 className="text-2xl font-bold text-white mb-2">Equipamentos Modernos</h4>
                      <p className="text-white/90 mb-4">Ferramentas de última geração para máxima qualidade</p>
                      <div className="flex items-center justify-center space-x-4">
                        <Award className="w-6 h-6 text-white" />
                        <span className="text-white font-bold">Certificado ISO 9001</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute bottom-4 right-4 bg-electric-navy text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    24/7 Disponível
                  </div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Emergência
                  </div>
                </div>
              </FollowerPointerCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-electric-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-light-blue opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">ENTRE EM CONTATO</h2>
            <div className="w-24 h-1 bg-electric-accent mx-auto mb-6"></div>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Solicite seu orçamento sem compromisso. Atendimento rápido e profissional
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Enhanced Contact Info */}
              <FollowerPointerCard title="Informações de Contato">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Telefone</h3>
                      <p className="font-light">(51)99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="font-light">seseletrica@ses.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Localização</h3>
                      <p className="font-light">ROCA SALES - RS</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Instagram</h3>
                      <p className="font-light">@SESELETRICA</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Facebook</h3>
                      <p className="font-light">@SESELETRICA</p>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>

              {/* Enhanced Contact Form */}
              <FollowerPointerCard title="Formulário de Contato">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <h3 className="text-2xl font-medium text-electric-navy mb-6">Solicite um Orçamento</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Nome Completo</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Telefone/WhatsApp</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                        placeholder="(51) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Serviço Desejado</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300">
                        <option value="">Selecione um serviço</option>
                        <option value="postes">Instalação de Postes</option>
                        <option value="cameras">Sistema de Segurança</option>
                        <option value="eletrica">Instalações Elétricas</option>
                        <option value="ar-condicionado">Ar Condicionado</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Mensagem</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                        placeholder="Descreva seu projeto em detalhes..."
                      ></textarea>
                    </div>
                    <StatefulButton 
                      onClick={handleSubmitForm}
                      className="w-full py-3 text-lg"
                    >
                      ENVIAR SOLICITAÇÃO
                    </StatefulButton>
                  </form>
                </div>
              </FollowerPointerCard>

              {/* Enhanced Map */}
              <FollowerPointerCard title="Nossa Localização">
                <div className="h-full">
                  <Map />
                </div>
              </FollowerPointerCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-electric-navy py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-navy to-electric-dark-blue"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div>
              <h3 className="font-medium text-lg mb-4 text-orange-400">SERVIÇOS</h3>
              <ul className="space-y-2 font-light">
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Instalação de Postes</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Sistema de Segurança</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Instalações Elétricas</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Ar Condicionado</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Manutenção Elétrica</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-orange-400">EMPRESA</h3>
              <p className="font-light mb-4">
                Empresa especializada em serviços elétricos com foco em qualidade, segurança e inovação tecnológica.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Avaliação 5 estrelas</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-orange-400">PRODUTOS</h3>
              <ul className="space-y-2 font-light">
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Materiais Elétricos</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Sistemas de Segurança</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Equipamentos Profissionais</li>
                <li className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Produtos Certificados</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 text-orange-400">CONTATO</h3>
              <ul className="space-y-2 font-light">
                <li>(51)99999-9999</li>
                <li>seseletrica@ses.com.br</li>
                <li>ROCA SALES - RS</li>
                <li>@SESELETRICA</li>
              </ul>
              <div className="mt-6">
                <Button variant="electric-orange" size="sm">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-electric-blue mt-8 pt-8 text-center text-white font-light">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Site Seguro</span>
              <div className="mx-4 w-px h-4 bg-white/30"></div>
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Empresa Certificada</span>
            </div>
            <p>&copy; 2024 S&S Energia. Todos os direitos reservados. Desenvolvido com tecnologia moderna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
