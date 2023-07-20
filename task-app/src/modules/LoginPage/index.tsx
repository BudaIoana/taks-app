import { useContext, useState } from "react";

import { Button,TextField } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth, { AuthContext } from "./AuthContext";



type LoginRequest = {
    email: string;
  };
  

export default function LoginPage(){
    const [registerRequest, setRegisterRequest] =
    useState<LoginRequest>({email:''});
    const {setUser} = useContext(AuthContext)

    const {  login, } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterRequest({ ...registerRequest, [name]: value });
    
  };
  const handleLogin =() =>{
    login(registerRequest)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleChange} action={"/home"}>
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            name="email"
            onChange={handleChange}
            value={registerRequest.email}
            fullWidth
            required
            sx={{ mb: 5 }}
          />
          <Button onClick={handleLogin} variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </form>
        <p>
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  )

}