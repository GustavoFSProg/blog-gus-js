// import './App.css'
import styled from "styled-components";
import { useContext } from "react";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";
import { userContext } from "../../Contexts/userContext";
import MainPostsComponents from "./mainPostsComponents";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

function MainPosts() {
  const Token = sessionStorage.getItem("token");

  const { user } = useContext(userContext);

  return (
    <>
      <AppContainer>
        {user || Token ? (
          <MainPostsComponents />
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100vh",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NavBarPanel />
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100vh",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>EFETUE O LOGIN!</h1>
            </div>
          </div>
        )}
      </AppContainer>
    </>
  );
}

export default MainPosts;
