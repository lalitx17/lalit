import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homescreen from './components/Homescreen';
import ProjectIntro from './components/ProjectIntro';
import Projects from './components/Projects';

function App() {
  return (
    <div>
     <Navbar/>
     <Homescreen />
      <ProjectIntro />
      <Projects />
     <Footer />
    
    </div>
  );
}

export default App;
