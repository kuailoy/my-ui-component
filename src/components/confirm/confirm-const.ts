import type { QuickButton } from './confirm-amount';

export type Theme = {
  text: string;
  block: string;
  background: string;
  border: string;
  buttonPrimary: {
    bg: string;
    fg: string;
  };
  button: {
    bg: string;
    fg: string;
  };
};

export type ThemeConfig = {
  dark: Theme;
  light: Theme;
};

export const themeConfig: ThemeConfig = {
  dark: {
    text: '#eef2f8',
    block: '#151418',
    background: '#212428',
    border: '#39414b',
    buttonPrimary: {
      bg: '#eef3f8',
      fg: '#1d1f24',
    },
    button: {
      bg: '#212428',
      fg: '#697484',
    },
  },
  light: {
    text: '#2c3137',
    block: '#eef2f9',
    background: '#ffffff',
    border: '#dde1e6',
    buttonPrimary: {
      bg: '#2c3037',
      fg: '#ffffff',
    },
    button: {
      bg: '#ffffff',
      fg: '#697484',
    },
  },
};

export const DEFAULT_TITLE: string = 'Deposit ATOM';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DEFAULT_EVENT_HANDLER: <T>(...args: T[]) => void = (): void => {};

export const DEFAULT_QUICK_BUTTONS: QuickButton[] = [
  { id: 1, text: 'Max' },
  { id: 2, text: '1/2' },
  { id: 3, text: '1/3' },
];

export const DEFAULT_FROM_TITLE: string = 'From Cosmos Hub';
export const DEFAULT_TO_TITLE: string = 'To Osmosis';
