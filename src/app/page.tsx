"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ServiceSlider from '@/components/sections/ServiceSlider';
import SecurityShowcase from '@/components/sections/SecurityShowcase';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/utils/i18n';
import { Shield, Lock, Award, ArrowRight, CheckCircle2, Target,Quote } from 'lucide-react';
import {useInView} from "framer-motion"

export default function Home() {
  const { t } = useTranslation();
  const ceoRef = useRef<HTMLDivElement>(null);
  const ceoInView = useInView(ceoRef, { once: true, amount: 0.3 });


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Layout>
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('home.hero.cta')}
        ctaLink="/contact"
        secondaryCtaText={t('buttons.ourServices') || "Our Services"}
        secondaryCtaLink="/services"
      />
      
      {/* Featured Benefits */}
      <div className="relative -mt-16 z-20 px-4 sm:px-6 mb-12">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { 
                icon: <Shield className="h-6 w-6" />, 
                title: t('home.benefits.professional.title') || "Professional Team",
                description: t('home.benefits.professional.description') || "Our highly trained security professionals are committed to the highest standards of service."
              },
              { 
                icon: <Lock className="h-6 w-6" />, 
                title: t('home.benefits.reliable.title') || "Reliable Service",
                description: t('home.benefits.reliable.description') || "We provide dependable security solutions with 24/7 availability and rapid response times."
              },
              { 
                icon: <Award className="h-6 w-6" />, 
                title: t('home.benefits.certified.title') || "Certified Expertise",
                description: t('home.benefits.certified.description') || "Our team is fully certified with industry-recognized qualifications and extensive experience."
              },
              { 
                icon: <Target className="h-6 w-6" />, 
                title: t('home.benefits.tailored.title') || "Tailored Solutions",
                description: t('home.benefits.tailored.description') || "We create customized security strategies to meet your specific needs and requirements."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
   {/* CEO Message Section */}
   <Section background="light">
        <div 
          ref={ceoRef}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial="hidden"
            animate={ceoInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <SectionTitle
              title={t('about.ceo.title') || "Message from Our CEO"}
            />
          </motion.div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* CEO Image */}
              <motion.div 
                className="relative h-[300px] lg:h-full lg:col-span-1 overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={ceoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/images/team/ceo-1.jpg"
                  alt={t('about.ceo.name') || "Klaus Becker"}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{t('about.ceo.name') || "Klaus Becker"}</h3>
                  <p className="text-white/90">{t('about.ceo.position') || "Founder & CEO"}</p>
                </div>
              </motion.div>
              
              {/* CEO Message */}
              <motion.div 
                className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={ceoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  {t('about.ceo.message') || "At SecuriTop, we believe that security is not just about protection - it's about creating peace of mind that allows our clients to focus on what matters most to them. Since founding this company in 2010, our mission has been to deliver exceptional security services with integrity, innovation, and a genuine commitment to our clients' wellbeing. Our team of dedicated professionals works tirelessly to stay ahead of evolving security challenges and to provide solutions that truly make a difference. As we continue to grow, our commitment to excellence and personalized service remains unwavering."}
                </p>
                <p className="text-lg font-semibold text-primary">
                  {t('about.ceo.vision') || "Together, we're building a safer future for businesses and communities across Germany."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Service Slider Section */}
      <ServiceSlider />
      
      <Services maxItems={6} />
      
      <SecurityShowcase />
      
      <Testimonials />
      
      <Stats />
      
      {/* Why Choose Us Section */}
      <Section background="white">
        <SectionTitle
          title={t('home.whyChoose.title') || "Why Choose SecuriTop"}
          subtitle={t('home.whyChoose.subtitle') || "The benefits of partnering with our security team"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: t('home.whyChoose.expertise.title') || "Expert Security Team",
              description: t('home.whyChoose.expertise.description') || "Our security professionals have extensive training and experience in all aspects of security operations.",
              icon: <Shield className="h-10 w-10" />
            },
            {
              title: t('home.whyChoose.customized.title') || "Customized Approach",
              description: t('home.whyChoose.customized.description') || "We develop tailored security strategies that address your specific challenges and requirements.",
              icon: <Target className="h-10 w-10" />
            },
            {
              title: t('home.whyChoose.responsive.title') || "Responsive Support",
              description: t('home.whyChoose.responsive.description') || "Our 24/7 monitoring and rapid response teams ensure immediate action when security issues arise.",
              icon: <Lock className="h-10 w-10" />
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              style={{ 
                backgroundColor: "#F5F5F5", // Default light background
              }}
              className="p-6 rounded-lg shadow-md hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-dark transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300">{reason.title}</h3>
                <p className="text-gray-600 group-hover:text-white group-hover:text-opacity-90 transition-colors duration-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <CTA
        title={t('home.cta.title') || "Ready to Enhance Your Security?"}
        subtitle={t('home.cta.subtitle') || "Contact us today for a free security assessment"}
        buttonText={t('home.cta.button') || "Get Started"}
        buttonLink="/contact"
        background="dark"
      />
    </Layout>
  );
}
