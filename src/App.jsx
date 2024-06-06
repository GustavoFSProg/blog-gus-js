// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import PostCard from "./components/PostCard/PostCard";
import paos from "./assets/paos.png";

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
  return (
    <>
      <AppContainer>
        <NavBar />
        <div>
          <ImageTopo src={topo} alt="topo comida" />
        </div>
          <PostCard
            title="A Casa do Pão"
            author="Gustavo Sohne"
            description="Crie um subtítulo para o post no blog que resume numa frase curta
              e atraente o seu post. Assim seus leitores vão querer continuar a
              ler...."
            date="01/06/2024"
            views="2"
            likes="10"
            image={paos}
          />
      </AppContainer>
    </>
  );
}

export default App;
