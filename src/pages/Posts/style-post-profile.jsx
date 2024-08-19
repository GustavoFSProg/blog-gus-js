import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  /* border: 1px solid gray; */
  align-items: flex-start;
  margin-top: 29px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* margin-left: -120px; */

  }
`

export const Post1 = styled.div`
  display: flex;
  width: 26.8rem;
  height: auto;
  /* border: 1px solid gray; */
  align-items: flex-start;
  background: white;
  padding: 37px;
  padding-bottom: 39.5px;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 98%;
  }
`

export const Img1 = styled.img`
  /* height: 360.5px; */
  height: 375.5px;
  width: 39%;
  /* width: 31.5rem; */

  @media screen and (max-width: 550px) {
    height: 250px;
    width: 155%;
    /* margin-left: 10px; */
  }

  @media screen and (min-width: 550px) and (max-width: 800px) {
    height: 250px;
    width: 141%;
    /* margin-left: 10px; */
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  width: 60vw;
  /* height: auto; */
  /* align-items: flex-start; */
  margin-top: 13px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* width: 1rem; */
    /* margin-left: -120px; */
    justify-content: center;
  }
`

export const Coments = styled.span`
  display: flex;
  margin-left: 12px;
  color: black;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 6px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid gray;
  margin-top: 50px;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    margin-top: 41px;
  }
`

export const H1 = styled.h1`
  font-size: 34px;

  @media screen and (max-width: 800px) {
    font-size: 27px;
  }
`

export const ContainerDescription = styled.div`
  margin-top: -22px;
  line-height: 23px;
  font-size: 16px;
  font-family: 'Open Sans';

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 8px;
  margin-top: 0px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
