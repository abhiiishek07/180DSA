import React, { useEffect, useState } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase/FirebaseAuth";
import { useDispatch } from "react-redux";
import { setInitialCart } from "./store/cartSlice";
import { setInitialBookmark } from "./store/bookmarkSlice";
import { setInitialNote } from "./store/noteSlice";
import { setInitialTopic } from "./store/topicsSlice";
function App() {
  const user = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const getData = async () => {
    const userRef = doc(db, "users", user[0][1]);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      console.log("topic", docSnap.data().topicsList);
      dispatch(setInitialCart(docSnap.data().solvedQuestionList));
      dispatch(setInitialBookmark(docSnap.data().bookmarkList));
      dispatch(setInitialNote(docSnap.data().notesList));
      dispatch(setInitialTopic(docSnap.data().topicsList));
    } else {
      console.log("User does not exist");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="main_body">
        <BrowserRouter>
          {user.length === 0 ? (
            <Routes>
              {" "}
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          ) : (
            <Routes>
              {" "}
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
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
