import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import { Facebook, Linkedin, Twitter, Instagram, Mail, Send } from 'lucide-react';

const Footer = () => {
  const { t, locale } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-full mr-3">
                <Image 
                  src={siteConfig.company.logo} 
                  alt={siteConfig.company.name} 
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <h3 className="text-2xl font-bold">{siteConfig.company.name}</h3>
            </div>
            <p className="mb-4 text-gray-300">{siteConfig.company.description}</p>
            <div className="flex space-x-4 mt-6">
              <a 
                href={siteConfig.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={siteConfig.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={siteConfig.socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={siteConfig.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer Nav Columns */}
          {siteConfig.navigation.footer.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 text-secondary">
                {column.title[locale]}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.path} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">
              {t('footer.newsletter.title')}
            </h4>
            <p className="text-gray-300 mb-4">
              {t('footer.newsletter.subtitle')}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label={t('footer.newsletter.placeholder')}
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondaryDark text-gray-900 px-4 py-2 rounded-r-md transition-colors"
                aria-label={t('footer.newsletter.button')}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-secondary" />
              <a 
                href={`mailto:${siteConfig.contact.email}`} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="text-gray-300">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
            </div>
            <div className="text-gray-300">
              {siteConfig.contact.phone}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">{t('footer.copyright')}</p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 