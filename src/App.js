import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Cart from "./Cart";
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
  const [showHearder, setShowHeader] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />

        {showHearder && <Header />}

        <Routes>
          <Route path="/" element={<Home funNav={setShowHeader}/>}></Route>
          <Route path="/shop" element={<Shop funNav={setShowHeader} />}></Route>
          <Route path="/about" element={<AboutUs funNav={setShowHeader}/>}></Route>
          <Route path="/tour" element={<Tour funNav={setShowHeader}/>}></Route>
          <Route path="/contact" element={<Contact funNav={setShowHeader}/>}></Route>
          <Route path="/singleproduct/:id" element={<SingleProduct funNav={setShowHeader}/>}></Route>
          <Route path="/tour/alltour" element={<TourTotalData funNav={setShowHeader}/>}></Route>
          <Route path="/cart" element={<Cart funNav={setShowHeader}/>}></Route>
          <Route path="/blog" element={<Blog funNav={setShowHeader}/>}></Route>
          <Route path="*" element={<ErrorPage funNav={setShowHeader}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
