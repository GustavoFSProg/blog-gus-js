// import './App.css'
import styled from "styled-components";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import api from "../../api";
import moment from 'moment'
import { useNavigate } from "react-router-dom";


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

function MainPostsPainel() {
  const [posts, setPosts] = useState([])

  // const {user, setUser} = useContext(userContext)


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

export default MainPostsPainel;
