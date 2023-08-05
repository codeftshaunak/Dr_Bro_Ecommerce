import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import Home from "../src/Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./components/SingleProductPage/SingleProduct";
import Blog from "./Pages/Blog/Blog";
import Tour from "./Pages/Tour/Tour";
import TourTotalData from "./components/TourTotalData/TourTotalData";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/Login/SignIn";
import SingleTour from "./components/SingleProductPage/SingleTour";
import Passport from "./Pages/Passport/Passport";
import PassportSignUp from "./components/PassportAuth/PassportSignUp";
import PassportProcess from "./components/PassportComp/PassportProcess";
import PassportSignIn from "./components/PassportAuth/PassportSignIn";
import PassportTrack from "./components/PassportComp/PassportTrack";
import AdminHome from "./admin/AdminHome";
import AdminLogin from "./admin/AdminLogin";
import AdminEcom from "./admin/AdminEcom";
import AdminPassport from "./admin/AdminPassport";
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import AdminTour from "./admin/AdminTour";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#8f8e8e0f",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const [showHeader, setShowHeader] = useState(true);
  const access_token = localStorage.getItem("access_token")

  // Set up a new QueryClient instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Disable automatic retries on query failure
        staleTime: 5 * 60 * 1000, // Time in milliseconds before considering the data stale and refetching
      },
    },
  });
  // Optionally, set a global axios instance to use with React Query
  queryClient.setQueryDefaults({
    axios: axios.create({
      baseURL: 'https://3.110.195.48:8000', // Replace with your API base URL
      headers: {
        // Add any default headers, e.g., 'Authorization', 'Content-Type', etc.
        // For the 'Authorization' header, you can use the getAuthorizationHeader() function.
      },
    }),
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>

        <Router>
          <GlobalStyle />

          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={<Home funNav={setShowHeader} />}></Route>
            <Route path="/shop" element={<Shop funNav={setShowHeader} />}></Route>
            <Route
              path="/about"
              element={<AboutUs funNav={setShowHeader} />}
            ></Route>
            <Route path="/tour" element={<Tour funNav={setShowHeader} />}></Route>
            <Route
              path="/contact"
              element={<Contact funNav={setShowHeader} />}
            ></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProduct funNav={setShowHeader} />}
            ></Route>
            <Route
              path="/singletour/:id"
              element={<SingleTour funNav={setShowHeader} />}
            ></Route>
            <Route
              path="/tour/alltour"
              element={<TourTotalData funNav={setShowHeader} />}
            ></Route>
            <Route path="/cart" element={<Cart funNav={setShowHeader} />}></Route>
            <Route path="/blog" element={<Blog funNav={setShowHeader} />}></Route>

            {/* <Route
            path="/admin"
            element={
              access_token ? (
                <Admin funNav={setShowHeader} />
              ) : (
                <SignIn funNav={setShowHeader} />
              )
            }
          ></Route> */}

            <Route path="/admin" element={<AdminHome funNav={setShowHeader} />}></Route>
            <Route path="/adminlogin" element={<AdminLogin funNav={setShowHeader} />}></Route>
            <Route path="/adminecom" element={<AdminEcom funNav={setShowHeader} />}></Route>
            <Route path="/tourstravels" element={<AdminTour funNav={setShowHeader} />}></Route>
            <Route path="/adminpassport" element={<AdminPassport funNav={setShowHeader} />}></Route>


            {/* <Route
            path="/signup"
            element={
              access_token ? (
                <Navigate to="/profile" />
              ) : (
                <SignUp funNav={setShowHeader} />
              )
            }
          ></Route> */}
            <Route path="/signup" element={<SignUp funNav={setShowHeader} />}></Route>
            <Route path="/signin" element={<SignIn funNav={setShowHeader} />}></Route>
            <Route path="/passport" element={<Passport funNav={setShowHeader} />}></Route>
            <Route path="/passportsignup" element={<PassportSignUp funNav={setShowHeader} />}></Route>
            <Route path="/getpassports" element={<PassportProcess funNav={setShowHeader} />}></Route>
            <Route path="/passportsignin" element={<PassportSignIn funNav={setShowHeader} />}></Route>
            <Route path="/passporttrack" element={<PassportTrack funNav={setShowHeader} />}></Route>

            <Route
              path="*"
              element={<ErrorPage funNav={setShowHeader} />}
            ></Route>
          </Routes>
          {showHeader && <Footer />}


        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
