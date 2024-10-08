// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import PostCard from "./components/PostCard/PostCard";
// import paos from "./assets/paos.png";
import { useEffect, useState } from "react";
import api from "./api";
import moment from 'moment'
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import { userContext } from "./Contexts/userContext";


const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 380px;

  @media screen and (max-width: 800px){
  padding-bottom: 220px;

  }
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

  // const {user, setUser} = useContext(userContext)


  const navigate = useNavigate()

  async function getPosts(){

    const {data} = await api.get("/get-all-posts")


    setPosts(data)

  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  // function getProfile(id){
  //   sessionStorage.setItem('post-id', id)

  //   navigate("/profile")


  // }

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
            // <div key={items.id} onClick={() => getProfile(items.id)}
            //  style={{cursor: 'pointer'}}
            // >
                <div key={items.id}
             style={{cursor: 'pointer'}} >

            
            <PostCard
            title={items.title}
            author={items.author}
            description={items.description}
            date={getDateWithoutTime(items.createdAt)}
            views={items.views}
            likes={items.likes}
            image={items.image}
            id={items.id}
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
          <br/>
         
      </AppContainer>
          <Footer />
    </>
  );
}

export default App;
