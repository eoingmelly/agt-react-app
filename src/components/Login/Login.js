import React, { useState } from "react";
import PropTypes from "prop-types";

import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

import { players as playersData } from "../../data";

import "../../styles/login.css";

async function loginUserLocal(credentials) {
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

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: player,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPlayer({ ...player, [name]: value });
  };

  const signInPlayer = async (e) => {
    e.preventDefault();
    loginUser();
  };

  const signInPlayerLocal = async (e) => {
    e.preventDefault();

    //
    if (player.email && player.password) {
      let signee = players.find(
        (p) =>
          p.email.toLowerCase() === player.email.toLowerCase() &&
          p.password === player.password
      );

      if (signee) {
        const token = await loginUserLocal({
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
      <form className="form" onSubmit={signInPlayerLocal}>
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
        <button type="submit" onClick={signInPlayerLocal}>
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

const LOGIN_USER = gql`
  mutation Login_User($email: String!, $password: String!) {
    LoginUser(data: { email: $email, password: $password }) {
      success
      error
    }
  }
`;

export default Login;
