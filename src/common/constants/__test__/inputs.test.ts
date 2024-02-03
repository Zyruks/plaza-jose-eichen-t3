import { FormFieldState } from '~/common';

describe('formFieldState.ts', () => {
  it('should have correct values in the FormFieldState enum', () => {
    expect(FormFieldState.default).toBe('default');
    expect(FormFieldState.success).toBe('success');
    expect(FormFieldState.error).toBe('error');
  });
});
