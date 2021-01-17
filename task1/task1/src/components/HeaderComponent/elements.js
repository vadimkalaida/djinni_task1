import styled from 'styled-components';

export const TopBlock = styled.div`
  width: 100%;
  display: flex;
`;

export const Header = styled.div`
  width: 96%;
  min-height: 100px;
  background: #5685FD;
  @media(min-width: 1000px) and (max-width: 1600px) {
    width: 94%;
  }
  @media(min-width: 660px) and (max-width: 999px) {
    width: 92%;
  }
  @media(min-width: 410px) and (max-width: 659px) {
    width: 90%;
  }
  @media(min-width: 320px) and (max-width: 409px) {
    width: 86%;
  }
`;

export const HeaderContainer = styled.div`
  width: 95%;
  min-height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  @media(min-width: 320px) and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HeaderLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  @media(min-width: 320px) and (max-width: 550px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeaderRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media(min-width: 320px) and (max-width: 550px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const HeaderButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #455376;
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 24px;
  transition: .2s;
  background: #F3F3F3;
  &:hover {
    background: #fff;
  }
  &:active {
    background: #EAEAEA;
  }
  & i {
    background: -webkit-linear-gradient(60deg, #73ADF5, #475261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
  @media(min-width: 320px) and (max-width: 550px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;