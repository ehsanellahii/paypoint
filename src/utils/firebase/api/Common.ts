import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const storeDataInCollection = async (collectionName: string, data: any) => {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef);
  await setDoc(docRef, data);
};

export const CommonApi = {
  storeDataInCollection,
};
