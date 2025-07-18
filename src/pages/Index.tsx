
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronDown, Truck, HardHat, ShoppingCart, Headphones, Settings, Shield, Zap, Snowflake } from "lucide-react";
import { HoverEffect } from "@/components/ui/hover-effect";
import heroExpert from "@/assets/hero-expert.jpg";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: "Cabos Elétricos",
      description: "Cabos de alta qualidade para instalações residenciais e comerciais",
      price: "A partir de R$ 15,00/m"
    },
    {
      title: "Disjuntores",
      description: "Proteção segura para seus circuitos elétricos",
      price: "A partir de R$ 45,00"
    },
    {
      title: "Luminárias LED",
      description: "Iluminação moderna e econômica para todos os ambientes",
      price: "A partir de R$ 89,00"
    },
    {
      title: "Quadros Elétricos",
      description: "Distribuição elétrica organizada e segura",
      price: "A partir de R$ 180,00"
    },
    {
      title: "Tomadas e Interruptores",
      description: "Acabamentos de qualidade para sua instalação",
      price: "A partir de R$ 25,00"
    },
    {
      title: "Condutores",
      description: "Fios e cabos para todas as suas necessidades",
      price: "A partir de R$ 8,00/m"
    },
    {
      title: "Eletrodutos",
      description: "Proteção para fiação elétrica",
      price: "A partir de R$ 12,00/m"
    },
    {
      title: "Ferramentas Elétricas",
      description: "Equipamentos profissionais para instalação",
      price: "A partir de R$ 150,00"
    }
  ];

  return (
    <div className="min-h-screen bg-electric-gray font-kanit">
      {/* Header */}
      <header className="bg-electric-navy shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-electric-gray rounded-full flex items-center justify-center">
                <span className="text-electric-navy font-bold text-xl">S&S</span>
              </div>
              <div>
                <h1 className="text-white text-2xl font-medium">S&S ENERGIA</h1>
                <p className="text-electric-gray text-sm font-light">Serviços Elétricos Profissionais</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Button 
                variant="ghost" 
                className="text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => scrollToSection('about')}
              >
                CONTATO
              </Button>
              <Button 
                variant="ghost" 
                className="text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                ORÇAMENTO
              </Button>
              <Button 
                variant="ghost" 
                className="text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                SERVIÇOS
              </Button>
              <Button 
                variant="ghost" 
                className="text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => scrollToSection('about')}
              >
                QUEM SOMOS?
              </Button>
              
              {/* Orange Button */}
              <Button 
                variant="electric-orange"
                className="font-bold text-lg px-6 py-3 rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                ENTRAR
              </Button>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="font-light">(51)99999-9999</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="h-[700px] bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 relative flex items-center justify-between"
      >
        <div className="absolute inset-0 bg-electric-navy/20"></div>
        
        {/* Left side - Text */}
        <div className="relative z-10 max-w-lg mx-auto px-8 text-white">
          <h2 className="text-6xl font-bold mb-4 leading-tight">
            THE EXPERT<br />
            IN ELECTRIC
          </h2>
          <div className="bg-electric-navy/80 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-medium mb-4">No Job Too Small</h3>
            <p className="text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh 
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <div className="text-orange-400 font-bold mb-4">
              24 hrs. Emergency Services
            </div>
            <Button variant="electric-orange" className="px-8 py-3">
              MORE INFO
            </Button>
          </div>
        </div>

        {/* Right side - Professional Image */}
        <div 
          className="relative z-10 flex-1 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroExpert})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-500/30"></div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-16 bg-electric-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white group cursor-pointer">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Truck className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium">SERVIÇOS</h3>
                <ChevronDown className="w-6 h-6 opacity-60" />
              </div>
            </div>
            
            <div className="text-white group cursor-pointer" onClick={() => scrollToSection('about')}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <HardHat className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium">QUEM SOMOS?</h3>
                <ChevronDown className="w-6 h-6 opacity-60" />
              </div>
            </div>
            
            <div className="text-white group cursor-pointer" onClick={() => scrollToSection('products')}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <ShoppingCart className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium">PRODUTOS</h3>
                <ChevronDown className="w-6 h-6 opacity-60" />
              </div>
            </div>
            
            <div className="text-white group cursor-pointer" onClick={() => scrollToSection('contact')}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Headphones className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium">CONTATO</h3>
                <ChevronDown className="w-6 h-6 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">NOSSOS SERVIÇOS</h2>
            <div className="w-24 h-1 bg-electric-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${servicePoles})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE POSTES</h3>
                <p className="text-gray-600 mb-4 text-sm">Instalação profissional de postes elétricos com segurança e qualidade garantida.</p>
                <p className="text-electric-orange font-bold mb-4">A partir de R$ 850,00</p>
                <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                  DETALHES
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${serviceCameras})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE CÂMERAS</h3>
                <p className="text-gray-600 mb-4 text-sm">Sistemas de segurança com câmeras de alta qualidade e monitoramento 24h.</p>
                <p className="text-electric-orange font-bold mb-4">A partir de R$ 450,00</p>
                <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                  DETALHES
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${serviceElectrical})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÕES ELÉTRICAS</h3>
                <p className="text-gray-600 mb-4 text-sm">Instalações elétricas residenciais e comerciais com total segurança.</p>
                <p className="text-electric-orange font-bold mb-4">A partir de R$ 180,00</p>
                <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                  DETALHES
                </Button>
              </div>
            </div>

            {/* Service 4 - New Air Conditioning Service */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-blue-200 flex items-center justify-center">
                <Snowflake className="w-24 h-24 text-electric-blue" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE AR CONDICIONADO</h3>
                <p className="text-gray-600 mb-4 text-sm">Instalação e manutenção de sistemas de ar condicionado para máximo conforto.</p>
                <p className="text-electric-orange font-bold mb-4">A partir de R$ 320,00</p>
                <Button variant="electric-orange" className="w-full font-bold text-lg py-2 rounded-lg">
                  DETALHES
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-electric-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">PRODUTOS EM DESTAQUE</h2>
            <div className="w-24 h-1 bg-electric-orange mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <HoverEffect items={products} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-electric-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">QUEM SOMOS?</h2>
              <div className="w-24 h-1 bg-electric-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Company Info */}
              <div className="bg-electric-navy p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg mr-4">
                    R
                  </div>
                  <span className="text-white text-xl font-medium">ROCA SALES</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-4">Quem Somos</h3>
                <h4 className="text-3xl font-bold text-orange-400 mb-6">Apresentação</h4>
                
                <p className="text-white/90 leading-relaxed mb-8">
                  Somos uma empresa especializada em serviços elétricos com anos de experiência no mercado. 
                  Nossa equipe altamente qualificada oferece soluções completas em instalações elétricas, 
                  sistemas de segurança e infraestrutura elétrica.
                </p>
                
                <Button variant="electric-orange" className="px-8 py-3 font-bold">
                  Saiba mais agora
                </Button>
                
                {/* Benefits Icons */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Anos de Experiência</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Serviços Elétricos</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Confiança</p>
                  </div>
                </div>
              </div>

              {/* Right side - Tools Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔧</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Ferramentas Profissionais</h4>
                    <p className="text-white/90">Equipamentos de última geração para máxima qualidade</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 bg-electric-navy text-white px-4 py-2 rounded-full text-sm font-bold">
                  24/7 Disponível
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-electric-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">ENTRE EM CONTATO</h2>
            <div className="w-24 h-1 bg-electric-accent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Telefone</h3>
                    <p className="font-light">(51)99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="font-light">seseletrica@ses.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Localização</h3>
                    <p className="font-light">ROCA SALES - RS</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Instagram</h3>
                    <p className="font-light">@SESELETRICA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Facebook</h3>
                    <p className="font-light">@SESELETRICA</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-medium text-electric-navy mb-6">Solicite um Orçamento</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent" 
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent" 
                      placeholder="(51) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Serviço</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent">
                      <option>Instalação de Postes</option>
                      <option>Instalação de Câmeras</option>
                      <option>Instalações Elétricas</option>
                      <option>Instalação de Ar Condicionado</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent" 
                      placeholder="Descreva seu projeto..."
                    ></textarea>
                  </div>
                  <Button variant="electric" className="w-full py-3 text-lg">
                    ENVIAR SOLICITAÇÃO
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-electric-navy py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div>
              <h3 className="font-medium text-lg mb-4">SERVIÇOS</h3>
              <ul className="space-y-2 font-light">
                <li>Instalação de Postes</li>
                <li>Instalação de Câmeras</li>
                <li>Instalações Elétricas</li>
                <li>Instalação de Ar Condicionado</li>
                <li>Manutenção Elétrica</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">QUEM SOMOS?</h3>
              <p className="font-light">
                Empresa especializada em serviços elétricos com foco em qualidade e segurança.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">PRODUTOS</h3>
              <ul className="space-y-2 font-light">
                <li>Materiais Elétricos</li>
                <li>Sistemas de Segurança</li>
                <li>Equipamentos Profissionais</li>
                <li>Produtos em Destaque</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">CONTATO</h3>
              <ul className="space-y-2 font-light">
                <li>(51)99999-9999</li>
                <li>seseletrica@ses.com.br</li>
                <li>ROCA SALES - RS</li>
                <li>@SESELETRICA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-electric-blue mt-8 pt-8 text-center text-white font-light">
            <p>&copy; 2024 S&S Elétrica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
