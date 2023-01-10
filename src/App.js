import './App.css';
import {  Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { About } from './components/About';


function App() {
  return (
    <div>
     <Navbar/>
     <Router basename={process.env.PUBLIC_URL}>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={ <About/> } />
     </Router>


     <Footer />
    
    </div>
  );
}

export default App;
