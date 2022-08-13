import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTheme } from "../../store/themeSlice";
import themeColor from "../../Data/themeColor.json";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

function Footer() {
  const currTheme = useSelector((state) => state.theme);
  let isDark = false;
  if (currTheme === "dark") isDark = true;
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const fun = () => {
    navigate("/about");
  };
  const toggleLight = () => {
    dispatch(updateTheme("light"));
  };
  const toggleDark = () => {
    dispatch(updateTheme("dark"));
  };
  return (
    <Cont>
      <Grid
        container
        style={{
          "background-color": themeColor[currTheme][0].footer,
          height: "6vh",
        }}
      >
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Wrapper Padding="3rem">
            <a
              href="https://github.com/abhiiishek07/180DSA"
              target="_blank"
              rel="noreferrer"
            >
              <Title
                color={themeColor[currTheme][0].text}
                border={themeColor[currTheme][0].border}
              >
                ⭐ This project
              </Title>
            </a>
          </Wrapper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Wrapper justifyContent="flex-end" Padding="3rem">
            {isDark && (
              <LightModeSharpIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: 25,
                }}
                onClick={toggleLight}
              />
            )}
            {!isDark && (
              <DarkModeIcon
                style={{
                  color: "black",
                  cursor: "pointer",
                  fontSize: 25,
                }}
                onClick={toggleDark}
              />
            )}
            <BookmarksIcon
              style={{
                color: themeColor[currTheme][0].text,
                cursor: "pointer",
              }}
              onClick={() => navigate("/bookmarks")}
            />
            <Title
              color={themeColor[currTheme][0].text}
              border={themeColor[currTheme][0].border}
              onClick={fun}
            >
              About 🤔
            </Title>
          </Wrapper>
        </Grid>
      </Grid>
    </Cont>
  );
}
const Cont = styled.div`
  display: flex;
  height: 6vh;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  margin-left: 0.5rem;
  border: ${(props) => props.border};
  border-radius: 0.8rem;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${(props) => props.Padding || "0rem"};
  padding-right: ${(props) => props.Padding || "0rem"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: center;
  height: 5vh;
  gap: 1rem;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
  }
`;

export default Footer;
