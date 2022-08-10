import styled from "styled-components";
import { Link } from "react-router-dom";

export const EnterButton = styled(Link)`
  font-size: xx-large;
  padding: 15px 100px;
  text-decoration: none;
  font-weight: bold;
  color: wheat;
  border: 1px solid wheat;
  border-radius: 10px;
  box-shadow: 3px 3px 5px white;

  &:hover {
    background-color: wheat;
    color: black;
  }
`;

export const MenuButton = styled(Link)`
  font-size: xx-large;
  margin-top: 30px;
  color: wheat;
  background-color: transparent;
  border: none;
  text-align: left;
  //padding-left: 20px;
  font-weight: bold;
  width: fit-content;
  text-decoration: none;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;
