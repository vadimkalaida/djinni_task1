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
  @media(min-width: 401px) and (max-width: 1349px) {
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
  min-height: 1020px;
  position: relative;
  ${ mainBlockTemplate }
  @media(min-width: 1350px) and (max-width: 1460px) {
    min-height: 920px;
  }
  @media(min-width: 1151px) and (max-width: 1349px) {
    min-height: 840px;
  }
  @media(min-width: 320px) and (max-width: 1150px) {
    margin-bottom: 10px;
    min-height: 750px;
  }
  @media(min-width: 320px) and (max-width: 759px) {
    margin-top: 10px;
  }
`;

export const MainTitle = styled.p`
  ${ mainRightPartTitleTemplate }
  &:first-child {
    margin-bottom: 40px;
  }
  @media(min-width: 370px) and (max-width: 400px) {
    font-size: 20px;
  }
  @media(min-width: 320px) and (max-width: 369px) {
    font-size: 18px;
  }
`;

export const MainNotificationsBlockButton = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 38px;
  cursor: pointer;
  ${ displayFlex('center', 'center', 'row') }
  & i {
    color: #606060;
  }
  &:hover i {
    ${ textGradient('#2C62E8', '#E1E9FF', 60) }
  }
  &:active i {
    ${ textGradient('#3CABE6', '#2C62E8', 60) }
  }
  @media(min-width: 320px) and (max-width: 550px) {
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: 28px;
  }
`;

export const MainNotificationsContent = styled.div`
  width: 100%;
  ${ displayFlex('flex-start', 'center', 'column') }
  
`;

export const MainNotificationsBar = styled.div`
  width: 93%;
  min-height: 100px;
  border-bottom: 1px solid #E6E6E6; 
  position: relative;
  ${ displayFlex('flex-start', 'center', 'row') }
  &:last-child {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 68%, rgba(255,8,0,0.0760679271708683) 100%);
  }
  @media(min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
    text-align center;
  }
`;

export const MainNotificationsBarButton = styled.button`
  width: 140px;
  height: 40px;
  border: 1px solid #8AACFD;
  border-radius: 25px;
  font-size: 16px;
  background: #fff;
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  &:hover {
    background: -webkit-linear-gradient(60deg, #3CABE6, #2C62E8);
    color: #fff;
  }
  &:active {
  color: #fff;
    background: -webkit-linear-gradient(60deg, #2C62E8, #E1E9FF);
  }
  @media(min-width: 500px) and (max-width: 1030px) {
    width: 100px;
    position: absolute;
    right: 30px;
  }
  @media(min-width: 320px) and (max-width: 720px) {
    width: 80px;
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

export const MainNotificationsBarGreenCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #69BC6D;
  border-radius: 50%;
  background: rgb(132,220,136);
  background: linear-gradient(0deg, rgba(132,220,136,1) 0%, rgba(104,190,108,1) 100%);
  margin-right: 10px;
  @media(min-width: 320px) and (max-width: 500px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;

export const MainNotificationsBarDate = styled.p`
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 14px;
  opacity: .6;
`;

export const MainNotificationsBarTextBlock = styled.div`
  ${ displayFlex('center', 'flex-start', 'column') }
  &:nth-child(2) {
    width: 70%;
    @media(min-width: 320px) and (max-width: 800px) {
      width: 60%;
    }
  }
  @media(min-width: 320px) and (max-width: 500px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const MainNotificationsBarTitle = styled.p`
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 5px;
  @media(min-width: 721px) and (max-width: 1030px) {
    font-size: 18px;
  }
  @media(min-width: 320px) and (max-width: 720px) {
    font-size: 15px;
  }
  
`;

export const MainNotificationsBarParagraph = styled.p`
  width: 100%;
  font-size: 18px;
  margin-top: 0;
  &:nth-child(3) {
    width: 50%;
  }
  @media(min-width: 721px) and (max-width: 1030px) {
    font-size: 15px;
  }
  @media(min-width: 320px) and (max-width: 720px) {
    font-size: 13px;
  }
  @media(min-width: 320px) and (max-width: 500px) {
    max-width: 280px;
  }
`;

export const MainNotificationsBarProgress = styled.div`
  width: 50%;
  height: 15px;
  border: 1px solid #6797E1;
  border-radius: 35px;
  background: transparent;
  margin-left: 7%;
  margin-right: 10%;
  @media(min-width: 320px) and (max-width: 720px) {
    margin-right: 7%;
    margin-left: 9%;
    width: 40%;
  }
  @media(min-width: 320px) and (max-width: 545px) {
    margin-right: 7%;
    margin-left: 7%;
    width: 50%;
  }
  @media(min-width: 320px) and (max-width: 500px) {
    margin-right: 0;
    margin-left: 0;
    width: 80%;
    margin-bottom: 10px;
  }
`;

export const MainNotificationsBarProgressContent = styled.div`
  height: 100%;
  border-radius: 35px;
  background: linear-gradient(to right, #0E5ECC, #38C695);
  animation-duration: 12s;
  animation-name: progressBar;
  @keyframes progressBar {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
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
  @media(min-width: 401px) and (max-width: 1349px) {
    font-size: 24px;
  }
  @media(min-width: 550px) and (max-width: 760px) {
    font-size: 28px;
  }
  @media(min-width: 320px) and (max-width: 400px) {
    font-size: 20px;
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