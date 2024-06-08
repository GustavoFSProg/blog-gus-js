import { useState } from "react";
import { Input } from "../../components/Input";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center',
          justifyContent: 'center'

      }}>
        <div style={{display: 'flex', width: '29%', height: 'auto',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'column', 


        }}>

        <h1>LOGIN</h1>

        <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            invalid={true}
            errorMessage="Email inválido"
            />
            {/* <br /> */}

            <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            invalid={true}
            errorMessage="password inválido"
            />
            </div>
      </div>
    </>
  );
}

export default Login;
