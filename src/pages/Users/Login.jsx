import NavBar from "../../components/NavBar/NavBar";
import Logado from "./Logado";
import styled from "styled-components";


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

function Login() {
  const Token = localStorage.getItem("token");

  return (
    <>
      {Token ? (
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
            <NavBar />

            <LoginContainer>
              <H1>
                USUÁRIO JÁ LOGADO!
              </H1>
            </LoginContainer>
          </div>
        </>
      ) : (
        <Logado />
      )}
    </>
  );
}

export default Login;
