// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import PostCard from "./components/PostCard/PostCard";
// import paos from "./assets/paos.png";
import { useEffect, useState } from "react";
import api from "./api";
import moment from 'moment'


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
function App() {
  const [posts, setPosts] = useState([])

  async function getPosts(){

    const {data} = await api.get("/get-all-posts")


    setPosts(data)

  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  useEffect(() => {
    getPosts()
  },[])


  return (
    <>
      <AppContainer>
        <NavBar />
        <div>
          <ImageTopo src={topo} alt="topo comida" />
        </div>

        {posts.map((items) => {
          return (
            <div key={items.id}>
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
          {/* <PostCard
            title="A Casa do Pão"
            author="Gustavo Sohne"
            description="Crie um subtítulo para o post no blog que resume numa frase curta
              e atraente o seu post. Assim seus leitores vão querer continuar a
              ler...."
            date="01/06/2024"
            views="2"
            likes="10"
            image={paos}
          /> */}
      </AppContainer>
    </>
  );
}

export default App;
