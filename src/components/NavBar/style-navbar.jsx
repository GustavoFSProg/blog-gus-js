import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  width: 79vw;
  height: 50px;
  background: white;
  color: gray;
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
  background: white;
  color: gray;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  

  @media screen and (max-width: 800px) {
   display: none;
  }
`;


