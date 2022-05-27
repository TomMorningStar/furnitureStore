import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../redux/features/user";
import styles from "./Authorization.module.scss";

const SignUp = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [validationLogin, setValidationLogin] = React.useState("");
  const [validationPassword, setValidationPassword] = React.useState("");

  const handleGetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  const testLogin = (login) => {
    if (/^[a-zA-Z1-9]+$/.test(login) === false) {
      return {
        boolean: false,
        text: "The login must contain only latin letters",
      };
    }
    if (login.length < 4 || login.length > 20) {
      return {
        boolean: false,
        text: "Login must be between 4 and 20 characters",
      };
    }
    if (parseInt(login.substr(0, 1))) {
      return {
        boolean: false,
        text: "Login must start with a letter",
      };
    }
    return { boolean: true };
  };

  const testPassword = (password) => {
    if (password.length < 4 || password.length > 20) {
      return {
        boolean: false,
        text: "Password must be between 4 and 20 characters",
      };
    }
    if (/^[a-zA-Z1-9]+$/.test(password) === false) {
      return {
        boolean: false,
        text: "The login must contain only latin letters",
      };
    }

    return { boolean: true };
  };

  const handleRegister = () => {
    console.log(testLogin(login).boolean);

    if (testLogin(login).boolean) {
      if (testPassword(password).boolean) {
        dispatch(registerUser(login, password));
      }
    }

    setLogin("");
    setPassword("");
    return (
      setValidationLogin(testLogin(login).text),
      setValidationPassword(testPassword(password).text)
    );
  };

  return (
    <div className={styles.form}>
      <div className={styles.fromWrap}>
        <div className={styles.formTitle}>
          <h1>Sign Up</h1>
        </div>

        <div className={styles.formContent}>
          <div>
            <div className={styles.inputBlock}>
              <input
                value={login}
                onChange={handleGetLogin}
                autoFocus
                placeholder="Login"
                type="text"
              />
              <div className={styles.validation}>{validationLogin}</div>
            </div>
            <div className={styles.inputBlock}>
              <input
                onChange={handleGetPassword}
                value={password}
                placeholder="Password"
                type="password"
              />
              <div className={styles.validation}>{validationPassword}</div>
            </div>
          </div>

          <div className={styles.signInButton}>
            {login && password && (
              <button onClick={handleRegister}>Sign Up</button>
            )}
          </div>

          <div className={styles.goToHome}>
            <Link to="/">go to home</Link>
          </div>

          <div className={styles.formSubTitle}>Have an account?</div>
          <div className={styles.formNav}>
            <Link to="/login">SIGN IN NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
