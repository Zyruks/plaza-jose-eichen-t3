import {
  ASSETS_PATH,
  CLERK_VERIFY_EMAIL_REDIRECT_PATH,
  CLERK_VERIFY_EMAIL_REDIRECT_PATH_TEST_MODE,
  FACEBOOK_PATH,
  IMAGES_PATH,
  INSTAGRAM_PATH,
  Size,
  Theme,
  TWITTER_PATH,
} from '~/common';

describe('general.ts', () => {
  it('should have correct values in the Size enum', () => {
    expect(Size.xs).toBe('xs');
    expect(Size.sm).toBe('sm');
    expect(Size.base).toBe('base');
    expect(Size.lg).toBe('lg');
    expect(Size.xl).toBe('xl');
    expect(Size['2xl']).toBe('2xl');
  });

  it('should have correct values in the Theme enum', () => {
    expect(Theme.dark).toBe('dark');
    expect(Theme.light).toBe('light');
    expect(Theme.system).toBe('system');
  });

  it('should have correct values in the ASSETS_PATH', () => {
    expect(ASSETS_PATH).toBe('/assets');
  });

  it('should have correct values in the IMAGES_PATH', () => {
    expect(IMAGES_PATH).toBe('/assets/images/');
  });

  it('should have correct values in the social paths', () => {
    expect(TWITTER_PATH).toBe('');
    expect(INSTAGRAM_PATH).toBe('');
    expect(FACEBOOK_PATH).toBe('');
  });

  it('should have correct values in the CLERK paths', () => {
    expect(CLERK_VERIFY_EMAIL_REDIRECT_PATH_TEST_MODE).toBe('http://localhost:3000/components');
    expect(CLERK_VERIFY_EMAIL_REDIRECT_PATH).toBe('https://ui-guideline-v2.vercel.app/components');
  });
});
