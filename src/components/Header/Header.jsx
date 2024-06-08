import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/Gamm.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import rosto from '../../assets/gerusa2.jpg'

const ContainerLogo = styled.div`
  display: flex;
  font-size: 37px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 40px;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-left: -30px;
  }
`

function HeaderComponent() {
  return (
    <>
      <Container>
        <Header>
          <ContainerLogo>
            <img
              src={rosto}
              alt="fone"
              width="115"
              height="108"
              style={{
                borderRadius: '100%',
                opacity: 0.8,
                marginBottom: '10px',
                zIndex: '-100',
              }}
            />
          </ContainerLogo>
          <ContainerLinks>
            <Link to="/" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>HOME</span>
            </Link>
            <Link to="/somos" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>QUEM SOU</span>
            </Link>

            <Link to="/traduction" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>SERVIÇO DE TRADUÇÃO</span>
            </Link>

            <Link to="/" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>AREAS DE ATUAÇÃO</span>
            </Link>

            <Link to="/postsList" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>BLOG</span>
            </Link>
            <Link to="/register-contacts" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>CONTATO</span>
            </Link>

            <Link to="/login" style={{ color: '#213547' }}>
              <span>ADMIN</span>
            </Link>
          </ContainerLinks>
        </Header>
      </Container>
    </>
  )
}

export default HeaderComponent
