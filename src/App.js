import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
