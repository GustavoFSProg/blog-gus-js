/* eslint-disable react/prop-types */
import {
  PostContainer,
  Post1,
  Img1,
  ViewsContainer,
  Coments,
  BottomContainer,
  H1,
  ContainerDescription,
  NameContainer
} from "./style-postcard";
// import paos from "../../assets/paos.png";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PostCard({title, id, author, image, date, description, likes, views}) {
const [reload, setReload] = useState("")

  const navigate = useNavigate()


  // async function Likes(id){
  //   await api.put(`/likes/${id}`)

  //   setReload(id)

  //   // navigate("/")


  //   location.reload()

  // }


  function getProfile(id){
    sessionStorage.setItem('post-id', id)

    navigate("/profile")


  }


  // function handleMain(){
  //   // sessionStorage.setItem('post-id', id)

  //   navigate("/")


  // }

  // useEffect(() => {
  //   handleMain()
  // },[reload])

  return (
    <>
      <PostContainer>
       <div  onClick={() => getProfile(id)} 
         style={{cursor: 'pointer', width: '100%',
         }} >

        <Img1 src={image} alt="paos" />

        </div>


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
              <span style={{ marginTop: "-1px" }}>{author}</span>
              <span style={{ marginTop: "-3px" }}>{date}</span>
          </NameContainer>
            </div>
          <div>
            <H1>{title}</H1>
          </div>
          <ContainerDescription
         
          >
            {/* <p>
              Crie um subtítulo para o post no blog que resume numa frase curta
              e atraente o seu post. Assim seus leitores vão querer continuar a
              ler....
            </p> */}
            <p>{description}</p>
          </ContainerDescription>
          <BottomContainer>
            <ViewsContainer>
              <span>{views} visualização</span>
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
              <span style={{ fontSize: "16px" }}>{likes}</span>
              <FaRegHeart
              // onClick={() => Likes(id)}
                style={{
                  color: "red",
                  fontSize: "18px",
                  marginLeft: "5px",
                }}
              />
            </div>
          </BottomContainer>
        </Post1>
      </PostContainer>
    </>
  );
}

export default PostCard;
