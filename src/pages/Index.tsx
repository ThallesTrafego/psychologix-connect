
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import ContactButton from '@/components/ContactButton';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    [heroRef, contactRef].forEach(ref => {
      const childElements = ref.current?.querySelectorAll('.reveal');
      childElements?.forEach(el => observer.observe(el));
    });
    
    return () => {
      [heroRef, contactRef].forEach(ref => {
        const childElements = ref.current?.querySelectorAll('.reveal');
        childElements?.forEach(el => observer.unobserve(el));
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative" ref={heroRef}>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-psycho-light/70 to-white/0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white text-psycho-main rounded-full text-sm font-medium mb-4 reveal animate-fade-in">
              Psicóloga Clínica • Abordagem Psicanalítica • CRP 07/34334
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-psycho-text mb-6 reveal animate-slide-up">
              Psicóloga presencial em Santa Maria/RS e online
            </h1>
            <p className="text-lg md:text-xl text-psycho-text/80 mb-8 reveal animate-slide-up" style={{ transitionDelay: '100ms' }}>
             Atendimento com abordagem psicanalítica, prezando pelo sigilo e acolhimento.  
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal animate-slide-up" style={{ transitionDelay: '200ms' }}>
              <ContactButton 
                text="Agendar Consulta" 
                variant="primary"
                size="lg"
              />
              <a 
                href="#servicos"
                className="inline-flex items-center gap-2 text-psycho-main hover:text-psycho-dark transition-colors py-3"
              >
                <span>Conhecer serviços</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal animate-slide-up" style={{ transitionDelay: '300ms' }}>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-psycho-light flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-psycho-main">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-psycho-text mb-1">Ambiente Seguro</h3>
                <p className="text-sm text-psycho-text/70">Trabalho realizado com sigilo e ética profissional.</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-psycho-light flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-psycho-main">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-psycho-text mb-1">Atendimento Presencial</h3>
                <p className="text-sm text-psycho-text/70">Opção presencial para a cidade de Santa Maria/RS.</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-psycho-light flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-psycho-main">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-psycho-text mb-1">Atendimento Online</h3>
                <p className="text-sm text-psycho-text/70"> Sessões realizadas com praticidade e acolhimento, onde você estiver.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      
      <Services />
      
      <Benefits />
      
      {/* Contact Section */}
      <section id="contato" className="section bg-white" ref={contactRef}>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="w-full lg:w-1/2 reveal">
              <span className="inline-block px-3 py-1 bg-psycho-light text-psycho-main rounded-full text-sm font-medium mb-3">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-psycho-text mb-4">
                Estou aqui para ajudar
              </h2>
              <p className="text-psycho-text/80 mb-8">
                Entre em contato para agendar sua consulta ou esclarecer suas dúvidas. Para o atendimento não aceitamos planos de saúde. 
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-psycho-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-psycho-main" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-psycho-text mb-1">Endereço</h3>
                    <p className="text-psycho-text/70">Centro<br />Santa Maria, RS - 97050-280</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-psycho-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-psycho-main" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-psycho-text mb-1">Telefone</h3>
                    <p className="text-psycho-text/70">(55) 99948-1692</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-psycho-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-psycho-main" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-psycho-text mb-1">Email</h3>
                    <p className="text-psycho-text/70">psinataliamichelena@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <ContactButton 
                text="Agendar pelo WhatsApp" 
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                message="Olá Natália, gostaria de agendar uma consulta!"
              />
            </div>
            
            <div className="w-full lg:w-1/2 bg-psycho-light rounded-2xl p-8 reveal">
              <h3 className="text-2xl font-display text-psycho-text mb-6">Horários de Atendimento</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between pb-2 border-b border-psycho-main/20">
                  <span className="text-psycho-text font-medium">Segunda a Sexta</span>
                  <span className="text-psycho-text/70">08:00 - 21:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-psycho-main/20">
                  <span className="text-psycho-text font-medium">Sábado</span>
                  <span className="text-psycho-text/70">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-psycho-main/20">
                  <span className="text-psycho-text font-medium">Domingo</span>
                  <span className="text-psycho-text/70">Fechado</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-medium text-psycho-text mb-3">Primeira consulta</h4>
                <p className="text-psycho-text/80 mb-4">
                  A primeira consulta tem duração aproximada de 45 minutos e serve para iniciarmos o processo terapêutico psicanalítico, estabelecendo as bases para o tratamento.
                </p>
                <ContactButton 
                  text="Agendar primeira consulta" 
                  variant="secondary"
                  size="md"
                  message="Olá Natália, gostaria de agendar minha primeira consulta!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-psycho-dark text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/80 text-sm">© 2025 Natália Michelena - CRP 07/34334 - Psicóloga em Santa Maria/RS e Online</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
