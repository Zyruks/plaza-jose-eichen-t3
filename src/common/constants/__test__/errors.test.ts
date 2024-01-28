import { AuthError } from '~/common';

describe('AuthError', () => {
  it('should return the correct error message for a known error', () => {
    expect(AuthError('Signin')).toBe('Try signing with a different account.');
    expect(AuthError('OAuthSignin')).toBe('Try signing with a different account.');
    expect(AuthError('OAuthCallback')).toBe('Try signing with a different account.');
    expect(AuthError('OAuthCreateAccount')).toBe('Try signing with a different account.');
    expect(AuthError('EmailCreateAccount')).toBe('Try signing with a different account.');
    expect(AuthError('Callback')).toBe('Try signing with a different account.');
    expect(AuthError('OAuthAccountNotLinked')).toBe(
      'To confirm your identity, sign in with the same account you used originally.',
    );
    expect(AuthError('EmailSignin')).toBe('Check your email address.');
    expect(AuthError('CredentialsSignin')).toBe('Sign in failed. Check the details you provided are correct.');
    expect(AuthError('UserNotFound')).toBe('User not found.');
  });

  it('should return a default error message for an unknown error', () => {
    expect(AuthError('UnknownError')).toBe('Unable to sign in.');
    expect(AuthError('UserNotFound')).toBe('User not found.');
  });

  it('should return a default error message for an unknown error', () => {
    expect(AuthError('UnknownError')).toBe('Unable to sign in.');
  });
});
