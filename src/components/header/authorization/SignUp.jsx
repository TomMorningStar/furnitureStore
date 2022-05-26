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
    if (login === "") {
      return false, "The field cannot be empty";
    }
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return false, "The login must contain only latin letters";
    if (login.length < 4 || login.length > 20) {
      return false, "Login must be between 4 and 20 characters";
    }
    if (parseInt(login.substr(0, 1))) {
      return false, "Login must start with a letter";
    }
    return true;
  };

  const testPassword = (password) => {
    if (password.length < 4 || password.length > 20) {
      return false, "Password must be between 4 and 20 characters";
    }

    return true;
  };

  const handleRegister = () => {
    if (testLogin(login) === true || testPassword(password) === true) {
      dispatch(registerUser(login, password));
    }
    setLogin("");
    setPassword("");
    return (
      setValidationLogin(testLogin(login)),
      setValidationPassword(testPassword(password))
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
            <button onClick={handleRegister}>Sign Up</button>
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
