import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Button from '@/components/ui/Button';
import { ChevronRight, Shield, Lock, Users, ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string; // Now optional
  imagePriority?: boolean;
}

// Particle type definition
interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
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
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    particles.current = [];
    const particleCount = Math.floor((width * height) / 9000); // Slightly higher density
    const colors = ['#1A56DB', '#1E429F', '#0D326F', '#0F172A', '#3B82F6']; // Blue theme colors
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.5, // More variation in size
        speed: Math.random() * 0.5 + 0.05,
        opacity: Math.random() * 0.7 + 0.3, // Higher opacity
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };

  // Draw particles on canvas
  const drawParticles = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number, 
    mouseX: number, 
    mouseY: number,
    deltaTime: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0F172A'); // Dark blue
    gradient.addColorStop(1, '#1E293B'); // Slightly lighter blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Draw particles
    particles.current.forEach(p => {
      // Calculate distance from mouse
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200;
      
      // Update particle position based on mouse proximity
      if (distance < maxDistance && mouseX !== 0 && mouseY !== 0) {
        const force = (1 - distance / maxDistance) * 2;
        p.x -= dx * force * 0.03; // Increased force effect
        p.y -= dy * force * 0.03;
      }
      
      // Normal particle movement
      p.y += p.speed * deltaTime * 0.05;
      
      // Reset particles that go off screen
      if (p.y > height) {
        p.y = 0;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    
    // Draw connections between nearby particles
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'; // More visible connections
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const p1 = particles.current[i];
        const p2 = particles.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) { // Increased connection distance
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.globalAlpha = (1 - distance / 100) * 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
    
    // Draw a subtle glow around the mouse cursor
    if (mouseX !== 0 && mouseY !== 0) {
      const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
      mouseGradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); // Brighter blue with higher opacity
      mouseGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = mouseGradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // Animation loop
  const animate = (timestamp: number) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Calculate delta time for smooth animation
    const deltaTime = timestamp - lastTime.current;
    lastTime.current = timestamp;
    
    drawParticles(
      ctx, 
      dimensions.width, 
      dimensions.height, 
      mousePosition.x, 
      mousePosition.y,
      deltaTime
    );
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        
        setDimensions({
          width: offsetWidth,
          height: offsetHeight
        });
        
        canvasRef.current.width = offsetWidth;
        canvasRef.current.height = offsetHeight;
        
        initParticles(offsetWidth, offsetHeight);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set up mouse move event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Initialize and run animation
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      lastTime.current = performance.now();
      animationFrameId.current = requestAnimationFrame(animate);
      setIsLoaded(true);
      
      return () => {
        cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [dimensions]);

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
    <div 
      ref={containerRef}
      className="relative h-screen min-h-[650px] max-h-[850px] w-full overflow-hidden"
    >
      {/* Interactive Particle Background */}
      <div className="absolute inset-0 z-0">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-1"
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
      {isLoaded && (
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
      )}
    </div>
  );
};

export default Hero; 