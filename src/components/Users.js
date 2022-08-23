import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { updateName, deleteUser } from "../features/userList";

function Users(props) {
  const dispatch = useDispatch();
  const [userIndex, setUserIndex] = useState([]);
  const [newName, setNewname] = useState("");
  const users = useSelector((state) => state.users.value);
  const userItem = users.map((user) => (
    <ListItem alignItems="flex-start" key={user.id}>
      <ListItemAvatar>
        <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            {userIndex.indexOf(user.id) > -1 ? (
              <React.Fragment>
                <input
                  type="text"
                  defaultValue={user.name}
                  onChange={(event) => setNewname(event.target.value)}
                />
                <button onClick={() => updateUser(user.id, newName)}>
                  Update
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {user.name}
                <Icon
                  sx={{ fontSize: 20 }}
                  color="primary"
                  onClick={() => handleClick(user.id)}
                >
                  edit_circle
                </Icon>
              </React.Fragment>
            )}
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {user.username}
            </Typography>
            {" - " + user.desc}
          </React.Fragment>
        }
      />
      <button
        onClick={() => {
          dispatch(deleteUser({ id: user.id }));
        }}
      >
        Delete
      </button>
      <Divider variant="inset" />
    </ListItem>
  ));
  const handleClick = (index) => {
    setUserIndex((userIndex) => [...userIndex, index]);
  };
  const updateUser = (index, updatedName) => {
    dispatch(updateName({ id: index, name: updatedName }));
    const newIndexes = userIndex.filter((id) => id !== index);
    setUserIndex(newIndexes);
  };
  return (
    <>
      <List>{userItem}</List>
    </>
  );
}

export default Users;
