const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div style={{ background: theme.background, color: theme.color, padding: '20px' }}>
        <h1>Themed Component</h1>
        <p>The current theme is {theme === lightTheme ? 'Light' : 'Dark'}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };
  