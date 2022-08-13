import React from "react";
import QuestionPage from "./Screen/QuestionPage/QuestionPage";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Screen/HomePage/HomePage";
import NotFound from "./Screen/HomePage/NotFound";
import ContactMe from "./Components/Card/ContactMe";
import Bookmarked from "./Components/Card/Bookmarked";
import About from "./Components/Card/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="main_body">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
