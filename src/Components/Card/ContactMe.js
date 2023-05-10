import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../Lottie/yoga-and-code.json";
import styled from "styled-components";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function ContactMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);
  return (
    <Wrapper>
      <Grid container style={{}}>
        <Grid item lg={6} md={1} sm={12} xs={12}>
          <Image>{View}</Image>
        </Grid>
        <Grid item lg={6} md={1} sm={12} xs={12}>
          <AboutMe>
            <Title>Hi 👋</Title>
            <Title>
              I'm Abhishe<span className="k">k</span>.
            </Title>
            <Social>
              <IconButton
                href="https://www.linkedin.com/in/abhishek-k-96abb6210/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  style={{
                    color: "#1AA6E9",
                    cursor: "pointer",
                    margin: "0rem",
                    fontSize: "7vh",
                  }}
                />
              </IconButton>
              <IconButton
                href="https://github.com/abhiiishek07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  style={{
                    color: "#1AA6E9",
                    cursor: "pointer",
                    margin: "0rem",
                    // height: ,
                    fontSize: "7vh",
                  }}
                />
              </IconButton>
              <IconButton
                href="https://twitter.com/abhiiishek07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  style={{
                    color: "#1AA6E9",
                    cursor: "pointer",
                    margin: "0rem",
                    fontSize: "7vh",
                  }}
                />
              </IconButton>
            </Social>
          </AboutMe>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
//<span>&#128075;&#127995;</span>
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://lumiere-a.akamaihd.net/v1/images/star-background-m_bc4eb89a.jpeg");
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  /* width: 50%; */
  margin-left: 4rem;
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
`;
const Title = styled.h1`
  color: white;
  font-size: 5rem;
  .k {
    color: #fdd641;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0 2rem 0;
  width: 100%;
  gap: 1.5rem;
`;
export default ContactMe;
