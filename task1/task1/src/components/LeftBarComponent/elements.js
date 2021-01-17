import styled from 'styled-components';

export const LeftBar = styled.div`
  width: 4%;
  background: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 1000px) and (max-width: 1600px) {
    width: 5%;
  }
  @media(min-width: 660px) and (max-width: 999px) {
    width: 7%;
  }
  @media(min-width: 410px) and (max-width: 659px) {
    width: 10%;
  }
  @media(min-width: 320px) and (max-width: 409px) {
    width: 14%;
  }
`;


export const LeftBarButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 32px;
  transition: .2s;
  outline: none;
  & i {
    background: -webkit-linear-gradient(60deg, #2C62E8, #E1E9FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LeftBarMenu = styled.div`
  width: 4%;
  height: 93%;
  background: #232323;
  position: fixed;
  top: 100px;
  transition: .2s;
  opacity: 0;
  z-index: -99999;
  & button {
    margin-top: 10px;
    margin-bottom: 10px;
    & i {
      background: -webkit-linear-gradient(60deg, #6DA2E8, #E8E8E8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:hover i {
      background: -webkit-linear-gradient(60deg, #2C62E8, #E1E9FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:active i {
      background: -webkit-linear-gradient(60deg, #3CABE6, #2C62E8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media(min-width: 320px) and (max-width: 680px) {
      font-size: 24px;
    }
    @media(min-height: 320px) and (max-height: 680px) {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    @media(min-height: 320px) and (max-height: 569px) {
      margin-top: 1px;
      margin-bottom: 1px;
    }
  }
  @media(min-width: 1000px) and (max-width: 1600px) {
    width: 5%;
  }
  @media(min-width: 660px) and (max-width: 999px) {
    width: 7%;
  }
  @media(min-width: 410px) and (max-width: 659px) {
    width: 10%;
  }
  @media(min-width: 320px) and (max-width: 409px) {
    width: 14%;
  }
`;

export const LeftBarMenuTop = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`;

export const LeftBarMenuBottom = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  & button {
    margin-bottom: 50px;
    @media(min-height: 320px) and (max-height: 680px) {
      margin-bottom: 75px;
    }
  }
`;