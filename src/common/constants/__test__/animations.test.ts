// animation.test.ts
import { Time } from '~/common';

describe('Time enum', () => {
  it('should have defined values', () => {
    expect(Time['400ms']).toBeDefined();
    expect(Time['600ms']).toBeDefined();
    expect(Time['800ms']).toBeDefined();
    expect(Time['1s']).toBeDefined();
    expect(Time['3s']).toBeDefined();
    expect(Time['5s']).toBeDefined();
    expect(Time['10s']).toBeDefined();
    expect(Time['15s']).toBeDefined();
    expect(Time['20s']).toBeDefined();
  });

  it('should have valid values', () => {
    const validValues = ['400ms', '600ms', '800ms', '1s', '3s', '5s', '10s', '15s', '20s'];

    for (const key in Time) {
      if (Object.prototype.hasOwnProperty.call(Time, key)) {
        const enumKey = key as keyof typeof Time;
        expect(validValues).toContain(Time[enumKey]);
      }
    }
  });
});
