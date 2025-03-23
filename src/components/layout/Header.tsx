import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Locale } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Header = () => {
  const { t, locale, changeLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (newLocale: Locale) => {
    changeLanguage(newLocale);
    closeMenu();
  };

  // Animation variants for menu items
  const menuItemVariants = {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95, 
      transition: { duration: 0.1 } 
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  // Animation for active indicator
  const activeIndicatorVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: '100%', opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="relative h-24 w-44 mr-2">
                  <Image 
                    src={siteConfig.company.logo} 
                    alt={siteConfig.company.name} 
                    className="object-cover rounded-full"
                    fill
                    priority
                  />
                </div>
                <span className="text-2xl font-bold" style={{ color: siteConfig.colors.primary }}>
                  {siteConfig.company.name}
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {siteConfig.navigation.header.map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={menuItemVariants}
                onHoverStart={() => setActiveMenu(item.path)}
                onHoverEnd={() => setActiveMenu(null)}
              >
                <Link 
                  href={item.path} 
                  className={`text-lg font-medium py-2 inline-block min-w-fit ${
                    pathname === item.path 
                      ? 'text-primary' 
                      : scrolled ? 'text-text' : 'text-text'
                  }`}
                >
                  <span className="block text-center whitespace-nowrap relative">
                    {item.label[locale]}
                    
                    {/* Active or hover indicator */}
                    {(pathname === item.path || activeMenu === item.path) && (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                        variants={activeIndicatorVariants}
                        initial="initial"
                        animate="animate"
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>


          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="flex items-center space-x-1 text-sm font-medium min-w-[100px]"
              >
                <Globe size={18} className="flex-shrink-0" />
                <span className="mx-1">{locale === 'en' ? 'English' : 'Deutsch'}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} className="flex-shrink-0" />
                </motion.div>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <motion.button 
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm ${locale === 'en' ? 'bg-gray-100 font-medium' : ''} hover:bg-gray-100`}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    whileTap={{ backgroundColor: '#e5e7eb' }}
                  >
                    English
                  </motion.button>
                  <motion.button 
                    onClick={() => handleLanguageChange('de')}
                    className={`w-full text-left px-4 py-2 text-sm ${locale === 'de' ? 'bg-gray-100 font-medium' : ''} hover:bg-gray-100`}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    whileTap={{ backgroundColor: '#e5e7eb' }}
                  >
                    Deutsch
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primaryDark text-white px-5 py-2 rounded-md transition-colors duration-300 whitespace-nowrap min-w-fit"
              >
                {t('buttons.contactUs')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-text"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center mb-4">
                <div className="relative h-8 w-8 mr-2">
                  <Image 
                    src={siteConfig.company.logo} 
                    alt={siteConfig.company.name} 
                    className="object-contain rounded"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xl font-bold" style={{ color: siteConfig.colors.primary }}>
                  {siteConfig.company.name}
                </span>
              </div>
              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.header.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={menuItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link 
                      href={item.path} 
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.path ? 'text-primary' : 'text-text'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label[locale]}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">{t('nav.language')}</p>
                  <div className="flex space-x-4">
                    <motion.button 
                      onClick={() => handleLanguageChange('en')}
                      className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-gray-200 font-medium' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      English
                    </motion.button>
                    <motion.button 
                      onClick={() => handleLanguageChange('de')}
                      className={`px-3 py-1 rounded ${locale === 'de' ? 'bg-gray-200 font-medium' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Deutsch
                    </motion.button>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    href="/contact" 
                    className="bg-primary hover:bg-primaryDark text-white px-5 py-2 rounded-md transition-colors duration-300 text-center mt-4 block"
                    onClick={closeMenu}
                  >
                    {t('buttons.contactUs')}
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 