
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm',
        isScrolled 
          ? 'py-3 bg-white/90 shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-display text-psycho-dark font-medium">
          Psicológix
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-psycho-text hover:text-psycho-main transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-psycho-text hover:text-psycho-main transition-colors">
            Serviços
          </a>
          <a href="#beneficios" className="text-psycho-text hover:text-psycho-main transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="text-psycho-text hover:text-psycho-main transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ContactButton 
            text="Agendar Consulta" 
            variant="primary"
            size="sm"
            className="hidden md:flex"
          />
          <button className="md:hidden text-psycho-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
