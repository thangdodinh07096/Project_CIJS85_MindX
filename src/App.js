import './App.css';
import { Routes, Route } from "react-router-dom";
import Rooms from './components/Rooms/Rooms';
import Home from './pages/HomePage/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const onUserEmailValueChange = (e) => {
    setUserEmail(e.target.value);
  };
  const onUserPasswordValueChange = (e) => {
    setUserPassword(e.target.value);
  };
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        "https://64b3e84f0efb99d862688494.mockapi.io/userData"
      );
      const jsonData = await response.json();
      setUsersData(jsonData);
    };
    getUser();
  }, []);

  const onSubmitLoginHandle = (e) => {
    e.preventDefault();
    const findUser = usersData.find((user) => {
      return userEmail === user.email_address && userPassword === user.password;
    });
    console.log(findUser);
    if (findUser) {
      localStorage.setItem("dataUser", JSON.stringify(findUser));
      const storedDataUser = JSON.parse(localStorage.getItem("dataUser"));
      setDataUser(storedDataUser);
      navigate("/");
    } else {
      alert("Your email address and password are incorrect, please re-enter !");
    }
  };

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
