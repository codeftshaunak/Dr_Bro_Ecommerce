import {
  TextField,
  Button,
  Box,
  Alert,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Titles from "../../components/TourHomeComponents/Titles";
import { storeToken } from "../../services/localStorageService";
import { useLoginUserMutation } from "../../services/userAuthApi";
// import { setUserToken } from "../../features/authSlice";
// import { getToken, storeToken } from "../../services/LocalStorageService";

const Login = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    const res = await loginUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      console.log(res.error);
      setServerError(res.error);
    }
    if (res.data) {
      // console.log(res.data);
      storeToken(res.data);
      // let { access_token } = getToken();
      // dispatch(setUserToken({ access_token: access_token }));
      navigate("/");
    }
  };
  // let { access_token } = getToken();
  // useEffect(() => {
  //   dispatch(setUserToken({ access_token: access_token }));
  // }, [access_token, dispatch]);

  return (
    <Wrapper>
      {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""}
      <Titles
        toursubtitle="Get into your zone"
        tourtitlestart="Sign"
        tourspan="In"
      />
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          name="username"
          label="Username"
        />
        {server_error.username ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.email[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        {server_error.password ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password[0]}
          </Typography>
        ) : (
          ""
        )}
        <Box textAlign="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained">
              Login
            </Button>
          )}
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </Box>
      <br />
      <Box textAlign="center" className="top__border">
        <Button variant="contained">
          <NavLink to="/signup">Create New Account</NavLink>
        </Button>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 10px 20px;
  border: 1px solid #1976d226;
  border-radius: 15px;

  .top__border {
    border-top: 1px solid black;
    padding-top: 10px;
  }
`;

export default Login;
