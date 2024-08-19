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


   async function getProfile(id){

    sessionStorage.setItem('post-id', id)

    await api.put(`/views/${id}`)

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
      <PostContainer onClick={() => getProfile(id)}>
     
        <Img1 src={image} alt="paos" />

       


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
                height:'auto',
              }}
            >
              <span style={{ fontSize: "16px" }}>{likes}</span>
              <FaRegHeart
                style={{
                  color: "red",
                  fontSize: "17px",
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
