import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const Stats: React.FC = () => {
  const { t, locale } = useTranslation();
  const stats = siteConfig.stats;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
  
  // Number animation
  const CountAnimation: React.FC<{ value: string }> = ({ value }) => {
    return <span>{value}</span>;
  };

  return (
    <Section background="secondary">
      <SectionTitle
        title={t('home.stats.title')}
        subtitle={t('home.stats.subtitle')}
        titleClassName="text-gray-900"
        subtitleClassName="text-gray-800"
      />
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="bg-primary text-white rounded-full h-24 w-24 flex items-center justify-center mb-4 shadow-lg">
              <CountAnimation value={stat.value} />
            </div>
            <p className="font-semibold text-gray-900 text-lg">
              {stat.label[locale]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Stats; 