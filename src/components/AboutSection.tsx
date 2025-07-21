import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Settings, Zap, Shield, Award, Users, Clock, CheckCircle, Star, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "10+", label: "Anos de Experiência", icon: Clock },
    { number: "500+", label: "Projetos Concluídos", icon: CheckCircle },
    { number: "100%", label: "Satisfação do Cliente", icon: Star },
    { number: "24h", label: "Suporte de Emergência", icon: Shield }
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
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais qualificados e em constante capacitação"
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Diagnósticos precisos e soluções eficientes"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-electric-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              QUEM SOMOS?
            </h2>
            <div className="w-24 h-1 bg-electric-orange mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Líderes em soluções elétricas em Roca Sales e região, 
              transformando projetos em realidade com excelência e inovação
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Side - Company Story */}
            <FollowerPointerCard title="Nossa História">
              <div data-aos="fade-right" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-electric-orange rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">S&S ENERGIA</h3>
                </div>
                
                <p className="text-white/90 leading-relaxed mb-6 text-lg">
                  Fundada com o propósito de oferecer <strong className="text-white">soluções elétricas de excelência</strong>, 
                  a S&S Energia se consolidou como referência em Roca Sales e região. Nossa trajetória é marcada 
                  pela <strong className="text-electric-orange">dedicação, qualidade e inovação</strong> constante.
                </p>
                
                <p className="text-white/80 leading-relaxed mb-8">
                  Especializados em instalações elétricas residenciais, comerciais e industriais, 
                  sistemas de segurança, postes de iluminação e ar-condicionado. Cada projeto é 
                  executado com precisão técnica e total comprometimento com a satisfação do cliente.
                </p>

                {/* Mission/Vision */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-electric-blue/20 p-4 rounded-xl border border-electric-blue/30">
                    <h4 className="text-white font-bold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-electric-orange" />
                      MISSÃO
                    </h4>
                    <p className="text-white/80 text-sm">
                      Fornecer soluções elétricas seguras, eficientes e inovadoras
                    </p>
                  </div>
                  <div className="bg-electric-orange/20 p-4 rounded-xl border border-electric-orange/30">
                    <h4 className="text-white font-bold mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-electric-orange" />
                      VISÃO
                    </h4>
                    <p className="text-white/80 text-sm">
                      Ser a empresa de referência em serviços elétricos na região
                    </p>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>

            {/* Right Side - Stats & Highlights */}
            <div data-aos="fade-left" className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-electric-orange mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlight Card */}
              <div className="bg-gradient-to-br from-electric-orange to-yellow-400 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">🔧</div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Equipamentos de Última Geração
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Investimos constantemente em tecnologia e ferramentas modernas 
                    para garantir máxima qualidade e eficiência em cada serviço
                  </p>
                  <div className="flex justify-center mt-4 space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-white fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              NOSSOS DIFERENCIAIS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <FollowerPointerCard key={index} title={value.title}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-electric-orange/20 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-electric-orange" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-white/80 leading-relaxed">{value.description}</p>
                  </div>
                </FollowerPointerCard>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-electric-blue to-electric-light-blue rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para seu próximo projeto elétrico?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Entre em contato conosco e descubra como podemos transformar suas ideias em realidade
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 text-electric-orange mr-2" />
                  <span>Orçamento Gratuito</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 text-electric-orange mr-2" />
                  <span>Atendimento 24h</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 text-electric-orange mr-2" />
                  <span>Garantia Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;