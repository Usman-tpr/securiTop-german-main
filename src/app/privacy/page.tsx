"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { useTranslation } from '@/utils/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Privacy() {
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
                {t('privacy.title') || 'Privacy Policy'}
              </h1>
              <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto">
                {t('privacy.subtitle') || 'How we handle your personal information'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Privacy Policy Content */}
        <Section background="white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg"
            >
              <p>{t('privacy.lastUpdated') || 'Last Updated: October 1, 2023'}</p>
              
              <h2>{t('privacy.introduction.title') || 'Introduction'}</h2>
              <p>{t('privacy.introduction.content') || 'At SecuriTop, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.'}</p>
              
              <h2>{t('privacy.dataCollected.title') || 'Information We Collect'}</h2>
              <p>{t('privacy.dataCollected.content') || 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:'}</p>
              <ul>
                <li>{t('privacy.dataCollected.identity') || 'Identity Data: includes first name, last name, username or similar identifier.'}</li>
                <li>{t('privacy.dataCollected.contact') || 'Contact Data: includes billing address, delivery address, email address and telephone numbers.'}</li>
                <li>{t('privacy.dataCollected.technical') || 'Technical Data: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.'}</li>
                <li>{t('privacy.dataCollected.usage') || 'Usage Data: includes information about how you use our website, products and services.'}</li>
              </ul>
              
              <h2>{t('privacy.howWeUse.title') || 'How We Use Your Information'}</h2>
              <p>{t('privacy.howWeUse.content') || 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:'}</p>
              <ul>
                <li>{t('privacy.howWeUse.point1') || 'To register you as a new customer.'}</li>
                <li>{t('privacy.howWeUse.point2') || 'To process and deliver your order.'}</li>
                <li>{t('privacy.howWeUse.point3') || 'To manage our relationship with you.'}</li>
                <li>{t('privacy.howWeUse.point4') || 'To make suggestions and recommendations to you about services that may be of interest to you.'}</li>
              </ul>
              
              <h2>{t('privacy.cookies.title') || 'Cookies'}</h2>
              <p>{t('privacy.cookies.content') || 'Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.'}</p>
              
              <h2>{t('privacy.dataSecurity.title') || 'Data Security'}</h2>
              <p>{t('privacy.dataSecurity.content') || 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.'}</p>
              
              <h2>{t('privacy.yourRights.title') || 'Your Legal Rights'}</h2>
              <p>{t('privacy.yourRights.content') || 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.'}</p>
              
              <h2>{t('privacy.contact.title') || 'Contact Us'}</h2>
              <p>{t('privacy.contact.content') || 'If you have any questions about this privacy policy or our privacy practices, please contact us at:'}</p>
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