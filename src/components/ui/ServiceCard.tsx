import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Loader2 } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard = ({ 
  id, 
  icon, 
  title, 
  description, 
  index, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}: ServiceCardProps) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const { t } = useTranslation();

  const handleImageLoad = () => {
    setImageStatus('loaded');
  };

  const handleImageError = () => {
    console.error(`Failed to load image for service: ${id}`);
    setImageStatus('error');
  };

  return (
    <motion.div
      className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-[420px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* One single relative container for better stacking context */}
      <div className="h-full w-full relative">
        {/* 1. Background color (shown during loading) */}
        <div className="absolute inset-0 bg-primary"></div>
        
        {/* 2. Image (if loaded successfully) */}
        {imageStatus !== 'error' && (
          <Image 
            src={`/images/services/${id}.jpg`}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            priority={index < 6}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="absolute inset-0"
          />
        )}
        
        {/* 3. Error state */}
        {imageStatus === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AlertTriangle size={48} className="text-red-500" />
            <p className="text-white text-sm mt-2">Image failed to load</p>
          </div>
        )}
        
        {/* 4. Loading indicator */}
        {imageStatus === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 size={48} className="text-white animate-spin" />
          </div>
        )}
        
        {/* 5. Dark overlay - Very important: must be AFTER the image */}
        <div 
          className="absolute inset-0 bg-primary transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.3 : 0.85 }}
        ></div>
        
        {/* 6. Content - on top of everything */}
        <div className="absolute inset-0 p-6 flex flex-col">
          <div 
            className="rounded-full shadow-md p-4 w-16 h-16 flex items-center justify-center mb-4 transition-all duration-500 transform group-hover:scale-110 bg-white text-primary"
            style={{ 
              backgroundColor: isHovered ? 'white' : 'rgba(255, 255, 255, 0.95)', 
              color: '#002366',
              boxShadow: isHovered 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-sm">
            {title}
          </h3>
          <p className="text-white/95 mb-6 flex-grow drop-shadow-sm">
            {description}
          </p>
          <Link
            href={`/services#${id}`}
            className="text-white hover:text-white font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300 mt-auto drop-shadow-sm"
          >
            {t('buttons.learnMore')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 