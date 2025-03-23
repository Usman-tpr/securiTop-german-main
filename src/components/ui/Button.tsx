import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  external = false,
  icon,
  iconPosition = 'right',
  ...rest
}: ButtonProps) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md";
  
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-primary hover:bg-primaryDark text-white shadow-sm hover:shadow-md",
    secondary: "bg-secondary hover:bg-secondaryDark text-gray-900 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    text: "text-primary hover:text-primaryDark underline-offset-2 hover:underline",
  };
  
  // Combine classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // Icon classes
  const iconClasses = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6';
  
  // Animation
  const buttonAnimation = {
    tap: { scale: 0.98 },
  };
  
  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={`mr-2 ${iconClasses}`}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={`ml-2 ${iconClasses}`}>{icon}</span>}
    </>
  );
  
  // If href is provided, render as Link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  // Otherwise, render as button
  return (
    <button
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button; 