// import { useState } from 'react'
// import { Container, Header, ContainerLinks } from './style'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import emblema from '../../assets/emblema.png'
// import MailOutline from '@material-ui/icons/MailOutline'



export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px;
  align-items: center;
  justify-content: center;

  background: #37383b;
  color: #9c8483;
/* 
  @media screen and (max-width: 900px) {
   
  } */
  `



function Footer() {
  return (
    <>
      <ContainerFooter>
        <h5>gustavo.prog40@gmail.com</h5>
      </ContainerFooter>
    </>
  )
}

export default Footer
