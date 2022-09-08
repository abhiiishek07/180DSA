import { React } from "react";
import DisplayHeading from "../../Components/Card/DisplayHeading";
import Display from "../../Components/Card/Display";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";
import themeColor from "../../Data/themeColor.json";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import EmptyBookmarked from "./EmptyBookmrked";
import { db } from "../../Firebase/FirebaseAuth";
import { doc, updateDoc } from "firebase/firestore";
import { setInitialBookmark } from "../../store/bookmarkSlice";
import { useEffect } from "react";
function Bookmarked() {
  const user = useSelector((state) => state.auth);
  const userRef = doc(db, "users", user[0][1]);
  const currTheme = useSelector((state) => state.theme);
  let dispatch = useDispatch();
  const bookmarkedquestionlist = useSelector((state) => state.bookmark);
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: themeColor[currTheme][0].scrollbar,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  const emptyBookmarkList = () => {
    dispatch(setInitialBookmark([]));
  };
  const emptyBookmarkListDB = async () => {
    updateDoc(userRef, {
      bookmarkList: [],
    })
      .then(() => {
        console.log("book mark list updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateBookmarkList = async () => {
    updateDoc(userRef, {
      bookmarkList: bookmarkedquestionlist,
    })
      .then(() => {
        console.log("book mark list updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    updateBookmarkList();
  }, [bookmarkedquestionlist]);

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
              marginTop: "2rem",
            }}
            variant="outlined"
            onClick={() => {
              emptyBookmarkList();
              emptyBookmarkListDB();
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
