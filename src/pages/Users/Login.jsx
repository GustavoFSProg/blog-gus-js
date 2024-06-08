import { useState } from "react";
import { Input } from "../../components/Input";
import styled from 'styled-components'

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
  width: 107%;
  height: auto;
  background: #5c6b60;
  color: white;
  padding: 13px;
  margin-left: 40px;
  margin-top: -15px;
  border-radius: 15px;
  transition: ease all 0.9s;
  cursor: pointer;
  font-size: 16px;

  &:hover{
    background: #7a9180;
    color: yellow;
  }

`

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center',
          justifyContent: 'center'

      }}>
        <div style={{display: 'flex', width: '27%', height: 'auto',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'column', 


        }}>

        <h1>LOGIN</h1>
        {/* <div style={{display: 'flex', width: '100%', height: '5rem',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'column', 
         background: 'green'


        }}> */}
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
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            invalid={true}
            // errorMessage="password inválido"
            />

</div>




            <Button type="submit">
              LOGAR

            </Button>
            </div>
      </div>
    </>
  );
}

export default Login;
