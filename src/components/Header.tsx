import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Facebook, Sun, Moon, Phone, Mail, Zap, Menu, X, MessageCircle } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ isScrolled, isDarkMode, onDarkModeToggle, scrollToSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <>
      {/* Top Bar - Ultra Minimal */}
      <div className="bg-slate-900 py-2">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span className="hidden md:inline">seseletrica@ses.com.br</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>(51) 99999-9999</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Instagram className="w-3 h-3 hover:text-pink-400 cursor-pointer transition-colors" />
              <Facebook className="w-3 h-3 hover:text-blue-400 cursor-pointer transition-colors" />
              <button onClick={onDarkModeToggle} className="hover:text-cyan-400 transition-colors">
                {isDarkMode ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Clean and Floating */}
      <header className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled
          ? 'w-11/12 max-w-5xl bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10'
          : 'w-11/12 max-w-6xl bg-white/80 backdrop-blur-sm'
        } rounded-2xl border border-white/20`}>

        <div className="px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Navigation - Left */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.slice(0, 2).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className="text-slate-700 hover:text-slate-900 font-medium"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            {/* Logo - Center */}
            <div className="flex items-center space-x-3">
            
              <div>
                <img
                  src="/converter.png"
                  alt="S&S Energia"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            {/* Navigation - Right + CTA */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.slice(2).map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    className="text-slate-700 hover:text-slate-900 font-medium"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>

              {/* WhatsApp CTA */}
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex"
                onClick={() => window.open('https://wa.me/5551999999999?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>

              {/* Mobile Menu */}
              <button
                className="md:hidden p-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="px-8 py-6 space-y-3">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start text-slate-700 hover:text-slate-900"
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center space-x-2 mt-4"
                onClick={() => {
                  window.open('https://wa.me/5551999999999?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;