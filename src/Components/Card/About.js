import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import themeColor from "../../Data/themeColor.json";
import Reset from "./Reset";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { signOutFromGoogle } from "../../Firebase/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { removeUser } from "../../store/authSlice";

function About() {
  const currTheme = useSelector((state) => state.theme);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const fun2 = () => {
    navigate("/about/contact");
  };
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("in about page");
      } else {
        dispatch(removeUser([]));
      }
    });
  }, []);

  return (
    <>
      <Cont color={themeColor[currTheme][0].background}>
        <Wrapper>
          <Description descrip="true" txtcolor={themeColor[currTheme][0].text}>
            180 DSA is your personal web app progress tracker based on sde sheet
            by{" "}
            <Anchor href="https://www.linkedin.com/in/rajarvp/" target="_blank">
              Striver
            </Anchor>
            .
          </Description>
          <Btn>
            <Button variant="contained" size="small" onClick={fun2}>
              Contact Me 🙂
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={signOutFromGoogle}
            >
              log out
            </Button>

            <a
              href="https://github.com/abhiiishek07/180DSA"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Button variant="contained" size="small">
                ⭐ This project
              </Button>
            </a>

            <Reset />
          </Btn>
          <Description txtcolor={themeColor[currTheme][0].text}>
            to the ❤️ for DSA 🤌
          </Description>
        </Wrapper>
      </Cont>
      <Footer />
    </>
  );
}
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85.5vh;
  /* background-color: green; */
  /* justify-content: center; */
  align-items: center;
  background-color: ${(props) => props.color};
`;
const Wrapper = styled.div`
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
`;
const Description = styled.h2`
  color: ${(props) => props.txtcolor};
  font-size: 2rem;
  margin: 2rem;
  /* word-spacing: 0.5rem;
  letter-spacing: 0.05rem; */
  margin-top: ${(props) => (props.descrip === "true" ? "3rem" : "0rem")};
`;
const Anchor = styled.a`
  color: #3399ff;
  text-decoration: none;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 4rem 0 4rem;
  a {
    text-decoration: none;
  }
  flex-wrap: nowrap;
`;

export default About;
