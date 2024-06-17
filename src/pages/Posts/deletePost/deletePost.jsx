import { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
// import { Button } from '../../components/Buttons/styled-button'

import { makeStyles } from '@material-ui/core/styles'
import Carder from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import BButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 29px;
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

const ContainerMaps = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  align-items: center;
  justify-content: space-around;
  /* background: pink; */
  margin-top: -150px;
  /* margin-bottom: 200px; */
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
    margin-top: -200px;
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
  const [dados, setDados] = useState({})
  const [buttonopen, setButtonOpen] = useState(false)

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const navigate = useNavigate()

  function HandleEditar() {
    const id = sessionStorage.getItem('ID')

    navigate('/update')
  }

  async function deletePost() {
    const id = sessionStorage.getItem('POST_ID')
    try {
      await api.delete(`/delete-post/${id}`)

      navigate('/posts')

      return alert(' Post Deletado!!')
    } catch (error) {
      return alert(error)
    }
  }

  function CardButton(id) {
    sessionStorage.setItem('POST_ID', id)
    return setButtonOpen(true)
    // return <SimpleCard />
    // return alert("Olá")
  }

  const token = sessionStorage.getItem('token')

  const id = sessionStorage.getItem('ID')

  async function HandleAuth() {
    const id = localStorage.getItem('post-id')

    const { data } = await api.get(`/get-post/${id}`)

    setDados(data)

    console.log(dados)

    return dados
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
    <Container>
      <NavBar />

      {/* <ContainerLinks style={{ height: '100px' }}>
        <Link to="/dashboard" style={{ color: 'yellow' }}>
          PAINEL
        </Link>

        <Link to="/register-post" style={{ color: 'yellow' }}>
          CADASTRO DE POST
        </Link>

        <Link to="/posts" style={{ color: 'yellow' }}>
          POSTS
        </Link>
        <Link to="/end" style={{ color: 'yellow' }}>
          EDITAR
        </Link>
      </ContainerLinks> */}

      <ContainerMaps>
        <H1>PERFIL</H1>
        {buttonopen === true ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: '600px'
            }}
          >
            <SimpleCard />
          </div>
        ) : // console.log('Fechado')
        null}
        <div key={dados.id}>
          <h2 style={{ fontSize: '34px' }}>
            <p>{dados.title}</p>
          </h2>
          <img src={dados.image} alt="imagem" width="300" />
          {/* <img
            src={`https://gerusa-site-api-juab.vercel.app/files/${dados.image}`}

            alt="imagem" width="300" /> */}

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ContainerP style={{}}>{dados.text}</ContainerP>
          </div>

          <p>{dados.desc}</p>

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ContainerP style={{}}>{dados.author}</ContainerP>
          </div>

          <p>{getDateWithoutTime(dados.createdAt)}</p>
          <br />
          <br />
          <br />
        </div>
      </ContainerMaps>

      <ContainerButtons>
        <button onClick={HandleEditar}>EDITAR</button>

        <Link
          onClick={() => CardButton(dados.id)}
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
        </Link>
      </ContainerButtons>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default DeletePost