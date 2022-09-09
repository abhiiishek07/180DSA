import { useState, useRef, useEffect } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import themeColor from "../../Data/themeColor.json";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { addNote, deleteNote } from "../../store/noteSlice";
import { addBookmark, deleteBookmark } from "../../store/bookmarkSlice";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import NoteRoundedIcon from "@mui/icons-material/NoteRounded";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useParams } from "react-router-dom";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";

const Display = (props) => {
  const [open, setOpen] = useState(false); // modal (notes) is open or closed
  const valueRef = useRef(""); // helps in storing notes
  const items = useSelector((state) => state.cart);
  const currTheme = useSelector((state) => state.theme);
  const notes = useSelector((state) => state.note);
  const bookmarks = useSelector((state) => state.bookmark);
  const user = useSelector((state) => state.auth);
  const userRef = doc(db, "users", user[0][1]);
  let params = useParams();
  let dispatch = useDispatch();
  const handleClick = (id) => {
    if (items.includes(id)) {
      dispatch(remove(id));
      updateDoc(userRef, {
        solvedQuestionList: arrayRemove(id),
      })
        .then(() => {
          console.log("solved question list updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });

      toast.error("Question Unsolved", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(add(id));
      updateDoc(userRef, {
        solvedQuestionList: arrayUnion(id),
      })
        .then(() => {
          console.log("solved question list updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });

      toast.success("Question Solved successfully", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const checkIfSolved = (id) => {
    if (items.includes(id)) return true;
    else return false;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addNotes = () => {
    if (valueRef.current.value.length > 0) {
      const newVal = { id: props.id, noteOfId: valueRef.current.value };
      dispatch(deleteNote(props.id));
      dispatch(addNote(newVal));
    }
    handleClose();
  };

  const deleteNotes = () => {
    dispatch(deleteNote(props.id));
    handleClose();
  };

  const handleAddBookmark = () => {
    dispatch(
      addBookmark({
        Q_id: props.id,
        Q_no: props.siNo,
        Q_name: props.questionName,
        Q_link: props.Qlink,
        Q_solution: props.solution,
        Q_topic: params.type,
      })
    );
  };
  const handleDeleteBookmark = () => {
    dispatch(deleteBookmark(props.id));
  };

  //
  const updateNotesList = async () => {
    updateDoc(userRef, {
      notesList: notes,
    })
      .then(() => {
        console.log("Notes item updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    updateNotesList();
  }, [notes]);

  const updateBookmarkList = async () => {
    updateDoc(userRef, {
      bookmarkList: bookmarks,
    })
      .then(() => {
        console.log("bookmark list updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    updateBookmarkList();
  }, [bookmarks]);
  return (
    <Cont>
      <Grid
        container
        style={{
          width: "100%",
          height: "100%",
          padding: "0rem 4rem 0rem",
        }}
      >
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Logo color={themeColor[currTheme][0].text}>{props.siNo}</Logo>
          </Wrapper>
        </Grid>
        <Grid item lg={6} md={6} sm={4} xs={4} zeroMinWidth>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Topic>
              <Anchor
                color={themeColor[currTheme][0].text}
                decoration="none"
                href={props.Qlink}
                target="_blank"
              >
                {props.questionName}
              </Anchor>
            </Topic>
          </Wrapper>
        </Grid>
        <Grid item lg={2} md={2} sm={2.5} xs={2.5}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Topic>
              <Anchor
                color={themeColor[currTheme][0].text}
                href={props.solution}
                target="_blank"
              >
                click here
              </Anchor>
            </Topic>
          </Wrapper>
        </Grid>
        <Grid item lg={1} md={1} sm={1.5} xs={1.5}>
          <WrapperSolved
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
            onClick={() => {
              handleClick(props.id);
            }}
          >
            {checkIfSolved(props.id) ? (
              <CheckIcon
                style={{ color: themeColor[currTheme][0].checkBoxColor }}
              />
            ) : (
              <ClearIcon style={{ color: "red" }} />
            )}
          </WrapperSolved>
          <ToastContainer />
        </Grid>
        <Grid item lg={1} md={1} sm={1.5} xs={1.5}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Logo
              color={themeColor[currTheme][0].text}
              onClick={handleOpen}
              style={{ cursor: "pointer" }}
            >
              {notes.find((ele) => ele.id === props.id) ? (
                <NoteRoundedIcon style={{ color: "green" }} />
              ) : (
                <NoteAddRoundedIcon />
              )}
            </Logo>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <TextField
                  id="outlined-multiline-static"
                  defaultValue={
                    notes.find((ele) => ele.id === props.id)
                      ? notes.find((ele) => ele.id === props.id).noteOfId
                      : ""
                  }
                  multiline
                  rows={4}
                  inputRef={valueRef}
                  style={{ width: 300, marginBottom: "1rem" }}
                />
                <Button
                  variant="contained"
                  color="success"
                  rows={4}
                  style={{ margin: "1rem 1rem 0 0" }}
                  onClick={addNotes}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  style={{ margin: "1rem 1rem 0 0" }}
                  onClick={deleteNotes}
                >
                  Delete
                </Button>
              </Box>
            </Modal>
          </Wrapper>
        </Grid>
        <Grid item lg={1} md={1} sm={1.5} xs={1.5}>
          <Wrapper
            bgcolor={themeColor[currTheme][0].questionpage}
            border={themeColor[currTheme][0].questionpageborder}
          >
            <Logo color={themeColor[currTheme][0].text}>
              {bookmarks.find((ele) => ele.Q_id === props.id) ? (
                <BookmarkAddedIcon
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={handleDeleteBookmark}
                />
              ) : (
                <BookmarkAddIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleAddBookmark}
                />
              )}
            </Logo>
          </Wrapper>
        </Grid>
      </Grid>
    </Cont>
  );
};

const Topic = styled.h3`
  color: ${(props) => props.color};
  margin: 0rem 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Logo = styled.h3`
  color: ${(props) => props.color};
  margin: 0rem 0.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  height: 8vh;
`;
const WrapperSolved = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.solved ? "#07bc0c" : props.bgcolor)};
  border: ${(props) => props.border};
  height: 8vh;
  overflow: hidden;
  cursor: pointer;
`;
const Anchor = styled.a`
  text-decoration: ${(props) =>
    props.decoration === "none" ? "none" : "line"};
  color: ${(props) => props.color};
  &:hover {
    color: #7cfc00;
  }
`;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Display;
