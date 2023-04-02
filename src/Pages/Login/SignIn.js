// import React, { useContext, useState } from 'react';
// import styled from 'styled-components';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const history = useNavigate();
//   const location = useLocation();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = { username: email, password: password };
//     fetch('http://13.234.77.93:8000/accounts/token/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.ok) {
//           response.json().then((data) => {
//             const access_token = data.access;
//             const refresh_token = data.refresh;
//             localStorage.setItem('access_token', access_token);
//             localStorage.setItem('refresh_token', refresh_token)
//             // Redirect to the previous page or the home page if there's no previous page
//             const { from } = location.state || { from: { pathname: '/' } };
//             history(from);
//           });
//         } else {
//           setError('Invalid email or password.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <Wrapper>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign In</h1>
//         {error && <div>{error}</div>}
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </label>
//         <button type="submit">Sign In</button>
//         <div class="relative px-4 bg-white">
//           <span class="text-gray-500">or</span>
//         </div>
//         <div class="relative top-2 px-4 bg-white">
//           <NavLink to="/signup" class="text-blue-500 hover:underline">Have an Account?</NavLink>
//         </div>
//       </form>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
// form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 400px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   padding: 24px;
//   margin: 2rem auto;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// }

// h1 {
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
// }

// .check_inp{
//   display: flex;

//   input{
//     width: 13px !important;
//     height: 20px;
//     margin: 0 1rem;
//   }
// }

// input {
//   display: block;
//   width: 100%;
//   margin-bottom: 16px;
//   padding: 12px;
//   border: 1px solid #dddfe2;
//   border-radius: 4px;
//   text-transform: none;
// }

// button {
//   display: block;
//   width: 100%;
//   margin-top: 16px;
//   padding: 12px;
//   background-color: #0077ff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #0066cc;
// }

// label {
//   font-size: 12px;
//   width: 90%;
// }
// `

// export default SignIn;



import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 3rem 0;
  font-size: 1rem;
  input {
    height: 40px;
  }
`;

export default function SignIn(props) {
  props.funNav(false);

  const [error, setError] = useState(null);
  const history = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("email");
    const password = formData.get("password");
    fetch("http://13.234.77.93:8000/accounts/token/login/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const access_token = data.access;
            const refresh_token = data.refresh;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token)
            // Redirect to the previous page or the home page if there's no previous page
            const { from } = location.state || { from: { pathname: '/' } };
            history(from);
          });
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .then((data) => {
        console.log(data);
        // Handle successful login
      })
      .catch((error) => {
        console.error("There was a problem with the login request:", error);
        // Handle login error
      });
  };

  return (
    <Wrapper>
      <Card className="w-1/3 m-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-20 place-items-center w-25"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-6">
            <Input
              label="Email"
              size="lg"
              className="text-lg flex items-center"
              name="email"
            />
            <div></div>
            <Input
              label="Password"
              type="password"
              size="lg"
              className="text-lg flex items-center"
              name="password"
            />
          </CardBody>
          <br />
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              className="text-lg"
              type="submit"
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center text-lg">
              Don't have an account?
              <Typography
                as="a"
                href="/signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold text-lg"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </Wrapper>
  );
}
