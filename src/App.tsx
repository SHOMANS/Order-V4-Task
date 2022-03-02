import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Theme';
import { GlobalStyles } from './utils/globalStyle';
import { useCallback, useEffect, useState } from 'react';
import Orders from './pages/Orders';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem('theme');
    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles {...(theme === 'dark' ? darkTheme : lightTheme)} />

      <Header toggleTheme={toggleTheme} />
      <Orders />
    </ThemeProvider>
  );
}

export default App;
