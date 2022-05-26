import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../redux/features/user";
import styles from "./Authorization.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleGetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if ((login, password)) {
      dispatch(loginUser(login, password));
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.fromWrap}>
        <div className={styles.formTitle}>
          <h1>Sign In</h1>
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
            </div>
            <div className={styles.inputBlock}>
              <input
                onChange={handleGetPassword}
                value={password}
                placeholder="Password"
                type="password"
              />

              <div className={styles.validation}>
                Неправильный логин или пароль
              </div>
            </div>
          </div>

          <div className={styles.signInButton}>
            {login && (
              <Link to="/" onClick={handleLogin}>
                Sign In
              </Link>
            )}
          </div>

          <div className={styles.goToHome}>
            <Link to="/">go to home</Link>
          </div>

          <div className={styles.formSubTitle}>Don't have an account?</div>
          <div className={styles.formNav}>
            <Link to="/signup">SIGN UP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
