import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  width: 60vw;
  height: 50px;
  background: #cffac8;
  /* color: darkgray; */
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;


export const LinksContainer = styled.div`
  display: flex;
  width: 60vw;
  height: 50px;
  background: #cffac8;
  color: darkblue;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  

  @media screen and (max-width: 800px) {
   display: none;
  }
`;


