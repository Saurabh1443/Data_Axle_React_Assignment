import React, { useState } from "react";

import { TextField, Button, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { creds } from "../../credentials";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = creds?.find((vv) => vv?.email === email);
    if (user) {
      toast.error(`User with email: ${email} already exist in the app`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password are not same", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      localStorage.setItem("creds", email);
      creds.push({ 'email': email, 'password': password });
      navigate("/");
    }
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "7%",
      }}
    >
      <Box
        style={{
          maxWidth: "max-content",
          backgroundImage: "linear-gradient(60deg, blue, violet,yellow)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Signup to see your faviourite characters</h3>

        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="Email"
            required
            color="primary"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email Or username"
            fullWidth
            sx={{ mb: 2, mt: 3, backgroundColor: "aquamarine" }}
          />
          <TextField
            label="Password"
            required
            color="primary"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
            sx={{ mb: 2, backgroundColor: "aquamarine" }}
          />
          <TextField
            label="Confirm Password"
            required
            color="primary"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            fullWidth
            sx={{ mb: 2, backgroundColor: "aquamarine" }}
          />
          <Button
            sx={{ backgroundColor: "goldenrod" }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Signup
          </Button>
        </form>
        <a style={{ color: "green" }} href="/login">
          Already have an account! Login
        </a>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Signup;
