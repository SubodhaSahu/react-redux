import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login(props) {
  const dispatch = useDispatch();
  const loginFunction = () => {
    dispatch(login({ name: "aaa", age: 10, email: "aaa@mailinator.com" }));
  };
  return (
    <div>
      <button onClick={loginFunction}>Login</button>
    </div>
  );
}

export default Login;
