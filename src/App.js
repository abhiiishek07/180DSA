import React from "react";
import QuestionPage from "./Screen/QuestionPage/QuestionPage";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Screen/HomePage/HomePage";
import ContactMe from "./Components/Card/ContactMe";
import Bookmarked from "./Components/Card/Bookmarked";
import Login from "./Screen/Login/Login";
import About from "./Components/Card/About";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const user = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        {user.length === 0 ? (
          <Routes>
            {" "}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <>
                  {/* <Navbar /> */}
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/topic/:type"
              element={
                <>
                  <Navbar />
                  <QuestionPage />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                </>
              }
            />
            <Route path="/about/contact" element={<ContactMe />} />
            <Route
              path="/bookmarks"
              element={
                <>
                  <Navbar />
                  <Bookmarked />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
