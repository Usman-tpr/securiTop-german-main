import { useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, Loader2 } from 'lucide-react';

interface ServiceImageProps {
  serviceId: string;
  alt: string;
  priority?: boolean;
}

const ServiceImage = ({ serviceId, alt, priority = false }: ServiceImageProps) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    console.error(`Failed to load image for service: ${serviceId}`);
    setStatus('error');
  };

  return (
    <>
      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/20">
          <AlertTriangle size={48} className="text-red-500" />
          <p className="text-white text-sm mt-2">Image failed to load</p>
        </div>
      ) : (
        <Image 
          src={`/images/services/${serviceId}.jpg`}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className="object-center"
          quality={85}
          priority={priority}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/50 z-[5]">
          <Loader2 size={48} className="text-white animate-spin" />
        </div>
      )}
    </>
  );
};

export default ServiceImage; 