
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Settings, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
