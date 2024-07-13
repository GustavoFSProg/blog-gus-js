import { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import api from '../../api'
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
} from './style-post-profile'
import { RxAvatar } from 'react-icons/rx'
import { FaRegHeart } from 'react-icons/fa6'
import moment from 'moment'
import styled from 'styled-components'
import { Input } from '../../components/Input'
import { userContext } from '../../Contexts/userContext'

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
`

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
    margin-top: 20px;
  }
`

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`

const ContainerFom = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 50px;
  }
`
// import { useNavigate } from "react-router-dom";

function PostProfile() {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const { visible, setVisible } = useContext(userContext)

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
      const id = sessionStorage.getItem('post-id')

      const { data } = await api.get(`/get-post/${id}`)
      // const data = ""

      if (data === '') {
        return alert('Erro no Login preencha os campos!!')
      }

      setPost(data)

      //   if (!data.data) {
      //     return alert("Erro no profile preencha os campos!!");
      //   } else {

      //     // sessionStorage.setItem('token', data.token)

      //             // return alert("Login  realizado com sucesso!");
      //   }
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  const post_id = sessionStorage.getItem('post-id')
  const dados = {
    name,
    post_id,
    comment,
  }
  async function createComment(event) {
    event.preventDefault()

    try {
      await api.post('/create-comment', dados)

      setName('')
      setComment('')

      setVisible(false)
      localStorage.setItem('abled', false)

      return console.log('Comentário com sucesso!')
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  async function getComments() {
    try {
      const id = sessionStorage.getItem('post-id')

      // localStorage.setItem('visible', true)

      const { data } = await api.get(`/get-post-comments/${id}`)

      setComments(data)

      console.log(comments)

      return comments
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  useEffect(() => {
    postGetOne()
    getComments()
  }, [comments])

  return (
    <>
      <div
        style={{
          display: 'flex',
          background: 'lightgray',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          overflowX: 'hidden',
        }}
      >
        <NavBar />

        <PostContainer>
          <h1>POST</h1>
          <Img1 src={post.image} alt="paos" />

          <Post1>
            <div style={{ display: 'flex' }}>
              <RxAvatar
                style={{
                  fontSize: '35px',
                  marginTop: '-1px',
                  color: 'darkblue',
                  paddingBottom: '16px',
                }}
              />
              <NameContainer>
                <span style={{ marginTop: '-1px' }}>{post.author}</span>
                <span style={{ marginTop: '-3px' }}>{getDateWithoutTime(post.createdAt)}</span>
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

                <Coments>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '17rem',
                      // background: 'green',
                    }}
                  >
                    <LoginContainer>
                      <ContainerFom>
                        <Form onSubmit={createComment}>
                          <div
                            style={{
                              display: 'flex',
                              width: '100%',
                              height: '5rem',
                              // alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                              marginTop: '36px',
                            }}
                          >
                            <span style={{ marginBottom: '6px' }}>Nome:</span>

                            <Input
                              type="text"
                              placeholder="nome"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              invalid={true}
                              // errorMessage="Email inválido"
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              width: '100%',
                              height: '5rem',
                              // alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                              marginTop: '16px',
                              marginBottom: '6px',
                            }}
                          >
                            <span style={{ marginBottom: '6px' }}>Comentário:</span>
                            <Input
                              type="text"
                              placeholder="mensagem"
                              onChange={(e) => setComment(e.target.value)}
                              value={comment}
                              invalid={true}
                              // errorMessage="Email inválido"
                            />
                          </div>
                          {visible === true ? (
                            <Button type="submit">COMENTAR</Button>
                          ) : (
                            <h3>BOTÃO DESABILITADO</h3>
                          )}
                        </Form>
                      </ContainerFom>
                    </LoginContainer>
                    <br />
                    <h3>COMENTÁRIOS</h3>
                    {comments.map((items) => {
                      return (
                        <div key={items.id}>
                          <div
                            style={{
                              display: 'flex',
                              width: '90%',
                              flexDirection: 'column',
                              background: '#ebe99b',
                              height: 'auto',
                              marginBottom: '15px',
                              padding: '18px',
                              borderRadius: '15px',
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 'bold',
                                color: '#5459ba',
                                fontSize: '13px',
                              }}
                            >
                              Nome: {items.user_name}
                            </span>
                            <span
                              style={{
                                fontWeight: 'bold',
                                color: '#3d43a6',
                                fontSize: '14px',
                              }}
                            >
                              Comentario: {items.comment}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Coments>
              </ViewsContainer>
              <div
                style={{
                  display: 'flex',
                  width: '55%',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: '12px',
                }}
              >
                <span style={{ fontSize: '16px' }}>{post.likes}</span>
                <FaRegHeart
                  style={{
                    color: 'red',
                    fontSize: '18px',
                    marginLeft: '5px',
                  }}
                />
              </div>
            </BottomContainer>
          </Post1>
          {/* <button onClick={() => handleDeletePost()}>DELETAR POST</button> */}
        </PostContainer>
      </div>
    </>
  )
}

export default PostProfile
