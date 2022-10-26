import './App.css';
import React,{useEffect, useMemo} from "react";
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Second from './Components/Second/Second';
import Section from './Components/Section/Section';
import TechStack from './Components/TechStack/TechStack';
import { createTheme, ThemeProvider, useTheme, responsiveFontSizes} from '@mui/material/styles';
import Theme from "./Components/Theme/ColorPalette.jsx"
import AnimatedTransition from './Components/Animation/AnimatedTransition';
import { BrowserRouter as Router, Link as Routerlink, Routes , Route } from 'react-router-dom';
import {Data} from './Components/MenuItems/MenuItems'



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function App() {
  const colorMode = React.useContext(ColorModeContext);
  // console.log(colorMode);
  // const theme = React.useMemo(() =>createTheme(Theme(colorMode)));
  // const darkModeTheme = createTheme(Theme('dark'));
  // // Theme = responsiveFontSizes(Theme);
  // const preference =( (useMediaQuery('(prefers-color-scheme: dark)') === true ) ? 'dark' : 'light');
 
  
  
  
  const [mode, setMode] = React.useState('light');


  
     console.log("updated");

  const ColorMode = React.useMemo(
                    () => ({
                            toggleColorMode: () => {
                            setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
                            },
                           }),
                              [mode],
        );
        
        console.log(mode);
  
  
 
    const theme = React.useMemo(() =>createTheme(Theme(mode)    
    
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
                                          
                                          <div key={index} className={item.className} >        
                                          
                                            <div color='primary' > <Routerlink to={item.path} className='Links' >{item.title}</Routerlink></div>
                                          
                                          </div>

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
