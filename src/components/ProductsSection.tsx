import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Button } from "@/components/ui/button";
import ProductFilter from "@/components/ProductFilter";
import { MessageCircle, Eye } from "lucide-react";

interface Product {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string; // Campo obrigatório para a imagem
  features?: string[];
  specifications?: { [key: string]: string };
  warranty?: string;
  rating?: number;
}

interface ProductsSectionProps {
  filteredProducts: Product[];
  onFilterChange: (category: string, search: string) => void;
  onProductSelect: (product: Product) => void;
  whatsappNumber?: string; // Número do WhatsApp da empresa
}

const ProductsSection = ({ 
  filteredProducts, 
  onFilterChange, 
  onProductSelect,
  whatsappNumber = "5551999999999" // Número padrão - substitua pelo real
}: ProductsSectionProps) => {
  
  const handleWhatsAppContact = (product: Product) => {
    const message = `Tenho interesse neste produto: ${product.title} - ${product.description}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-16 md:py-20 bg-gradient-to-r from-electric-blue to-electric-light-blue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">PRODUTOS EM DESTAQUE</h2>
          <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Materiais elétricos de primeira qualidade com certificação INMETRO
          </p>
        </div>

        <ProductFilter onFilterChange={onFilterChange} />

        {/* Mobile - Scroll Horizontal com 2 por fila */}
        <div className="lg:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4" style={{ width: 'max-content' }}>
              {/* Agrupamos os produtos em pares para criar 2 por "coluna" */}
              {Array.from({ length: Math.ceil(filteredProducts.length / 2) }, (_, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 w-44 sm:w-52">
                  {filteredProducts.slice(groupIndex * 2, groupIndex * 2 + 2).map((product, productIndex) => {
                    const index = groupIndex * 2 + productIndex;
                    return (
                      <FollowerPointerCard key={index} title="Interagir com Produto">
                        <div 
                          data-aos="fade-up" 
                          data-aos-delay={index * 50}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex flex-col h-80"
                        >
                          {/* Imagem do Produto */}
                          <div className="mb-3 rounded-xl overflow-hidden bg-white/5">
                            <img 
                              src={product.image} 
                              alt={product.title}
                              className="w-full h-28 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = '/api/placeholder/300/200';
                              }}
                            />
                          </div>
                          
                          <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-1 min-h-[24px]">
                            {product.title}
                          </h3>
                          <p className="text-white/80 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[32px]">
                            {product.description}
                          </p>
                          <p className="text-electric-orange font-bold mb-3 text-sm min-h-[20px]">
                            {product.price}
                          </p>
                          
                          {/* Botões para mobile - empilhados */}
                          <div className="flex flex-col gap-2">
                            <Button 
                              onClick={() => onProductSelect(product)}
                              className="w-full bg-white/20 hover:bg-white/30 rounded-full text-xs border border-white/30"
                              variant="outline"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              DETALHES
                            </Button>
                            <Button 
                              onClick={() => handleWhatsAppContact(product)}
                              className="w-full bg-green-500 hover:bg-green-600 rounded-full text-xs"
                            >
                              <MessageCircle className="w-3 h-3 mr-1" />
                              WHATSAPP
                            </Button>
                          </div>
                        </div>
                      </FollowerPointerCard>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* Indicador de scroll */}
          <div className="text-center text-white/60 text-sm mt-2">
            ← Deslize para ver mais produtos →
          </div>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <FollowerPointerCard key={index} title="Interagir com Produto">
              <div 
                data-aos="fade-up" 
                data-aos-delay={index * 50}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex flex-col h-96"
              >
                {/* Imagem do Produto */}
                <div className="mb-4 rounded-xl overflow-hidden bg-white/5">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/300/200';
                    }}
                  />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 line-clamp-1 min-h-[28px]">
                  {product.title}
                </h3>
                <p className="text-white/80 mb-4 text-base leading-relaxed line-clamp-3 min-h-[72px]">
                  {product.description}
                </p>
                <p className="text-electric-orange font-bold mb-4 text-lg min-h-[28px]">
                  {product.price}
                </p>
                
                {/* Botões para desktop - empilhados com mais espaço */}
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => onProductSelect(product)}
                    className="w-full bg-white/20 hover:bg-white/30 rounded-full text-sm border border-white/30"
                    variant="outline"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    VER DETALHES
                  </Button>
                  <Button 
                    onClick={() => handleWhatsAppContact(product)}
                    className="w-full bg-green-500 hover:bg-green-600 rounded-full text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    CONTATAR VIA WHATSAPP
                  </Button>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;