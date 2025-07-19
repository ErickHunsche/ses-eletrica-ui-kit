import { useState, useEffect } from "react";
import ServiceModal from "@/components/ServiceModal";
import ProductDetails from "@/components/ProductDetails";
import TestimonialSlider from "@/components/TestimonialSlider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import servicePoles from "@/assets/service-poles.jpg";
import serviceCameras from "@/assets/service-cameras.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const servicesData = {
    "postes": {
      id: "postes",
      title: "Instalação de Postes",
      description: "Instalação profissional de postes elétricos com segurança e qualidade garantida.",
      price: "A partir de R$ 850,00",
      image: servicePoles,
      features: [
        "Análise técnica do local",
        "Fornecimento do poste",
        "Instalação completa",
        "Ligação elétrica",
        "Teste de funcionamento",
        "Limpeza do local"
      ],
      duration: "4-6 horas",
      warranty: "12 meses de garantia em material e mão de obra",
      rating: 5,
      details: "Nosso serviço de instalação de postes inclui análise técnica completa do local, fornecimento de postes de alta qualidade, instalação seguindo todas as normas de segurança, e garantia estendida. Trabalhamos com diferentes tipos de postes para atender suas necessidades específicas."
    },
    "cameras": {
      id: "cameras", 
      title: "Sistema de Segurança",
      description: "Sistemas de segurança com câmeras de alta qualidade e monitoramento 24h.",
      price: "A partir de R$ 450,00",
      image: serviceCameras,
      features: [
        "Câmeras HD/4K",
        "Sistema de gravação",
        "Acesso remoto via app",
        "Visão noturna",
        "Instalação completa",
        "Configuração do sistema"
      ],
      duration: "6-8 horas",
      warranty: "24 meses de garantia no sistema completo",
      rating: 5,
      details: "Oferecemos sistemas de segurança completos com as melhores câmeras do mercado. Incluímos instalação, configuração e treinamento para uso do sistema. Acesso remoto garantido via smartphone."
    },
    "eletrica": {
      id: "eletrica",
      title: "Instalações Elétricas", 
      description: "Instalações elétricas residenciais e comerciais com total segurança.",
      price: "A partir de R$ 180,00",
      image: serviceElectrical,
      features: [
        "Projeto elétrico",
        "Instalação de fiação",
        "Quadros de distribuição",
        "Tomadas e interruptores",
        "Teste de segurança",
        "Certificação"
      ],
      duration: "1-3 dias",
      warranty: "18 meses de garantia completa",
      rating: 5,
      details: "Realizamos instalações elétricas completas seguindo rigorosamente as normas técnicas. Nossos profissionais são certificados e utilizamos apenas materiais de primeira qualidade."
    },
    "ar-condicionado": {
      id: "ar-condicionado",
      title: "Ar Condicionado",
      description: "Instalação e manutenção de sistemas de climatização para máximo conforto.",
      price: "A partir de R$ 320,00",
      image: serviceElectrical,
      features: [
        "Instalação profissional",
        "Teste de funcionamento",
        "Limpeza pós-instalação",
        "Orientações de uso",
        "Manutenção preventiva",
        "Suporte técnico"
      ],
      duration: "3-4 horas",
      warranty: "12 meses de garantia na instalação",
      rating: 5,
      details: "Instalação especializada de aparelhos de ar condicionado com técnicos certificados. Incluímos manutenção preventiva e suporte técnico completo."
    }
  };

  const allProducts = [
    {
      title: "Cabos Elétricos Premium",
      description: "Cabos de alta qualidade para instalações residenciais e comerciais com certificação INMETRO",
      price: "A partir de R$ 15,00/m",
      category: "eletrico",
      features: ["Certificação INMETRO", "Alta durabilidade", "Resistente a intempéries", "Fácil instalação"],
      specifications: {
        "Tensão": "750V",
        "Material": "Cobre",
        "Isolamento": "PVC",
        "Temperatura": "-10°C a +70°C"
      },
      warranty: "5 anos de garantia",
      rating: 5
    },
    {
      title: "Disjuntores de Proteção",
      description: "Proteção segura para seus circuitos elétricos com certificação internacional",
      price: "A partir de R$ 45,00",
      category: "protecao",
      features: ["Proteção contra sobrecarga", "Fácil instalação", "Alta confiabilidade", "Certificação internacional"],
      specifications: {
        "Corrente": "10A - 63A",
        "Tensão": "220V/380V",
        "Poder de ruptura": "6kA",
        "Curva": "B e C"
      },
      warranty: "3 anos de garantia",
      rating: 5
    },
    {
      title: "Luminárias LED Inteligentes",
      description: "Iluminação moderna e econômica com controle via smartphone",
      price: "A partir de R$ 89,00",
      category: "iluminacao",
      features: ["Controle via app", "Dimmerizável", "Cores RGB", "Economia de energia"],
      specifications: {
        "Potência": "9W - 15W",
        "Fluxo luminoso": "800lm - 1200lm",
        "Temperatura de cor": "2700K - 6500K",
        "Vida útil": "25.000 horas"
      },
      warranty: "2 anos de garantia",
      rating: 4
    },
    {
      title: "Quadros Elétricos Completos",
      description: "Distribuição elétrica organizada e segura com barramento de cobre",
      price: "A partir de R$ 180,00",
      category: "eletrico",
      features: ["Barramento de cobre", "Proteção IP65", "Modular", "Fácil manutenção"],
      specifications: {
        "Material": "Chapa de aço",
        "Proteção": "IP65",
        "Dimensões": "300x400x200mm",
        "Disjuntores": "Até 24 polos"
      },
      warranty: "10 anos de garantia",
      rating: 5
    },
    {
      title: "Tomadas e Interruptores",
      description: "Acabamentos de qualidade superior para sua instalação elétrica",
      price: "A partir de R$ 25,00",
      category: "eletrico"
    },
    {
      title: "Condutores Flexíveis",
      description: "Fios e cabos flexíveis para todas as suas necessidades elétricas",
      price: "A partir de R$ 8,00/m",
      category: "eletrico"
    },
    {
      title: "Eletrodutos e Conexões",
      description: "Sistema completo de proteção para fiação elétrica residencial",
      price: "A partir de R$ 12,00/m",
      category: "protecao"
    },
    {
      title: "Ferramentas Profissionais",
      description: "Equipamentos profissionais certificados para instalação elétrica",
      price: "A partir de R$ 150,00",
      category: "ferramentas"
    }
  ];

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, []);

  const handleFilterChange = (category: string, search: string) => {
    let filtered = allProducts;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSubmitForm = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData({ name: '', phone: '', service: '', message: '' });
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        isScrolled={isScrolled} 
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
        scrollToSection={scrollToSection}
      />

      <HeroSection 
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <ServicesSection 
        onServiceSelect={setSelectedService}
        servicesData={servicesData}
      />

      <ProductsSection 
        filteredProducts={filteredProducts}
        onFilterChange={handleFilterChange}
        onProductSelect={setSelectedProduct}
      />

      <TestimonialSlider />

      <AboutSection />

      <ContactSection 
        formData={formData}
        onFormDataChange={setFormData}
        onSubmitForm={handleSubmitForm}
      />

      <Footer />

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={servicesData[selectedService as keyof typeof servicesData]}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
