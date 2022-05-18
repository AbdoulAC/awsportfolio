import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects/Projects';
import Second from './Components/Second/Second';
import Section from './Components/Section/Section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
      <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          {/* <Route path='/Section' element={<Section/>} />
          <Route path='/Second' element={<Second/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/TechStack' element={<TechStack/>} /> */}
        </Routes>

      </Router>



  
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
