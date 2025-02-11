import React, { createContext, useState } from 'react';
import { ColladaLoader } from 'three/examples/jsm/Addons.js';

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    Fabricindex: 0,
    CollarStyle: [true,false,false,false,false],
    CollarFabricIndex : 0,
    CollarContrastFlag:[false],
    ChestStyle:[true,false,false],
    NeckFabricIndex:0,
    NeckContrastFlag:[false],
    ButtonFlag:[true,false],
    CuffFabricIndex:0,
    CuffContrastFlag:[false],
    StyleOption : 'Changeable',
    // Add more variables as needed
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
