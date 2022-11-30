import styled from "styled-components";

export const Button = styled.button`
  align-content: center;
  align-items: center;
  border: none;
  background-color: #f94600;
  cursor: pointer;
  color: #fff;
  display: flex;
  font-family: "poppins";
  font-weight: 600;
  padding: 10px 15px;
  margin-top: 9px;
  justify-content: space-evenly;
  font-size: 12px;

  &:hover {
    background-color: #fff;
    color: #f94600;
    transition: 0.3s;
    border: 1px solid #f94600;
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
