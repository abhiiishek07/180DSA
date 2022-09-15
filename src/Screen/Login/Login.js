import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { signInWithGoogle, signInAsGuest } from "../../Firebase/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../store/authSlice";
import { useLottie } from "lottie-react";
import robotHi from "../../Lottie/robotHi.json";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";

function Login() {
  let dispatch = useDispatch();
  const auth = getAuth();
  const addNewUser = async (uid) => {
    const userRef = doc(db, "users", uid);
    const data = {
      solvedQuestionList: [],
      notesList: [],
      bookmarkList: [],
    };
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("Document already exist");
    } else {
      console.log("No such document!");
      setDoc(userRef, data)
        .then(() => {
          console.log("Document has been added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser([user.displayName, user.uid]));
        addNewUser(user.uid);
      } else {
        dispatch(removeUser([]));
      }
    });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: robotHi,
    innerHeight: 10,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);
  return (
    <Wrapper>
      {View}

      <GoogleButton onClick={signInWithGoogle} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Anon = styled.h3`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

export default Login;
