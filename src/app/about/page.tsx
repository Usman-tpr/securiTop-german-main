"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { Shield, Star, Lightbulb, Clock, Quote, ArrowRight, ChevronDown } from 'lucide-react';

export default function About() {
  const { t, locale } = useTranslation();
  
  // Refs for scroll animations
  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const ceoRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  // InView states
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const historyInView = useInView(historyRef, { once: true, amount: 0.3 });
  const ceoInView = useInView(ceoRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <Layout
      title={t('about.hero.title')}
      description={t('about.hero.subtitle')}
    >
      {/* Hero Section with Parallax */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-primary z-0"
          style={{ opacity }}
        >
          <Image
            src="/images/about/about-hero.jpg"
            alt={t('about.hero.title')}
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
              {t('about.hero.title') || "About SecuriTop"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
              {t('about.hero.subtitle') || "Leading Provider of Security Services in Germany"}
            </p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mission Section */}
      <Section background="white">
        <div 
          ref={missionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionTitle
              title={t('about.mission.title') || "Our Mission"}
              center={false}
            />
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('about.mission.content') || "At SecuriTop, our mission is to provide top-quality security services and solutions that protect our clients' assets, people, and operations while providing peace of mind and adding value."}
            </p>
            <Button 
              href="/services" 
              variant="primary"
              icon={<ArrowRight />}
              className="hover:-translate-y-1 transition-transform"
            >
              {t('buttons.learnMore') || "Learn More"}
            </Button>
          </motion.div>
          <motion.div 
            className="relative h-[350px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={missionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about/our-mission-2.jpg"
              alt={t('about.mission.title') || "Our Mission"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </Section>
      
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
                {/* <Image
                  src="/images/team/ceo-1.jpg"
                  alt={t('about.ceo.name') || "Klaus Becker"}
                  fill
                  className="object-cover object-center"
                /> */}
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
      
      {/* History Section */}
      {/* <Section background="white">
        <div 
          ref={historyRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            className="order-2 lg:order-1 relative h-[350px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={historyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about/our-history-2.jpg"
              alt={t('about.history.title') || "Our History"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionTitle
              title={t('about.history.title') || "Our History"}
              center={false}
            />
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('about.history.content') || "SecuriTop was founded in 2010 by Klaus Becker as a small security consultancy in Berlin. Over the years, we've grown into a comprehensive security service provider with offices across Germany, serving clients from various industries."}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center py-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <h4 className="text-3xl font-bold text-primary">2010</h4>
                <p className="text-sm text-gray-600">Founded</p>
              </div>
              <div className="text-center py-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <h4 className="text-3xl font-bold text-primary">10+</h4>
                <p className="text-sm text-gray-600">Locations</p>
              </div>
              <div className="text-center py-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <h4 className="text-3xl font-bold text-primary">500+</h4>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section> */}
      
      {/* Values Section */}
      <Section background="light">
        <div ref={valuesRef}>
          <SectionTitle
            title={t('about.values.title') || "Our Core Values"}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300"
              variants={fadeInUp}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('about.values.integrity.title') || "Integrity"}
              </h3>
              <p className="text-gray-600">
                {t('about.values.integrity.content') || "We act with honesty, transparency, and ethical standards in all our interactions."}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300"
              variants={fadeInUp}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('about.values.excellence.title') || "Excellence"}
              </h3>
              <p className="text-gray-600">
                {t('about.values.excellence.content') || "We strive for excellence in every aspect of our services, continuously improving our methods and solutions."}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300"
              variants={fadeInUp}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('about.values.innovation.title') || "Innovation"}
              </h3>
              <p className="text-gray-600">
                {t('about.values.innovation.content') || "We embrace new technologies and approaches to enhance security measures and solutions."}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300"
              variants={fadeInUp}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('about.values.reliability.title') || "Reliability"}
              </h3>
              <p className="text-gray-600">
                {t('about.values.reliability.content') || "We aim to be reliable and consistent in our services and support."}
              </p>
            </motion.div>
          </motion.div> 
        </div>
      </Section>
      
      {/* Team Section */}
      {/* <Section id="team" background="white">
        <SectionTitle
          title={t('about.team.title') || "Our Leadership Team"}
          subtitle={t('about.team.subtitle') || "Experienced Security Professionals"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {siteConfig.team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position[locale]}</p>
                <p className="text-gray-600 text-sm">{member.bio[locale]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section> */}
      
      {/* CTA Section */}
      <CTA
        title={t('home.cta.title') || "Ready to Enhance Your Security?"}
        subtitle={t('home.cta.subtitle') || "Contact us today for a free security assessment"}
        buttonText={t('buttons.getQuote') || "Get a Free Quote"}
        buttonLink="/contact"
        background="primary"
      />
    </Layout>
  );
} 