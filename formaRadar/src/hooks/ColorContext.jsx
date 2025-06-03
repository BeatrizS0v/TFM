import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [lightMode, setlightMode] = useState(false);

  const togglelightMode = () => {
    setlightMode(prev => !prev);
  };

  return (
      <ColorContext.Provider value={{ lightMode, togglelightMode }}>
        {children}
      </ColorContext.Provider>
  );
};