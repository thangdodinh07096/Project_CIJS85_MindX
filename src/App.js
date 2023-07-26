import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from './components/Rooms/Rooms';
import Home from './pages/HomePage/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
