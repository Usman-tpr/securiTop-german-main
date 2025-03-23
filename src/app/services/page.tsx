"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import CTA from '@/components/sections/CTA';
import Button from '@/components/ui/Button';
import { Shield, Building, Camera, Moon, Clipboard, Users, Check, Truck, Search, Map, Home, Flame } from 'lucide-react';

export default function Services() {
  const { t, locale } = useTranslation();
  
  // Map icon names to components
  const getIcon = (iconName: string, className: string = '') => {
    const iconProps = { size: 48, className };
    
    switch (iconName) {
      case 'shield':
        return <Shield {...iconProps} />;
      case 'building':
        return <Building {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'moon':
        return <Moon {...iconProps} />;
      case 'truck':
        return <Truck {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      case 'search':
        return <Search {...iconProps} />;
      case 'map':
        return <Map {...iconProps} />;
      case 'home':
        return <Home {...iconProps} />;
      case 'flame':
        return <Flame {...iconProps} />;
      case 'clipboard':
        return <Clipboard {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  // Service features for each service type
  const getServiceFeatures = (serviceId: string) => {
    return [
      t(`services.${serviceId}.features.1`, { fallback: `Feature 1 for ${serviceId}` }),
      t(`services.${serviceId}.features.2`, { fallback: `Feature 2 for ${serviceId}` }),
      t(`services.${serviceId}.features.3`, { fallback: `Feature 3 for ${serviceId}` }),
      t(`services.${serviceId}.features.4`, { fallback: `Feature 4 for ${serviceId}` }),
      t(`services.${serviceId}.features.5`, { fallback: `Feature 5 for ${serviceId}` })
    ];
  };

  return (
    <Layout
      title={t('services.hero.title')}
      description={t('services.hero.subtitle')}
    >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('services.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Sections */}
      {siteConfig.services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id}
          background={index % 2 === 0 ? 'white' : 'light'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
              <SectionTitle
                title={service.title[locale]}
                center={false}
              />
              <p className="text-gray-600 mb-8">
                {t(`services.${service.id}.content`, { fallback: service.description[locale] })}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">
                {t('services.features')}
              </h3>
              <ul className="space-y-3 mb-8">
                {getServiceFeatures(service.id).map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                href="/contact"
                variant="primary"
              >
                {t('buttons.getQuote')}
              </Button>
            </div>
            <motion.div 
              className={`relative h-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer ${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}
              initial={{ opacity: 0.9 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 20,
                duration: 0.3
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-primary/10 z-10 flex items-center justify-center"
                whileHover={{ backgroundColor: "rgba(0, 35, 102, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-primary p-4 rounded-full bg-white/90"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25 
                  }}
                >
                  {getIcon(service.icon, 'h-16 w-16')}
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 w-full h-96"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={`/images/services/${service.id}.jpg`}
                  alt={service.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  priority={index < 2}
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </Section>
      ))}
      
      {/* CTA Section */}
      <CTA
        title={t('services.cta.title')}
        subtitle={t('services.cta.subtitle')}
        buttonText={t('buttons.contactUs')}
        buttonLink="/contact"
        background="primary"
      />
    </Layout>
  );
} 