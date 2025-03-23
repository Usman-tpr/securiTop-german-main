import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from '@/utils/i18n';
import { siteConfig } from '@/config/siteConfig';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://securitop.de'),
  title: "SecuriTop - Leading Security Services in Germany",
  description: "SecuriTop offers comprehensive security solutions for businesses and individuals across Germany. Our services include physical security, cyber security, CCTV, and more.",
  keywords: "security, security services, physical security, cyber security, CCTV, Germany, alarm systems",
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: "SecuriTop - Leading Security Services in Germany",
    description: "Comprehensive security solutions for businesses and individuals across Germany",
    images: [siteConfig.company.logo],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SecuriTop - Leading Security Services in Germany",
    description: "Comprehensive security solutions for businesses and individuals across Germany",
    images: [siteConfig.company.logo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} font-body antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
