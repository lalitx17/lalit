import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { About } from './components/About';


function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={ <About/> } />
     </Routes>


     <Footer />
    
    </div>
  );
}

export default App;
