import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Button from '@/components/ui/Button';
import { ChevronRight, Shield, Lock, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imagePriority?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText = "Our Services",
  secondaryCtaLink = "/services",
  imagePriority = true,
}) => {
  const { locale } = useTranslation();
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    const sequenceAnimation = async () => {
      await controls.start("visible");
    };
    sequenceAnimation();
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const fadeInUpDelayed = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2 + 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative h-screen min-h-[650px] max-h-[850px] w-full overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/banner.jpg"
          alt="Security Background"
          fill
          priority={imagePriority}
          className="object-cover object-center"
          quality={90}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-1"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{ y }}
      >
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div 
            className="inline-block mb-4 bg-primary/90 px-4 py-1.5 rounded-full backdrop-blur-sm"
            variants={badgeVariants}
          >
            <span className="text-sm font-medium">{locale === 'de' ? "Erstklassige Sicherheitsdienste" : "Top-rated security services"}</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-md"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 md:mb-10 max-w-2xl drop-shadow-md"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            variants={itemVariants}
          >
            <Button
              href={ctaLink}
              variant="secondary"
              size="lg"
              icon={<ChevronRight />}
              className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {ctaText}
            </Button>
            
            <Button
              href={secondaryCtaLink}
              variant="outline"
              size="lg"
              className="bg-black/30 border-white text-white hover:bg-white/75 hover:text-primary hover:border-transparent backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
              icon={<ArrowRight className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />}
            >
              {secondaryCtaText}
            </Button>
          </motion.div>
          
          {/* Feature Cards */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              { icon: <Shield className="h-6 w-6" />, text: locale === 'de' ? "Vertrauenswürdige Sicherheit" : "Trusted Security", delay: 0 },
              { icon: <Lock className="h-6 w-6" />, text: locale === 'de' ? "24/7 Schutz" : "24/7 Protection", delay: 1 },
              { icon: <Users className="h-6 w-6" />, text: locale === 'de' ? "Experten-Team" : "Expert Team", delay: 2 }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
                custom={feature.delay}
                variants={fadeInUpDelayed}
              >
                <span className="text-secondary mr-2">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 