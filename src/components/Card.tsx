import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', onClick, style }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`
        bg-neutral-950
        border border-neutral-800
        rounded-xl
        transition-all duration-200
        hover:border-neutral-700
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
