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

import { makeStyles } from '@material-ui/core/styles'
import Carder from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import BButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const Buttons = styled.button`
  display: flex;
  width: 10rem;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 200px; */
  /* padding-top: 28px; */
  padding: 10px;
  background: #526958;
  color: #ebeb6c;
  font-size: 15px;
  border-radius: 8px;
  transition: all ease 0.8s;
  z-index: 10;

  &:hover {
    background: #77a684;
    color: white;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

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
  width: 58%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;

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
  /* margin-top: -120px; */

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`

const ContainerFom = styled.div`
  display: flex;
  width: 71%;
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
  const [buttonopen, setButtonOpen] = useState(false)

  const { visible, setVisible } = useContext(userContext)

  // const navigate = useNavigate()

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
      // localStorage.setItem('abled', false)

      return console.log('Comentário com sucesso!')
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  function SetButtonFalse() {
    return setButtonOpen(false)
  }

  async function getComments() {
    try {
      const id = sessionStorage.getItem('post-id')

      // localStorage.setItem('visible', true)

      const { data } = await api.get(`/get-post-comments/${id}`)

      setComments(data)

      // console.log(comments)

      return comments
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  function handleSetButtonTrue() {
    setButtonOpen(true)
    // SetButtonFalse(false)
  }

  function SimpleCard() {
    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const bull = <span className={classes.bullet}>•</span>

    return (
      <>
        <br />
        <Carder
          style={{
            // position: 'absolute',
            background: '#ffffcc',
            width: '50%',
            zIndex: '999',
            height: 'auto',
          }}
          className={classes.root}
        >
          <CardContent>
            <Typography
              style={{ fontSize: '21px', color: '#595959' }}
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {/* <BButton
                style={{
                  color: '#e60000',
                  height: '2.2rem',
                  background: 'green',
                  cursor: 'pointer',
                }}
                size="small"
                onClick={SetButtonFalse}
              >
                FECHAR
              </BButton> */}
            </Typography>
            {/* <Typography variant="h5" component="h2"> */}
            {/* <LoginContainer>
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
            </LoginContainer> */}
            {/* </Typography> */}

            <Typography variant="h5" component="h2">
              <div
                style={{
                  display: 'flex',
                  width: '120%',
                  flexDirection: 'column',
                  background: '#f0ee9c',
                  height: 'auto',
                  padding: '18px',
                  borderRadius: '15px',
                }}
              >
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
                          marginBottom: '5px',
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

                        <span
                          style={{
                            fontWeight: 'bold',
                            color: '#3d43a6',
                            fontSize: '12px',
                            marginTop: '5px',
                          }}
                        >
                          {getDateWithoutTime(items.createdAt)}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Typography>
            <CardActions>
              <BButton
                style={{
                  color: '#e60000',
                  height: '2.2rem',
                  background: 'green',
                  cursor: 'pointer',
                }}
                size="small"
                onClick={SetButtonFalse}
              >
                FECHAR
              </BButton>
            </CardActions>
          </CardContent>
        </Carder>
      </>
    )
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

        <PostContainer style={{ zIndex: '1' }}>
          <h1>POST</h1>
          <Img1 src={post.image} alt="paos" />

          <Post1>
            <div style={{ display: 'flex', zIndex: '1' }}>
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

                <Coments></Coments>
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
            {/* <Buttons onClick={() => setButtonOpen(true)}>COMENTÁRIOS</Buttons> */}
          </Post1>
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
                    // placeholder="nome"
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
                    // placeholder="mensagem"
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
          <br />
          <Buttons onClick={handleSetButtonTrue}>COMENTÁRIOS</Buttons>
          <br />

          {buttonopen === true ? (
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SimpleCard />
            </div>
          ) : null}
        </PostContainer>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '17rem',
          }}
        >
          <br />
        </div>
      </div>
    </>
  )
}

export default PostProfile
