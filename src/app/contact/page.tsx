"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // In a real application, this would be an actual API call
      if (Math.random() > 0.2) { // 80% success rate for demo
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <Layout
      title={t('contact.hero.title')}
      description={t('contact.hero.subtitle')}
    >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form & Info Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-3">
            <SectionTitle
              title={t('contact.form.title')}
              center={false}
            />
            
            <motion.form 
              onSubmit={handleSubmit}
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.subject')}*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={formStatus === 'submitting'}
                  icon={formStatus === 'submitting' ? undefined : <Send size={16} />}
                  className="min-w-[150px]"
                >
                  {formStatus === 'submitting' ? 
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.sending')}
                    </span> : 
                    t('contact.form.submit')
                  }
                </Button>
                
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center text-green-600"
                  >
                    <CheckCircle size={20} className="mr-2" />
                    <span>{t('contact.form.success')}</span>
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center text-red-600"
                  >
                    <AlertCircle size={20} className="mr-2" />
                    <span>{t('contact.form.error')}</span>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
          
          {/* Contact Info Column */}
          <div className="lg:col-span-2 bg-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.info.address')}</h4>
                  <p className="text-gray-600">
                    {siteConfig.contact.address.street}, <br />
                    {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, <br />
                    {siteConfig.contact.address.country}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.info.phone')}</h4>
                  <p className="text-gray-600">
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.info.email')}</h4>
                  <p className="text-gray-600">
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.info.hours')}</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section background="light" padding="none">
        <div className="relative h-[400px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.1392929188534!2d8.866083776889503!3d48.5942413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799f4c3440dde51%3A0x2f66e63067c96a87!2sAdlerstra%C3%9Fe%207%2C%2071083%20Herrenberg%2C%20Germany!5e0!3m2!1sen!2sus!4v1681889321981!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen={false} 
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </Section>
      
      {/* Office Locations */}
      <Section background="white">
        <SectionTitle
          title={t('contact.locations.title')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('contact.locations.berlin.title')}</h3>
            <p className="mb-2">{t('contact.locations.berlin.address')}</p>
            <p className="mb-2">
              <strong>{t('contact.info.phone')}:</strong>{' '}
              <a href={`tel:${t('contact.locations.berlin.phone')}`} className="hover:text-primary">
                {t('contact.locations.berlin.phone')}
              </a>
            </p>
            <p>
              <strong>{t('contact.info.email')}:</strong>{' '}
              <a href={`mailto:${t('contact.locations.berlin.email')}`} className="hover:text-primary">
                {t('contact.locations.berlin.email')}
              </a>
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('contact.locations.munich.title')}</h3>
            <p className="mb-2">{t('contact.locations.munich.address')}</p>
            <p className="mb-2">
              <strong>{t('contact.info.phone')}:</strong>{' '}
              <a href={`tel:${t('contact.locations.munich.phone')}`} className="hover:text-primary">
                {t('contact.locations.munich.phone')}
              </a>
            </p>
            <p>
              <strong>{t('contact.info.email')}:</strong>{' '}
              <a href={`mailto:${t('contact.locations.munich.email')}`} className="hover:text-primary">
                {t('contact.locations.munich.email')}
              </a>
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('contact.locations.hamburg.title')}</h3>
            <p className="mb-2">{t('contact.locations.hamburg.address')}</p>
            <p className="mb-2">
              <strong>{t('contact.info.phone')}:</strong>{' '}
              <a href={`tel:${t('contact.locations.hamburg.phone')}`} className="hover:text-primary">
                {t('contact.locations.hamburg.phone')}
              </a>
            </p>
            <p>
              <strong>{t('contact.info.email')}:</strong>{' '}
              <a href={`mailto:${t('contact.locations.hamburg.email')}`} className="hover:text-primary">
                {t('contact.locations.hamburg.email')}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
} 