// import './App.css'
import styled from "styled-components";
import topo from "../../assets/comida-topo.png";
import PostCard from "../../components/PostCard/PostCard";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
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
  const [posts, setPosts] = useState([]);

  const Token = sessionStorage.getItem("token");

  const { user, setUser } = useContext(userContext);

  // const {user, setUser} = useContext(userContext)


  return (
    <>
      <AppContainer>
        {/* <NavBarPanel /> */}

        {user || Token ? (
          <MainPostsComponents />
        ) : (
          <div style={{display: 'flex', width: '100%', height: '100vh', flexDirection: 'column',
             alignItems: 'center'

          }}>
          <NavBarPanel />
          <div style={{display: 'flex', width: '100%', height: '100vh', flexDirection: 'column',
             justifyContent: 'center', alignItems: 'center'

          }}>
            <h1 >EFETUE O LOGIN!</h1>
          </div>
          </div>
        )}
      </AppContainer>
    </>
  );
}

export default MainPosts;
