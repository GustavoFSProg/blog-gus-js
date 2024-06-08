import { useState } from 'react'
import { Container, Header } from './style'
import fone from '../../assets/fone-2.png'
import whats from '../../assets/whats.png'


function HeaderTop() {

  return (
    <>
      <Container>
        <Header >
          {/* <img src={fone} alt="fone" width="15" style={{ marginRight: '5px' }} /> */}
          (51) 3065-2220 | Whatsapp (51) 9396-5345 /  gerusagamm@gmail.com
        </Header >
      </Container>

    </>
  )
}

export default HeaderTop
