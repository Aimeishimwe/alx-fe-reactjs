// Import necessary libraries and components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Wrap everything in the Router to enable routing */}
      <Router>
        {/* Include Navbar at the top of every page */}
        <Navbar />
        
        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Include Footer at the bottom of every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
