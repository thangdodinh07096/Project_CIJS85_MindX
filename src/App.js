import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RoomsPage from "./pages/Rooms/RoomsPage";
import MyApp from "./contexts/MyApp";

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
    <MyApp.Provider
      value={{
        usersData: usersData,
        dataUser: dataUser,
        userEmail: userEmail,
        userPassword: userPassword,
        onUserEmailValueChange,
        onUserPasswordValueChange,
        onSubmitLoginHandle,
      }}
    >
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/cart" element={<Home />} />
            <Route path="/contact" element={<ContactsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </MyApp.Provider>
  );
}

export default App;
