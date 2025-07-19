
import { Star } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
