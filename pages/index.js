import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mainDivStyle = {
    padding: "1em",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);
    console.log(user);
  };

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");
  };

  return (
    <div style={mainDivStyle}>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Log In</button>
      </form>

      <button onClick={() => handleGetUser()}>User</button>
      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  );
}
