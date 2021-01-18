import styled from 'styled-components';
import { displayFlex } from "../../elements";

const mainBlockTemplate = `
  border: 1px solid #7A9FFA;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 16px -2px rgba(0,0,0,0.71);
  -moz-box-shadow: 0px 4px 16px -2px rgba(0,0,0,0.71);
  box-shadow: 0px 4px 16px -2px rgba(0,0,0,0.71);
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6334908963585435) 86%, rgba(157,184,254,0.4654236694677871) 100%);
  ${ displayFlex('flex-start', 'flex-start', 'column') }
`;

const mainRightPartNumbersTemplate = `
  font-size: 56px;
  font-weight: 800;
  margin-left: 35px;
  margin-top: 0;
`;

export const Main = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 0;
`;

export const MainContainer = styled.div`
  width: 85%;
  margin: auto;
  ${ displayFlex('center', 'center', 'row') }
  margin-bottom: 120px;
`;

export const MainLeftPart = styled.div`
  width: 76%;
  margin-top: 8%;
  ${ displayFlex('flex-start', 'flex-start', 'row') }
`;

export const MainNotificationsBlock = styled.div`
  width: 95%;
  height: 1000px;
  ${ mainBlockTemplate }
`;

export const MainTitle = styled.p`
  font-size: 32px;
  opacity: .5;
  margin-left: 35px;
  margin-bottom: 30px;
`;

export const MainRightPart = styled.div`
  width: 24%;
  margin-top: 8%;
  ${ displayFlex('flex-start', 'center', 'column') }
`;

export const MainRightPartBlock = styled.div`
  width: 100%;
  height: 470px;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  ${ mainBlockTemplate }
`;

export const MainRightPartParagraph = styled.p`
  font-size: 24px;
  opacity: .3;
  margin-left: 35px;
  margin-top: 0;
  margin-bottom: 15px;
`;

export const MainRightPartScoreNumber = styled.p`
  ${ mainRightPartNumbersTemplate }
  margin-bottom: 35px;
`;

export const MainRightPartLine = styled.div`
  width: 80%;
  height: 1px;
  background: #000;
  opacity: .3;
  margin: auto;
  margin-top: 0;
  margin-bottom: 35px;
`;

export const MainRightPartViewsNumber = styled.p`
  ${ mainRightPartNumbersTemplate }
  color: #FF0800;
  margin-top: 45px;
`;