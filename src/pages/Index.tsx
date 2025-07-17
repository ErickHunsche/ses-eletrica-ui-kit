import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
                <h1 className="text-white text-2xl font-medium">S&S ELÉTRICA</h1>
                <p className="text-electric-gray text-sm font-light">Serviços Elétricos Profissionais</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-light">(51)99999-9999</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="pb-4">
            <div className="bg-electric-light-blue rounded-lg p-3 shadow-lg">
              <div className="flex justify-center space-x-8">
                <Button 
                  variant="ghost" 
                  className="text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  onClick={() => scrollToSection('about')}
                >
                  QUEM SOMOS?
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
                  onClick={() => scrollToSection('contact')}
                >
                  CONTATO
                </Button>
                <Button 
                  variant="electric-accent"
                  className="font-bold text-lg px-6"
                  onClick={() => scrollToSection('contact')}
                >
                  ORÇAMENTO
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="h-[700px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-electric-navy/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-bold mb-6">S&S ELÉTRICA</h2>
          <p className="text-2xl font-light mb-8">Soluções Elétricas Profissionais para Sua Segurança</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-xl">
              <Phone className="w-6 h-6" />
              <span>(51)99999-9999</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xl">
              <MapPin className="w-6 h-6" />
              <span>ROCA SALES - RS</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">NOSSOS SERVIÇOS</h2>
            <div className="w-24 h-1 bg-electric-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${servicePoles})` }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE POSTES</h3>
                <p className="text-gray-600 mb-6">Instalação profissional de postes elétricos com segurança e qualidade garantida.</p>
                <Button variant="electric-accent" className="w-full font-light text-xl py-3">
                  DETALHES
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${serviceCameras})` }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-electric-navy mb-4">INSTALAÇÃO DE CÂMERAS</h3>
                <p className="text-gray-600 mb-6">Sistemas de segurança com câmeras de alta qualidade e monitoramento 24h.</p>
                <Button variant="electric-accent" className="w-full font-light text-xl py-3">
                  DETALHES
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${serviceElectrical})` }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-electric-navy mb-4">INSTALAÇÕES ELÉTRICAS</h3>
                <p className="text-gray-600 mb-6">Instalações elétricas residenciais e comerciais com total segurança.</p>
                <Button variant="electric-accent" className="w-full font-light text-xl py-3">
                  DETALHES
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-electric-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">QUEM SOMOS?</h2>
              <div className="w-24 h-1 bg-electric-accent mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="text-center">
                <h3 className="text-3xl font-medium text-electric-navy mb-6">S&S Elétrica</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Somos uma empresa especializada em serviços elétricos com anos de experiência no mercado. 
                  Nossa equipe altamente qualificada oferece soluções completas em instalações elétricas, 
                  sistemas de segurança e infraestrutura elétrica.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Priorizamos a segurança, qualidade e satisfação de nossos clientes, utilizando sempre 
                  materiais de primeira linha e seguindo todas as normas técnicas vigentes.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-electric-blue mb-2">10+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-electric-blue mb-2">500+</div>
                    <div className="text-gray-600">Projetos Realizados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-electric-blue mb-2">24h</div>
                    <div className="text-gray-600">Atendimento de Emergência</div>
                  </div>
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
