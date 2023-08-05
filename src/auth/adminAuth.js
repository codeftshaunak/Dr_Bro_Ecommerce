// auth.js
const ACCESS_TOKEN = localStorage.getItem("access_token"); // Replace with your actual access token
export const getAuthorizationHeader = () => {
  return {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };
};
