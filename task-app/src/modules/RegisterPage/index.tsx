import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialRequest = { firstName: "", lastName: "", email: "" };
export default function RegisterPage() {
  const [registerRequest, setRegisterRequest] =
    useState<RegisterRequest>(initialRequest);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setRegisterRequest({ ...registerRequest, [name]: value });
  };
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
        <h2>Register</h2>
        <form onSubmit={handleSubmit} action={"/"}>
          <Stack spacing={3} direction="row" sx={{ marginBottom: 5 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              name="firstName"
              onChange={handleSubmit}
              value={registerRequest.firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Last Name"
              name="lastName"
              onChange={handleSubmit}
              value={registerRequest.lastName}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            name="email"
            onChange={handleSubmit}
            value={registerRequest.email}
            fullWidth
            required
            sx={{ mb: 5 }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Register
          </Button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </>
  );
}
