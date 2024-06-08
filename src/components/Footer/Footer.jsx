// import { useState } from 'react'
// import { Container, Header, ContainerLinks } from './style'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import emblema from '../../assets/emblema.png'
import MailOutline from '@material-ui/icons/MailOutline'

export const LinkMobileEmail = styled.a`
  display: none;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    width: 88%;
    font-size: 18px;
  }
`

export const SpanClick = styled.span`
  display: none;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    color: #008080;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    width: 88%;
    margin-bottom: 11px;
  }
`

export const LinkDeskTopEmail = styled.a`
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: none;
  margin-left: -18px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  height: 500px;
  padding-top: 20px;

  margin-top: -40px;
  background: #008080;
  color: white;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    display: flex;
    height: auto;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-top: 160px;
    align-items: center;
  }

  @media screen and (min-width: 900px) and (max-width: 1080px) {
    display: flex;
    height: auto;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-top: 160px;
    width: 100rem;
  }
`

const ContainerTradutora = styled.div`
  width: 90%;
  text-indent: 6px;
  margin-top: 10px;
  color: white;
`

function Footer() {
  return (
    <>
      <ContainerFooter>
        <ContainerTradutora>
          <h1
            style={{
              width: '85%',
              marginTop: '10px',
              color: 'white',
              fontSize: '22px',
              marginLeft: '10px'
            }}
          >
            Tradutora Certificada
          </h1>
          <hr
            style={{
              width: '88%',
              marginTop: '-2px',
              marginLeft: '18px',
              color: 'white'
            }}
          />

          <div
            style={{
              width: '100%',
              textIndent: '6px',
              marginTop: '10px',
              color: 'white'
            }}
          >
            <img src={emblema} alt="emblema" width="220" style={{ marginTop: '16px' }} />
          </div>
        </ContainerTradutora>

        <div
          style={{
            width: '85%',
            textIndent: '6px',
            marginTop: '10px',
            color: 'white'
          }}
        >
          <h1
            style={{
              width: '65%',
              marginTop: '10px',
              color: 'white',
              fontSize: '22px',
              marginLeft: '-6px'
            }}
          >
            Localização
          </h1>
          <hr
            style={{
              width: '88%',
              marginTop: '-2px',
              marginLeft: '18px',
              color: 'white'
            }}
          />

          <div style={{ width: '100%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.207003175042!2d-51.15582380000001!3d-29.6847776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194314fd114013%3A0x2ccaf0e00ad7665a!2sR.%20Gov.%20Valter%20Jobim%2C%20272%20-%20Primavera%2C%20Novo%20Hamburgo%20-%20RS%2C%2093344-380!5e0!3m2!1spt-BR!2sbr!4v1687981816631!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ color: 'black', border: '0', width: '270px', height: '290px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          style={{
            width: '85%',
            textIndent: '6px',
            marginTop: '10px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h1
            style={{
              width: '65%',
              marginTop: '10px',
              color: 'white',
              fontSize: '22px',
              marginLeft: '-17px'
            }}
          >
            Contatos
          </h1>
          <hr
            style={{
              width: '88%',
              marginTop: '-2px',
              marginLeft: '18px',
              color: 'white'
            }}
          />

          <div style={{ width: '100%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                marginTop: '-18px',
                color: 'white',
                marginLeft: '15px'
              }}
            >
              <h2>Endereço:</h2>
              <div style={{ marginTop: '-11px', fontSize: '18px' }}>Rua Valter Jobin 272</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                marginTop: '8px',
                color: 'white',
                marginLeft: '15px'
              }}
            >
              <h2>Email:</h2>
              <div style={{ marginTop: '-11px', fontSize: '18px' }}>
                <LinkDeskTopEmail target="_blank" href="http://mailto:gerusagamm@gmail.com">
                  <MailOutline
                    style={{
                      marginTop: '4px',
                      marginRight: '-1px',
                      marginLeft: '26px'
                    }}
                  />
                  gerusagamm@gmail.com
                </LinkDeskTopEmail>

                <LinkMobileEmail
                  target="_blank"
                  href="mailto:gerusagamm@gmail.com?subject=Olá&body=Olá, Bom dia"
                >
                  <MailOutline
                    style={{
                      marginTop: '4px',
                      marginRight: '-1px',
                      marginLeft: '26px'
                    }}
                  />{' '}
                  gerusagamm@gmail.com
                </LinkMobileEmail>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                marginTop: '8px',
                color: 'white',
                marginLeft: '15px'
              }}
            >
              <h2>Telefone:</h2>
              <div style={{ marginTop: '-11px', fontSize: '18px' }}>(51) 9-9396-5345</div>
            </div>
          </div>
        </div>
      </ContainerFooter>
    </>
  )
}

export default Footer
