import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: email, password: password };
    fetch('http://13.234.77.93:8000/accounts/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            // Redirect to the previous page or the home page if there's no previous page
            const { from } = location.state || { from: { pathname: '/home' } };
            history.replace(from);
          });
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        {error && <div>{error}</div>}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  margin: 2rem auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.check_inp{
  display: flex;

  input{
    width: 13px !important;
    height: 20px;
    margin: 0 1rem;
  }
}

input {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  text-transform: none;
}

button {
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #0066cc;
}

label {
  font-size: 12px;
  width: 90%;
}
`

export default SignIn;
