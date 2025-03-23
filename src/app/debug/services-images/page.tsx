"use client";

import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function ServicesImagesDebug() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (serviceId: string) => {
    setFailedImages(prev => ({ ...prev, [serviceId]: true }));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Service Images Debug</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.services.map((service) => (
          <div key={service.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{service.id}</h2>
            <div className="mb-2">
              <strong>Image Path:</strong> /images/services/{service.id}.jpg
            </div>
            <div className="h-40 bg-gray-100 relative">
              {failedImages[service.id] ? (
                <div className="h-full w-full flex items-center justify-center bg-red-100 text-red-500">
                  Image not found
                </div>
              ) : (
                <img 
                  src={`/images/services/${service.id}.jpg`} 
                  alt={service.id}
                  className="h-full w-full object-cover"
                  onError={() => handleImageError(service.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 