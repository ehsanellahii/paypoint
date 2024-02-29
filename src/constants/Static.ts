import { IoBug, IoInformation } from 'react-icons/io5';
import { IoHandRightOutline } from 'react-icons/io5';
import { CiNoWaitingSign } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

export const StaticData = {
  Navigation: [
    {
      name: 'Business Typen',
      link: '',
      subLink: [
        { name: 'Restaurant', link: '/restaurant' },
        { name: 'Life Style', link: '/lifestyle' },
        { name: 'Supermarket', link: '/supermarket' },
      ],
    },
    {
      name: 'Produkte',
      Title: 'Produkte',
      link: '',
      Category1: {
        Title: 'Bestellungen effizient managen',
        Items: [
          {
            Name: 'Integartion von Lieferportalen',
            Route: '/integration-delivery-portal',
          },
          { Name: 'WebShop & App', Route: '/webshop-app' },
          { Name: 'QR-Code Bestellung', Route: '/qr-code-order' },
        ],
      },
    },
    {
      name: 'Preise',
      link: '/pricing',
    },
    {
      name: 'Über uns',
      link: '/aboutus',
    },
    {
      name: 'Kontakt',
      link: '/contactus',
    },
  ],
  Landing: {
    TrustGainedTeam: [
      { imageUrl: '/Assets/Home/UberEats.jpeg', alt: 'Uber Eats' },
      { imageUrl: '/Assets/Home/Wolt.jpeg', alt: 'Wolt' },
      { imageUrl: '/Assets/Home/Food.jpeg', alt: 'Food' },
    ],
    AboutFeatures: [
      {
        title: 'Keine Fehler',
        text: 'Ihre Anweisungen werden akkurat befolgt, was dazu führt, dass  menschliche Fehler vermieden werden',
        bgColor: 'bg-primary',
        icon: IoBug,
      },
      {
        title: 'Keine Manuelle Arbeit',
        text: 'Lassen Sie die Arbeit automatisch fürSie erledigen, einschließlich Menüaktualisierungen und Automatischer Auftragsstellung',
        bgColor: 'bg-yellow-schoolBus',
        icon: IoHandRightOutline,
      },
      {
        title: 'Keine Verzögerung',
        text: 'Vergessen Sie verspätete oder verpasste Bestellungen - sie werden automatisch in Ihrer POS erstellt',
        bgColor: 'bg-red-neon',
        icon: CiNoWaitingSign,
      },
    ],
    FeaturesWithOrder: [
      'Menüverwaltung',
      'Preisverwaltung',
      'Auftrags-Erstellung im Kassensystem',
      'Vollste Kontrolle von überall',
    ],
    Testimonials: [
      {
        image: '/Assets/Home/Reviews/Review-1.jpeg',
        name: 'Sebastian Belka',
        designation: 'Head of Logistics Platform, everstox',
        testimonial: 'TestimonialOne',
      },
      {
        image: '/Assets/Home/Reviews/Review-2.jpeg',
        name: 'Marvin Thiel',
        designation: 'CEO, Burgerbars GmbH',
        testimonial: 'TestimonialTwo',
      },
    ],
  },
  FooterLinks: {
    Products: [
      { name: 'Roadmap', link: '' },
      { name: 'Automations', link: '' },
      { name: 'Partner', link: '' },
      { name: 'Pricing', link: '' },
    ],
    Resources: [
      { name: 'Helpcenter', link: '' },
      { name: 'Developer & API', link: '' },
      { name: 'Community Forum', link: '' },
      { name: 'Compare with InfoLobby', link: '' },
      { name: 'Compare with others', link: '' },
    ],
    Company: [
      { name: 'About us', link: '' },
      { name: 'Imprint', link: '' },
      { name: 'Privacy Policy', link: '' },
      { name: 'Information Requirements', link: '' },
    ],
    PayoutSocialLinks: [
      { icon: FaTwitter, link: '' },
      { icon: FaLinkedin, link: '' },
      { icon: FaFacebookF, link: '' },
    ],
  },
  Pricing: {
    Services: [
      {
        title: 'Kassensystem POS',
        about: 'Web-Shop mit.de/.at Domain',
        image: '/Assets/Home/dashboard.png',
        bullets: [
          '1x Schnittstelle',
          '100% Finanzamtkonform',
          'Kostenloser 24/7 Support',
          'Vollständiges Kassensystem',
        ],
        price: 49,
      },
      {
        title: 'Webshop und App Shop',
        about: 'als Kombi Paket',
        image: '/Assets/Pricing/app.webp',
        bullets: [
          'Responsive Design',
          'HTTPS Verschlüsselung',
          'Modernes Design',
          '1x Schnittstelle',
          'Google optimiert',
        ],
        price: 169,
      },
      {
        title: 'Kassensystem, Web und AppShop',
        about: 'als Kombi Paket',
        image: '/Assets/Pricing/pos.webp',
        bullets: [
          'Responsive Design',
          '100% Finanzamtkonform',
          'HTTPS Verschlüsselung',
          'Modernes Design',
          'Google optimiert',
          'Vollständiges Kassensystem',
          'Einfache Buchhaltung',
          'Kostenloser 24/7 Support',
        ],
        price: 199,
      },
      {
        title: 'Paypoint',
        about: 'Alternative Bestellannahme-Möglichkeit',
        image: '/Assets/Restaurant/payments.png',
        bullets: [
          'Responsive Design',
          'HTTPS Verschlüsselung',
          'Modernes Design',
          'Google optimiert',
        ],
        price: 149,
      },
    ],
    WhyCustomerUseUs: [
      {
        value: '40%',
        info: 'mehr Umsatz',
      },
      {
        value: '50%',
        info: 'Geringere Fehlerquote',
      },
      {
        value: '3x',
        info: 'bessere Auslieferung',
      },
      {
        value: '20%',
        info: 'Kosteneinsparung',
      },
    ],
    FAQ: [
      {
        title: 'Kann ich Tape kostenlos nutzen?',
        content: '',
      },
      {
        title: 'Sind das alle Funktionen?',
        content:
          'Nein, das ist nur eine Übersicht. Du wirst selbst immer mehr Funktionen entdecken, wenn Du anfängst mit Tape zu arbeiten. Und wir stehen erst am Anfang. Wir arbeiten daran, eine Plattform aufzubauen, welche die Menschen wirklich lieben. Viele weitere Funktionen werden bald folgen.',
      },
      {
        title: 'Was zählt als Aktivität?',
        content: '',
      },
      {
        title:
          'Gibt es eine Grenze für die Anzahl der Gäste, die ich kostenlos einladen kann?',
        content: '',
      },
      {
        title: 'Gibt es bei Tape Rabatte?',
        content: '',
      },
    ],
    PaymentIconImages: [
      '/Assets/Pricing/ec.png',
      '/Assets/Pricing/mastercard.png',
      '/Assets/Pricing/visa.jpeg',
      '/Assets/Pricing/mastero.png',
      '/Assets/Pricing/vpay.png',
      '/Assets/Pricing/americanexpress.jpeg',
      '/Assets/Pricing/applepay.png',
      '/Assets/Pricing/gpay.png',
    ],
    PaymentMethod: [
      {
        methodName: 'Stripe',
        Name: 'Card Payment',
        ImageURL: '/Assets/Pricing/credit-card.png',
      },
      {
        methodName: 'Paypal',
        Name: 'Paypal',
        ImageURL: '/Assets/Pricing/paypal-icon.png',
      },
      {
        methodName: 'Pay Later',
        Name: 'Pay Later',
        ImageURL: '/Assets/Pricing/pay-later.png',
      },
    ],
    Bestellungen: [
      { label: '50 Bestellungen pro Monat', value: '50' },
      { label: '100 Bestellungen pro Monat', value: '100' },
      { label: '200 Bestellungen pro Monat', value: '200' },
      { label: '300 Bestellungen pro Monat', value: '300' },
      { label: '400 Bestellungen pro Monat', value: '400' },
      { label: '500 Bestellungen pro Monat', value: '500' },
      { label: '700 Bestellungen pro Monat', value: '700' },
      { label: '1000 Bestellungen pro Monat', value: '1000' },
      { label: '1500 Bestellungen pro Monat', value: '1500' },
    ],
    Bestellwert: [
      { label: 'Bestellwert 25€', value: '25' },
      { label: 'Bestellwert 30€', value: '30' },
      { label: 'Bestellwert 35€', value: '35' },
      { label: 'Bestellwert 40€', value: '40' },
      { label: 'Bestellwert 45€', value: '45' },
      { label: 'Bestellwert 50€', value: '50' },
      { label: 'Bestellwert 60€', value: '60' },
      { label: 'Bestellwert 70€', value: '70' },
      { label: 'Bestellwert 80€', value: '80' },
      { label: 'Bestellwert 90€', value: '90' },
      { label: 'Bestellwert 100€', value: '100' },
    ],
  },
  AboutUs: {
    TeamMembers: [
      {
        image: '/Assets/AboutUs/TeamMembers/team-1.jpeg',
        name: 'Jelena Fischer',
        designation: 'Geschäftsführer',
        description:
          'Jelena Fischer ist die visionäre Kopf des Unternehmens, die mit strategischem Geschick und einem Fokus auf Exzellenz den Erfolg vorantreibt Ihr Verständnis für den Markt und ihre Förderung einer innovativen Arbeitskultur sichern das Wachstum und die Prosperität des Unternehmens',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-2.jpeg',
        name: 'Abdullah Aslam',
        designation: 'Team Lead Produktmanagement',
        description:
          'Abdullah ist das kreative Genie im Team, das Jelenas Visionen in innovative Softwarelösungen verwandelt Seine Leidenschaft für Code und ständige Neugier treiben ihn an, kontinuierlich die Produkte von PayPoint zu verbessern und zu erweitern',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-3.jpeg',
        name: 'Isa Kocak',
        designation: 'leitender Vertriebsleiter',
        description:
          'Isa ist der dynamische Motor im Vertriebsteam von PayPoint Mit seinem unübertroffenen Verhandlungsgeschick und seiner Fähigkeit, starke Kundenbeziehungen aufzubauen, treibt er das Wachstum des Unternehmens voran',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-4.jpeg',
        name: 'Gian Djawa',
        designation: 'Vertriebsleitung',
        description:
          'Gian ist der inspirierende Leiter des Vertriebsteams bei PayPoint Mit seiner strategischen Herangehensweise und seinem Engagement für Kundenzufriedenheit ist er ein wesentlicher Treiber für den Erfolg im Vertriebsbereich',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-5.jpeg',
        name: 'Ricarda Lang',
        designation: 'Bürokommunikation',
        description:
          'Jelena ist das organisatorische Rückgrat des Unternehmens und sorgt für eine reibungslose Kommunikation und Abläufe im Büro Mit ihrer Effizienz, ihrem Organisationstalent und ihrer freundlichen Art unterstützt sie das Team und trägt dazu bei, dass alle Arbeitsabläufe reibungslos funktionieren',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-6.jpeg',
        name: 'Touseef Ahmed',
        designation: 'Softwareentwickler',
        description:
          'Toussef ist ein kreativer Softwareentwickler, der mit Leidenschaft und Fachkenntnissen an der Entwicklung innovativer Lösungen arbeitet Sein technisches Geschick und sein Engagement für Qualität machen ihn zu einem wertvollen Mitglied des Teams, das kontinuierlich daran arbeitet, die Produkte von PayPoint zu verbessern und zu optimieren',
      },
    ],
  },
  Resutaurant: {
    DeliveryAndPortal: {
      Header: 'Pick-Up Bestellungen & Lieferportalanbindung',
      TitleOne: 'Weniger Stress',
      TitleTwo: 'im in-House Betrieb',
      Bullets: [
        'Provisionsfreie online Bestellungen über den eigenen Webshop & die App',
        'Schnellere Verarbeitung von Webshop-Bestellungen zur Selbstabholung',
        'Automatische Synchronisierung von Lieferportalbestellungen mit der Kasse',
      ],
      Image: '/Assets/Restaurant/food.png',
      LearnMoreUrl: '#',
    },
    DigitalKitchen: {
      Header: 'Digitales Küchenmanagement',
      TitleOne: 'Höhere',
      TitleTwo: 'Kücheneffizienz',
      Bullets: [
        'Digitale Übertragung aller Bestellungen an die Küche',
        'Schnellere Verarbeitung von Speisen, Pick-Ups und Lieferungen',
        'Automatische Zusammenfassung von Lieferbestellungen zu optimalen Lieferrouten',
      ],
      Image: '/Assets/Home/your_orders.png',
      LearnMoreUrl: '#',
    },
    Payments: {
      Header: 'Sichere Online- und Kartenzahlung',
      TitleOne: 'Schnellere Abwicklung',
      TitleTwo: 'von Gästen',
      Bullets: [
        'Sichere, bargeldlose Zahlungen im Restaurant und online',
        'Automatische Übertragung von Rechnungsbeträgen an das Kartenlesegerät',
        'Höherer Umsatz durch Einbindung zahlreicher Anbieter',
      ],
      Image: '/Assets/Restaurant/payments.png',
      LearnMoreUrl: '#',
    },
    Resources: {
      Header: 'Personalverwaltung & Warenwirtschaftssystem',
      TitleOne: 'Betrieb zentral',
      TitleTwo: 'verwalten',
      Bullets: [
        'Einfache Personalplanung dank online Schichtplaner',
        'Automatische Aktualisierung des Warenbestands',
        'Vermeidung von Warenengpässen & vereinfachte Inventur',
      ],
      Image: '/Assets/Restaurant/operation.jpg',
      LearnMoreUrl: '#',
    },
    FAQ: [
      {
        title: 'Wie unterstützt dich unsere Restaurant Software?',
        contentParts: [
          {
            text: 'Unsere Module unterstützen dich in allen Bereichen deiner Gastronomie Dabei bildet das PayPoint',
          },
          { text: 'Gastro Kassensystem', bold: true },
          {
            text: 'mit Cloud-TSE das Herzstück der Software Weitere Software Module, wie beispielsweise das Warenwirtschaftssystem, die',
          },
          { text: 'Personalmanagement Software', bold: true },
          {
            text: 'und die Lieferdienst App können flexibel hinzu gebucht werden',
          },
        ],
      },
      {
        title: 'Worauf ist das Restaurant Kassensystem ausgerichtet?',
        contentParts: [
          {
            text: 'PayPoint digitalisiert und automatisiert alle betriebsrelevanten Prozesse, Daten werden analysiert und ausgewertet Unser',
          },
          { text: 'Kassensystem für die Gastronomie', bold: true },
          {
            text: 'wurde eigens für die Anforderungen von Gastronom:innen entwickelt und ist sowohl für große Franchiseketten als auch für kleine bis mittlere Restaurants geeignet Als Gastronom:in musst du an viele Dinge gleichzeitig denken und neben der Qualität im laufenden Geschäft auch alle Hintergrundprozesse im Griff haben PayPoint unterstützt dich dabei, damit die Abläufe in deinem Restaurant reibungslos funktionieren und du dich auf dein Tagesgeschäft konzentrieren kannst unter anderem mit',
          },
          { text: 'Integration der Lieferportale', bold: true },
        ],
      },
      {
        title: 'Welche Vorteile bieten dir die Module unserer Restaurant Software?',
        contentParts: [
          {
            text: 'Die Module der Restaurant Management Software digitalisieren und automatisieren alle Prozesse deiner Gastronomie, von der Bestellung bis zur Lieferung an deine Kunden Mithilfe unserer Software kannst du bis zu 200% mehr Umsatz generieren und deine Kosten um bis zu 40% senken Dein Lieferdienst ist dank',
          },
          {
            text: 'Restaurant Webshop',
            bold: true,
          },
          {
            text: 'und',
          },
          { text: 'Fahrermanagement', bold: true },
          {
            text: 'zuverlässig und koordiniert gemanagt Auch in der Küche ist Organisation das A & O Mach es deinen Mitarbeiter:innen so einfach wie möglich und führe sie mit unserer Hilfe durch eine erfolgreiche Schicht Unsere',
          },
          {
            text: 'Küchenmanagement Software',
            bold: true,
          },
          {
            text: 'strukturiert Vorgänge klar und analytisch, sodass deine Mitarbeitenden genau wissen, was zu tun ist Leerlauf und Prozessstau werden vermieden, Betriebskosten gesenkt, die Verwaltung von Personal und Ressourcen optimiert',
          },
        ],
      },
      {
        title: 'Wie funktioniert gutes Restaurant Marketing?',
        contentParts: [
          {
            text: `Gutes Restaurant Marketing heißt, verschiedene online und offline Marketing Aktivitäten richtig zu kombinieren, die dir als Gastronom:in helfen Markentreue aufzubauen, den Umsatz zu steigern und mehr Kund:innen zu erreichen Gerade der Einsatz von digitalen Marketing Maßnahmen ist heutzutage ein entscheidender Faktor, um dein Restaurant von anderen abzuheben In unserem kostenlosen eBook`,
          },
          { text: `Online-Marketing für die Gastronomie`, bold: true },
          { text: `findest du hilfreiche Tipps zur Vermarktung deines Betriebs` },
        ],
      },
    ],
  },
  LifeStyle: {
    WebShop: {
      Header: 'Webshop, App und Portalanbindung',
      TitleOne: 'Bestellungen stressfrei',
      TitleTwo: 'annehmen',
      Bullets: [
        'Bestellungen im eigenen Restaurant Webshop annehmen und hohe Kommissionen sparen',
        'Integrierte Schnittstelle auch für Lieferportal-Bestellungen',
        'Weniger Stress zu Stoßzeiten dank Auslagerung von Telefonbestellungen an Call-Center',
        'Bonussystem zur Kundenbindung mit Rabattcodes',
      ],
      Image: '/Assets/LifeStyle/webshop-app.png',
      LearnMoreUrl: '#',
    },
    ChannelManagement: {
      Header: 'Kanalverwaltung und Auswertung',
      TitleOne: 'Alle Order-Kanäle',
      TitleTwo: 'auf einen Blick',
      Bullets: [
        'Bündeln von Bestellungen diverser Kanäle im Kassensystem',
        'Kein manuelles Abtippen von Bestellungen',
        'Digitale Übertragung von Bestellungen an den Küchenmanager',
        'Geringere Fehlerquote dank Schritt-für-Schritt Anleitung am Monitor',
      ],
      Image: '/Assets/LifeStyle/kasse.jpeg',
      LearnMoreUrl: '#',
    },
    FleetManagement: {
      Header: 'Flottenmanagement und Fahrer-Tracking',
      TitleOne: 'Optimale',
      TitleTwo: 'Fahrer-Übersicht',
      Bullets: [
        'Zusammenfassung von ortsnahen Touren für Fahrer:innen',
        'Kürzere Lieferzeiten dank automatischer Tourenplanung',
        'Neue Auftragsvergabe sobald Fahrer:innen in der Nähe sind',
        'Einfaches Fahrer-Tracking und Auswertung der Effizienz',
      ],
      Image: '/Assets/LifeStyle/management.jpg',
      LearnMoreUrl: '#',
    },
    ProductManagement: {
      Header: 'Produkt- und Personalverwaltung',
      TitleOne: 'Effektives Waren- &',
      TitleTwo: 'Personalmanagement',
      Bullets: [
        'Fehlende Artikel werden automatisch im Warenbestand angezeigt',
        'Zentrale Bestellung aller Produkte bei bevorzugten Lieferanten',
        'Zeitersparnis durch einfache Online-Schichtplanung',
      ],
      Image: '/Assets/LifeStyle/dashboard.jpg',
      LearnMoreUrl: '#',
    },
    FAQ: [
      {
        title: 'Wie unterstützt dich unsere Restaurant Software?',
        contentParts: [
          {
            text: 'Unsere Module unterstützen dich in allen Bereichen deiner Gastronomie Dabei bildet das PayPoint',
          },
          { text: 'Gastro Kassensystem', bold: true },
          {
            text: 'mit Cloud-TSE das Herzstück der Software Weitere Software Module, wie beispielsweise das Warenwirtschaftssystem, die',
          },
          { text: 'Personalmanagement Software', bold: true },
          {
            text: 'und die Lieferdienst App können flexibel hinzu gebucht werden',
          },
        ],
      },
      {
        title: 'Worauf ist das Restaurant Kassensystem ausgerichtet?',
        contentParts: [
          {
            text: 'PayPoint digitalisiert und automatisiert alle betriebsrelevanten Prozesse, Daten werden analysiert und ausgewertet Unser',
          },
          { text: 'Kassensystem für die Gastronomie', bold: true },
          {
            text: 'wurde eigens für die Anforderungen von Gastronom:innen entwickelt und ist sowohl für große Franchiseketten als auch für kleine bis mittlere Restaurants geeignet Als Gastronom:in musst du an viele Dinge gleichzeitig denken und neben der Qualität im laufenden Geschäft auch alle Hintergrundprozesse im Griff haben PayPoint unterstützt dich dabei, damit die Abläufe in deinem Restaurant reibungslos funktionieren und du dich auf dein Tagesgeschäft konzentrieren kannst unter anderem mit',
          },
          { text: 'Integration der Lieferportale', bold: true },
        ],
      },
      {
        title: 'Welche Vorteile bieten dir die Module unserer Restaurant Software?',
        contentParts: [
          {
            text: 'Die Module der Restaurant Management Software digitalisieren und automatisieren alle Prozesse deiner Gastronomie, von der Bestellung bis zur Lieferung an deine Kunden Mithilfe unserer Software kannst du bis zu 200% mehr Umsatz generieren und deine Kosten um bis zu 40% senken Dein Lieferdienst ist dank ',
          },
          {
            text: 'Restaurant Webshop ',
            bold: true,
          },
          {
            text: 'und ',
          },
          { text: 'Fahrermanagement', bold: true },
          {
            text: 'zuverlässig und koordiniert gemanagt Auch in der Küche ist Organisation das A & O Mach es deinen Mitarbeiter:innen so einfach wie möglich und führe sie mit unserer Hilfe durch eine erfolgreiche Schicht Unsere',
          },
          {
            text: 'Küchenmanagement Software ',
            bold: true,
          },
          {
            text: 'strukturiert Vorgänge klar und analytisch, sodass deine Mitarbeitenden genau wissen, was zu tun ist Leerlauf und Prozessstau werden vermieden, Betriebskosten gesenkt, die Verwaltung von Personal und Ressourcen optimiert',
          },
        ],
      },
      {
        title: 'Wie funktioniert gutes Restaurant Marketing?',
        contentParts: [
          {
            text: `Gutes Restaurant Marketing heißt, verschiedene online und offline Marketing Aktivitäten richtig zu kombinieren, die dir als Gastronom:in helfen Markentreue aufzubauen, den Umsatz zu steigern und mehr Kund:innen zu erreichen Gerade der Einsatz von digitalen Marketing Maßnahmen ist heutzutage ein entscheidender Faktor, um dein Restaurant von anderen abzuheben In unserem kostenlosen eBook „`,
          },
          { text: `Online-Marketing für die Gastronomie`, bold: true },
          { text: `"findest du hilfreiche Tipps zur Vermarktung deines Betriebs` },
        ],
      },
    ],
  },
  Contact: {
    SocialMedia: [
      {
        title: 'Whatsapp',
        image: '/Assets/ContactUs/socials/whatsapp.png',
        link: '#',
        bgColor: '#25D366',
        btnText: 'Kontakt',
      },
      {
        title: 'Customer Support',
        image: '/Assets/ContactUs/socials/paypoint.png',
        link: '#',
        bgColor: '#f6f6f6',
        btnText: '030/45023722',
      },
      {
        title: 'E-mail Support',
        image: '/Assets/ContactUs/socials/mail.png',
        link: '#0071BB',
        btnText: 'info@get-paypoint.de',
      },
    ],
    BusinessOptions: [
      {
        image: '/Assets/Pricing/BusinessTypeOptions/gastronomy.jpg',
        title: 'Gastronomy',
      },
      { image: '/Assets/Pricing/BusinessTypeOptions/retail.jpg', title: 'Retail Trade' },
      { image: '/Assets/Pricing/BusinessTypeOptions/club.jpg', title: 'Club' },
      { image: '/Assets/Pricing/BusinessTypeOptions/foodtruck.jpg', title: 'Food Truck' },
      { image: '/Assets/Pricing/BusinessTypeOptions/optician.jpg', title: 'Optician' },
      {
        image: '/Assets/Pricing/BusinessTypeOptions/hairdresser.jpg',
        title: 'Hairdresser & Beauty',
      },
      { image: '/Assets/Pricing/BusinessTypeOptions/other.png', title: 'Other' },
    ],
    FAQ: [
      {
        title: 'Kann das System Rabatte oder Sonderangebote verwalten?',
        contentParts: [
          {
            text: 'Ja, das System bietet die Möglichkeit, Rabatte oder Sonderangebote zu verwalten Durch die Benutzeroberfläche der Kassensoftware können Sie verschiedene Arten von Rabatten einrichten, wie zum Beispiel prozentuale Rabatte, Mengenrabatte oder festgelegte Geldbeträge Diese Rabatte können dann während des Checkout-Prozesses angewendet werden, entweder automatisch oder manuell durch den Kassierer',
          },
        ],
      },
      {
        title: 'Wie kann ich technische Probleme mit der Software oder Hardware lösen?',
        contentParts: [
          {
            text: 'Wir bieten einen umfassenden Kundenservice, der es Ihnen ermöglicht, sich direkt mit unserem Support-Team zu verbinden Durch Tools wie TeamViewer können wir uns schnell und effizient mit Ihrem PC verbinden, um technische Probleme zu diagnostizieren und zu lösen Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung, um sicherzustellen, dass Sie jederzeit Unterstützung erhalten, falls Probleme auftreten sollten Sie können uns einfach kontaktieren, und wir werden uns bemühen, Ihre Anliegen so schnell wie möglich zu lösen, um Ausfallzeiten zu minimieren und den reibungslosen Betrieb Ihrer Kassensoftware sicherzustellen',
          },
        ],
      },
      {
        title:
          'Bietet das System Funktionen zur Verwaltung von Reservierungen für Tische oder Veranstaltungen?',
        contentParts: [
          {
            text: 'Das System bietet Funktionen zur Verwaltung von Reservierungen für Tische oder Veranstaltungen an Damit können Sie den Buchungsprozess effizient verwalten und den Gästen eine reibungslose Erfahrung bieten',
          },
        ],
      },
      {
        title:
          'Gibt es eine Möglichkeit, Sonderwünsche oder Anpassungen für Bestellungen zu berücksichtigen?',
        contentParts: [
          {
            text: 'Ja, das System bietet die Möglichkeit, Sonderwünsche oder Anpassungen für Bestellungen zu berücksichtigen Damit können Kunden ihre Bestellungen individuell anpassen und sicherstellen, dass ihre Bedürfnisse erfüllt werden',
          },
        ],
      },
    ],
  },
  QRCodeOrder: {
    SuccessStories: [
      {
        story:
          'Wir als Unternehmen sind sehr froh, SIDES als Kassensystem gefunden zu haben. Küchenmanagement, Webshop und vieles mehr gepaart mit spitzen Service in einer Anwendung!',
        name: 'Katja Wissel',
        designation: `managing director of Mario's ice cream and Pizza`,
        image: '/Assets/QRCodeOrder/Reviews/marios_logo.svg',
      },
      {
        story:
          'With the continuous innovation and quality of the software solution, we were able to concentrate completely on our growth and operational business.',
        name: `Manfred “Luigi” Lugmayr`,
        designation: `Head of Marketing at burgerme`,
        image: '/Assets/QRCodeOrder/Reviews/marios_logo.svg',
      },
    ],

    Advantages: [
      {
        image: '/Assets/QRCodeOrder/About/one.png',
        about:
          'Deine Gäste können über einen QR-Code selbst am Tisch bestellen, wodurch du den Service- Aufwand verringerst.',
        learnMoreUrl: '#',
        title: 'Einsparung von Personalkosten',
      },
      {
        image: '/Assets/QRCodeOrder/About/two.svg',
        about:
          'Mit der digitalen Speisekarte kannst du gegen einen Aufpreis Artikel automatisch vorschlagen, und den Ø Bon erhöhen.',
        learnMoreUrl: '#',
        title: 'Mehr Zusatzverkäufe',
      },
      {
        image: '/Assets/QRCodeOrder/About/three.png',
        about:
          'Durch Selbstbedienung müssen Gäste nicht erst auf Servicekräfte warten, wodurch du mehr Gäste abwickeln kannst.',
        learnMoreUrl: '#',
        title: 'Schnelle Abwicklung',
      },
    ],
    Features: [
      {
        image: '/Assets/QRCodeOrder/Features/qr.png',
        title: 'QR code table order',
        about:
          'You can offer the contactless table ordering system in your restaurant via an interface to the cash register system and web shop.',
      },
      {
        image: '/Assets/QRCodeOrder/Features/phone.png',
        title: 'Digital menu',
        about:
          'You can edit the online menu for contactless table ordering via the web shop, regardless of your delivery service offer.',
      },
      {
        image: '/Assets/QRCodeOrder/Features/live.png',
        title: 'Live order status',
        about:
          'Your guests can track the status of their order live on their smartphone and know exactly when the order is ready.',
      },
      {
        image: '/Assets/QRCodeOrder/Features/settings.png',
        title: 'Automatic transfer',
        about:
          'The order is automatically transferred to your cloud-based cash register system and can be further processed there.a',
      },
      {
        image: '/Assets/QRCodeOrder/Features/pizza.png',
        title: 'Article suggestions',
        about:
          'In the digital menu you can set up item suggestions that are automatically offered to your guests when they choose certain dishes.',
      },
      {
        image: '/Assets/QRCodeOrder/Features/settings.png',
        title: 'Cashless payment',
        about:
          'Thanks to integrated online payment methods such as PayPal, your guests can pay for their order digitally and leave tips.',
      },
    ],
    FeatureGridLayout: {
      title: 'Einfach bestellen',
      header: '',
      about: [
        {
          text: 'Steigere',
          bold: true,
        },
        {
          text: 'deinen durchschnittlichen',
        },
        {
          text: 'Umsatz pro Gast um 20%',
          bold: true,
        },
        {
          text: 'dank kontaktloser Tischbestellung mit QR-Code.',
        },
      ],
      image: '/Assets/QRCodeOrder/qrcode_hero.svg',
      learnMoreUrl: '#',
      features: [
        {
          image: '/Assets/QRCodeOrder/Features/qr.png',
          title: 'QR code table order',
          about:
            'You can offer the contactless table ordering system in your restaurant via an interface to the cash register system and web shop.',
        },
        {
          image: '/Assets/QRCodeOrder/Features/phone.png',
          title: 'Digital menu',
          about:
            'You can edit the online menu for contactless table ordering via the web shop, regardless of your delivery service offer.',
        },
        {
          image: '/Assets/QRCodeOrder/Features/live.png',
          title: 'Live order status',
          about:
            'Your guests can track the status of their order live on their smartphone and know exactly when the order is ready.',
        },
        {
          image: '/Assets/QRCodeOrder/Features/settings.png',
          title: 'Automatic transfer',
          about:
            'The order is automatically transferred to your cloud-based cash register system and can be further processed there.a',
        },
        {
          image: '/Assets/QRCodeOrder/Features/pizza.png',
          title: 'Article suggestions',
          about:
            'In the digital menu you can set up item suggestions that are automatically offered to your guests when they choose certain dishes.',
        },
        {
          image: '/Assets/QRCodeOrder/Features/settings.png',
          title: 'Cashless payment',
          about:
            'Thanks to integrated online payment methods such as PayPal, your guests can pay for their order digitally and leave tips.',
        },
      ],
    },
  },
};
