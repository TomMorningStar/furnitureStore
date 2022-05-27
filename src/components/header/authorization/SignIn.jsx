import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, loginUser } from "../../../redux/features/user";
import styles from "./Authorization.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [validation, setValifation] = React.useState("");

  const handleLogin = () => {
    dispatch(loginUser(login, password));

    if (!user.token) {
      setValifation(() => "Неправильный логин или пароль");
    } else {
      setValifation(() => "");
    }

    setLogin("");
    setPassword("");
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
                onChange={(e) => setLogin(e.target.value)}
                autoFocus
                placeholder="Login"
                type="text"
              />
            </div>
            <div className={styles.inputBlock}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type="password"
              />

              <div className={`${styles.validation} `}>{validation}</div>
            </div>
          </div>

          <div className={styles.signInButton}>
            {login &&
              password &&
              (!!user.token ? (
                <Link to="/" onClick={() => handleLogin()}>
                  Sign In
                </Link>
              ) : (
                <Link to="#" onClick={() => handleLogin()}>
                  Sign In
                </Link>
              ))}
          </div>

          <div className={styles.goToHome}>
            <Link to="/">go to home</Link>
          </div>

          {!user.token && (
            <>
              <div className={styles.formSubTitle}>Don't have an account?</div>
              <div className={styles.formNav}>
                <Link to="/signup">SIGN UP NOW</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
