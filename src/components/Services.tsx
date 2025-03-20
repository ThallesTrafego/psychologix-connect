
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal');
    childElements?.forEach(el => observer.observe(el));
    
    return () => {
      childElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Terapia Individual",
      description: "Sessões personalizadas focadas em suas necessidades específicas, com abordagem integrativa.",
      location: "Presencial em Santa Maria e Online"
    },
    {
      title: "Terapia Psicanalítica",
      description: "Abordagem focada na compreensão do inconsciente, emoções e padrões de comportamento.",
      location: "Presencial em Santa Maria e Online"
    },
    {
      title: "Acompanhamento para Ansiedade",
      description: "Tratamento especializado para transtornos de ansiedade, ataques de pânico e fobias.",
      location: "Presencial em Santa Maria e Online"
    },
    {
      title: "Terapia para Depressão",
      description: "Suporte terapêutico para quadros depressivos, com foco na recuperação do bem-estar.",
      location: "Presencial em Santa Maria e Online"
    }
  ];

  return (
    <section id="servicos" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 bg-psycho-light text-psycho-main rounded-full text-sm font-medium mb-3">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-psycho-text mb-4">
            Como posso ajudar você
          </h2>
          <p className="max-w-2xl mx-auto text-psycho-text/80">
            Ofereço um espaço acolhedor e seguro para você explorar seus pensamentos, sentimentos e desafios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "border border-psycho-light rounded-2xl p-8 transition-all duration-300 reveal",
                "hover:border-psycho-main/30 hover:shadow-sm"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-display text-psycho-dark mb-2">{service.title}</h3>
              <p className="text-psycho-text/80 mb-4">{service.description}</p>
              <div className="flex items-center text-sm text-psycho-main">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {service.location}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 reveal">
          <div className="bg-psycho-light p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl">
            <div className="bg-psycho-main w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-display text-psycho-dark mb-2">Agende sua primeira sessão</h3>
              <p className="text-psycho-text/80 mb-4">Dê o primeiro passo para o seu bem-estar emocional. A primeira consulta é uma conversa para conhecermos suas necessidades.</p>
              <button
                onClick={() => window.open('https://wa.me/55999481692?text=Olá,%20gostaria%20de%20agendar%20minha%20primeira%20consulta!', '_blank')}
                className="text-psycho-main hover:text-psycho-dark transition-colors flex items-center"
              >
                <span>Agendar agora</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
