import React, { useState } from "react";
import PropTypes from "prop-types";

import { players as playersData } from "../../data";

import "../../styles/login.css";

async function loginUser(credentials) {
  console.log("calling fetch with ", credentials);

  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [players, setPlayers] = useState(playersData);

  const [player, setPlayer] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPlayer({ ...player, [name]: value });
    console.log(name, value);
    console.log(player);
  };

  const signInPlayer = async (e) => {
    e.preventDefault();

    if (player.email && player.password) {
      let signee = players.find(
        (p) =>
          p.email.toLowerCase() === player.email.toLowerCase() &&
          p.password === player.password
      );

      if (signee) {
        const token = await loginUser({
          email: signee.email,
          password: signee.password,
        });

        setToken(token);
      } else {
        setPlayer({ ...player, email: "", password: "" });
      }
    }
  };

  return (
    <article className="login-wrapper">
      <form className="form" onSubmit={signInPlayer}>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={player.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={player.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={signInPlayer}>
          Log In
        </button>
      </form>
      {/*       
      {players.map((player) => {
        const { id, displayName, email } = player;
        return (
          <div key={id} className="item">
            <h4>{displayName}</h4>
          </div>
        );
      })} */}
    </article>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
