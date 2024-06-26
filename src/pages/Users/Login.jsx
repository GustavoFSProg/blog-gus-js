import NavBar from "../../components/NavBar/NavBar";
import Logado from "./Logado";
import styled from "styled-components";
import { userContext } from "../../Contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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


const Button = styled.button`
display: flex;
width: 40%;
height: 2.2rem;
flex-direction: row;
align-items: center;
justify-content: center;
/* margin-bottom: 200px; */
/* padding-top: 28px; */
padding: 10px;
background: #526958;
color: #ebeb6c;
font-size: 15px;
border-radius:8px;
transition: all ease 0.8s;

&:hover{
  background: #77a684;
  color: white;

}
`

function Login() {
  const Token = sessionStorage.getItem("token");

  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate()

  function setLogout(){

    setUser(false)

    sessionStorage.clear()

    navigate("/login")
  }

  return (
    <>
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
              overflowX: "hidden",
            }}
          >
            <NavBar />

            <LoginContainer>
              <H1>USUÁRIO JÁ LOGADO!</H1>
              <Button onClick={() => setLogout()}>LOGOUT</Button>
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
