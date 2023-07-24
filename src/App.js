import logo from "./logo.svg";
import "./App.css";
import Rooms from "./components/Rooms/Rooms";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Rooms />
      <LoginPage />
    </div>
  );
}

export default App;
