import { useContext, useEffect, useState } from "react";
import { Input } from "../../components/Input";
import styled from "styled-components";
import api from "../../api";
// import HeaderComponent from '../../components/Header/Header'
import moment from "moment";
import PostComoponent from "./PostComoponent";
// import { Link } from 'react-router-dom'
import UpdateComponent from "./UpdateComponent";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";
import { userContext } from "../../Contexts/userContext";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  background: lightgray;
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  /* margin-top: 660px; */
  margin-bottom: 60px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
  }
`;

function UpdatePost() {
  const Token = sessionStorage.getItem("token");

  const { user, setUser } = useContext(userContext);
  const ID = sessionStorage.getItem("post-id");

  return (
    <Container>
      <br />
      {user || (Token && ID) ? (
        <UpdateComponent />
      ) : (
        <h1>ACESSO PROIBIDO!!!</h1>
      )}
      <br />
    </Container>
  );
}

export default UpdatePost;
