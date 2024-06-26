/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Input } from "../../components/Input";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/userContext";
import RegisterPost from "./RegisterPost";


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


const H1 = styled.h1`
display: flex;
 margin-top: 150px;
 width: 25rem;
 align-items: center;
 justify-content: center;

  @media screen and (max-width: 800px) {
    font-size: 26px;
   
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
    margin-top: -90px;
  }
`;

function RegisterMain() {
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)

  const {user, setUser} = useContext(userContext)




  const navigate = useNavigate()

  async function handlePost(event) {
    event.preventDefault();

    try {

      
      const token = sessionStorage.getItem('token')
    if (!token) return alert('Token Inválido, efetue o Login novamente!!')

      const datas = new FormData()

      datas.append('image', image)
      datas.append('title', title)
      datas.append('text', text)
      datas.append('author', author)
      datas.append('description', description)
      // data.append('likes', likes)
      // data.append('views', views)



      if (image === '' || title === '' || text === '' || author === '' || description === '') {
        return alert('ERRO: Prencha todos os campos!')
        
        
        
      } else {
      const blog = await api.post("/create-post", datas, token);

        if(!blog){
          return alert ("Erro no cadastro!!")
        }

        navigate('/')
     
        // return alert("Post NÃO cadastrado!");
        return alert("Post cadastrado com sucesso!");
      }
     
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
  overflowX: 'hidden',

        }}
      >
        {/* <NavBar /> */}

        <LoginContainer>
            {user ? <RegisterPost />  :   (<>
         <NavBar />
            
            <H1>FAÇA O LOGIN PARA ENTRAR!!</H1></> )}
        </ LoginContainer>
         
      </div>
    </>
  );
}

export default RegisterMain;
