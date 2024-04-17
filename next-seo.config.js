const canonicalUrl = 'https://goktugceyhan.dev';
const metaImage =
  'https://rffureejqjzrbqzrcyxv.supabase.co/storage/v1/object/public/images/goktugcy.jpeg';
const metaDescription =
  'Seasoned Software Engineer especially in Backend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Göktuğ Ceyhan - Backend Developer',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Göktuğ Ceyhan - Backend Developer',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'goktugceyhan.dev og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'goktugceyhan.dev og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'goktugceyhan.dev og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'goktugceyhan.dev',
  },
  twitter: {
    handle: '@handle',
    site: '@goktug_cy',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
