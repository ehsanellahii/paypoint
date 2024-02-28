import React from 'react';
import Wrapper from '../shared/Wrapper';

const Heading: React.FC<{ text: string; style?: string }> = ({
  text,
  style = 'py-3',
}) => {
  return <h1 className={`text-2xl font-bold ${style}`}>{text}</h1>;
};

const Paragraph: React.FC<{
  content: { text: string; bold?: boolean; underline?: boolean }[];
}> = ({ content }) => {
  return (
    <p className='font-medium text-base leading-[1.625rem]'>
      {content.map((itm, idx) => (
        <span
          key={idx}
          className={`${itm.bold ? 'font-bold' : ''} ${itm.underline ? 'underline decoration-primary underline-offset-4 decoration-2' : ''} ${idx === 0 ? 'pr-1' : idx === content.length - 1 ? 'pl-1' : 'px-1'}`}>
          {itm.text}
        </span>
      ))}
    </p>
  );
};

const ProductDetails = () => {
  return (
    <Wrapper style='w-full h-full py-8 lg:p-[3rem] bg-white'>
      <h1 className='text-[2.5rem] font-bold md:max-w-[85%] lg:max-w-[55%]'>
        Dein POS Kassensystem mit der Schnittstelle zu zahlreichen Lieferportalen
      </h1>
      <div className='w-full grid md:grid-cols-2 gap-8 lg:gap-[7rem] mt-8'>
        <article className='w-full h-full flex flex-col items-start'>
          <Paragraph
            content={[
              {
                text: 'In den meisten Restaurants wird online Essen bestellt und geliefert. Dieser Service gehört mit zum Gastronomie-Angebot und bietet dir die Möglichkeit, die Anzahl der Bestellungen und damit deinen Umsatz zu steigern und neue Kundengruppen zu gewinnen',
              },
            ]}
          />
          <Paragraph
            content={[
              {
                text: 'Mit unserem',
              },
              {
                text: 'digitalen Kassensystem Gastronomie',
                bold: true,
                underline: true,
              },
              {
                text: 'bist du ideal für einen Lieferdienst ausgestattet und kannst',
              },
              {
                text: 'Bestellungen von allen wichtigen Anbietern',
                bold: true,
              },
              {
                text: 'direkt in der Kasse empfangen',
              },
            ]}
          />
          <Heading text='Wie funktioniert der  Gastronomie QR Code?' />
          <Paragraph
            content={[
              {
                text: 'Einen Lieferservice kannst du natürlich nicht nur über',
              },
              { text: 'externe Lieferportale', bold: true },
              { text: 'anbieten, sondern auch über den eigenen Lieferdienst' },
            ]}
          />
          <Heading text='Automatische Übertragung der Bestellung an die Restaurant Kasse' />
          <Paragraph
            content={[
              {
                text: 'Die automatische Übertragung von Bestellungen in das eigene Kassensystem funktioniert dabei über eine',
              },
              { text: 'API Schnittstelle', bold: true },
              {
                text: 'die eine Verbindung zwischen dem Lieferportal und dem eigenen Shop- oder Kassensystem herstellt, und so die Bestellungen in das eigene System überträgt.',
              },
            ]}
          />
          <Paragraph
            content={[
              {
                text: 'Damit können Bestellannahmen aus unterschiedlichen Lieferportalen in nur ein einziges System laufen. Diese können automatisch empfangen, angenommen und gedruckt werden. Das bedeutet, dass eingehende Bestellungen nicht mehr manuell in die Kasse abgetippt werden müssen, sondern automatisch übertragen werden',
              },
            ]}
          />
          <Paragraph
            content={[
              {
                text: 'Außerdem muss dein Restaurant dadurch nicht mehr mit einzelnen Tablets pro Lieferportal arbeiten, sondern wird nur noch über ein einziges Gerät bedient. Du entscheidest selbst, welche',
              },
              { text: 'Lieferportalanbindungen', bold: true, underline: true },
              {
                text: 'dunutzen möchtest.',
              },
            ]}
          />
          <Paragraph
            content={[
              {
                text: 'Das Kassensystem von SIDES ist schnell und einfach zu bedienen und bietet dir zugleich die Möglichkeit, über die Lieferportalanbindung an zahlreiche Lieferportale angeschlossen zu sein. Aber du bist damit auch für deinen eigenen Lieferdienst mit unserer',
              },
              { text: 'Lieferservice Software', bold: true, underline: true },
              {
                text: 'perfekt ausgestattet.',
              },
            ]}
          />
        </article>
        <article>
          <Heading
            style='pb-3'
            text='SIDES Kassensystem mit Lieferportalanbindung zu allen Anbietern'
          />
          <Paragraph
            content={[
              { text: 'Unsere' },
              {
                text: 'Kassensoftware ist mit einer technischen Sicherheitseinrichtung (TSE)',
                bold: true,
              },
              {
                text: 'ausgestattet und auf alle Anforderungen, denen sich Restaurants und Lieferdienste stellen, unmittelbar zugeschnitten. Die Kasse wurde für eine schnelle Bestellaufnahme optimiert. Es sind alle wichtigen',
              },
              {
                text: 'LieferportalAnbieter, wie Lieferando, DiscoEat, Wolt, Uber Eats oder Google Food Ordering',
                bold: true,
              },
              {
                text: ', direkt eingebunden.',
              },
            ]}
          />
          <Heading text='Restaurants mit Lieferdienst können effizienter ausliefern' />
          <Paragraph
            content={[
              {
                text: 'Auch Touren werden durch das',
              },
              {
                text: 'TSE-Kassensystem',
                bold: true,
                underline: true,
              },
              {
                text: 'automatisch zusammengefasst und angezeigt. Lieferzeiten werden getrackt und ausgewertet und eine Erinnerung für Fahrer:innen sorgt dafür, dass sie nichts vergessen. Dadurch werden Fehler vermieden.',
              },
            ]}
          />
          <Paragraph
            content={[
              {
                text: 'Alle Vorteile im Überblick',
                bold: true,
              },
            ]}
          />
          <ul className='pl-4'>
            <li className='font-bold list-disc'>
              Alle Bestellungen von Lieferportalen direkt im System durch die POS
              Integration
            </li>
            <li className='font-bold list-disc'>
              Bon wird direkt ausgedruckt – kein Abtippen von Bons in die Kasse
            </li>
            <li className='font-bold list-disc'>Automatisierung von Bestelleingängen</li>
            <li className='font-bold list-disc'>
              Fehlerwahrscheinlichkeit wird durch automatische Übertragung reduziert
            </li>
          </ul>{' '}
          <Heading text='Alle Schnittstellen zu Zahlungsanbietern, Datenaustausch, Buchhaltung & Lieferanten in einem Paket' />
          <Paragraph
            content={[
              {
                text: 'Neben den gängigen Lieferportalen hast du Zugriff auf eine große Auswahl an',
              },
              {
                text: 'Zahlungsanbietern, wie beispielsweise Adyen, Mollie oder PayPlaza.',
                bold: true,
              },
            ]}
          />
        </article>
      </div>
    </Wrapper>
  );
};

export default ProductDetails;
