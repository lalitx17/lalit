import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import { About } from './components/About';
import Contact from './components/Contact';


function App() {
  return (

    <div>
     <Navbar/>
     <Routes>
     <Route path = "/" element={<Home />} />
     <Route path = "/projects" element={ <ProjectPage/> } />
     <Route path = "/about" element={ <About /> } />
     <Route path = "/contact" element={ <Contact />} />

      </Routes>
     <Footer />
    
    </div>


  );
}

export default App;
