import { StatefulButton } from "@/components/ui/stateful-button";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
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
  // Número do WhatsApp da S&S (substitua pelo número real)
  const whatsappNumber = "5551999129161"; // Formato: 55 (país) + DDD + número

  const handleWhatsAppSubmit = async () => {
    // Validação básica
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Por favor, preencha pelo menos nome, telefone e serviço.");
      return;
    }

    try {
      // Chama a função original se necessário (para analytics, etc.)
      await onSubmitForm();

      // Monta a mensagem para o WhatsApp
      const message = `🔌 *SOLICITAÇÃO DE ORÇAMENTO - S&S ENERGIA*

👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
⚡ *Serviço:* ${getServiceLabel(formData.service)}

${formData.message ? `💬 *Mensagem:*\n${formData.message}` : ''}

---
_Enviado através do site da S&S Energia_`;

      // URL do WhatsApp Web/App
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Abre o WhatsApp
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      console.error('Erro ao processar solicitação:', error);
    }
  };

  const getServiceLabel = (service: string): string => {
    const serviceLabels: { [key: string]: string } = {
      'postes': 'Instalação de Postes',
      'cameras': 'Sistema de Segurança',
      'eletrica': 'Instalações Elétricas',
      'ar-condicionado': 'Ar Condicionado'
    };
    return serviceLabels[service] || service;
  };

  const handleWhatsAppDirect = () => {
    const directMessage = `Olá! Vim através do site da S&S Energia e gostaria de mais informações sobre os serviços. 🔌⚡`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(directMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              { 
                icon: Phone, 
                title: "Telefone", 
                info: "(51)99999-9999",
                action: () => window.open(`tel:+5551999129161`)
              },
              { 
                icon: Mail, 
                title: "Email", 
                info: "seseletrica@ses.com.br",
                action: () => window.open(`mailto:seseletrica@ses.com.br`)
              },
              { 
                icon: MapPin, 
                title: "Localização", 
                info: "ROCA SALES - RS",
                action: () => window.open(`https://www.google.com/maps/search/?api=1&query=Roca Sales, Rio Grande do Sul, Brasil`)
              },
              { 
                icon: Instagram, 
                title: "Instagram", 
                info: "@SESELETRICA",
                action: () => window.open(`https://instagram.com/seseletrica`)
              }
            ].map((item, index) => (
              <div 
                key={index} 
                onClick={item.action}
                className="flex items-center space-x-4 text-white group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 backdrop-blur-sm">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base md:text-lg">{item.title}</h3>
                  <p className="font-light text-sm md:text-base">{item.info}</p>
                </div>
              </div>
            ))}

            {/* Botão WhatsApp Direto */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center space-x-3 w-full p-4 bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-300 text-white font-medium hover:transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm font-medium">Fale Conosco</div>
                  <div className="text-xs opacity-90">WhatsApp Direto</div>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-white">Solicite um Orçamento</h3>
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => onFormDataChange({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="Nome completo *"
                required
              />
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => onFormDataChange({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="(51) 99999-9999 *"
                required
              />
              <select 
                value={formData.service}
                onChange={(e) => onFormDataChange({...formData, service: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                required
              >
                <option value="" className="text-gray-800">Selecione um serviço *</option>
                <option value="postes" className="text-gray-800">⚡ Instalação de Postes</option>
                <option value="cameras" className="text-gray-800">📹 Sistema de Segurança</option>
                <option value="eletrica" className="text-gray-800">🔌 Instalações Elétricas</option>
                <option value="ar-condicionado" className="text-gray-800">❄️ Ar Condicionado</option>
                <option value="outros" className="text-gray-800">🔧 Outros Serviços</option>
              </select>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => onFormDataChange({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base" 
                placeholder="Descreva seu projeto ou dúvida..."
              ></textarea>
              
              <div className="text-xs text-white/60 mb-4">
                * Campos obrigatórios
              </div>

              <StatefulButton 
                onClick={handleWhatsAppSubmit}
                className="w-full py-3 text-base md:text-lg bg-green-600 hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ENVIAR VIA WHATSAPP</span>
              </StatefulButton>

              <div className="text-center text-xs text-white/60 mt-2">
                Ao clicar, você será direcionado para o WhatsApp com sua mensagem pronta
              </div>
            </form>
          </div>

          {/* Map */}
          <div data-aos="fade-left" className="h-full min-h-[300px] md:min-h-[400px]">
            <Map />
          </div>
        </div>

        {/* Rodapé com informação adicional */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            🕒 Atendimento: Segunda à Sexta, 8h às 18h | 📱 Respondemos rapidamente no WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;