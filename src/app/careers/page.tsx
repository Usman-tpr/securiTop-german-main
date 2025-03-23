"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Briefcase, MapPin, CalendarClock, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Upload, X } from 'lucide-react';

// Sample job listings
const jobListings = [
  {
    id: 1,
    title: {
      en: "Security Guard",
      de: "Sicherheitskraft"
    },
    department: {
      en: "Physical Security",
      de: "Objektschutz"
    },
    location: {
      en: "Berlin, Germany",
      de: "Berlin, Deutschland"
    },
    type: {
      en: "Full-time",
      de: "Vollzeit"
    },
    description: {
      en: "We are looking for professional security guards to protect our clients' properties, assets, and personnel. The ideal candidate has a strong sense of responsibility, excellent observation skills, and the ability to respond effectively to security threats.",
      de: "Wir suchen professionelle Sicherheitskräfte zum Schutz von Eigentum, Vermögenswerten und Personal unserer Kunden. Der ideale Kandidat hat ein starkes Verantwortungsbewusstsein, ausgezeichnete Beobachtungsfähigkeiten und die Fähigkeit, effektiv auf Sicherheitsbedrohungen zu reagieren."
    },
    responsibilities: {
      en: [
        "Monitor security cameras and patrol designated areas",
        "Perform security checks on visitors and employees",
        "Respond to alarms and security incidents",
        "Write detailed security reports",
        "Collaborate with law enforcement when necessary"
      ],
      de: [
        "Überwachung von Sicherheitskameras und Patrouille in zugewiesenen Bereichen",
        "Durchführung von Sicherheitskontrollen bei Besuchern und Mitarbeitern",
        "Reaktion auf Alarme und Sicherheitsvorfälle",
        "Verfassen detaillierter Sicherheitsberichte",
        "Zusammenarbeit mit Strafverfolgungsbehörden, wenn nötig"
      ]
    },
    requirements: {
      en: [
        "Security guard certification",
        "Clean criminal record",
        "Physical fitness and stamina",
        "Excellent attention to detail",
        "Good communication skills",
        "Ability to remain calm under pressure"
      ],
      de: [
        "Zertifizierung als Sicherheitskraft",
        "Einwandfreies polizeiliches Führungszeugnis",
        "Körperliche Fitness und Ausdauer",
        "Ausgezeichnete Aufmerksamkeit für Details",
        "Gute Kommunikationsfähigkeiten",
        "Fähigkeit, unter Druck ruhig zu bleiben"
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "Cyber Security Analyst",
      de: "Cybersicherheitsanalyst"
    },
    department: {
      en: "Cyber Security",
      de: "Cybersicherheit"
    },
    location: {
      en: "Berlin, Germany",
      de: "Berlin, Deutschland"
    },
    type: {
      en: "Full-time",
      de: "Vollzeit"
    },
    description: {
      en: "We are seeking a skilled Cyber Security Analyst to join our team. The successful candidate will be responsible for protecting our clients' digital assets by monitoring, detecting, investigating, and responding to security threats and incidents.",
      de: "Wir suchen einen qualifizierten Cybersicherheitsanalysten für unser Team. Der erfolgreiche Kandidat ist verantwortlich für den Schutz der digitalen Assets unserer Kunden durch Überwachung, Erkennung, Untersuchung und Reaktion auf Sicherheitsbedrohungen und -vorfälle."
    },
    responsibilities: {
      en: [
        "Monitor network security systems",
        "Conduct security assessments and audits",
        "Investigate security breaches and incidents",
        "Implement security measures and controls",
        "Develop security policies and procedures",
        "Stay updated on the latest security threats and trends"
      ],
      de: [
        "Überwachung von Netzwerksicherheitssystemen",
        "Durchführung von Sicherheitsbewertungen und -audits",
        "Untersuchung von Sicherheitsverletzungen und -vorfällen",
        "Implementierung von Sicherheitsmaßnahmen und -kontrollen",
        "Entwicklung von Sicherheitsrichtlinien und -verfahren",
        "Informierung über die neuesten Sicherheitsbedrohungen und -trends"
      ]
    },
    requirements: {
      en: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "Minimum 3 years experience in cyber security",
        "Knowledge of security frameworks (NIST, ISO 27001)",
        "Experience with security tools and technologies",
        "Certifications like CISSP, CEH, or CompTIA Security+ preferred",
        "Strong analytical and problem-solving skills"
      ],
      de: [
        "Bachelor-Abschluss in Informatik, IT oder verwandtem Bereich",
        "Mindestens 3 Jahre Erfahrung in der Cybersicherheit",
        "Kenntnisse von Sicherheitsframeworks (NIST, ISO 27001)",
        "Erfahrung mit Sicherheitstools und -technologien",
        "Zertifizierungen wie CISSP, CEH oder CompTIA Security+ bevorzugt",
        "Starke analytische und problemlösende Fähigkeiten"
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "CCTV Installation Technician",
      de: "CCTV-Installationstechniker"
    },
    department: {
      en: "CCTV",
      de: "Videoüberwachung"
    },
    location: {
      en: "Munich, Germany",
      de: "München, Deutschland"
    },
    type: {
      en: "Full-time",
      de: "Vollzeit"
    },
    description: {
      en: "We are looking for a skilled CCTV Installation Technician to install, maintain, and repair surveillance systems for our clients. The ideal candidate should have technical expertise, attention to detail, and excellent customer service skills.",
      de: "Wir suchen einen qualifizierten CCTV-Installationstechniker für die Installation, Wartung und Reparatur von Überwachungssystemen für unsere Kunden. Der ideale Kandidat sollte über technisches Fachwissen, Aufmerksamkeit für Details und ausgezeichnete Kundendienstfähigkeiten verfügen."
    },
    responsibilities: {
      en: [
        "Install and configure CCTV systems",
        "Perform routine maintenance and repairs",
        "Test systems to ensure proper functionality",
        "Train clients on system operation",
        "Provide technical support and troubleshooting",
        "Keep detailed records of installations and maintenance"
      ],
      de: [
        "Installation und Konfiguration von CCTV-Systemen",
        "Durchführung von Routinewartungen und Reparaturen",
        "Testen von Systemen, um ordnungsgemäße Funktionalität zu gewährleisten",
        "Schulung von Kunden im Systembetrieb",
        "Bereitstellung von technischem Support und Fehlerbehebung",
        "Führung detaillierter Aufzeichnungen über Installationen und Wartung"
      ]
    },
    requirements: {
      en: [
        "Technical certification in electronics or related field",
        "Experience with CCTV installation and maintenance",
        "Knowledge of security camera systems and DVR/NVR",
        "Understanding of networking basics",
        "Valid driver's license",
        "Ability to lift heavy equipment and work at heights"
      ],
      de: [
        "Technische Zertifizierung in Elektronik oder verwandtem Bereich",
        "Erfahrung mit CCTV-Installation und -Wartung",
        "Kenntnisse von Sicherheitskamerasystemen und DVR/NVR",
        "Verständnis von Netzwerkgrundlagen",
        "Gültiger Führerschein",
        "Fähigkeit, schwere Ausrüstung zu heben und in Höhen zu arbeiten"
      ]
    }
  }
];

export default function Careers() {
  const { t, locale } = useTranslation();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'jobs' | 'application'>('jobs');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const toggleJob = (jobId: number) => {
    setExpandedJob(prevState => prevState === jobId ? null : jobId);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files ? e.target.files[0] : null }));
    }
  };
  
  const clearFile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
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
          position: '',
          resume: null,
          coverLetter: '',
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <Layout
      title={t('careers.hero.title')}
      description={t('careers.hero.subtitle')}
    >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('careers.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('careers.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Work With Us */}
      <Section background="white">
        <SectionTitle
          title={t('careers.whyUs.title')}
          subtitle={t('careers.whyUs.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="mx-auto bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-growth">
                <path d="M2 20h20" />
                <path d="M5 17A13 13 0 0 0 12 6" />
                <path d="M5 6c3 0 5 1 5 4 0 1.66-.67 3.33-2 5" />
                <path d="M19 17A13 13 0 0 0 12 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('careers.whyUs.growth.title')}</h3>
            <p className="text-gray-600">{t('careers.whyUs.growth.content')}</p>
          </div>
          
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="mx-auto bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle">
                <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.19-1.567a.648.648 0 0 0-.19-.523.65.65 0 0 0-.49-.204h-2.8a.65.65 0 0 0-.49.204.65.65 0 0 0-.19.523l.19 1.567c.059.47-.272.88-.743.95a.99.99 0 0 1-.837-.276l-1.611-1.611a2.403 2.403 0 0 1-.706-1.704c0-.617.236-1.234.706-1.704l1.568-1.568a1.07 1.07 0 0 1 .29-.878c.23-.23.556-.338.878-.289l1.567.19a.648.648 0 0 0 .523-.19.65.65 0 0 0 .204-.49v-2.8a.65.65 0 0 0-.204-.49.65.65 0 0 0-.523-.19l-1.567.19c-.322.049-.648-.059-.878-.29a1.07 1.07 0 0 1-.289-.877l.273-1.748a1.07 1.07 0 0 1 .697-.847 1.07 1.07 0 0 1 1.044.177l1.568 1.568c.47.47 1.087.706 1.704.706s1.233-.235 1.704-.706l1.568-1.568a1.07 1.07 0 0 1 1.044-.177c.395.142.691.476.847.847l.159.159" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('careers.whyUs.innovation.title')}</h3>
            <p className="text-gray-600">{t('careers.whyUs.innovation.content')}</p>
          </div>
          
          <div className="bg-light p-6 rounded-lg text-center">
            <div className="mx-auto bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('careers.whyUs.team.title')}</h3>
            <p className="text-gray-600">{t('careers.whyUs.team.content')}</p>
          </div>
        </div>
      </Section>
      
      {/* Jobs Tabs */}
      <Section background="light">
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-200 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-2 rounded-md ${activeTab === 'jobs' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              {t('careers.tabs.openings')}
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-6 py-2 rounded-md ${activeTab === 'application' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              {t('careers.tabs.apply')}
            </button>
          </div>
        </div>
        
        {activeTab === 'jobs' && (
          <div>
            <SectionTitle
              title={t('careers.openings.title')}
              subtitle={t('careers.openings.subtitle')}
            />
            
            <div className="mt-8 space-y-6">
              {jobListings.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold">{job.title[locale]}</h3>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <Briefcase size={16} className="mr-1" />
                          {job.department[locale]}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          {job.location[locale]}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <CalendarClock size={16} className="mr-1" />
                          {job.type[locale]}
                        </span>
                      </div>
                    </div>
                    {expandedJob === job.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t px-6 py-4"
                    >
                      <div className="prose max-w-none">
                        <p className="mb-4">{job.description[locale]}</p>
                        
                        <h4 className="font-semibold text-lg mt-6 mb-3">{t('careers.jobs.responsibilities')}</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities[locale].map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-lg mt-6 mb-3">{t('careers.jobs.requirements')}</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.requirements[locale].map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-8">
                          <Button
                            variant="primary"
                            onClick={() => {
                              setActiveTab('application');
                              setFormData(prev => ({
                                ...prev,
                                position: job.title[locale]
                              }));
                            }}
                          >
                            {t('careers.jobs.apply')}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'application' && (
          <div>
            <SectionTitle
              title={t('careers.application.title')}
              subtitle={t('careers.application.subtitle')}
            />
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('careers.application.name')}*
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
                      {t('careers.application.email')}*
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
                      {t('careers.application.phone')}
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
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('careers.application.position')}*
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t('careers.application.selectPosition')}</option>
                      {jobListings.map(job => (
                        <option key={job.id} value={job.title[locale]}>
                          {job.title[locale]}
                        </option>
                      ))}
                      <option value="Other">{t('careers.application.other')}</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('careers.application.resume')}*
                  </label>
                  {formData.resume ? (
                    <div className="flex items-center justify-between p-3 border border-gray-300 rounded-md">
                      <span className="text-sm">{formData.resume.name}</span>
                      <button
                        type="button"
                        onClick={clearFile}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4 flex text-sm justify-center">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primaryDark"
                        >
                          <span>{t('careers.application.uploadFile')}</span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="sr-only"
                            required
                          />
                        </label>
                        <p className="pl-1 text-gray-500">{t('careers.application.dragDrop')}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {t('careers.application.fileTypes')}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('careers.application.coverLetter')}
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={formStatus === 'submitting'}
                    className="min-w-[150px]"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('careers.application.submitting')}
                      </span>
                    ) : (
                      t('careers.application.submit')
                    )}
                  </Button>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center text-green-600"
                    >
                      <CheckCircle size={20} className="mr-2" />
                      <span>{t('careers.application.success')}</span>
                    </motion.div>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center text-red-600"
                    >
                      <AlertCircle size={20} className="mr-2" />
                      <span>{t('careers.application.error')}</span>
                    </motion.div>
                  )}
                </div>
              </motion.form>
            </div>
          </div>
        )}
      </Section>
    </Layout>
  );
} 