import { React } from "react";
import DisplayHeading from "../../Components/Card/DisplayHeading";
import Display from "../../Components/Card/Display";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { emptyBookmark } from "../../store/bookmarkSlice";
import { useDispatch } from "react-redux";
import EmptyBookmarked from "./EmptyBookmrked";
function Bookmarked() {
  const currTheme = useSelector((state) => state.theme);
  let dispatch = useDispatch();
  const bookmarkedquestionlist = useSelector((state) => state.bookmark);
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: themeColor[currTheme][0].scrollbar,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Container color={themeColor[currTheme][0].background}>
      {bookmarkedquestionlist.length === 0 ? (
        <>
          <EmptyBookmarked />
        </>
      ) : (
        <>
          <Button
            style={{
              backgroundColor: "#db3545",
              color: "#ffffff",
              marginTop: "0.5rem",
            }}
            variant="outlined"
            onClick={() => {
              dispatch(emptyBookmark([]));
              <EmptyBookmarked />;
            }}
          >
            Clear All
          </Button>
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
            {bookmarkedquestionlist.map((questionList, index) => {
              return (
                <Display
                  key={index}
                  id={questionList.Q_id}
                  siNo={index}
                  questionName={questionList.Q_name}
                  Qlink={questionList.Q_link}
                  solution={questionList.Q_solution}
                  topic={questionList.Q_topic}
                />
              );
            })}
          </Scrollbars>
        </>
      )}
    </Container>
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

export default Bookmarked;
