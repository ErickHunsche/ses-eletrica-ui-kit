
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Facebook, Sun, Moon } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ isScrolled, isDarkMode, onDarkModeToggle, scrollToSection }: HeaderProps) => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-electric-light-blue py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white text-xs md:text-sm">
            <div className="flex items-center space-x-3 md:space-x-6">
              <span className="hidden md:inline">seseletrica@ses.com.br</span>
              <span>(51)99999-9999</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Instagram className="w-4 h-4" />
              <span className="hidden md:inline">@SESELETRICA</span>
              <Facebook className="w-4 h-4" />
              <button 
                onClick={onDarkModeToggle}
                className="ml-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header with better mobile responsivity */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'h-14 md:h-16 bg-electric-navy/95 backdrop-blur-md shadow-2xl' 
          : 'h-20 md:h-32 bg-electric-navy border-b border-electric-blue/20'
      }`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left - Location - Hidden on mobile when scrolled */}
            <div className={`flex items-center space-x-2 text-white transition-all duration-300 ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
              <MapPin className="w-4 h-4" />
              <span className={`font-light transition-all duration-300 ${isScrolled ? 'text-xs md:text-sm' : 'text-sm md:text-lg'}`}>
                ROCA SALES - RS
              </span>
            </div>

            {/* Center - Logo and Navigation */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-1 md:mb-2">
                <h1 className={`text-white font-medium transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'}`}>
                  S&S ENERGIA
                </h1>
              </div>
              
              {/* Compact Navigation - More responsive */}
              <div className={`flex items-center space-x-1 md:space-x-2 transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('contact')}
                >
                  CONTATO
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('services')}
                >
                  ORÇAMENTO
                </Button>
                
                <div className={`bg-electric-gray rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-6 h-6 md:w-8 md:h-8' : 'w-8 h-8 md:w-10 md:h-10'}`}>
                  <span className={`text-electric-navy font-bold transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-xs md:text-sm'}`}>S&S</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('services')}
                >
                  SERVIÇOS
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1 hidden md:flex' : 'text-xs md:text-sm px-2 md:px-3 py-1'
                  }`}
                  onClick={() => scrollToSection('about')}
                >
                  SOBRE
                </Button>
              </div>
            </div>

            {/* Right - Contact Button */}
            <Button 
              className={`bg-electric-light-blue hover:bg-electric-light-blue/90 transition-all duration-300 rounded-full ${
                isScrolled ? 'px-2 py-1 text-xs md:px-3 md:py-1 md:text-xs' : 'px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm'
              }`}
              onClick={() => scrollToSection('contact')}
            >
              CONTATO
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
