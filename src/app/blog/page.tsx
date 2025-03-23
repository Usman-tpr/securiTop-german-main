"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import Layout from '@/components/layout/Layout';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Calendar, User, Tag, ChevronRight, Search } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: {
      en: "Top 10 Physical Security Measures for Businesses",
      de: "Top 10 Maßnahmen zur physischen Sicherheit für Unternehmen"
    },
    excerpt: {
      en: "Discover the most effective physical security measures that can protect your business premises from unauthorized access and theft.",
      de: "Entdecken Sie die effektivsten Maßnahmen zur physischen Sicherheit, die Ihre Geschäftsräume vor unbefugtem Zugriff und Diebstahl schützen können."
    },
    image: "/images/blog/physical-security.jpg",
    author: "Klaus Becker",
    date: "2023-10-15",
    category: {
      en: "Physical Security",
      de: "Objektschutz"
    },
    tags: ["business", "security", "physical"]
  },
  {
    id: 2,
    title: {
      en: "Cybersecurity Trends in 2024",
      de: "Cybersicherheitstrends im Jahr 2024"
    },
    excerpt: {
      en: "Stay ahead of the curve with these emerging cybersecurity trends that will shape the digital landscape in 2024.",
      de: "Bleiben Sie mit diesen aufkommenden Cybersicherheitstrends, die die digitale Landschaft im Jahr 2024 prägen werden, einen Schritt voraus."
    },
    image: "/images/blog/cyber-security.jpg",
    author: "Felix Wagner",
    date: "2023-12-05",
    category: {
      en: "Cyber Security",
      de: "Cybersicherheit"
    },
    tags: ["cyber", "trends", "digital"]
  },
  {
    id: 3,
    title: {
      en: "How to Choose the Right CCTV System",
      de: "Wie man das richtige Videoüberwachungssystem auswählt"
    },
    excerpt: {
      en: "A comprehensive guide to selecting the optimal CCTV system for your specific security needs and budget considerations.",
      de: "Ein umfassender Leitfaden zur Auswahl des optimalen Videoüberwachungssystems für Ihre spezifischen Sicherheitsanforderungen und Budgetüberlegungen."
    },
    image: "/images/blog/cctv.jpg",
    author: "Sophia Schneider",
    date: "2023-11-20",
    category: {
      en: "CCTV",
      de: "Videoüberwachung"
    },
    tags: ["cctv", "camera", "surveillance"]
  },
  {
    id: 4,
    title: {
      en: "Security Protocols for Remote Work",
      de: "Sicherheitsprotokolle für Remote-Arbeit"
    },
    excerpt: {
      en: "Essential security protocols that every company should implement to ensure data protection when employees work remotely.",
      de: "Wesentliche Sicherheitsprotokolle, die jedes Unternehmen implementieren sollte, um den Datenschutz zu gewährleisten, wenn Mitarbeiter remote arbeiten."
    },
    image: "/images/blog/remote-work.jpg",
    author: "Felix Wagner",
    date: "2023-09-28",
    category: {
      en: "Cyber Security",
      de: "Cybersicherheit"
    },
    tags: ["remote", "work", "protocols"]
  },
  {
    id: 5,
    title: {
      en: "Benefits of Integrated Security Systems",
      de: "Vorteile integrierter Sicherheitssysteme"
    },
    excerpt: {
      en: "Explore how integrating different security systems can provide comprehensive protection and streamline security management.",
      de: "Erfahren Sie, wie die Integration verschiedener Sicherheitssysteme umfassenden Schutz bieten und das Sicherheitsmanagement optimieren kann."
    },
    image: "/images/blog/integrated-security.jpg",
    author: "Laura Hoffmann",
    date: "2023-10-02",
    category: {
      en: "Security Systems",
      de: "Sicherheitssysteme"
    },
    tags: ["integrated", "systems", "management"]
  },
  {
    id: 6,
    title: {
      en: "Security Training: Why It Matters",
      de: "Sicherheitsschulung: Warum sie wichtig ist"
    },
    excerpt: {
      en: "Discover the importance of regular security training for employees and how it can prevent security breaches.",
      de: "Entdecken Sie die Bedeutung regelmäßiger Sicherheitsschulungen für Mitarbeiter und wie sie Sicherheitsverletzungen verhindern können."
    },
    image: "/images/blog/security-training.jpg",
    author: "Klaus Becker",
    date: "2023-08-15",
    category: {
      en: "Security Training",
      de: "Sicherheitsschulung"
    },
    tags: ["training", "employees", "awareness"]
  }
];

export default function Blog() {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || 
      post.category[locale].toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  // Extract unique categories
  const categories = [...new Set(blogPosts.map(post => post.category[locale]))];
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Layout
      title={t('blog.hero.title')}
      description={t('blog.hero.subtitle')}
    >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('blog.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('blog.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">{t('blog.search')}</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">{t('blog.categories')}</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-2 py-1 rounded ${selectedCategory === '' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    {t('blog.allCategories')}
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-2 py-1 rounded ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('blog.recentPosts')}</h3>
              <ul className="space-y-4">
                {blogPosts
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 3)
                  .map((post, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title[locale]}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium hover:text-primary">
                          <Link href={`/blog/${post.id}`}>
                            {post.title[locale]}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Blog Posts Grid */}
            {filteredPosts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-lg text-gray-600">{t('blog.noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Link href={`/blog/${post.id}`} className="block relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title[locale]}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center mb-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 hover:text-primary">
                        <Link href={`/blog/${post.id}`}>
                          {post.title[locale]}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt[locale]}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Tag size={14} className="text-primary mr-1" />
                          <span className="text-sm text-primary font-medium">
                            {post.category[locale]}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-primary hover:text-primaryDark font-medium text-sm"
                        >
                          {t('blog.readMore')}
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" className="px-4">
                  {t('blog.previous')}
                </Button>
                <Button variant="primary" className="w-10 h-10 p-0">1</Button>
                <Button variant="outline" className="w-10 h-10 p-0">2</Button>
                <Button variant="outline" className="w-10 h-10 p-0">3</Button>
                <Button variant="outline" className="px-4">
                  {t('blog.next')}
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
} 