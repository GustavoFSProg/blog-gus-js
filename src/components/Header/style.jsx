import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  /* height: 178%; */
  align-items: top;
  justify-content: center;
  /* margin-top: -10px; */
  z-index: 999;

  @media screen and (max-width: 820px) {
    /* height: 5rem; */
    margin-top: 0px;
    align-items: center;
  }
`

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 195px;

  align-items: center;
  justify-content: left;
  font-size: 0.9rem;
  padding-left: 33px;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    display: flex;

    /* margin-top: 105px; */
    /* margin-bottom: 58px; */
    /* height: auto; */
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  width: 68%;
  height: 120px;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  margin-left: 83px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`
