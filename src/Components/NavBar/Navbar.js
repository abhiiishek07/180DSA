import { React } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { FaRandom } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import AllQuestionList from "../../Data/AllQuestionsList.json";
import HomepageList from "../../Screen/HomePage/HomePageList.json";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import themeColor from "../../Data/themeColor.json";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";

function Navbar() {
  const items = useSelector((state) => state.cart);
  const currTheme = useSelector((state) => state.theme);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const userRef = doc(db, "users", user[0][1]);
  const loading = useSelector((state) => state.loading);

  //function to find the random Question
  const findRandomQ = () => {
    if (items.length === 191) {
      toast.success("Congratulations 🥳 you have solved all the questions");
    } else {
      let randTopicNum = Math.floor(Math.random() * 27);
      let randTopicName = HomepageList[randTopicNum].navTo;
      let totalQues = HomepageList[randTopicNum].totalQ;
      let randomQnum = Math.floor(Math.random() * totalQues);
      let randomQuesid = AllQuestionList[randTopicName][randomQnum].id;
      let randomQues = AllQuestionList[randTopicName][randomQnum].Question_link;

      if (items.includes(randomQuesid)) {
        findRandomQ(); // If Q already solved, call function again
      } else {
        let ran = document.createElement("a");
        ran.href = randomQues;
        ran.target = "_blank";
        ran.click();
        const options = {
          title: "Did You solve the Question ?",
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                dispatch(add(randomQuesid));
                updateDoc(userRef, {
                  solvedQuestionList: arrayUnion(randomQuesid),
                })
                  .then(() => {
                    console.log("solved question list updated successfully");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                toast.success("Question Solved successfully", {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              },
            },
            {
              label: "No",
              onClick: () =>
                toast.error("Question not solved", {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }),
            },
          ],
          closeOnEscape: true,
          closeOnClickOutside: false,
          keyCodeForClose: [8, 32],
          willUnmount: () => {},
          afterClose: () => {},
          onClickOutside: () => {},
          onKeypress: () => {},
          onKeypressEscape: () => {},
          overlayClassName: "overlay-custom-class-name",
        };
        confirmAlert(options);
      }
    }
  };
  const fun = () => {
    findRandomQ();
  };
  console.log("loadiiiiiiiiii", loading);
  return (
    <Grid
      container
      style={{
        "background-color": themeColor[currTheme][0].nav,
      }}
    >
      <Grid item lg={5} md={8} sm={6} xs={6}>
        <Wrapper>
          <Title
            color={themeColor[currTheme][0].text}
            paddingLeft="3rem"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            180DSA
          </Title>
        </Wrapper>
      </Grid>
      <Grid item lg={4} md={4} sm={6} xs={6}>
        <Wrapper>
          <Tooltip title="solve a random question">
            <Random onClick={fun}>
              <FaRandom size={"1.23em"} />{" "}
              <Title color={themeColor[currTheme][0].text} pickOne="pickOne">
                Pick one
              </Title>
            </Random>
          </Tooltip>
          <ToastContainer />
        </Wrapper>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Wrapper>
          <Title color={themeColor[currTheme][0].text} paddingLeft="2.25rem">
            Total Solved : {loading ? <RotateLeftRoundedIcon /> : items.length}{" "}
            / 191
          </Title>
        </Wrapper>
      </Grid>
    </Grid>
  );
}

const Title = styled.h1`
  font-size: ${(props) => (props.pickOne === "pickOne" ? "1rem" : "1.5rem")};
  text-align: center;
  margin-left: ${(props) => props.marginLeft || "0rem"};
  color: ${(props) => props.color || "white"};
  padding-left: ${(props) => props.paddingLeft || "0rem"};
  /* padding-right: ${(props) => props.padding || "0rem"}; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: center;
  padding: 1rem;
  border-bottom: 0.1px solid #4e8ccd;
`;

const Random = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  svg {
    color: #49cf78;
    font-size: 1.5rem;
    padding-right: 0.5rem;
  }
`;

export default Navbar;
