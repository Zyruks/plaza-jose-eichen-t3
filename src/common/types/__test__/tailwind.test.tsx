import { FontWeight, TextSize } from '~/common';

describe('TextSize enum', () => {
  it('should have the expected values', () => {
    expect(TextSize.xs).toBe('xs');
    expect(TextSize.sm).toBe('sm');
    expect(TextSize.base).toBe('base');
  });
});

describe('FontWeight enum', () => {
  it('should have the expected values', () => {
    expect(FontWeight.thin).toBe('thin');
    expect(FontWeight.extralight).toBe('extralight');
    expect(FontWeight.light).toBe('light');
  });
});
