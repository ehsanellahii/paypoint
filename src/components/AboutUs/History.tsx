import React from 'react';
import Wrapper from '../shared/Wrapper';
import { useTranslations } from 'next-intl';

const History = () => {
  const t = useTranslations('Aboutus');
  return (
    <Wrapper style='bg-white py-8 md:py-16'>
      {/* History */}
      <article className='w-full h-full flex flex-col justify-center items-center gap-3 px-4 py-8 md:py-12  '>
        <h1 className='text-center text-3xl font-black'>{t('Unsere Geschichte')}</h1>
        <p className='text-center text-base text-black-text mt-4'>
          {t(
            'Unser Kassensystem, PayPoint, ist eine umfassende Lösung für Ihr Unternehmen, die darauf abzielt, den Zahlungsprozess zu optimieren und die Geschäftseffizienz zu steigern Durch seine benutzerfreundliche Oberfläche ermöglicht es eine einfache Abwicklung von Transaktionen und bietet gleichzeitig leistungsstarke Funktionen für die Verfolgung von Verkäufen und die Verwaltung des Inventars'
          )}
        </p>
        <p className='text-center text-base text-black-text'>
          {t(
            'Diese Kombination aus Benutzerfreundlichkeit und Funktionalität macht PayPoint zu einem unverzichtbaren Werkzeug für Geschäftsleute, die ihre Abläufe verbessern möchten Mit PayPoint können Sie sich von komplizierten Kassenprozessen verabschieden und ein effizienteres, produktiveres Geschäftsumfeld schaffen'
          )}
        </p>
        <p className='text-center text-base text-black-text'>
          {t(
            'Entdecken Sie, wie PayPoint Ihr Unternehmen revolutionieren kann und Ihnen dabei hilft, Zeit zu sparen und Ressourcen effektiver einzusetzen Von kleinen Unternehmen bis hin zu großen Einzelhändlern bietet PayPoint eine maßgeschneiderte Lösung für Ihre spezifischen Bedürfnisse und trägt dazu bei, Ihren Geschäftserfolg zu maximieren'
          )}
        </p>
      </article>
    </Wrapper>
  );
};

export default History;
