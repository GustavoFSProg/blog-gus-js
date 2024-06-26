import {  useEffect, useState } from 'react'
import styled from 'styled-components'
import api from '../../api'
// import moment from 'moment'
// import PostComoponent from './PostComoponent'
import { useNavigate } from 'react-router-dom'
// import { Button } from '../../components/Buttons/styled-button'
import TextField from '@mui/material/TextField'
import NavBarPanel from '../../components/NavbarPanel/NavBarPanel'
// import {userContext} from '../../Contexts/userContext'
 


 const Button = styled.button`
  display: flex;
  width: 40%;
height: 2.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #526958;
  color: #ebeb6c;
  font-size: 16px;
  border-radius:8px;
  transition: all ease 0.8s;

  &:hover{
    background: #77a684;
    color: white;

  }
  `


const Container = styled.div`
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

 const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-bottom: -30px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-bottom: -35px;
  }
`

export const Form = styled.form`
  display: flex;
  width: 34%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    width: 70%;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  margin-bottom: 60px;
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

function UpdateComponent() {
  // const [dados, setDados] = useState([])
  const [datas, setDatas] = useState({})
  const [permission, setPermission] = useState("")

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  // const [views, setViews] = useState('1')
  // const [likes, setLikes] = useState('1')

  const navigate = useNavigate()

  // const {user, setUser} = useContext(userContext)

  // function getDateWithoutTime(date) {
  //   return moment(date).format('DD-MM-YYYY')
  // }

  const token = sessionStorage.getItem('token')

  // async function HandlePosts() {
  //   const { data } = await api.get('/get-all-contacts')

  //   setDados(data.data)


  //   return <p></p>
  // }

  async function handleSubmit(event) {
    event.preventDefault()
    const id = sessionStorage.getItem('post-id')


    try {

      if (!token) return alert('Token Inválido, efetue o Login novamente!!')

      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('author', author)
      data.append('image', image)
      // data.append('views', views)
      // data.append('likes', likes)
      data.append('description', description)

      await api.put(`/update-post/${id}`, data)

      navigate('/main-posts')

      return alert('Edição realizado com sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  async function HandleAuth() {
    // const { data } = await api.post('/auth', token)

    if (token) {
      setPermission('OK')
    }

    return permission
  }

  async function ProfileHandle() {
    const id = sessionStorage.getItem('post-id')

    const { data } = await api.get(`/get-post/${id}`)

    setDatas(data)

    setTitle(data.title)
    setText(data.text)
    setDescription(data.description)
    setAuthor(data.author)


    return datas
  }

  useEffect(() => {
    HandleAuth()
    ProfileHandle()
  }, [])

  return (
    <Container>
      <NavBarPanel />
      <br />
     
      <H1>EDIÇÃO DE POST</H1>
      <br />
      <br />
      <br />
      <img width="390" height="300" src={datas.image} />
      <br />
      <Form onSubmit={handleSubmit}>
        <br />
        <br />
        <br />
        Imagem:
        <input
          type="file"
          id="image"
          className="botao-imagem"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <TextField
          id="outlined-controlled"
          label="Título"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
        />
        <br />
        <TextField
          id="outlined-controlled"
          label="Texto"
          value={text}
          multiline
          maxRows={18}
          style={{ width: '48rem' }}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-controlled"
          label="Descrição"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
        <br />
        <TextField
          id="outlined-controlled"
          label="Autor"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value)
          }}
        />
        <br />
        {permission === 'OK' ? <Button type="submit">Editar</Button> : 'Botao desabiitado!!'}
        <br />
       
      </Form>
    </Container>
  )
}

export default UpdateComponent
