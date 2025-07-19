
import { StatefulButton } from "@/components/ui/stateful-button";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Map from "@/components/Map";

interface ContactSectionProps {
  formData: {
    name: string;
    phone: string;
    service: string;
    message: string;
  };
  onFormDataChange: (data: any) => void;
  onSubmitForm: () => Promise<any>;
}

const ContactSection = ({ formData, onFormDataChange, onSubmitForm }: ContactSectionProps) => {
  return (
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
                onChange={(e) => onFormDataChange({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="Nome completo"
              />
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => onFormDataChange({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="(51) 99999-9999"
              />
              <select 
                value={formData.service}
                onChange={(e) => onFormDataChange({...formData, service: e.target.value})}
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
                onChange={(e) => onFormDataChange({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="Descreva seu projeto..."
              ></textarea>
              <StatefulButton 
                onClick={onSubmitForm}
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
  );
};

export default ContactSection;
