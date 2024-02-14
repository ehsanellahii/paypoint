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
      ],
    },
    {
      name: 'Preise',
      link: '/pricing',
    },
    {
      name: 'Über uns',
      link: '/aboutus',
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
        bgColor: 'bg-blue-light',
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
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-2.jpeg',
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-1.jpeg',
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-1.jpeg',
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-1.jpeg',
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
      },
      {
        image: '/Assets/AboutUs/TeamMembers/team-1.jpeg',
        name: 'Timur TÜREL',
        designation: 'Geschäftsführer',
        description:
          'Timur kreist als allwissender GastroSoftVisionär zwischen Entwicklerplatz, Kunden und Projektmanagement Manche sagen, er sieht Kundenwünsche, bevor sie entstehen',
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
};
