import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";
import { useSelector } from "react-redux";
import { setInitialBookmark } from "../../store/bookmarkSlice";
import { setInitialCart } from "../../store/cartSlice";
import { setInitialNote } from "../../store/noteSlice";
import { useDispatch } from "react-redux";
// this function resets everything to zero
export default function Reset() {
  const user = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const userRef = doc(db, "users", user[0][1]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const resetStates = () => {
    dispatch(setInitialBookmark([]));
    dispatch(setInitialCart([]));
    dispatch(setInitialNote([]));
  };
  const reset = async () => {
    updateDoc(userRef, {
      notesList: [],
    })
      .then(() => {
        console.log("Notes item reset successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    updateDoc(userRef, {
      bookmarkList: [],
    })
      .then(() => {
        console.log("topic list reset successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    updateDoc(userRef, {
      solvedQuestionList: [],
    })
      .then(() => {
        console.log("solved question list reset successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#db3545", color: "#ffffff" }}
        variant="outlined"
        onClick={handleClickOpen}
        size="small"
      >
        Reset your progress
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Note: This will reset your current progress.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              reset();
              resetStates();
            }}
            autoFocus
          >
            Agree
          </Button>
          <Button onClick={handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
