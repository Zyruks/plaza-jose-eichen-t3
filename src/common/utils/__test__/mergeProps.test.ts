import { mergeReactProps } from '~/common';

describe('mergeReactProps function', () => {
  it('should merge parent and child props', () => {
    const parentProps = {
      onClick: () => console.log('Parent clicked'),
      style: { color: 'red' },
      className: 'parent-class',
    };

    const childProps = {
      onClick: () => console.log('Child clicked'),
      style: { fontSize: '16px' },
      className: 'child-class',
    };

    const mergedProps = mergeReactProps(parentProps, childProps);

    expect(mergedProps.onClick).toBeDefined();
    expect(mergedProps.style).toBeDefined();
    expect(mergedProps.className).toBeDefined();

    const mockConsoleLog = jest.spyOn(console, 'log');
    mergedProps.onClick();
    expect(mockConsoleLog).toHaveBeenCalledTimes(2);

    expect(mergedProps.style).toEqual({ color: 'red', fontSize: '16px' });

    expect(mergedProps.className).toBe('parent-class child-class');
  });

  it('should handle missing child props', () => {
    const parentProps = {
      onClick: () => console.log('Parent clicked'),
      style: { color: 'red' },
      className: 'parent-class',
    };

    const childProps = {};

    const mergedProps = mergeReactProps(parentProps, childProps);

    expect(mergedProps.onClick).toBeDefined();
    expect(mergedProps.style).toBeDefined();
    expect(mergedProps.className).toBeDefined();

    const mockConsoleLog = jest.spyOn(console, 'log');
    mergedProps.onClick();
    expect(mockConsoleLog).toHaveBeenCalledTimes(1);

    expect(mergedProps.style).toEqual({ color: 'red' });
    expect(mergedProps.className).toBe('parent-class');
  });
});
