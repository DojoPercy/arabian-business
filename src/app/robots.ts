import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/_next/',
        '/my-account/',
        '/private/',
      ],
    },
    sitemap: 'https://www.arabiangovernance.com/sitemap.xml',
  }
}
