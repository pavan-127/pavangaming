
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Main from './Components/Main/Main.jsx';
import Contact from '../src/pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

const App = () => {
  return (
    <Router>
      
      <Nav />
      <Main/>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <div className="min-h-screen bg-gray-950 text-white flex">
    
      
        <Sidebar />
    
    </div>
      <Footer />
    </Router>
  );
};

export default App;
