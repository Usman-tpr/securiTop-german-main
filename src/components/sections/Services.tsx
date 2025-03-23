import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import { 
  Shield, 
  Laptop, 
  Camera, 
  Bell, 
  Clipboard, 
  Users, 
  ArrowRight, 
  Lock, 
  Eye, 
  Clock, 
  Building, 
  Flame, 
  Moon, 
  Store, 
  Truck, 
  Search, 
  Map, 
  Home
} from 'lucide-react';

interface ServicesProps {
  maxItems?: number;
  showTitle?: boolean;
}

const Services: React.FC<ServicesProps> = ({
  maxItems,
  showTitle = true,
}) => {
  const { t, locale } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Filter services if maxItems is provided
  const services = maxItems 
    ? siteConfig.services.slice(0, maxItems) 
    : siteConfig.services;
  
  // Map icon names to components
  const getIcon = (iconName: string, className: string = '') => {
    const iconProps = { size: 48, className };
    
    switch (iconName) {
      // Original icons
      case 'shield':
        return <Shield {...iconProps} />;
      case 'laptop':
        return <Laptop {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'bell':
        return <Bell {...iconProps} />;
      case 'clipboard':
        return <Clipboard {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      case 'lock':
        return <Lock {...iconProps} />;
      case 'eye':
        return <Eye {...iconProps} />;
      case 'clock':
        return <Clock {...iconProps} />;
      
      // Added icons from siteConfig
      case 'building':
        return <Building {...iconProps} />;
      case 'flame':
        return <Flame {...iconProps} />;
      case 'moon':
        return <Moon {...iconProps} />;
      case 'store':
        return <Store {...iconProps} />;
      case 'truck':
        return <Truck {...iconProps} />;
      case 'search':
        return <Search {...iconProps} />;
      case 'map':
        return <Map {...iconProps} />;
      case 'home':
        return <Home {...iconProps} />;
        
      default:
        return <Shield {...iconProps} />;
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <Section id="services" background="light">
      {showTitle && (
        <SectionTitle
          title={t('home.services.title')}
          subtitle={t('home.services.subtitle')}
        />
      )}
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard
              id={service.id}
              icon={getIcon(service.icon)}
              title={service.title[locale]}
              description={service.description[locale]}
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* View All Button - only show when maxItems is used and there are more services */}
      {maxItems && siteConfig.services.length > maxItems && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            href="/services" 
            variant="primary"
            className="inline-flex items-center shadow-md hover:shadow-lg"
            icon={<ArrowRight className="ml-2" />}
          >
            {t('buttons.viewAll') || "View All Services"}
          </Button>
        </motion.div>
      )}
    </Section>
  );
};

export default Services; 