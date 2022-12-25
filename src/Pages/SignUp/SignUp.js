import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Titles from "../../components/TourHomeComponents/Titles";
import { useRegisterUserMutation } from "../../services/userAuthApi";
// import { storeToken } from '../../services/LocalStorageService';

const SignUp = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      mobile_number: data.get("mobile_number"),
      is_active: data.get("is_active"),
    };
    const res = await registerUser(actualData);
    // console.log(actualData);
    if (res.error) {
      // console.log(res.error.data);
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data);
    }
    if (res.data) {
      // console.log(typeof res.data);
      // console.log(res.data);
      // storeToken(res.data.token)
      navigate("/");
    }
  };
  return (
    <Wrapper>
      {/* {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.name ? console.log(server_error.name[0]) : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""}
      {server_error.mobile_number ? console.log(server_error.password2[0]) : ""}
      {server_error.is_active ? console.log(server_error.tc[0]) : ""} */}

      <Titles
        toursubtitle="Get into your zone"
        tourtitlestart="Sign"
        tourspan="Up"
      />
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
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
            {server_error.username[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="mobile_number"
          name="mobile_number"
          label="Mobile"
        />
        {server_error.mobile_number ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.mobile_number[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        {server_error.email ? (
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
        {/* <TextField
          margin="normal"
          required
          fullWidth
          id="password2"
          name="password2"
          label="Confirm Password"
          type="password"
        />
        {server_error.password2 ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password2[0]}
          </Typography>
        ) : (
          ""
        )} */}
        <FormControlLabel
          control={
            <Checkbox
              value={true}
              color="primary"
              name="is_active"
              id="is_active"
            />
          }
          label="I agree to term and condition."
        />
        {server_error.is_active ? (
          <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.is_active[0]}
          </span>
        ) : (
          ""
        )}
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 300px;
  margin: auto;
  padding: 50px 0;
`;

export default SignUp;
