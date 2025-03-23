import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  animate?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  animate = true,
}) => {
  const containerClasses = `mb-12 ${center ? 'text-center' : ''} ${className}`;
  const titleClasses = `text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`;
  const subtitleClasses = `text-lg text-gray-600 ${subtitleClassName}`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
    }
  };

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className={titleClasses} variants={titleVariants}>
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p className={subtitleClasses} variants={subtitleVariants}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    );
  }

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle; 