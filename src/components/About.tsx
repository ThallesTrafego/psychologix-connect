
import React, { useEffect, useRef } from 'react';
import ContactButton from './ContactButton';

const About = () => {
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

  return (
    <section id="sobre" className="section relative overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 reveal">
            <span className="inline-block px-3 py-1 bg-psycho-light text-psycho-main rounded-full text-sm font-medium mb-3">
              Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-psycho-text mb-4">
              Natália Michelena
            </h2>
            <p className="text-psycho-text/80 mb-4">
            Olá, sou Psicóloga formada pela Universidade Franciscana (UFN) e especializada em Psicologia Organizacional e Gestão de Pessoas pela PUCRS. Atualmente, curso mestrado em Psicologia na UFSM, com ênfase na saúde do trabalhador, e me aprofundo na prática clínica com pós-graduação em Clínica Psicanalítica.
            </p>
            <p className="text-psycho-text/80 mb-6">
            Meu trabalho clínico é baseado na psicanálise, uma abordagem que ajuda a compreender os processos inconscientes que influenciam sentimentos, pensamentos e comportamentos. A escuta atenta e o espaço seguro da terapia possibilitam uma jornada de autoconhecimento, auxiliando no enfrentamento de questões emocionais, angústias e padrões repetitivos que impactam sua vida.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-psycho-light/50 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-psycho-main">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm text-psycho-text">CRP 07/34334</span>
              </div>
              <div className="flex items-center gap-2 bg-psycho-light/50 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-psycho-main">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-psycho-text">Atendimento Personalizado</span>
              </div>
            </div>
            
            <ContactButton 
              text="Agendar Consulta" 
              variant="primary"
              size="md"
              message="Olá Natália, gostaria de agendar uma consulta!"
            />
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-psycho-accent rounded-full opacity-70 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-psycho-light rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                <img 
                  src="/lovable-uploads/b665f3fb-5333-49d5-83ba-131bafaae53f.png" 
                  alt="Natália Michelena, psicóloga em Santa Maria especializada em terapia psicanalítica" 
                  className="w-full h-auto object-cover rounded-xl aspect-[3/4]"
                  style={{ maxHeight: '600px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
