import { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import api from "../../../api";
// import {  useNavigate } from "react-router-dom";
import {
  PostContainer,
  Post1,
  Img1,
  ViewsContainer,
  Coments,
  BottomContainer,
  H1,
  ContainerDescription,
  NameContainer,
} from "./style-delete-post";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import moment from 'moment'
import { useNavigate } from "react-router-dom";


function DeletePost() {
  const [post, setPost] = useState({});

  const navigate = useNavigate()


  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }
    // const navigate = useNavigate()


    async function postGetOne() {

      try {
          const id = sessionStorage.getItem("post-id");
  
  
        const { data } = await api.get(`/get-post/${id}`);
  
  
        if (data === "") {
          return alert("Erro no Login preencha os campos!!");
        }
  
        setPost(data);
  
      } catch (error) {
        return alert(`Erro no Login ${error}`);
      }
    }
  


  async function deleteOnePost() {

    try {
        const id = sessionStorage.getItem("post-id");
        const token = sessionStorage.getItem("token");

      if(!token){
     return alert("TOKEN Invalido!");
         
      }

       await api.delete(`/delete-post/${id}`);


        navigate('/')

    
     return alert("Post apagado com sucesso!");
      
    } catch (error) {
      return alert(`Erro no Login ${error}`);
    }
  }

  useEffect(() => {
    postGetOne()
  },[])

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
          overflowX: "hidden",
        }}
      >
        <NavBar />
       
              <PostContainer>
                <h1>POST</h1>
                <Img1 src={post.image} alt="paos" />

                <Post1>
                  <div style={{ display: "flex" }}>
                    <RxAvatar
                      style={{
                        fontSize: "35px",
                        marginTop: "-1px",
                        color: "darkblue",
                        paddingBottom: "16px",
                      }}
                    />
                    <NameContainer>
                      <span style={{ marginTop: "-1px" }}>{post.author}</span>
                      <span style={{ marginTop: "-3px" }}>{getDateWithoutTime(post.createdAt)}</span>
                    </NameContainer>
                  </div>
                  <div>
                    <H1>{post.title}</H1>
                  </div>
                  <ContainerDescription>
                   
                    <p>{post.text}</p>
                  </ContainerDescription>
                  <BottomContainer>
                    <ViewsContainer>
                      <span>{post.views} visualização</span>
                      <Coments> 0 comentário</Coments>
                    </ViewsContainer>
                    <div
                      style={{
                        display: "flex",
                        width: "55%",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginTop: "12px",
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>{post.likes}</span>
                      <FaRegHeart
                        style={{
                          color: "red",
                          fontSize: "18px",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                  </BottomContainer>
                  <button onClick={() => deleteOnePost(post.id)}>DELETAR</button>
                </Post1>
              </PostContainer>
         
      </div>
    </>
  );
}

export default DeletePost;
