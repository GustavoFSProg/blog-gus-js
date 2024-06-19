import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import api from "../../api";
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
} from "./style-post-profile";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import moment from 'moment'
// import { useNavigate } from "react-router-dom";


function PostProfile() {
  const [post, setPost] = useState({});

  // const navigate = useNavigate()

  // function handleDeletePost(){

  //   navigate("/delete-post")
  // }


  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }
    // const navigate = useNavigate()


  async function postGetOne() {

    try {
        const id = localStorage.getItem("post-id");


      const { data } = await api.get(`/get-post/${id}`);
      // const data = ""

      //   console.log("USUÁRIO LOGADO!");

      if (data === "") {
        return alert("Erro no Login preencha os campos!!");
      }

      setPost(data);

      //   if (!data.data) {
      //     return alert("Erro no profile preencha os campos!!");
      //   } else {

      //     // localStorage.setItem('token', data.token)

      //             // return alert("Login  realizado com sucesso!");
      //   }
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
                </Post1>
                {/* <button onClick={() => handleDeletePost()}>DELETAR POST</button> */}
              </PostContainer>
         
      </div>
    </>
  );
}

export default PostProfile;
