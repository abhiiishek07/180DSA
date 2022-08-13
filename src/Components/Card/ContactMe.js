import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/yoga-and-code.json";
import styled from "styled-components";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Grid } from "@mui/material";
function ContactMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrapper>
      <Grid container style={{}}>
        <Grid item lg={6} md={1} sm={12} xs={12}>
          <Image>
            <Lottie options={defaultOptions} height={500} width={500} />
          </Image>
        </Grid>
        <Grid item lg={6} md={1} sm={12} xs={12}>
          <AboutMe>
            <Title>Hi 👋</Title>
            <Title>
              I'm Abhishe<span className="k">k</span>.
            </Title>
            <Social>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="twitter"
                iconColor="black"
                backgroundColor="rgba(26,166,233,1)"
                url="https://twitter.com/abhiiishek07"
                size="48"
              />
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="instagram"
                iconColor="black"
                backgroundColor="rgba(26,166,233,1)"
                url="https://www.instagram.com/abhiiishek07/"
                size="48"
              />
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="linkedin"
                iconColor="black"
                backgroundColor="rgba(26,166,233,1)"
                url="https://www.linkedin.com/in/abhishek-k-96abb6210/"
                size="48"
              />
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="github"
                iconColor="black"
                backgroundColor="rgba(26,166,233,1)"
                url="https://github.com/abhiiishek07"
                size="48"
              />
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
