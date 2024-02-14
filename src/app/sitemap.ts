import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://paypoint-new.vercel.app`;
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/aboutus`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/lifestyle`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/restaurant`, lastModified: new Date(), priority: 0.5 },
  ];
}
