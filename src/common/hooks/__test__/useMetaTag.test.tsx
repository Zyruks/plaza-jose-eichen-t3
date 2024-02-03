import React from 'react';
import Head from 'next/head';
import { render } from '@testing-library/react';
import { useMetaTag, type UseMetaTagConfig } from '~/common';

interface TestComponentProps {
  config: UseMetaTagConfig;
}

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

const TestComponent = ({ config }: TestComponentProps) => {
  const { metaTags } = useMetaTag(config);

  return <Head>{metaTags}</Head>;
};

describe('useMetaTag', () => {
  it('renders correct meta tags based on config', async () => {
    const config = {
      title: 'Test Title',
      description: 'Test Description',
      image: 'test_image.jpg',
      robots: 'index,follow',
      slug: 'test-slug',
    };

    render(<TestComponent config={config} />);

    expect(document.title).toBe(config.title);

    render(<TestComponent config={config} />);

    expect(document.title).toBe(config.title);

    const getMetaTagContent = (name: string): string => {
      const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      return meta?.getAttribute('content') ?? '';
    };

    expect(getMetaTagContent('description')).toBe(config.description);

    expect(getMetaTagContent('robots')).toBe(config.robots);

    expect(getMetaTagContent('og:image')).toBe(config.image);
    expect(getMetaTagContent('twitter:image')).toBe(config.image);

    const expectedUrl = `https://www.plaza-jose-eichen.com/${config.slug}`;
    expect(getMetaTagContent('og:url')).toBe(expectedUrl);
    expect(getMetaTagContent('twitter:url')).toBe(expectedUrl);
  });
});
