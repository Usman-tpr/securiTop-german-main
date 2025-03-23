import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, locale } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 50 : -50,
        opacity: 0,
      };
    },
  };

  return (
    <Section background="primary">
      <SectionTitle
        title={t('home.testimonials.title')}
        subtitle={t('home.testimonials.subtitle')}
        titleClassName="text-white"
        subtitleClassName="text-gray-200"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden h-[300px] md:h-[250px]">
            <AnimatePresence custom={currentIndex} initial={false}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex-shrink-0 flex items-start justify-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/20">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}

                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="text-secondary mb-2">
                      <Quote size={32} />
                    </div>
                    <p className="text-white text-lg italic mb-4">
                      {testimonials[currentIndex].text[locale]}
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-300">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-secondary'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials; 