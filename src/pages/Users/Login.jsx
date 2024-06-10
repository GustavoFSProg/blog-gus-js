import { useState } from "react";
import { Input } from "../../components/Input";
import styled from 'styled-components'
import NavBar from "../../components/NavBar/NavBar";
import api from "../../api";

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

  &:hover{
    background: #7a9180;
    color: yellow;
  }

  @media screen and (max-width: 800px){
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

        @media screen and (max-width: 800px){
          width: 72vw;
          margin-left: -27px; 
        }


`

const LoginContainer = styled.div`

display: flex; 
 width: 27%;
  height: auto;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         
         @media screen and (max-width: 800px){
          margin-top: -90px;
         }
 `

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function UserLogin(event){
    event.preventDefault()

    try {
          const { data } = await api.post('/login', { email, password})
    
          // }
          console.log(`TOKEN: ${data.token}`)

          if(!data.data){
            return alert("Erro no Login preencha tos campos!!")
          }else{

            return alert('Login  realizado com sucesso!')
            }

            
          
        } catch (error) {
          return alert(`Erro no Login ${error}`)
        }
      }

  
  return (
    <>
      <div style={{display: 'flex',
  background: 'lightgray',
      
      flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center',
          // justifyContent: 'center'

      }}>
        <NavBar />

        <LoginContainer 


        >

        <h1 style={{marginTop: '150px'}}>LOGIN</h1>
        <Form 
       
        onSubmit={UserLogin}>
     
 <div style={{
  display: 'flex', width: '100%', height: '5rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column', 
  marginTop: '24px',



        }}> 



        <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            invalid={true}
            // errorMessage="Email inválido"
            />

        </div>


        <div style={{
  display: 'flex', width: '100%', height: '5rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column', 
  marginTop: '-3px',


        }}> 


            <Input
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            invalid={true}
            // errorMessage="password inválido"
            />

</div>




            <Button type="submit">
              LOGAR

            </Button>
            </Form>
      </LoginContainer>
      </div>
    </>
  )
}

export default Login;
