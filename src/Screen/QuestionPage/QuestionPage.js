import { React } from "react";
import DisplayHeading from "../../Components/Card/DisplayHeading";
import Display from "../../Components/Card/Display";
import AllQuestionList from "../../Data/AllQuestionsList.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import { Scrollbars } from "react-custom-scrollbars-2";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
function QuestionPage() {
  const currTheme = useSelector((state) => state.theme);
  let params = useParams();
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: themeColor[currTheme][0].scrollbar,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <>
      <Container color={themeColor[currTheme][0].background}>
        <Scrollbars
          autoHide
          renderThumbVertical={renderThumb}
          style={{
            width: "90%",
            height: "70.5vh",
            margin: "2rem 0 2.5rem 0",
          }}
        >
          <DisplayHeading />
          {AllQuestionList[params.type].map((questionList, index) => {
            return (
              <Display
                key={index}
                id={questionList.id}
                siNo={questionList.Q_No}
                questionName={questionList.Question}
                Qlink={questionList.Question_link}
                solution={questionList.Solution_link}
                topic={params.type}
              />
            );
          })}
        </Scrollbars>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 85.5vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color};
`;
export default QuestionPage;
