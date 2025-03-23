import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  containerClass?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'white',
  padding = 'lg',
  containerClass = '',
  animate = true,
}) => {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-background',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-900',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  // Combine classes
  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${containerClass}`}>
          {children}
        </div>
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section; 