import React, { createContext, useState } from 'react';

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    Productype : 'Trousers',
    
  });


  const updateSharedState = (updates) => {
    setSharedState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  return (
    <StyleContext.Provider value={{ sharedState, setSharedState: updateSharedState }}>
      {children}
    </StyleContext.Provider>
  );
};

export { StyleContext, StyleProvider };
