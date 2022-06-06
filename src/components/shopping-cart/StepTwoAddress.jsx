import React, { useState } from "react";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";

function StepTwoAddress() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (evt) => {
    // evt.preventDefault();
    setUserInfo({
      ...userInfo,
      [evt.target.name]: evt.target.value,
    });
  };

  console.log(userInfo, "userInfo");

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      justifyContent="center"
    >
      <Typography
        sx={{ mt: login || signUp ? 2 : 18, mb: login || signUp ? 0 : 12 }}
      >
        Please{" "}
        <Link
          onClick={(e) => {
            e.preventDefault();
            setLogin(true);
            setSignUp(false);
          }}
          href="#"
        >
          login
        </Link>{" "}
        or{" "}
        <Link
          onClick={(e) => {
            e.preventDefault();
            setLogin(false);
            setSignUp(true);
          }}
          href="#"
        >
          signup
        </Link>{" "}
        to continue your purchase
      </Typography>

      <Grid sx={{ display: "flex" }}>
        {login ? (
          <Grid
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mt: 2 }}>Login info</Typography>

            <TextField
              sx={{ m: 0.5 }}
              label="email"
              name="email"
              variant="outlined"
              value={userInfo.email}
              onChange={handleChange}
            />
            <TextField
              sx={{ m: 0.5 }}
              label="password"
              name="password"
              type="password"
              variant="outlined"
              value={userInfo.password}
              onChange={handleChange}
            />
            <Button sx={{ m: 0.5 }} variant="contained">
              submit
            </Button>
          </Grid>
        ) : signUp ? (
          <Grid
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mt: 2 }}>Signup info</Typography>
            <TextField
              sx={{ m: 0.5 }}
              label="name"
              name="name"
              variant="outlined"
              value={userInfo.name}
              onChange={handleChange}
            />
            <TextField
              sx={{ m: 0.5 }}
              label="email"
              name="email"
              variant="outlined"
              value={userInfo.email}
              onChange={handleChange}
            />
            <TextField
              sx={{ m: 0.5 }}
              label="password"
              name="password"
              type="password"
              variant="outlined"
              value={userInfo.password}
              onChange={handleChange}
            />
            {/*   <TextField
            sx={{ m: 0.5 }}
            label="address"
            name="address"
            variant="outlined"
            value={userInfo.address}
            onChange={handleChange}
          />
          <TextField
            sx={{ m: 0.5 }}
            label="phone"
            name="phone"
            variant="outlined"
            value={userInfo.phone}
            onChange={handleChange}
          /> */}
            <Button sx={{ m: 0.5 }} variant="contained">
              submit
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default StepTwoAddress;
