"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Building2, Moon, Flame, Train, Eye, Clock } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';

const SecurityShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t, locale } = useTranslation();

  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-8 h-8" />;
      case 'users':
        return <Users className="w-8 h-8" />;
      case 'building':
        return <Building2 className="w-8 h-8" />;
      case 'moon':
        return <Moon className="w-8 h-8" />;
      case 'flame':
        return <Flame className="w-8 h-8" />;
      case 'truck':
        return <Train className="w-8 h-8" />;
      default:
        return <Shield className="w-8 h-8" />;
    }
  };

  // Get service stats based on service ID and locale
  const getServiceStats = (serviceId: string, locale: string) => {
    const stats = [];
    for (let i = 1; i <= 3; i++) {
      const stat = t(`services.${serviceId}.features.${i}`);
      if (stat) stats.push(stat);
    }
    return stats;
  };

  // Get showcase items from siteConfig services
  const showcaseItems = siteConfig.services.slice(0, 6).map(service => ({
    id: service.id,
    title: service.title[locale],
    description: service.description[locale],
    icon: getIcon(service.icon),
    image: `/images/services/${service.id}.jpg`,
    stats: getServiceStats(service.id, locale)
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  const handleSlideChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary/90 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('showcase.title')}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('showcase.subtitle')}
            </p>
          </div>

          {/* Main Showcase */}
          <div className="relative h-[600px] md:h-[700px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16"
                initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-2/3 h-[300px] md:h-full rounded-2xl overflow-hidden">
                  <Image
                    src={showcaseItems[activeIndex].image}
                    alt={showcaseItems[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-around">
                    {showcaseItems[activeIndex].stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                      >
                        <p className="text-white font-semibold">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/3 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                      {showcaseItems[activeIndex].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{showcaseItems[activeIndex].title}</h3>
                    <p className="text-gray-300 mb-6">{showcaseItems[activeIndex].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary w-12'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityShowcase; 