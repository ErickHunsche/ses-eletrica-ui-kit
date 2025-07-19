
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "Proprietário Residencial",
    content: "Excelente serviço! A instalação do poste foi feita com muito profissionalismo e rapidez. Recomendo!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Empresária",
    content: "Sistema de segurança instalado perfeitamente. Equipe muito competente e atendimento excepcional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    role: "Comerciante",
    content: "Instalação elétrica completa feita com qualidade. Preço justo e garantia de qualidade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-electric-navy to-electric-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-navy/90 to-electric-blue/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">O QUE NOSSOS CLIENTES DIZEM</h2>
          <div className="w-24 h-1 bg-electric-orange mx-auto mb-6"></div>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com nossos serviços
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
                <Quote className="w-8 h-8 text-electric-orange mb-4" />
                <p className="text-white mb-6 leading-relaxed">{testimonial.content}</p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
