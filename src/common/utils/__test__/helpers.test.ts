import { isNullOrUndefined } from '~/common';

describe('isNullOrUndefined function', () => {
  it('should return true for null input', () => {
    const result = isNullOrUndefined(null);
    expect(result).toBe(true);
  });

  it('should return true for undefined input', () => {
    const result = isNullOrUndefined(undefined);
    expect(result).toBe(true);
  });

  it('should return false for non-null and non-undefined input', () => {
    const result1 = isNullOrUndefined(0);
    const result2 = isNullOrUndefined('');
    const result3 = isNullOrUndefined(false);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });
});
