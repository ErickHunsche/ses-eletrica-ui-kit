import React from 'react';

const Map = () => {
  // Coordenadas de Roca Sales, RS
  const location = "Roca Sales, Rio Grande do Sul, Brasil";
  const coordinates = "-29.2975,-51.5730";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Header do mapa */}
      <div className="p-4 bg-gradient-to-r from-electric-blue to-electric-navy">
        <h3 className="text-xl font-semibold text-white">Nossa Localização</h3>
        <p className="text-white/90 text-sm">S&S ENERGIA - Roca Sales, RS</p>
      </div>
      
      {/* Mapa incorporado */}
      <div className="relative w-full h-96">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2!2d${coordinates.split(',')[1]}!3d${coordinates.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE3JzUxLjAiUyA1McKwMzQnMjIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1642684800000!5m2!1spt-BR!2sbr&q=${encodeURIComponent(location)}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização S&S ENERGIA"
        />
        
        {/* Overlay com informações */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
          <h4 className="font-semibold text-gray-900 mb-2">S&S ENERGIA</h4>
          <p className="text-sm text-gray-600 mb-2">
            📍 Roca Sales, Rio Grande do Sul
          </p>
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            <span>📞 Ligue para mais informações</span>
            <span>🕒 Segunda a Sexta: 8h às 18h</span>
          </div>
        </div>
      </div>
      
      {/* Footer com ações */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex flex-wrap gap-2">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-electric-blue text-white text-sm font-medium rounded-lg hover:bg-electric-blue/90 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Abrir no Google Maps
          </a>
          
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            Como Chegar
          </a>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'S&S ENERGIA - Localização',
                  text: 'Venha nos visitar!',
                  url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
                });
              } else {
                navigator.clipboard.writeText(`S&S ENERGIA - ${location}\nhttps://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`);
                alert('Link copiado para a área de transferência!');
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;