export const siteConfig = {
  colors: {
    primary: "#002366", // Navy Blue
    secondary: "#FFD700", // Gold
    accent: "#FF0000", // Red
    background: "#F5F5F5", // Light Gray
    text: "#333333", // Dark Gray
  },
  company: {
    name: "SecuriTop Sicherheits",
    legalName: "SecuriTop Sicherheitsdienst",
    slogan: "Your Security, Our Priority",
    description: "Leading security services provider in Germany, offering comprehensive solutions for businesses and individuals.",
    foundedYear: 2010,
    employees: "100+",
    clients: "1000+",
    countries: 3,
    logo: "/images/logo/logo-1.jpeg",
  },
  contact: {
    phone: "0703237550199",
    mobile: "017662070553",
    email: "info@securitop.de",
    address: {
      street: "Adlerstraße 7",
      city: "Herrenberg",
      postalCode: "71083",
      country: "Germany",
    },
  },
  socialMedia: {
    facebook: "https://facebook.com/securitop",
    linkedin: "https://linkedin.com/company/securitop",
    twitter: "https://twitter.com/securitop",
    instagram: "https://instagram.com/securitop",
  },
  navigation: {
    header: [
      { label: { en: "Home", de: "Startseite" }, path: "/" },
      { label: { en: "About Us", de: "Über Uns" }, path: "/about" },
      { label: { en: "Services", de: "Dienstleistungen" }, path: "/services" },
    //   { label: { en: "Blog", de: "Blog" }, path: "/blog" },
      { label: { en: "FAQ", de: "FAQ" }, path: "/faq" },
      { label: { en: "Contact", de: "Kontakt" }, path: "/contact" },
    ],
    footer: [
      {
        title: { en: "Company", de: "Unternehmen" },
        links: [
          { label: { en: "About Us", de: "Über Uns" }, path: "/about" },
          { label: { en: "Our Team", de: "Unser Team" }, path: "/about#team" },
          { label: { en: "Careers", de: "Karriere" }, path: "/careers" },
        ],
      },
      {
        title: { en: "Services", de: "Dienstleistungen" },
        links: [
          { label: { en: "Property Protection", de: "Objektschutz" }, path: "/services#property" },
          { label: { en: "Personal Protection", de: "Personenschutz" }, path: "/services#personal" },
          { label: { en: "Fire Protection", de: "Brandschutz" }, path: "/services#fire" },
          { label: { en: "Night Watch Services", de: "Nachtwachdienste" }, path: "/services#nightwatch" },
        ],
      },
      {
        title: { en: "Support", de: "Support" },
        links: [
          { label: { en: "FAQ", de: "FAQ" }, path: "/faq" },
          { label: { en: "Contact", de: "Kontakt" }, path: "/contact" },
          { label: { en: "Privacy Policy", de: "Datenschutz" }, path: "/privacy" },
          { label: { en: "Terms of Service", de: "AGB" }, path: "/terms" },
        ],
      },
    ],
  },
  showcase: {
    title: { en: "Security Excellence in Action", de: "Sicherheit in Aktion" },
    subtitle: { en: "Experience our comprehensive security solutions protecting Germany's businesses and individuals", de: "Erleben Sie unsere umfassenden Sicherheitslösungen, die Unternehmen und Einzelpersonen in Deutschland schützen." },
  },
  services: [
    {
      id: "property",
      icon: "building",
      title: { en: "Property Protection", de: "Objektschutz" },
      description: { 
        en: "Comprehensive property protection services for businesses, residential buildings, and commercial properties.",
        de: "Umfassende Objektschutzdienstleistungen für Unternehmen, Wohngebäude und Gewerbeimmobilien."
      },
    },
    {
      id: "personal",
      icon: "shield",
      title: { en: "Personal Protection", de: "Personenschutz" },
      description: { 
        en: "Professional personal protection services for individuals requiring heightened security measures.",
        de: "Professionelle Personenschutzdienste für Personen, die erhöhte Sicherheitsmaßnahmen benötigen."
      },
    },
    {
      id: "fire",
      icon: "flame",
      title: { en: "Fire Protection", de: "Brandschutz" },
      description: { 
        en: "Comprehensive fire protection services to ensure the safety of your property and personnel.",
        de: "Umfassende Brandschutzdienstleistungen zur Gewährleistung der Sicherheit Ihres Eigentums und Personals."
      },
    },
    {
      id: "nightwatch",
      icon: "moon",
      title: { en: "Night Watch Services", de: "Nachtwachdienste" },
      description: { 
        en: "Professional night watch services to ensure your property remains secure after hours.",
        de: "Professionelle Nachtwachdienste, um sicherzustellen, dass Ihr Eigentum auch nach Geschäftsschluss sicher bleibt."
      },
    },
    {
      id: "events",
      icon: "users",
      title: { en: "Event Security", de: "Veranstaltungssicherheit" },
      description: { 
        en: "Security services for events, trade fairs, discotheques, etc. including professional doorman services.",
        de: "Sicherheitsdienste für Veranstaltungen, Messen, Diskotheken usw. einschließlich professioneller Türsteher-Dienste."
      },
    },
    {
      id: "retail",
      icon: "store",
      title: { en: "Retail Investigations", de: "Einzelhandelsermittlungen" },
      description: { 
        en: "Specialized retail investigation services to prevent theft and ensure store security.",
        de: "Spezialisierte Ermittlungsdienste im Einzelhandel zur Verhinderung von Diebstahl und zur Gewährleistung der Ladensicherheit."
      },
    },
    {
      id: "transport",
      icon: "truck",
      title: { en: "Transport Services", de: "Transportdienste" },
      description: { 
        en: "Secure transport services for valuable goods, documents, and assets.",
        de: "Sichere Transportdienste für wertvolle Waren, Dokumente und Vermögenswerte."
      },
    },
    {
      id: "detective",
      icon: "search",
      title: { en: "Detective Agency Services", de: "Detekteidienste" },
      description: { 
        en: "Professional detective services for private and corporate investigations.",
        de: "Professionelle Detektivdienste für private und Unternehmensermittlungen."
      },
    },
 
    {
      id: "asylum",
      icon: "home",
      title: { en: "Asylum Accommodation Protection", de: "Schutz von Asylunterkünften" },
      description: { 
        en: "Specialized security services for the protection of asylum accommodations and facilities.",
        de: "Spezialisierte Sicherheitsdienste zum Schutz von Asylunterkünften und -einrichtungen."
      },
    }
  ],
  testimonials: [
    {
      name: "Markus Bauer",
      company: "Bauer Enterprises GmbH",
      image: "/images/home/testimonials/testimonial-1.jpg",
      text: {
        en: "SecuriTop's comprehensive property protection has completely transformed our corporate security. Their professional team implemented an integrated security system that has reduced incidents by 90%. Their 24/7 monitoring gives us complete peace of mind.",
        de: "Der umfassende Objektschutz von SecuriTop hat unsere Unternehmenssicherheit komplett verändert. Ihr professionelles Team hat ein integriertes Sicherheitssystem implementiert, das Vorfälle um 90% reduziert hat. Ihre 24/7-Überwachung gibt uns absolute Sicherheit."
      },
    },
    {
      name: "Sophia Krause",
      company: "Krause Financial AG",
      image: "/images/home/testimonials/testimonial-2.jpg",
      text: {
        en: "As a financial institution, security is our highest priority. SecuriTop provided us with an exceptional combination of physical security personnel and advanced technological solutions. Their team's expertise in threat assessment and prevention is unmatched in the industry.",
        de: "Als Finanzinstitut ist Sicherheit unsere höchste Priorität. SecuriTop hat uns eine außergewöhnliche Kombination aus physischem Sicherheitspersonal und fortschrittlichen technologischen Lösungen geboten. Die Expertise ihres Teams bei der Bedrohungsbewertung und -prävention ist in der Branche unübertroffen."
      },
    },
    {
      name: "Johannes Hoffmann",
      company: "Hoffmann Event Management",
      image: "/images/home/testimonials/testimonial-1.jpg",
      text: {
        en: "We've collaborated with SecuriTop for our high-profile events for over 5 years. Their event security services are exceptional - from crowd management to VIP protection. Their staff is always professional, discreet, and highly trained. They're an essential partner for our success.",
        de: "Wir arbeiten seit über 5 Jahren bei unseren hochkarätigen Veranstaltungen mit SecuriTop zusammen. Ihre Sicherheitsdienste für Veranstaltungen sind außergewöhnlich - vom Crowd-Management bis zum VIP-Schutz. Ihr Personal ist stets professionell, diskret und bestens geschult. Sie sind ein unverzichtbarer Partner für unseren Erfolg."
      },
    },
    {
      name: "Luisa Werner",
      company: "Werner Medical Center",
      image: "/images/home/testimonials/testimonial-2.jpg",
      text: {
        en: "Our medical facility required specialized security solutions that balance accessibility with strict protection protocols. SecuriTop designed a customized security plan that perfectly addresses our unique challenges. Their guards are exceptionally well-trained and understand the sensitive nature of healthcare environments.",
        de: "Unsere medizinische Einrichtung benötigte spezialisierte Sicherheitslösungen, die Zugänglichkeit mit strengen Schutzprotokollen in Einklang bringen. SecuriTop hat einen maßgeschneiderten Sicherheitsplan entwickelt, der unsere einzigartigen Herausforderungen perfekt adressiert. Ihre Wachleute sind außergewöhnlich gut ausgebildet und verstehen die sensible Natur von Gesundheitseinrichtungen."
      },
    },
    {
      name: "Thomas Fischer",
      company: "Fischer Tech Solutions",
      image: "/images/home/testimonials/testimonial-1.jpg",
      text: {
        en: "After experiencing a cyber security breach, we turned to SecuriTop for a complete security overhaul. They implemented an integrated approach combining physical access control with cutting-edge cybersecurity protocols. Their expertise in both domains has made our company significantly more secure on all fronts.",
        de: "Nach einer Cybersicherheitsverletzung haben wir uns an SecuriTop für eine komplette Sicherheitsüberholung gewandt. Sie haben einen integrierten Ansatz implementiert, der physische Zugangskontrolle mit hochmodernen Cybersicherheitsprotokollen kombiniert. Ihre Expertise in beiden Bereichen hat unser Unternehmen auf allen Ebenen deutlich sicherer gemacht."
      },
    },
  ],
  stats: [
    {
      value: "10+",
      label: { en: "Years of Experience", de: "Jahre Erfahrung" },
    },
    {
      value: "1000+",
      label: { en: "Satisfied Clients", de: "Zufriedene Kunden" },
    },
    {
      value: "100+",
      label: { en: "Security Experts", de: "Sicherheitsexperten" },
    },
    {
      value: "24/7",
      label: { en: "Support & Monitoring", de: "Support & Überwachung" },
    },
  ],
  team: [
    {
      name: "Klaus Becker",
      position: { en: "CEO & Founder", de: "CEO & Gründer" },
      image: "/images/about/team.avif",
      bio: {
        en: "Klaus founded SecuriTop in 2010 with over 20 years of experience in the security industry.",
        de: "Klaus gründete SecuriTop im Jahr 2010 mit über 20 Jahren Erfahrung in der Sicherheitsbranche."
      },
    },
    {
      name: "Sophia Schneider",
      position: { en: "Chief Security Officer", de: "Leiterin der Sicherheit" },
      image: "/images/about/team.avif",
      bio: {
        en: "Former police officer with expertise in physical security and risk assessment.",
        de: "Ehemalige Polizeibeamtin mit Fachwissen in Objektschutz und Risikobewertung."
      },
    },
    {
      name: "Felix Wagner",
      position: { en: "Head of Cyber Security", de: "Leiter der Cybersicherheit" },
      image: "/images/about/team.avif",
      bio: {
        en: "Certified ethical hacker with a background in computer science and network security.",
        de: "Zertifizierter ethischer Hacker mit Hintergrund in Informatik und Netzwerksicherheit."
      },
    },
    {
      name: "Laura Hoffmann",
      position: { en: "Client Relations Manager", de: "Leiterin der Kundenbeziehungen" },
      image: "/images/about/team.avif",
      bio: {
        en: "Ensuring our clients receive the highest level of service and support.",
        de: "Stellt sicher, dass unsere Kunden das höchste Maß an Service und Unterstützung erhalten."
      },
    },
  ],
  faq: [
    {
      question: {
        en: "What security services do you offer?",
        de: "Welche Sicherheitsdienstleistungen bieten Sie an?"
      },
      answer: {
        en: "We offer a comprehensive range of security services including physical security, cyber security, CCTV installation and monitoring, alarm systems, security consulting, and security training.",
        de: "Wir bieten ein umfassendes Spektrum an Sicherheitsdienstleistungen, darunter Objektschutz, Cybersicherheit, Installation und Überwachung von Videoüberwachungssystemen, Alarmanlagen, Sicherheitsberatung und Sicherheitsschulungen."
      },
    },
    {
      question: {
        en: "Do you offer 24/7 security services?",
        de: "Bieten Sie rund um die Uhr Sicherheitsdienstleistungen an?"
      },
      answer: {
        en: "Yes, we provide 24/7 security services for all our clients. Our monitoring center is staffed around the clock, and we can dispatch security personnel at any time.",
        de: "Ja, wir bieten rund um die Uhr Sicherheitsdienstleistungen für alle unsere Kunden an. Unser Überwachungszentrum ist rund um die Uhr besetzt, und wir können jederzeit Sicherheitspersonal entsenden."
      },
    },
    {
      question: {
        en: "How quickly can you respond to a security breach?",
        de: "Wie schnell können Sie auf einen Sicherheitsverstoß reagieren?"
      },
      answer: {
        en: "Our average response time is under 10 minutes for physical security breaches. For cyber security incidents, we have automated systems that respond instantly, with human experts reviewing within 15 minutes.",
        de: "Unsere durchschnittliche Reaktionszeit bei physischen Sicherheitsverletzungen liegt unter 10 Minuten. Bei Cybersicherheitsvorfällen verfügen wir über automatisierte Systeme, die sofort reagieren, wobei menschliche Experten diese innerhalb von 15 Minuten überprüfen."
      },
    },
    {
      question: {
        en: "Are your security guards certified and trained?",
        de: "Sind Ihre Sicherheitskräfte zertifiziert und ausgebildet?"
      },
      answer: {
        en: "Yes, all our security personnel are fully certified and undergo rigorous training. Many have backgrounds in law enforcement or military service, and all receive ongoing professional development.",
        de: "Ja, alle unsere Sicherheitsmitarbeiter sind vollständig zertifiziert und durchlaufen eine rigorose Ausbildung. Viele haben einen Hintergrund bei der Polizei oder beim Militär, und alle erhalten eine kontinuierliche berufliche Weiterbildung."
      },
    },
    {
      question: {
        en: "Can you customize security solutions for my specific needs?",
        de: "Können Sie Sicherheitslösungen für meine spezifischen Bedürfnisse anpassen?"
      },
      answer: {
        en: "Absolutely! We understand that every client has unique security requirements. We begin with a thorough assessment of your needs and develop a tailored security plan that addresses your specific concerns and budget.",
        de: "Absolut! Wir verstehen, dass jeder Kunde einzigartige Sicherheitsanforderungen hat. Wir beginnen mit einer gründlichen Bewertung Ihrer Bedürfnisse und entwickeln einen maßgeschneiderten Sicherheitsplan, der Ihre spezifischen Anliegen und Ihr Budget berücksichtigt."
      },
    },
  ],
}; 