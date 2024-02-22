import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const storeDataInCollection = async (collectionName: string, data: any) => {
  const today = new Date();
  const dateString = today.toLocaleDateString('de-DE');
  const timeString = today.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const dateTimeString = `${dateString}, ${timeString}`;
  const ref = doc(db, collectionName, dateTimeString);
  await setDoc(ref, data, { merge: true });
};

export const CommonApi = {
  storeDataInCollection,
};
