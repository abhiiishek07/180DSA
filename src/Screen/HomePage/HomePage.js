import React from "react";
import { Grid } from "@mui/material";
import Card from "../../Components/Card/Card";
import HomePageList from "./HomePageList.json";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "../../Components/NavBar/Navbar";
const HomePage = () => {
  const currTheme = useSelector((state) => state.theme);
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: themeColor[currTheme][0].scrollbar,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <>
      <Navbar />

      <Container color={themeColor[currTheme][0].background}>
        <Scrollbars
          autoHide
          renderThumbVertical={renderThumb}
          style={{
            width: "70%",
            height: "70vh",
          }}
        >
          <Grid
            container
            style={{
              padding: "0rem ",
              width: "100%",
              backgroundColor: themeColor[currTheme][0].background,
            }}
          >
            {HomePageList.map((HomePageList, index) => {
              return (
                <Grid item lg={4} md={6} xs={12}>
                  <motion.div
                    whileInView={{ y: [0, 30] }}
                    transition={{
                      repeatType: "reverse",
                      duration: 0.7,
                      delay: 0.1,
                    }}
                  >
                    <Wrapper>
                      <Card
                        key={index}
                        topicName={HomePageList.topic_name}
                        totalQ={HomePageList.totalQ}
                        pathName={HomePageList.navTo}
                        bgColor={HomePageList.bgColor}
                        start={HomePageList.start}
                        end={HomePageList.end}
                      />
                    </Wrapper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Scrollbars>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85.5vh;
  background-color: ${(props) => props.color || "white"};
`;
export default HomePage;
