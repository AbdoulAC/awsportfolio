import './App.css';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Second from './Components/Second/Second';
import Section from './Components/Section/Section';
import TechStack from './Components/TechStack/TechStack';
function App() {
  
  return (
    <div className="App">
        <Header/>
        <Section/>
        <Projects/>
        <Second/>
        <TechStack/>
    </div>
  );
}

export default App;
