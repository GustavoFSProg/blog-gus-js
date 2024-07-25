// import './App.css'
import styled from "styled-components";
import topo from "../../assets/comida-topo.png";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import api from "../../api";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";


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

const ImageTopo = styled.img`
  width: 1045px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 180px;
  }
`;
function MainPostsComponents() {
  const [posts, setPosts] = useState([])



  const navigate = useNavigate()

  async function getPosts(){

    const {data} = await api.get("/get-all-posts")


    setPosts(data)

  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  function getProfile(id){
    sessionStorage.setItem('post-id', id)

    navigate("/profile-admin")


  }

  useEffect(() => {
    getPosts()
  },[])


  return (
    <>
      <AppContainer>
        <NavBarPanel />

        <div>
          <ImageTopo src={topo} alt="topo comida" />
        </div>

        {posts.map((items) => {
          return (
            <div key={items.id} onClick={() => getProfile(items.id)}
             style={{cursor: 'pointer'}}
            >
            <PostCard
            title={items.title}
            author={items.author}
            description={items.description}
            date={getDateWithoutTime(items.createdAt)}
            views={items.views}
            likes={items.likes}
            image={items.image}
            />
            </div>
          )
        })}
     
         
      </AppContainer>
    </>
  );
}

export default MainPostsComponents;
