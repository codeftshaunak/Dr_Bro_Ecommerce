// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function SignUp() {
//   const [formData, setFormData] = useState({
//     email: "",
//     mobile_number: "",
//     username: "",
//     password: "",
//     is_active: true,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://13.234.77.93:8000/accounts/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("accessToken", data.accessToken);
//         localStorage.setItem("refreshToken", data.refreshToken);
//         setLoading(false);
//         navigate("/signin");
//       } else {
//         console.log(response);
//         throw new Error("Signup failed");
//       }
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//       console.log(error.message);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Wrapper>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Mobile Number:
//           <input
//             type="text"
//             name="mobile_number"
//             value={formData.mobile_number}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" disabled={loading}>
//           {loading ? "Loading..." : "Sign Up"}
//         </button>
//         {error && <p>{error}</p>}
//         <div class="relative px-4 bg-white">
//           <span class="text-gray-500">or</span>
//         </div>
//         <div class="relative top-2 px-4 bg-white">
//           <NavLink to="/signin" class="text-blue-500 hover:underline">Create an Account?</NavLink>
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

// export default SignUp;



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

export default function SignUn() {
  const [error, setError] = useState(null);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
    const mobile_number = formData.get("mobile_number");
    fetch("http://13.234.77.93:8000/accounts/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email, mobile_number }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          response.json().then((data) => {
            history("/signin");
          });
        } else {
          setLoading(false);
          setError('Invalid email or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })

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
              Sign Up
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
              label="Username"
              size="lg"
              className="text-lg flex items-center"
              name="username"
            />
            <div></div>
            <Input
              label="Password"
              type="password"
              size="lg"
              className="text-lg flex items-center"
              name="password"
            />
            <div></div>
            <Input
              label="Mobile"
              size="lg"
              className="text-lg flex items-center"
              name="mobile_number"
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
              {
                loading ? "Loading..." : "SignUP"
              }
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center text-lg">
              Have an account?
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

