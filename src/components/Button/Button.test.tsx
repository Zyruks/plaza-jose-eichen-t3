import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonSize, ButtonVariant } from '~/components';

import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a button with default properties', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toMatchSnapshot();

    expect(button).toBeInTheDocument();

    expect(button).toHaveClass('text-sm font-semibold h-10');
    expect(button).toHaveClass('bg-primary-500');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders a disabled button', () => {
    render(<Button isDisabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });

    expect(button).toBeDisabled();
  });

  it('applies the correct class for a large button', () => {
    render(<Button size={ButtonSize.lg}>Large Button</Button>);
    const button = screen.getByRole('button', { name: /large button/i });

    expect(button).toHaveClass('py-3 px-5 text-base font-semibold h-12');
  });

  it('applies the correct class for a secondary variant', () => {
    render(<Button variant={ButtonVariant.secondary}>Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });

    expect(button).toHaveClass('bg-secondary-500');
  });

  it('triggers event on click', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const button = screen.getByRole('button', { name: /clickable/i });

    // Ensure the button is not disabled
    expect(button).not.toBeDisabled();

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders an inverted button', () => {
    render(<Button invert>Inverted Button</Button>);
    const button = screen.getByRole('button', { name: /inverted button/i });

    expect(button).toHaveClass('bg-primary-100/75 text-primary-600');
  });

  it('renders an active button', () => {
    render(<Button isActive>Active Button</Button>);
    const button = screen.getByRole('button', { name: /active button/i });

    expect(button).toHaveClass('dark:bg-primary-700 hover:dark:bg-primary-700');
  });

  it('renders a full-width button', () => {
    render(<Button isFullWidth>Full Width Button</Button>);
    const button = screen.getByRole('button', { name: /full width button/i });

    expect(button).toHaveClass('w-full');
  });

  it('renders a square button', () => {
    render(<Button isSquare>Square Button</Button>);
    const button = screen.getByRole('button', { name: /square button/i });

    expect(button).not.toHaveClass('rounded');
  });

  it('renders a button with only an icon', () => {
    render(<Button isOnlyIcon>Icon Button</Button>);
    const button = screen.getByRole('button', { name: /icon button/i });

    expect(button).toHaveClass('w-10 h-10');
  });

  it('renders a button with a custom class', () => {
    render(<Button className="custom-class">Custom Class Button</Button>);
    const button = screen.getByRole('button', { name: /custom class button/i });

    expect(button).toHaveClass('custom-class');
  });
});
