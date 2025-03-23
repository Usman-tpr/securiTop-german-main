import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  background?: 'primary' | 'secondary' | 'white' | 'light' | 'dark';
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  background = 'primary',
}) => {
  const { locale } = useTranslation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  
  // Determine button variant based on background
  const getButtonVariant = () => {
    switch (background) {
      case 'primary':
        return 'secondary';
      case 'secondary':
        return 'primary';
      case 'dark':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <Section background={background} padding="xl">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 md:mb-10 opacity-90"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button 
            href={buttonLink} 
            variant={getButtonVariant()}
            size="lg"
            icon={<ArrowRight />}
          >
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CTA; 