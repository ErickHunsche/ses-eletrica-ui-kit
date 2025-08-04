import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Settings, Zap, Shield, Award, Users, Clock, CheckCircle, Star, Target, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const stats = [
    { number: "10+", label: "Anos", icon: Clock },
    { number: "500+", label: "Projetos", icon: CheckCircle },
    { number: "100%", label: "Satisfação", icon: Star },
    { number: "24h", label: "Suporte", icon: Shield }
  ];

  const values = [
    {
      icon: Settings,
      title: "Experiência",
      description: "Mais de 10 anos oferecendo soluções elétricas confiáveis"
    },
    {
      icon: Zap,
      title: "Tecnologia",
      description: "Equipamentos modernos e técnicas avançadas"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Todas as normas de segurança rigorosamente seguidas"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Certificação INMETRO e garantia em todos os serviços"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-16 bg-electric-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-electric-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              QUEM SOMOS?
            </h2>
            <div className="w-16 h-1 bg-electric-orange mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Transformando o futuro da energia elétrica em Roca Sales e região
            </p>
          </div>

          {/* Main Story Section */}
          <div className="mb-12">
            <FollowerPointerCard title="Nossa História">
              <div data-aos="fade-up" className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-electric-orange rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white">S&S ENERGIA</h3>
                    <p className="text-electric-orange font-semibold text-sm md:text-base">Excelência em Soluções Elétricas</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-white/90 leading-relaxed">
                  <p className="text-base md:text-lg">
                    <strong className="text-white">Há mais de uma década</strong>, a S&S Energia vem revolucionando o cenário elétrico 
                    em Roca Sales e cidades vizinhas. Nossa jornada começou com um sonho simples: 
                    <strong className="text-electric-orange"> oferecer soluções elétricas que realmente fazem a diferença</strong> 
                    na vida das pessoas e no crescimento dos negócios.
                  </p>
                  
                  <p className="text-sm md:text-base text-white/80">
                    O que nos diferencia não é apenas nossa expertise técnica, mas nossa paixão genuína por resolver problemas. 
                    Cada projeto é único, cada cliente tem necessidades específicas, e é exatamente isso que nos motiva todos os dias. 
                    Desde pequenos reparos residenciais até grandes instalações industriais, tratamos cada trabalho com o mesmo 
                    nível de dedicação e profissionalismo.
                  </p>

                  <div className="bg-electric-blue/20 p-4 md:p-6 rounded-lg border border-electric-blue/30">
                    <h4 className="text-white font-bold mb-3 flex items-center text-base md:text-lg">
                      <MapPin className="w-5 h-5 mr-2 text-electric-orange" />
                      NOSSA ATUAÇÃO
                    </h4>
                    <p className="text-white/90 text-sm md:text-base mb-3">
                      Atendemos toda a região do Vale do Taquari com equipes especializadas em:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/80">
                      <div>• Instalações Elétricas Residenciais</div>
                      <div>• Sistemas Elétricos Comerciais</div>
                      <div>• Instalações Industriais</div>
                      <div>• Sistemas de Segurança</div>
                      <div>• Postes de Iluminação</div>
                      <div>• Ar-Condicionado e Climatização</div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-white/80">
                    Nossa equipe é formada por <strong className="text-white">eletricistas certificados</strong> que passam por 
                    treinamentos constantes para se manterem atualizados com as mais recentes normas técnicas e tecnologias do mercado. 
                    Acreditamos que a <strong className="text-electric-orange">segurança nunca deve ser comprometida</strong>, 
                    por isso seguimos rigorosamente todas as normas da ABNT e NR-10.
                  </p>

                  <div className="bg-electric-orange/20 p-4 md:p-6 rounded-lg border border-electric-orange/30">
                    <h4 className="text-white font-bold mb-3 flex items-center text-base md:text-lg">
                      <Award className="w-5 h-5 mr-2 text-electric-orange" />
                      NOSSO COMPROMISSO
                    </h4>
                    <p className="text-white/90 text-sm md:text-base">
                      Não entregamos apenas um serviço, mas uma <strong>parceria duradoura</strong>. 
                      Oferecemos suporte técnico contínuo, manutenção preventiva e estamos sempre disponíveis 
                      para emergências. Nosso objetivo é que você tenha tranquilidade total em relação à sua instalação elétrica.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <div className="flex items-center text-white/80">
                      <Phone className="w-4 h-4 mr-2 text-electric-orange" />
                      <span className="text-sm">Atendimento 24/7</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Shield className="w-4 h-4 mr-2 text-electric-orange" />
                      <span className="text-sm">Garantia em todos os serviços</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 mr-2 text-electric-orange" />
                      <span className="text-sm">Orçamento sem compromisso</span>
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Stats Grid */}
          <div className="mb-12" data-aos="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-white/10 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-electric-orange mx-auto mb-2 md:mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <p className="text-white/80 text-xs md:text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              NOSSOS DIFERENCIAIS
            </h3>
            
            {/* Carousel Container */}
            <div className="relative max-w-md mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCard * 100}%)` }}
                >
                  {values.map((value, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mx-2">
                        <div className="w-12 h-12 bg-electric-orange/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                          <value.icon className="w-6 h-6 text-electric-orange" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h4>
                        <p className="text-white/80 leading-relaxed text-center text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCard ? 'bg-electric-orange w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="fade-up">
            <div className="bg-gradient-to-r from-electric-blue to-electric-light-blue rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Transforme seu projeto em realidade
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6">
                Mais de uma década de experiência ao seu serviço. 
                Entre em contato e descubra por que somos a escolha certa para sua próxima instalação elétrica.
              </p>
              <div className="text-sm text-white/80">
                <p>🔧 <strong>Tecnologia de ponta</strong> • ⚡ <strong>Segurança garantida</strong> • 🏆 <strong>Qualidade certificada</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;