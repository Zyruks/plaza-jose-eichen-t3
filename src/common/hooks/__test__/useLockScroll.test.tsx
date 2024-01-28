import { act, render } from '@testing-library/react';
import { useLockScroll } from '~/common';

const TestComponent = ({ lock }: { lock: boolean }) => {
  useLockScroll(lock);
  return <div />;
};

describe('useLockScroll', () => {
  it('locks body scroll when lock is true', () => {
    act(() => {
      render(<TestComponent lock={true} />);
    });
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores original overflow style after unmounting with lock true', () => {
    const originalOverflow = document.body.style.overflow;

    act(() => {
      const { unmount } = render(<TestComponent lock={true} />);
      unmount();
    });

    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it('restores original overflow style after unmounting', () => {
    const originalOverflow = document.body.style.overflow;

    act(() => {
      const { unmount } = render(<TestComponent lock={true} />);
      unmount();
    });

    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it('does not set overflow to hidden when lock is false', () => {
    act(() => {
      render(<TestComponent lock={false} />);
    });
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('restores original overflow style after unmounting with lock false', () => {
    const originalOverflow = document.body.style.overflow;

    act(() => {
      const { unmount } = render(<TestComponent lock={false} />);
      unmount();
    });

    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it('does not set overflow to hidden after unmounting with lock false', () => {
    act(() => {
      const { unmount } = render(<TestComponent lock={false} />);
      unmount();
    });

    expect(document.body.style.overflow).not.toBe('hidden');
  });
});
