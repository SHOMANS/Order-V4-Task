import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    textColors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      disabled: string;
      warning: string;
    };
    background: {
      [key: string]: string;
      paper: string;
      default: string;
      button: string;
    };
    common: {
      [key: string]: string;
      black: string;
      white: string;
    };
    typography: {
      [key: string]: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      body2: string;
    };
  }
}
