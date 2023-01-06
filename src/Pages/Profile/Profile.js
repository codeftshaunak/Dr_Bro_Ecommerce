import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUserToken } from "../../features/authSlice";
// import ChangePassword from './auth/ChangePassword';
import { getToken, removeToken } from "../../services/localStorageService";

import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../services/userAuthApi";
// import { setUserInfo, unsetUserInfo } from '../features/userSlice';
const Dashboard = () => {
  const handleLogout = () => {
    // dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/signin");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetUserQuery(access_token);
  console.log(data);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
  //     dispatch(setUserInfo({
  //       email: data.email,
  //       name: data.name
  //     }))
  //   }
  // }, [data, isSuccess, dispatch])

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>My Profile</h1>
          <Typography variant="h5">Email: {userData.email}</Typography>
          <Typography variant="h6">Name: {userData.name}</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        {/* <Grid item sm={8}>
        <ChangePassword />
      </Grid> */}
      </Grid>
    </>
  );
};

export default Dashboard;
