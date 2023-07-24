import './App.css';
import { Routes, Route } from "react-router-dom";
import Rooms from './components/Rooms/Rooms';
import Home from './pages/HomePage/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>

    
  );
}

export default App;
