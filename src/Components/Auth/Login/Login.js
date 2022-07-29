import React from "react";
import { useState } from "react";
import classes from "./Login.module.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailisValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  function submitHandler(e) {
    e.preventDefault();

    //input validation
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      setEmailisValid(false);
      return;
    }
    if (enteredPassword.length <= 6) {
      setPasswordIsValid(false);
      return;
    }

    const authData = {
      email: email,
      password: enteredPassword,
      returnSecureToken: true,
    };

    props.onSubmit(authData);
    setEmail("");
    setEnteredPassword("");
    setEmailisValid(true);
    setPasswordIsValid(true);
  }

  return (
    <form onSubmit={submitHandler} className={classes.signin}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        {!emailIsValid && (
          <p className={classes.invalidInput}>Email is not valid!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          required
          onChange={(event) => setEnteredPassword(event.target.value)}
        />
        {!passwordIsValid && (
          <p className={classes.invalidInput}>
            Password must contain at least 6 characters!
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button className={classes.actionBtn}>
          {props.isLogin ? "Log in" : "Sign up"}
        </button>
      </div>
    </form>
  );
}

export default Login;
