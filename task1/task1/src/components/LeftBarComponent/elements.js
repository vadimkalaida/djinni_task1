import styled from 'styled-components';
import { textGradient } from "../../elements";

const templateForMediaLeftBar = `
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


export const LeftBar = styled.div`
  width: 4%;
  height: 90vh;
  display: flex;
  transition: .2s;
  display: flex;
  flex-direction: column;
  ${templateForMediaLeftBar}
`;

export const LeftBarOpenMenuButton = styled.button`
  width: 4%;
  height: 100px;
  border: none;
  background: #232323;
  cursor: pointer;
  font-size: 32px;
  outline: none;
  position: absolute;
  top: -100px;
  & i {
    ${textGradient('#2C62E8', '#E1E9FF', 60)}
  }
  ${templateForMediaLeftBar}
  @media(min-width: 320px) and (max-width: 550px) {
    top: -142px;
    height: 142px;
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
  margin-top: 10px;
  margin-bottom: 10px;
  & i {
    ${textGradient('#6DA2E8', '#E8E8E8', 60)}
  }
  &:hover i {
    ${textGradient('#2C62E8', '#E1E9FF', 60)}
  }
  &:active i {
    ${textGradient('#3CABE6', '#2C62E8', 60)}
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
`;

export const LeftBarMenu = styled.div`
  width: 4%;
  height: 90vh;
  position: fixed;
  background: #232323;
  ${templateForMediaLeftBar}
`;

export const LeftBarMenuTop = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
`;

export const LeftBarMenuBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;