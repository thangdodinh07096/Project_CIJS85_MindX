import logo from './logo.svg';
import './App.css';
import Rooms from './components/Rooms/Rooms';
import Home from './pages/HomePage/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
