
import React, { useEffect, useRef } from 'react';
import ContactButton from './ContactButton';

const Benefits = () => {
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

  const benefits = [
    {
      title: "Um espaço para reflexão",
      description: "Um ambiente acolhedor para pensar sobre suas vivências e elaborar seus sentimentos."
    },
    {
      title: "Compreensão dos próprios padrões",
      description: "Entendimento mais profundo sobre comportamentos e repetições na vida."
    },
    {
      title: "Exploração do inconsciente",
      description: "Investigação de aspectos inconscientes que influenciam sua maneira de ser."
    },
    {
      title: "Escuta sem julgamentos",
      description: "Um espaço livre para falar sobre qualquer assunto sem receio."
    },
    {
      title: "Autoconhecimento em construção",
      description: "O processo de se conhecer mais a cada sessão, sem respostas prontas."
    },
    {
      title: " Acompanhamento no processo de subjetivação",
      description: "Um suporte para construir e ressignificar sua própria história."
    }
  ];

  return (
    <section id="beneficios" className="section bg-psycho-light" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-3 py-1 bg-white text-psycho-main rounded-full text-sm font-medium mb-3">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-psycho-text mb-4">
           O que a psicoterapia pode proporcionar?
          </h2>
          <p className="max-w-2xl mx-auto text-psycho-text/80">
            O acompanhamento psicológico oferece inúmeros benefícios para sua saúde mental e qualidade de vida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-display text-psycho-main mb-3">{benefit.title}</h3>
              <p className="text-psycho-text/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <ContactButton 
            text="Quero começar minha jornada" 
            variant="primary"
            size="lg"
            message="Olá, gostaria de saber mais sobre os benefícios da terapia!"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
