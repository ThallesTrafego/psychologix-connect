
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

interface ContactButtonProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  number?: string;
  message?: string;
}

const ContactButton = ({
  text,
  className,
  variant = 'primary',
  size = 'md',
  number = '55999481692',
  message = 'Olá, gostaria de agendar uma consulta!'
}: ContactButtonProps) => {
  const variantStyles = {
    primary: 'bg-psycho-main text-white hover:bg-psycho-dark',
    secondary: 'bg-psycho-accent text-psycho-text hover:bg-pink-200',
    outline: 'bg-transparent border border-psycho-main text-psycho-main hover:bg-psycho-light',
    ghost: 'bg-transparent text-psycho-main hover:bg-psycho-light'
  };

  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-7'
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
};

export default ContactButton;
