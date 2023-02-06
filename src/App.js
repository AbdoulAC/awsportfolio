import './App.css';
import React,{useEffect, useMemo, useState, useContext} from "react";

import Section from './Components/Section/Section';

import { createTheme, ThemeProvider, useTheme, responsiveFontSizes} from '@mui/material/styles';
import Theme from "./Components/Theme/ColorPalette.jsx"
import AnimatedTransition from './Components/Animation/AnimatedTransition';
import { BrowserRouter as Router, Link as Routerlink, Routes , Route } from 'react-router-dom';
import {Data} from './Components/MenuItems/MenuItems'
import useMediaQuery from '@mui/material/useMediaQuery';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function App() {
  const colorMode = useContext(ColorModeContext);
 
 
  
  
  
  const [mode, setMode] = useState((useMediaQuery('(prefers-color-scheme: dark)') === true ) ? 'dark' : 'light');


  
  const ColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
        console.log("Color mode updated :)");
                            },
                           }),
                              [mode],
        );
        
        console.log(mode);
  
  
 
    const theme = useMemo(() =>createTheme(Theme(mode)    
    
    ));
  return (
          <ColorModeContext.Provider value={colorMode} >
                <ThemeProvider theme={theme}> 
                <div className="App" id={theme.palette.mode}>
               
                  <Router>
                      <div>
                            
                            
                              
                            {Data.map((item, index) => {
                                return(
                                        
                                      <div className="NavButtons"  >
                                          <Routerlink to={item.path} className='Links' >
                                          <div key={index} className={item.className} >        
                                          
                                            <div color='primary' style={{fontWeight:'900'}}> {item.title}</div>
                                          
                                          </div>
                                          </Routerlink>
                                      </div>
                                )
                            })}
                    
                        </div> 
                        <Routes>
                        <Route path='/' element={<Section changeTheme={ColorMode.toggleColorMode} />} />     
                        </Routes> 
                    <AnimatedTransition  />
                  </Router>

                </div>
                </ThemeProvider>
           </ColorModeContext.Provider>
  );
}

export default App;
