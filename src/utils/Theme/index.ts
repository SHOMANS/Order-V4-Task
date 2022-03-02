import { DefaultTheme } from 'styled-components';

const typography = {
  h1: '30px',
  h2: '19px',
  h3: '18px',
  h4: '16px',
  h5: '14px',
  h6: '12px',
  body: '14px',
  body2: '12px',
};

export const lightTheme: DefaultTheme = {
  type: 'light',
  colors: {
    primary: '#15BBF9',
    secondary: '#29E881',
    error: '#FA432A',
    success: '#05C167',
    warning: '#FFEED0',
    info: '#03a9f4',
  },
  textColors: {
    primary: '#000000',
    secondary: '#707070',
    disabled: '#9B9B9B',
    warning: '#806840',
  },
  background: {
    paper: '#ffffff',
    default: '#F7F7F7',
    button: '#E4E4E4',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  typography,
};

export const darkTheme: DefaultTheme = {
  type: 'dark',
  colors: {
    primary: '#42a5f5',
    secondary: '#ab47bc',
    error: '#d32f2f',
    success: '#1b5e20',
    warning: '#f57c00',
    info: '#0288d1',
  },
  textColors: {
    primary: '#e7ebf0',
    secondary: '#b2bac2',
    disabled: '#FFFFFF80',
    warning: '#806840',
  },
  background: {
    paper: '#0a1929',
    default: '#1e1e1e',
    button: '#494949',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  typography,
};
