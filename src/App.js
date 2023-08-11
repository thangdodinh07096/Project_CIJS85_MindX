import "./App.css";
import { useState, useEffect, useCallback } from "react";
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
import ScrollToTop from "./components/ReactHook/ScrollToTop";
import HotelBookingPage from "./pages/HotelBookingPage/HotelBookingPage";
import RoomContext from "./contexts/RoomContext";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [showPassword, setShowPassword] = useState("password");
  const [loading, setLoading] = useState(true);
  const [buttonToggler, setButtonToggler] = useState(true);

  const navigate = useNavigate();

  const onShowPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const onButtonToggler = () => {
    if (buttonToggler === true) {
      setButtonToggler(false);
    } else {
      setButtonToggler(true);
    }
  };

  const fetchData = useCallback(() => {
    const getUser = async () => {
      const response = await fetch(
        "https://64b3e84f0efb99d862688494.mockapi.io/userData"
      );
      const jsonData = await response.json();
      setUsersData(jsonData);
    };
    getUser();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          fetchData();
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
        buttonToggler: buttonToggler,
        setLoading,
        onShowPasswordHandler,
        onLogoutHandle,
        onButtonToggler,
        fetchData,
      }}
    >
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelListPage />} />
            <Route path="/hotels/:hotelId" element={<HotelDetailPage />} />
            <Route path="/hotelBooking/:hotelId/:roomId" element={<HotelBookingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactsPage />} />
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