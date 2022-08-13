import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { emptyLocalStorage } from "../../store/cartSlice";
import { emptyNote } from "../../store/noteSlice";
import { emptyTopicList } from "../../store/topicsSlice";
import { emptyBookmark } from "../../store/bookmarkSlice";

// this function resets everything to zero
export default function Reset() {
  let dispatch = useDispatch();
  const fun = () => {
    dispatch(emptyNote([]));
    dispatch(emptyTopicList([]));
    dispatch(emptyBookmark([]));
    dispatch(emptyLocalStorage([]));
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#db3545", color: "#ffffff" }}
        variant="outlined"
        onClick={handleClickOpen}
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
            Note: This is delete your current progress.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              fun();
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
