import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import "./App.css";
import User from "./features/user";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", backgroundColor: "#E7EBF0" }}
      >
        <Grid
          item
          xs={3}
          style={{ backgroundColor: "#FFFFFF", marginTop: "5%" }}
        >
          <AddUser />
          <Users />
        </Grid>
      </Grid>
      {/* <Profile />
      <Login />
      <ChangeColor /> */}
    </>
  );
}

export default App;
