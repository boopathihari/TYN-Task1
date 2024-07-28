
import Home from "./components/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails.tsx';
import BookmarkList from './components/Bookmarks.tsx';

function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<BookmarkList />} />
        <Route path="/profile/:id" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
