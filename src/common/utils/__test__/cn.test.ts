import { cn } from '~/common';

describe('cn function', () => {
  it('should combine and merge classes', () => {
    const result = cn('text-gray-500', 'bg-blue-500', 'hover:bg-red-500');
    expect(result).toBe('text-gray-500 bg-blue-500 hover:bg-red-500');
  });

  it('should handle duplicate classes', () => {
    const result = cn('text-gray-500', 'text-gray-500', 'bg-blue-500');
    expect(result).toBe('text-gray-500 bg-blue-500');
  });

  it('should handle undefined and null inputs', () => {
    const result1 = cn(undefined, 'bg-blue-500');
    const result2 = cn(null, 'bg-blue-500');
    expect(result1).toBe('bg-blue-500');
    expect(result2).toBe('bg-blue-500');
  });

  it('should handle empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
