"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type Locale = 'en' | 'de';

interface NestedTranslations {
  [key: string]: string | NestedTranslations;
}

type TranslationData = Record<string, any>;

interface I18nContextType {
  t: (key: string, params?: Record<string, string>) => string;
  locale: Locale;
  changeLanguage: (newLocale: Locale) => void;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const DEFAULT_LOCALE: Locale = 'de';

// Get stored locale from localStorage (with SSR check)
const getStoredLocale = (): Locale => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  
  const storedLocale = localStorage.getItem('locale') as Locale;
  return storedLocale === 'de' ? 'de' : DEFAULT_LOCALE;
};

// Function to load translations
const loadTranslations = async (locale: Locale): Promise<TranslationData> => {
  try {
    // Fix the path to match the original structure
    const response = await fetch(`/locales/${locale}/common.json`);
    
    if (!response.ok) {
      console.error(`Failed to load translations for ${locale}: ${response.status}`);
      return {};
    }
    
    const data = await response.json();
    console.log(`Successfully loaded translations for ${locale}: ${Object.keys(data).length} keys`);
    return data;
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    return {};
  }
};

// Helper function to get nested translations
const getNestedTranslation = (obj: TranslationData, path: string[]): string => {
  let result: any = obj;

  for (const key of path) {
    if (typeof result !== 'object' || result === null) {
      return path.join('.');
    }
    
    result = result[key];
    
    if (result === undefined) {
      return path.join('.');
    }
  }

  return typeof result === 'string' ? result : path.join('.');
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<TranslationData>({});
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and load translations
  useEffect(() => {
    const initialLocale = getStoredLocale();
    setLocale(initialLocale);
    
    const fetchTranslations = async () => {
      setIsLoading(true);
      const data = await loadTranslations(initialLocale);
      setTranslations(data);
      setIsLoading(false);
    };
    
    fetchTranslations();
  }, []);

  // Translation function
  const t = (key: string, params?: Record<string, string>): string => {
    if (!key) return '';
    
    const path = key.split('.');
    
    // Debug output 
    if (process.env.NODE_ENV !== 'production') {
      if (Object.keys(translations).length === 0) {
        console.warn(`No translations loaded for locale: ${locale}`);
      }
    }
    
    let translatedText = getNestedTranslation(translations, path);
    
    // Debug output for missing translations
    if (translatedText === key && process.env.NODE_ENV !== 'production') {
      console.warn(`Missing translation for key: "${key}" in locale: "${locale}"`);
    }
    
    // Replace params if provided
    if (params && typeof translatedText === 'string') {
      Object.keys(params).forEach(param => {
        translatedText = translatedText.replace(`{{${param}}}`, params[param]);
      });
    }
    
    return translatedText;
  };

  // Change language function
  const changeLanguage = async (newLocale: Locale) => {
    if (locale === newLocale) return;
    
    setIsLoading(true);
    
    // Save to localStorage
    localStorage.setItem('locale', newLocale);
    
    // Load new translations
    const newTranslations = await loadTranslations(newLocale);
    
    // Update state
    setTranslations(newTranslations);
    setLocale(newLocale);
    setIsLoading(false);
  };

  const contextValue: I18nContextType = {
    t,
    locale,
    changeLanguage,
    isLoading
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use translations
export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  
  return context;
}; 