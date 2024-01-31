import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const encryptionKey = 'helloworld';

// Set a session cookie
const setSessionCookie = (itemName: string, value: any) => {
  let serializedData = JSON.stringify(value);
  // Encrypt the data
  const encryptedData = CryptoJS.AES.encrypt(serializedData, encryptionKey).toString();
  // Store the encrypted data in cookie
  Cookies.set(itemName, encryptedData);
};

// Set a cookie
const setCookie = (name: string, value: any, options: any) => {
  Cookies.set(name, value, options);
};

// Get a cookie
const getCookie = (name: string) => {
  const storedEncryptedData = Cookies.get(name);
  if (!storedEncryptedData) {
    console.log(`No data found for ${name}`);
    return null;
  }
  // Decrypt the data
  const bytes = CryptoJS.AES.decrypt(storedEncryptedData, encryptionKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  // Parse the decrypted JSON data
  return JSON.parse(decryptedData);
};

// Remove a cookie
const removeCookie = (name: string) => {
  Cookies.remove(name);
};

export { setCookie, getCookie, setSessionCookie, removeCookie };
