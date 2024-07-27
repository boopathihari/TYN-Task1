
import Home from "./components/Home.tsx";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails.tsx';

function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
