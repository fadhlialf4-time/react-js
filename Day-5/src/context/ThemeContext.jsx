// File: ThemeContext.jsx - Tambahkan mapping
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  // Mapping tema ke class CSS
  const themeClass = state.theme === 'gelap' ? 'dark' : 'light';

  const value = useMemo(() => ({
    theme: state.theme,
    themeClass,  // Tambahkan ini
    toggleTheme,
    setTheme
  }), [state.theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};