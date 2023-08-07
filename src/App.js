import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import MyApp from "./contexts/MyApp";
import HotelListPage from "./pages/HotelListPage/HotelListPage";
import HotelDetailPage from "./pages/HotelDetail/HotelDetailPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [showPassword, setShowPassword] = useState("password");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onShowPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
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
  
  const loginFormValidationScheme = yup.object().shape({
    userEmail: yup
      .string()
      .email("Email does not valid format")
      .required("Email is requied"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const registerFormValidationScheme = yup.object().shape({
    name: yup.string().required("Name is required"),
    userEmail: yup
      .string()
      .email("Email does not valid format")
      .required("Email is requied"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onLogoutHandle = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser([]);
    navigate("/");
  };

  useEffect(() => {
    const storedcurrentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedcurrentUser) {
      setCurrentUser(storedcurrentUser);
    }
  }, []);

  const formikLogin = useFormik({
    initialValues: {
      userEmail: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      const findUser = usersData.find((user) => {
        return (
          values.userEmail === user.email_address &&
          values.password === user.password
        );
      });
      console.log(findUser);
      if (findUser) {
        localStorage.setItem("currentUser", JSON.stringify(findUser));
        const storedcurrentUser = JSON.parse(
          localStorage.getItem("currentUser")
        );
        setCurrentUser(storedcurrentUser);
        navigate("/");
      } else {
        alert(
          "Your email address and password are incorrect, please re-enter !"
        );
      }
    },
    validationSchema: loginFormValidationScheme,
  });

  const formikRegister = useFormik({
    initialValues: {
      name: "",
      userEmail: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      const findUser = usersData.find((user) => {
        return (
          values.userEmail === user.email_address || values.name === user.name
        );
      });
      switch (undefined) {
        case findUser === true:
          alert("Name and email address already exist");
          break;
        case values.password !== values.confirmPassword:
          alert("Please enter the correct password to register !");
          break;
        default:
          const addUser = async () => {
            const rawResponse = await fetch(
              "https://64b3e84f0efb99d862688494.mockapi.io/userData",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  email_address: values.userEmail,
                  password: values.password,
                }),
              }
            );
            const context = await rawResponse.json();
          };
          addUser();
          navigate("/login");

          break;
      }
    },
    validationSchema: registerFormValidationScheme,
  });
  return (
    <MyApp.Provider
      value={{
        currentUser: currentUser,
        formikLogin: formikLogin,
        formikRegister: formikRegister,
        showPassword: showPassword,
        loading: loading,
        setLoading,
        onShowPasswordHandler,
        onLogoutHandle,
      }}
    >
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelListPage />} />
            <Route path="/hotels/:hotelId" element={<HotelDetailPage />} />
            <Route path="/cart" element={<Home />} />
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="/cart" element={<Home />} />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </MyApp.Provider>
  );
}

export default App;
