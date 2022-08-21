import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { signInWithGoogle } from "../../Firebase/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../store/authSlice";
import { useLottie } from "lottie-react";
import googleLogo from "../../Lottie/google.json";

function Login() {
  let dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user.displayName));
      } else {
        dispatch(removeUser([]));
      }
    });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: googleLogo,
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

export default Login;
