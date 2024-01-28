import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { useMultipleRefs } from '~/common';

describe('useMultipleRefs', () => {
  it('correctly sets multiple refs with the same DOM element', () => {
    let capturedRef1 = null;
    let capturedRef2 = null;

    const TestComponent = () => {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useRef<HTMLDivElement>(null);
      const combinedRefs = useMultipleRefs(ref1, ref2);

      useEffect(() => {
        capturedRef1 = ref1.current;
        capturedRef2 = ref2.current;
      });

      return <div ref={combinedRefs} />;
    };

    render(<TestComponent />);

    expect(capturedRef1).toBeInstanceOf(HTMLDivElement);
    expect(capturedRef2).toBeInstanceOf(HTMLDivElement);
    expect(capturedRef1).toBe(capturedRef2);
  });
});
