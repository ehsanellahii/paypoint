export const BusinessTypeStatic = {
  SuperMarket: {
    Hero: {
      header: 'Supermarkt Lieferdienst',
      titleOne: 'Optimiere deinen',
      titleTwo: 'Lebensmittel-',
      titleThree: 'Lieferservice',
      about:
        'Mit PayPoint können deine Kund:innen Lebensmittel einfach bestellen und du lieferst diese schneller aus',
      btnOneText: 'Jetzt Termin sichern',
      btnTwoText: 'Video abspielen',
      imageUrl: '/Assets/BusinessType/SuperMarket/hero.jpg',
    },
    AboutService: {
      headerTitle: 'Liefere wie am Schnürchen, statt am seidenen Faden',
      about: [
        {
          text: 'Die manuelle Verarbeitung und ineffiziente Auslieferung von Lebensmitteln hat ein Ende! Mit PayPoint werden Bestellungen über deinen',
        },
        {
          text: 'Restaurant WebShop',
          bold: true,
          underline: true,
          linkUrl: `/webshop-app`,
        },
        {
          text: 'oder Lieferportale automatisch in deiner Kasse synchronisiert Bereits in der Kommissionierung werden Bestellungen zu optimalen Routen zusammengefasst und anschließend an deine Fahrer:innen übermittelt Das führt zu kürzeren Lieferzeiten und glücklichen Kund:innen',
        },
      ],
    },
    WebShopAndApp: {
      header: 'Webshop, App und Portalanbindung',
      titleOne: 'Bestellungen',
      titleTwo: 'annehmen',
      Bullets: [
        '0% Provision bei Bestellungen über den eigenen Webshop & die App',
        'Kein manuelles Abtippen von Bestellungen dank Lieferportalanbindungen',
        'Lebensmittelbestellungen werden automatisch mit der Kasse synchronisiert',
      ],
      imageUrl: '/Assets/BusinessType/SuperMarket/WebShop.jpg',
    },
    PickAppAndDigitalService: {
      header: 'Pick-App und digitale Packliste',
      titleOne: 'Einfach',
      titleTwo: 'kommissionieren',
      Bullets: [
        'Automatische Zusammenstellung von Bestellungen in der Kommissionierung',
        'Waren werden anhand der Sortierung nach Warengruppen und Lagerorten schneller gefunden',
        'Direkte Übermittlung von verpackten Bestellungen an die Fahrer-App',
      ],
      imageUrl: '/Assets/BusinessType/SuperMarket/PickUpApp.jpg',
    },
    FleetManagement: {
      header: 'Flottenmanagement und Fahrer-Tracking',
      titleOne: 'Effizient',
      titleTwo: 'ausliefern',
      Bullets: [
        'Automatische Zusammenfassung von Touren für Fahrer:innen',
        'Verkürzte Lieferzeiten dank optimierter Tourenplanung',
        'Automatischer Anstoß von neuen Aufträgen, sobald Fahrer:innen in der Nähe sind',
      ],
      imageUrl: '/Assets/BusinessType/SuperMarket/FleetManagement.jpg',
    },
    MerchandiseManagement: {
      header: 'Warenwirtschaft & Personalmanagement',
      titleOne: 'Waren & Personal',
      titleTwo: 'managen',
      Bullets: [
        'Verkaufte Produkte werden automatisch vom Warenbestand abgezogen',
        'Bestelle Waren zentral bei deinen Lieferanten',
        'Effiziente Schichtplanung mit dem online Schichtplaner',
      ],
      imageUrl: '/Assets/BusinessType/SuperMarket/PersonalManagement.jpg',
    },
  },
};
