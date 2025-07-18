
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-51.5730, -29.2975], // Coordenadas aproximadas de Roca Sales, RS
      zoom: 14,
    });

    // Adicionar marcador
    new mapboxgl.Marker()
      .setLngLat([-51.5730, -29.2975])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>S&S ENERGIA</h3><p>Roca Sales - RS</p>'))
      .addTo(map.current);

    // Adicionar controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setShowTokenInput(false);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <h3 className="text-xl font-medium text-electric-navy mb-4">Configurar Mapa</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Para visualizar o mapa, insira seu token público do Mapbox. 
          Você pode obter um em <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-electric-blue underline">mapbox.com</a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="pk.eyJ1Ijoi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={() => initializeMap(mapboxToken)}
            disabled={!mapboxToken}
            variant="electric"
          >
            Carregar Mapa
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainer} className="w-full h-96" />
    </div>
  );
};

export default Map;
