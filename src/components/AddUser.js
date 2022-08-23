import { React, useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../features/userList";

function AddUser() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const handleClickOpen = () => {
    console.log("Here");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const pushUser = () => {
    dispatch(
      addUser({
        id: userList[userList.length - 1].id + 1,
        name: name,
        username: userName,
        desc: "Random Desc",
      })
    );
    setOpen(false);
    setName("");
    setUserName("");
  };
  const addButon = {
    margin: "1%",
    justifyContent: "end",
    display: "flex",
    alignContent: "stretch",
  };
  return (
    <>
      <div style={addButon}>
        <Button variant="contained" onClick={handleClickOpen}>
          Add User
        </Button>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ marginLeft: "30%" }}
        >
          Add User
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="userName"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div style={{ marginLeft: "30%", marginTop: "2%" }}>
            <Button variant="contained" onClick={pushUser}>
              Add User
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddUser;
