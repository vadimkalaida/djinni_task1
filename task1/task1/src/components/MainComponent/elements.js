import styled from 'styled-components';
import { displayFlex, textGradient } from "../../elements";

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

const mainRightPartTitleTemplate = `
  font-size: 32px;
  opacity: .5;
  margin-left: 35px;
  margin-bottom: 30px;
  @media(min-width: 320px) and (max-width: 550px) {
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  @media(min-width: 1350px) and (max-width: 1460px) {
    font-size: 28px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    font-size: 24px;
  }
  @media(min-width: 550px) and (max-width: 760px) {
    font-size: 28px;
  }
`;

const mainRightPartNumbersTemplate = `
  font-weight: 800;
  margin-left: 35px;
  margin-top: 0;
  font-size: 56px;
  @media(min-width: 1340px) and (max-width: 1460px) {
    font-size: 48px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    font-size: 40px;
  }
  @media(min-width: 550px) and (max-width: 760px) {
    font-size: 48px;
  }
  @media(min-width: 320px) and (max-width: 550px) {
    margin-left: 20px;
  }
`;

export const Main = styled.div`
  width: 92%;
  min-height: 100px;
  margin-top: 0;

`;

export const MainContainer = styled.div`
  width: 95%;
  ${ displayFlex('center', 'center', 'row') }
  margin-bottom: 120px;
  @media(min-width: 320px) and (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const MainLeftPart = styled.div`
  width: 76%;
  margin-top: 8%;
  ${ displayFlex('center', 'flex-start', 'row') }
  @media(min-width: 320px) and (max-width: 1150px) {
    width: 90%;
  }
`;

export const MainNotificationsBlock = styled.div`
  width: 95%;
  height: 1020px;
  position: relative;
  ${ mainBlockTemplate }
  @media(min-width: 1350px) and (max-width: 1460px) {
    height: 920px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    height: 840px;
  }
  @media(min-width: 320px) and (max-width: 1150px) {
    margin-bottom: 10px;
  }
  @media(min-width: 320px) and (max-width: 759px) {
    margin-top: 10px;
  }
`;

export const MainTitle = styled.p`
  ${ mainRightPartTitleTemplate }
`;

export const MainNotificationsBlockButton = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 32px;
  cursor: pointer;
  & i {
    color: #606060;
  }
  &:hover i {
    ${ textGradient('#2C62E8', '#E1E9FF', 60) }
  }
  &:active i {
    ${ textGradient('#3CABE6', '#2C62E8', 60) }
  }
`;

export const MainRightPart = styled.div`
  width: 24%;
  margin-top: 8%;
  ${ displayFlex('flex-start', 'center', 'column') }
  @media(min-width: 760px) and (max-width: 1150px) {
    flex-direction: row;
    justify-content: center;
    width: 89%;
    margin-top: 0;
  }
  @media(min-width: 320px) and (max-width: 759px) {
    justify-content: center;
    width: 89%;
    margin-top: 0;
  }
`;

export const MainRightPartBlock = styled.div`
  width: 100%;
  height: 490px;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  ${ mainBlockTemplate }
  & p {
    width: 75%;
  }
  @media(min-width: 1350px) and (max-width: 1460px) {
    height: 440px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    height: 400px;
  }
  @media(min-width: 760px) and (max-width: 1150px) {
    width: 350px;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media(min-width: 320px) and (max-width: 759px) {
    width: 96%;
  }
`;

export const MainRightPartTitle = styled.p`
  ${ mainRightPartTitleTemplate }
  @media(min-width: 1350px) and (max-width: 1460px) {
    font-size: 28px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    font-size: 24px;
  }
  @media(min-width: 550px) and (max-width: 760px) {
    font-size: 28px;
  }
`;

export const MainRightPartParagraph = styled.p`
  font-size: 24px;
  opacity: .3;
  margin-left: 35px;
  margin-top: 0;
  margin-bottom: 15px;
  @media(min-width: 1350px) and (max-width: 1460px) {
    font-size: 20px;
  }
  @media(min-width: 320px) and (max-width: 1349px) {
    font-size: 16px;
  }
  @media(min-width: 550px) and (max-width: 760px) {
    font-size: 24px;
  }
  @media(min-width: 320px) and (max-width: 550px) {
    margin-left: 20px;
  }
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
  margin-bottom: 25px;
  @media(min-width: 320px) and (max-width: 759px) {
    width: 87%;
  }
`;

export const MainRightPartViewsNumber = styled.p`
  ${ mainRightPartNumbersTemplate }
  color: #FF0800;
  margin-top: 45px;
  @media(min-width: 320px) and (max-width: 1349px) {
    margin-top: 15px;
  }
`;

export const MainRightPartEarningsNumber = styled.p`
  ${ mainRightPartNumbersTemplate }
  color: #00FF00;
  margin-top: 5px;
`;