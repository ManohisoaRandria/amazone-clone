import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const [user, setUser] = useState("");
  const [mdp, setMdp] = useState("");
  const history = useHistory();
  const [, dispatch] = useStateValue();

  function login(e) {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      user: "Rakoto",
    });
    history.push("/");
  }
  return (
    <div className="login">
      <div className="login__container">
        <form onSubmit={login}>
          <h5>User</h5>
          <input
            type="text"
            name="user"
            id="k"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <h5>Mdp</h5>
          <input
            type="password"
            name="mdp"
            id="s"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
          />
          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
