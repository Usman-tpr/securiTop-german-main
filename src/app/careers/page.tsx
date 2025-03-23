"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Search, Briefcase, MapPin, Clock, ChevronRight, Users, Shield, Award } from 'lucide-react';

// Sample job listings data - you can move this to siteConfig later
const jobListings = [
  {
    id: 1,
    title: { en: "Security Officer", de: "Sicherheitsmitarbeiter" },
    location: { en: "Berlin", de: "Berlin" },
    type: { en: "Full-time", de: "Vollzeit" },
    department: { en: "Operations", de: "Betrieb" },
    description: {
      en: "Join our team as a Security Officer and help protect our clients' assets and personnel.",
      de: "Werden Sie Teil unseres Teams als Sicherheitsmitarbeiter und helfen Sie beim Schutz der Vermögenswerte und des Personals unserer Kunden."
    }
  },
  {
    id: 2,
    title: { en: "Personal Protection Specialist", de: "Personenschutz-Spezialist" },
    location: { en: "Hamburg", de: "Hamburg" },
    type: { en: "Full-time", de: "Vollzeit" },
    department: { en: "VIP Services", de: "VIP-Dienste" },
    description: {
      en: "Experienced protection specialist needed for high-profile client security.",
      de: "Erfahrener Schutz-Spezialist für die Sicherheit von VIP-Kunden gesucht."
    }
  },
  {
    id: 3,
    title: { en: "Fire Safety Inspector", de: "Brandschutzbeauftragter" },
    location: { en: "Munich", de: "München" },
    type: { en: "Full-time", de: "Vollzeit" },
    department: { en: "Fire Safety", de: "Brandschutz" },
    description: {
      en: "Conduct fire safety inspections and develop emergency response plans.",
      de: "Durchführung von Brandschutzinspektionen und Entwicklung von Notfallplänen."
    }
  },
  {
    id: 4,
    title: { en: "Night Watch Supervisor", de: "Nachtwache-Supervisor" },
    location: { en: "Frankfurt", de: "Frankfurt" },
    type: { en: "Night Shift", de: "Nachtschicht" },
    department: { en: "Night Watch", de: "Nachtwache" },
    description: {
      en: "Lead and supervise night watch teams ensuring property security.",
      de: "Leitung und Überwachung von Nachtwache-Teams zur Gewährleistung der Objektsicherheit."
    }
  }
];

export default function Careers() {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter jobs based on search query
  const filteredJobs = jobListings.filter(job => {
    const query = searchQuery.toLowerCase();
    return (
      job.title[locale].toLowerCase().includes(query) ||
      job.location[locale].toLowerCase().includes(query) ||
      job.department[locale].toLowerCase().includes(query) ||
      job.description[locale].toLowerCase().includes(query)
    );
  });

  return (
    <Layout
      title={t('careers.meta.title') || "Careers - Join Our Team"}
      description={t('careers.meta.description') || "Join our team of security professionals. View our current job openings and career opportunities."}
    >
      {/* Hero Section */}
      <Section background="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('careers.hero.title') || "Join Our Security Team"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {t('careers.hero.subtitle') || "Be part of a team that makes a difference in protecting people and assets"}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why Join Us Section */}
      <Section background="light">
        <SectionTitle
          title={t('careers.whyJoinUs.title') || "Why Join SecuriTop?"}
          subtitle={t('careers.whyJoinUs.subtitle') || "Discover the benefits of being part of our professional security team"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Shield className="w-12 h-12 text-primary" />,
              title: { en: "Professional Development", de: "Berufliche Entwicklung" },
              description: { 
                en: "Continuous training and career growth opportunities",
                de: "Kontinuierliche Weiterbildung und Karrieremöglichkeiten"
              }
            },
            {
              icon: <Users className="w-12 h-12 text-primary" />,
              title: { en: "Great Team", de: "Großartiges Team" },
              description: {
                en: "Work with experienced professionals in a supportive environment",
                de: "Arbeiten Sie mit erfahrenen Fachleuten in einem unterstützenden Umfeld"
              }
            },
            {
              icon: <Award className="w-12 h-12 text-primary" />,
              title: { en: "Competitive Benefits", de: "Wettbewerbsfähige Vorteile" },
              description: {
                en: "Excellent compensation and comprehensive benefits package",
                de: "Ausgezeichnete Vergütung und umfassendes Leistungspaket"
              }
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title[locale]}</h3>
              <p className="text-gray-600">{benefit.description[locale]}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Job Listings Section */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={t('careers.openings.title') || "Current Openings"}
            subtitle={t('careers.openings.subtitle') || "Explore our available positions and join our team"}
          />

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('careers.search.placeholder') || "Search positions..."}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Job Cards */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title[locale]}</h3>
                    <p className="text-gray-600 mb-4">{job.description[locale]}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location[locale]}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department[locale]}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type[locale]}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button
                      href={`/careers/${job.id}`}
                      variant="primary"
                      className="whitespace-nowrap"
                      icon={<ChevronRight />}
                    >
                      {t('careersb.buttons.apply') || "Apply Now"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
} 