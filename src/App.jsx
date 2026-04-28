import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
import SystemsPage from './components/systems/SystemsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/systems" element={<SystemsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
