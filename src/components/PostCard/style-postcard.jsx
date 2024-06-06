import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  width: 60vw;
  height: auto;
  border: 1px solid gray;
  align-items: flex-start;
  margin-top: 29px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-left: -120px;
  }
`;

export const Post1 = styled.div`
  display: flex;
  width: 28rem;
  height: auto;
  /* border: 1px solid gray; */
  align-items: flex-start;
  background: white;
  padding: 37px;
  padding-bottom: 24px;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 122%;
  }
`;

export const Img1 = styled.img`
  /* height: 360.5px; */
  height: 400.5px;
  width: 50%;

  @media screen and (max-width: 550px) {
    height: 250px;
    width: 156%;
    /* margin-left: 10px; */
  }

  @media screen and (min-width: 550px) and (max-width: 800px) {
    height: 250px;
    width: 142%;
    /* margin-left: 10px; */
  }
`;

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
`;

export const Coments = styled.span`
  display: flex;
  margin-left: 12px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 6px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid gray;
  margin-top: 50px;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    margin-top: 41px;
  }
`;
