
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Button } from "@/components/ui/button";
import ProductFilter from "@/components/ProductFilter";

interface ProductsSectionProps {
  filteredProducts: any[];
  onFilterChange: (category: string, search: string) => void;
  onProductSelect: (product: any) => void;
}

const ProductsSection = ({ filteredProducts, onFilterChange, onProductSelect }: ProductsSectionProps) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <FollowerPointerCard key={index} title="Ver Detalhes do Produto">
              <div 
                data-aos="fade-up" 
                data-aos-delay={index * 50}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer h-full"
                onClick={() => onProductSelect(product)}
              >
                <h3 className="text-base md:text-lg font-bold text-white mb-3">{product.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{product.description}</p>
                <p className="text-electric-orange font-bold mb-4 text-sm md:text-base">{product.price}</p>
                <Button className="w-full bg-electric-orange hover:bg-electric-orange/90 rounded-full text-sm">
                  VER DETALHES
                </Button>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
