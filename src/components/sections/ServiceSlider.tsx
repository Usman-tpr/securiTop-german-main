"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Personal Protection',
    image: '/images/services/personal.jpg',
    link: '/services/personal-protection',
  },
  {
    id: 2,
    title: 'Event Security',
    image: '/images/services/events.jpg',
    link: '/services/event-security',
  },
  {
    id: 3,
    title: 'Fire Protection',
    image: '/images/services/fire.jpg',
    link: '/services/fire-protection',
  },
  {
    id: 4,
    title: 'Surveillance Systems',
    image: '/images/services/retail.jpg',
    link: '/services/surveillance',
  },
  {
    id: 5,
    title: 'Transport Security',
    image: '/images/services/transport.jpg',
    link: '/services/transport-security',
  },
  {
    id: 6,
    title: 'Night Watch Service',
    image: '/images/services/nightWatch.jpg',
    link: '/services/night-watch-service',
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calculate indices for visible slides
  const getVisibleIndices = () => {
    const length = services.length;
    return {
      prev2: (currentIndex - 2 + length) % length,
      prev1: (currentIndex - 1 + length) % length,
      current: currentIndex,
      next1: (currentIndex + 1) % length,
      next2: (currentIndex + 2) % length,
    };
  };

  const indices = getVisibleIndices();

  return (
    <div 
      className="relative bg-gradient-to-b from-light to-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto h-[70vh] min-h-[500px] max-h-[800px] relative">
          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-30 px-4">
            <button
              onClick={prevSlide}
              className="group bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-x-1 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="group bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transform hover:translate-x-1 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Slides Container */}
          <div className="relative h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {/* Previous 2 */}
              <motion.div
                key={`slide-${indices.prev2}`}
                className="absolute w-[60%] aspect-[16/9] opacity-30"
                initial={{ scale: 0.6, y: "-120%", opacity: 0 }}
                animate={{ scale: 0.6, y: "-120%", opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={services[indices.prev2].image}
                    alt={services[indices.prev2].title}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Previous 1 */}
              <motion.div
                key={`slide-${indices.prev1}`}
                className="absolute w-[70%] aspect-[16/9] opacity-50"
                initial={{ scale: 0.7, y: "-60%", opacity: 0 }}
                animate={{ scale: 0.7, y: "-60%", opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={services[indices.prev1].image}
                    alt={services[indices.prev1].title}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Current */}
              <motion.div
                key={`slide-${indices.current}`}
                className="absolute w-[80%] aspect-[16/9]"
                initial={{ scale: 0.8, y: 0, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={services[indices.current].link}>
                  <div className="relative w-full h-full group cursor-pointer">
                    <Image
                      src={services[indices.current].image}
                      alt={services[indices.current].title}
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">{services[indices.current].title}</h3>
                      <span className="inline-flex items-center text-sm font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Next 1 */}
              <motion.div
                key={`slide-${indices.next1}`}
                className="absolute w-[70%] aspect-[16/9] opacity-50"
                initial={{ scale: 0.7, y: "60%", opacity: 0 }}
                animate={{ scale: 0.7, y: "60%", opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={services[indices.next1].image}
                    alt={services[indices.next1].title}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Next 2 */}
              <motion.div
                key={`slide-${indices.next2}`}
                className="absolute w-[60%] aspect-[16/9] opacity-30"
                initial={{ scale: 0.6, y: "120%", opacity: 0 }}
                animate={{ scale: 0.6, y: "120%", opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={services[indices.next2].image}
                    alt={services[indices.next2].title}
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider; 