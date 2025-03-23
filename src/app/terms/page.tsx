"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { useTranslation } from '@/utils/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Terms() {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[200px] md:h-[250px] w-full overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-primary/90 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t('terms.title') || 'Terms of Service'}
              </h1>
              <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto">
                {t('terms.subtitle') || 'The conditions for using our services'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Terms Content */}
        <Section background="white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg"
            >
              <p>{t('terms.lastUpdated') || 'Last Updated: October 1, 2023'}</p>
              
              <h2>{t('terms.introduction.title') || 'Introduction'}</h2>
              <p>{t('terms.introduction.content') || 'Welcome to SecuriTop. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website or using our services, we assume you accept these terms and conditions in full. Do not continue to use our website or services if you do not accept all of the terms and conditions stated on this page.'}</p>
              
              <h2>{t('terms.definitions.title') || 'Definitions'}</h2>
              <p>{t('terms.definitions.content') || 'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:'}</p>
              <ul>
                <li>{t('terms.definitions.company') || '"Company", "We", "Our" and "Us", refers to SecuriTop Security Services.'}</li>
                <li>{t('terms.definitions.client') || '"Client", "You" and "Your" refers to the person accessing this website and accepting the Company\'s terms and conditions.'}</li>
                <li>{t('terms.definitions.services') || '"Services" refers to the security services provided by SecuriTop as described on our website.'}</li>
              </ul>
              
              <h2>{t('terms.serviceProvision.title') || 'Service Provision'}</h2>
              <p>{t('terms.serviceProvision.content') || 'SecuriTop provides security services as described on our website. We endeavor to provide these services with the highest standards of professionalism and expertise. All services are subject to our quality control procedures and relevant industry regulations.'}</p>
              
              <h2>{t('terms.obligations.title') || 'Client Obligations'}</h2>
              <p>{t('terms.obligations.content') || 'As a client, you agree to:'}</p>
              <ul>
                <li>{t('terms.obligations.point1') || 'Provide accurate and complete information when requested.'}</li>
                <li>{t('terms.obligations.point2') || 'Cooperate fully with our security personnel.'}</li>
                <li>{t('terms.obligations.point3') || 'Pay all fees and charges in accordance with the agreed terms.'}</li>
                <li>{t('terms.obligations.point4') || 'Comply with all applicable laws and regulations.'}</li>
              </ul>
              
              <h2>{t('terms.payment.title') || 'Payment Terms'}</h2>
              <p>{t('terms.payment.content') || 'Payment for our services is due as specified in our service agreement. We accept various payment methods as indicated during the ordering process. Late payments may be subject to interest charges and/or service suspension.'}</p>
              
              <h2>{t('terms.liability.title') || 'Limitation of Liability'}</h2>
              <p>{t('terms.liability.content') || 'While we strive to provide the highest quality security services, we cannot guarantee absolute security in all circumstances. Our liability is limited to the extent permitted by applicable law. We are not liable for any indirect, consequential, or incidental damages arising from the use of our services.'}</p>
              
              <h2>{t('terms.termination.title') || 'Termination'}</h2>
              <p>{t('terms.termination.content') || 'Either party may terminate the service agreement as per the conditions specified in the contract. We reserve the right to terminate services immediately in case of non-payment or breach of these terms.'}</p>
              
              <h2>{t('terms.governing.title') || 'Governing Law'}</h2>
              <p>{t('terms.governing.content') || 'These terms and conditions are governed by and construed in accordance with the laws of Germany, and you submit to the non-exclusive jurisdiction of the courts located in Berlin for the resolution of any disputes.'}</p>
              
              <h2>{t('terms.changes.title') || 'Changes to Terms'}</h2>
              <p>{t('terms.changes.content') || 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review these terms periodically.'}</p>
              
              <h2>{t('terms.contact.title') || 'Contact Us'}</h2>
              <p>{t('terms.contact.content') || 'If you have any questions about these Terms of Service, please contact us at:'}</p>
              <p>
                Email: info@securitop.de<br />
                Phone: +49 123 456 789<br />
                Address: Sicherheitsstraße 123, 10115 Berlin, Germany
              </p>
            </motion.div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
} 