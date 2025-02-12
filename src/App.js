import logo from './logo.svg';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        </div>
      </nav>
      <Home />
</div>
 
  );
}

export default App;
