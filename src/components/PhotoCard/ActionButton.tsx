import React from 'react';
import { cn } from '../../utils/classNames';

interface ActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
  className?: string;
  title?: string;
}

export default function ActionButton({ onClick, icon, className, title }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-3 rounded-full transition-colors duration-300 shadow-lg",
        className
      )}
      title={title}
    >
      {icon}
    </button>
  );
}