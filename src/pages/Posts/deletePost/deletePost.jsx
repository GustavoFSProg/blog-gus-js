import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
// import { Button } from '../../components/Buttons/styled-button'

import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'
import Carder from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import BButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

import api from "../../../api";
import NavBar from '../../../components/NavBar/NavBar'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  /* background: orange; */
`

export const ContainerP = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`


export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  /* margin-top: -660px; */
  margin-bottom: 200px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  width: 30rem;
  /* height: 100rem; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 200px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

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

function DeletePost() {
  const [post, setPost] = useState({})
  const [buttonopen, setButtonOpen] = useState(false)

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const navigate = useNavigate()

  // function HandleEditar() {
  //   const id = sessionStorage.getItem('ID')

  //   navigate('/update')
  // }

  async function deletePost() {
    const id = localStorage.getItem('post-id')
    try {
      await api.delete(`/delete-post/${id}`)

      navigate('/')

      return alert(' Post Deletado!!')
    } catch (error) {
      return alert(error)
    }
  }

  function CardButton(id) {
    sessionStorage.setItem('POST-ID', id)
    return setButtonOpen(true)
    // return <SimpleCard />
    // return alert("Olá")
  }



  async function HandleAuth() {
    const id = localStorage.getItem('post-id')

    const { data } = await api.get(`/get-post/${id}`)

    setPost(data)

    console.log(post)

    return post
  }

  function SimpleCard(id) {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    const Id = sessionStorage.getItem('CONTACT')
    // console.log(`ID: ${id}`)

    return (
      <Carder
        style={{ position: 'fixed', background: '#ffffcc', width: '350px', zIndex: '9999' }}
        className={classes.root}
      >
        <CardContent>
          <Typography
            style={{ fontSize: '21px', color: '#595959' }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deseja realmente apagar esse Post?
          </Typography>
          <Typography variant="h5" component="h2">
            <BButton
              style={{ fontSize: '20px', marginRight: '20px' }}
              size="small"
              onClick={() => deletePost()}
            >
              SIM
            </BButton>
            <BButton style={{ fontSize: '20px' }} size="small" onClick={() => setButtonOpen(false)}>
              NÃO
            </BButton>
          </Typography>
        </CardContent>
        <CardActions>
          <BButton style={{ color: '#e60000' }} size="small" onClick={() => setButtonOpen(false)}>
            FECHAR
          </BButton>
        </CardActions>
      </Carder>
    )
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
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

        {buttonopen === true ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '180px'
            }}
          >
            <SimpleCard />
          </div>
        ) : // console.log('Fechado')
        null}
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
                <button onClick={() => CardButton(post.id)}>DELETAR POST</button>
              </PostContainer>

      <ContainerButtons>
        <button >EDITAR</button>

        {/* <Link
          onClick={() => CardButton(post.id)}
          // to="/delete"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'lightgray',
            marginBottom: '20px',
            transition: 'all ease 0.6s',
            cursor: 'pointer',
            color: 'black',
            padding: '8px',
            paddingLeft: '12px',
            paddingRight: '12px',
            borderRadius: '10px',
          }}
        >
          {' '}
          DELETAR
        </Link> */}
      </ContainerButtons>
      <br />
      <br />
      <br />
      <br />
    </div>

  )
}

export default DeletePost