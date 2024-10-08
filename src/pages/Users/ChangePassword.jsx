import { Input } from "../../components/Input";
import styled from "styled-components";

import { useContext, useState } from "react";

import api from "../../api";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/userContext";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107%;
  height: auto;
  background: #5c6b60;
  color: white;
  padding: 13px;
  margin-left: 35px;
  margin-top: -15px;
  border-radius: 15px;
  transition: ease all 0.9s;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #7a9180;
    color: yellow;
  }

  @media screen and (max-width: 800px) {
    width: 79.4vw;
    margin-left: 33px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 72vw;
    margin-left: -27px;
    margin-top: 20px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  width: 27%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

const H1 = styled.h1`
  display: flex;
  margin-top: 150px;

  @media screen and (max-width: 800px) {
    margin-top: -10px;
  }
`;

const ContainerFom = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 50px;
  }
`;

function ChangePassword() {
  const [password, setPassword] = useState("");

  const Token = sessionStorage.getItem("token");

  const { user, setUser } = useContext(userContext);

  const email = sessionStorage.getItem("email");


  const data = { password };

  const navigate = useNavigate();

  async function UserLogin(event) {
    event.preventDefault();

    try {
      const id = sessionStorage.getItem("user-id");

      await api.put(`/update-password/${id}`, data, Token);

      if (password === "") {
        return alert("Erro no Cadastro preencha os campos!!");
      }

      navigate("/dashboard");

      return alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      return alert(`Erro no Cadastro ${error}`);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          background: "lightgray",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <NavBarPanel />

        <div
          style={{
            display: "flex",
            background: "lightgray",

            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "hidden",
          }}
        >
          {user || Token ? (
            <>
              <div
                style={{
                  display: "flex",
                  background: "lightgray",

                  flexDirection: "column",
                  width: "100vw",
                  height: "100vh",
                  alignItems: "center",
                  // justifyContent: 'center',
                  overflowX: "hidden",
                }}
              >
                <LoginContainer>
                  <ContainerFom>
                    <H1>MUDAR A SENHA</H1>
                    <br />
                  
                   <h3>
                     {email}
                    </h3>
                    <br />
                    <br />
                    <br />
                  
                    <Form onSubmit={UserLogin}>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "5rem",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          marginTop: "-5px",
                        }}
                      >
                        <Input
                          type="password"
                          placeholder="nova senha"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          invalid={true}
                          // errorMessage="password inválido"
                        />
                      </div>

                      <Button type="submit">ATUALIZAR SENHA</Button>
                    </Form>
                  </ContainerFom>
                </LoginContainer>
              </div>
            </>
          ) : (
            <h1>EFETUE O LOGIN PARA CADASTRAR O USUÁRIO!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
