import React from 'react';
import { render, screen } from '@testing-library/react';
import { isSlottable, Slot, Slottable } from '~/components';

import '@testing-library/jest-dom';

describe('Slot', () => {
  it('renders its children', () => {
    render(
      <Slot>
        <div>Test Content</div>
      </Slot>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('merges additional props onto its child', () => {
    render(
      <Slot className="additional-class">
        <div>Test Content</div>
      </Slot>,
    );
    const childDiv = screen.getByText('Test Content');
    expect(childDiv).toHaveClass('additional-class');
  });

  it('merges additional className prop onto its child', () => {
    render(
      <Slot className="additional-class">
        <div className="existing-class">Test Content</div>
      </Slot>,
    );
    const childDiv = screen.getByText('Test Content');
    expect(childDiv).toHaveClass('existing-class');
    expect(childDiv).toHaveClass('additional-class');
  });

  it('renders content within Slottable', () => {
    render(
      <Slot>
        <Slottable>
          <div>Test Content</div>
        </Slottable>
      </Slot>,
    );
  });

  describe('isSlottable', () => {
    it('returns true for valid Slottable component', () => {
      const slottableElement = <Slottable>Test Content</Slottable>;
      expect(isSlottable(slottableElement)).toBe(true);
    });

    it('returns false for non-Slottable component', () => {
      const nonSlottableElement = <div>Test Content</div>;
      expect(isSlottable(nonSlottableElement)).toBe(false);
    });
  });

  it('checks if Slottable is slottable', () => {
    const slottableElement = (
      <Slottable>
        <div>Test Content</div>
      </Slottable>
    );
    const nonSlottableElement = <div>Test Content</div>;

    expect(isSlottable(slottableElement)).toBe(true);
    expect(isSlottable(nonSlottableElement)).toBe(false);
  });
});
