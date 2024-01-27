import Head from 'next/head';

export interface UseMetaTagConfig {
  description?: string;
  image?: string;
  robots?: string;
  slug?: string;
  title?: string;
}

interface UseMetaTagResponse {
  metaTags: JSX.Element;
}

export const useMetaTag = (config: UseMetaTagConfig = {}): UseMetaTagResponse => {
  /* NOTE: If the spread operator finds an existing prop, it overwrites this. */
  const defaultConfig = {
    title: 'Plaza Jose Eichen',
    description: 'Best place to buy in Sosua Dominican Republic',
    image: '',
    robots: 'follow,index',
    slug: '',
    ...config,
  };

  const metaTags = (
    <Head>
      <title>{defaultConfig.title}</title>

      {/* Essential META Tags */}
      <meta name="description" content={defaultConfig.description} />
      <meta property="robots" content={defaultConfig.robots} />

      {/* Facebook META Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Plaza Jose Eichen" />
      <meta property="og:title" content={defaultConfig.title} />
      <meta property="og:description" content={defaultConfig.description} />
      <meta property="og:image" content={defaultConfig.image} />
      <meta property="og:url" content={`https://www.plaza-jose-eichen.com/${defaultConfig.slug}`} />
      <meta property="og:locale" content="es_la" />

      {/* Twitter META Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultConfig.title} />
      <meta name="twitter:description" content={defaultConfig.description} />
      <meta name="twitter:image" content={defaultConfig.image} />
      <meta name="twitter:image:src" content={defaultConfig.image} />
      <meta name="twitter:url" content={`https://www.plaza-jose-eichen.com/${defaultConfig.slug}`} />
      <meta name="twitter:widgets:csp" content="on" />
      <meta name="twitter:image:alt" content={defaultConfig.description} />
      <meta name="twitter:site" content="@plaza-jose-eichen" />
      <meta name="twitter:creator" content="@plaza-jose-eichen" />

      {/* Non-Essential, But Recommended */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Plaza Jose Eichen" />
      <meta name="apple-mobile-web-app-title" content="Plaza Jose Eichen" />
      <meta name="author" content="Plaza Jose Eichen" />
    </Head>
  );
  return {
    metaTags,
  };
};
