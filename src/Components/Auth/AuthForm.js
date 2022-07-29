import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.scss";
import Auth from "./Login/Login";

function AuthForm() {
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  function authHandler(authData) {
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRXHKWgeGoskYHNDRsuxdpl320fWo5XNY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRXHKWgeGoskYHNDRsuxdpl320fWo5XNY";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(authData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Authentication failed!");
        }
        return res.json();
      })
      .then((data) => {
        authCtx.login(data.idToken);
        setError(false);
        history.replace("/");
      })
      .catch((err) => setError(err.message));
  }

  return (
    <section className={classes.auth}>
      <div className={classes.authForm}>
        {<Auth onSubmit={authHandler} isLogin={isLogin} />}
        <button
          type="button"
          className={classes.toggleBtn}
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
        {error && <p className={classes.error}>Failed!</p>}
      </div>
    </section>
  );
}

export default AuthForm;
