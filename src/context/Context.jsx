import React, { createContext, useState, useContext } from 'react';

// Create the Theme context
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    // Define the themes (you can add more)
    const lightTheme = {
      background: '#fff',
      color: '#000'
    };
  
    const darkTheme = {
      background: '#333',
      color: '#fff'
    };
  
    // State to track the current theme
    const [theme, setTheme] = useState(lightTheme);
  
    // Toggle between light and dark theme
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  