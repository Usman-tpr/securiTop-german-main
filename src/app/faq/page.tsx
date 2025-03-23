"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import CTA from '@/components/sections/CTA';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

export default function FAQ() {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    setOpenItems(prevState => 
      prevState.includes(index)
        ? prevState.filter(item => item !== index)
        : [...prevState, index]
    );
  };
  
  // Filter FAQ items based on search query
  const filteredFAQs = siteConfig.faq.filter(faq => {
    const question = faq.question[locale].toLowerCase();
    const answer = faq.answer[locale].toLowerCase();
    const query = searchQuery.toLowerCase();
    
    return question.includes(query) || answer.includes(query);
  });

  return (
    <Layout
      title={t('faq.hero.title')}
      description={t('faq.hero.subtitle')}
    >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('faq.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('faq.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <Section background="white">
        <SectionTitle
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
        />
        
        {/* Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">{t('faq.noResults')}</p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between ${
                    openItems.includes(index) ? 'bg-primary text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium text-lg">{faq.question[locale]}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-700">{faq.answer[locale]}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
      </Section>
      
      {/* Categories Section */}
      <Section background="light">
        <SectionTitle
          title={t('faq.categories.title')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Services Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{t('faq.categories.services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.property')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.personal')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.fire')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.nightwatch')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.events')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* More Services Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{t('services.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.retail')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.transport')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.detective')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.district')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.technology')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.asylum')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support & Pricing Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{t('faq.categories.support')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('faq.categories.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('buttons.getQuote')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('buttons.contactUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {t('home.cta.cta')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <CTA
        title={t('faq.cta.title')}
        subtitle={t('faq.cta.subtitle')}
        buttonText={t('buttons.contactUs')}
        buttonLink="/contact"
        background="primary"
      />
    </Layout>
  );
} 