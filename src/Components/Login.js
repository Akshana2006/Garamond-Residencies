import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate ()
  const onClickHandler = () => navigate(`/Home`)
  return (
    <>
      <div className={styles.intro}>
            <h1>Welcome to the Official Site of Garamond Residencies</h1>

            <div className={styles.loginbox}>
          <h2>Login</h2>
          <div className={styles.input}>
                <div className={styles.user}>
                <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                ></input>
                </div>
                <div className={styles.password}>
                <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                ></input>
            </div>
          </div>
          <div className={styles.showPass}>
             <input
              type="checkbox"
              name="showPasword"
              value={showPassword}
              onChange={(e) => setShowPassword(e.target.value)}
              required
            />{" "}
            Show Password
          </div>
          <div className={styles.button}>
             <button type="submit" onClick={onClickHandler}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
