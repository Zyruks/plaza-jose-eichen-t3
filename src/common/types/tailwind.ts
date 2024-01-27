import type colors from 'tailwindcss/colors';
import type tailwindConfig from '../../../tailwind.config';

/**
 * Get the default and extended colors from the Tailwind config
 */

type defaultColors = keyof typeof colors;
type extendedColors = keyof typeof tailwindConfig.theme.extend.colors;
type AllColors = defaultColors | extendedColors;

/**
 * Exclude shades of certain colors
 */
type ExcludeShades<T extends string> = T extends 'black' | 'white' | 'current' | 'inherit' | 'transparent'
  ? T
  : `${T}-${TailwindColorShade}`;

/**
 * Define the available shades for a Tailwind color
 */
// TODO: Find a way to get the actual shade of every color
type TailwindColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

/**
 * Get the available Tailwind colors and
 * generate a string type for each color with the available shades
 */
type TailwindColor = Exclude<AllColors, 'theme' | 'presets' | 'content'>;
export type TailwindColorString = `${ExcludeShades<TailwindColor>}`;

export enum TextSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
  '5xl' = '5xl',
  '6xl' = '6xl',
  '7xl' = '7xl',
  '8xl' = '8xl',
  '9xl' = '9xl',
}

// TODO: Consider finding a better solution for the Percentages type as manually listing every percentage value is not ideal.
export type Percentages =
  | '0%'
  | '5%'
  | '10%'
  | '15%'
  | '20%'
  | '25%'
  | '30%'
  | '35%'
  | '40%'
  | '45%'
  | '50%'
  | '55%'
  | '60%'
  | '65%'
  | '70%'
  | '75%'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '100%';

export enum FontWeight {
  thin = 'thin',
  extralight = 'extralight',
  light = 'light',
  base = 'base',
  medium = 'medium',
  semibold = 'semibold',
  bold = 'bold',
  extrabold = 'extrabold',
  black = 'black',
}

export type Animations =
  | 'animate-fade'
  | 'animate-fade-up'
  | 'animate-fade-down'
  | 'animate-fade-left'
  | 'animate-fade-right'
  | 'animate-flip-up'
  | 'animate-flip-down'
  | 'animate-wiggle'
  | 'animate-wiggle-more'
  | 'animate-rotate-y'
  | 'animate-rotate-x'
  | 'animate-jump'
  | 'animate-jump-in'
  | 'animate-jump-down'
  | 'animate-spin'
  | 'animate-ping'
  | 'animate-pulse'
  | 'animate-bounce'
  | 'animate-shake';
