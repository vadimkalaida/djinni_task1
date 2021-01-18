import styled from 'styled-components';
import { displayFlex } from "../../elements";

export const TopBar = styled.div`
  width: 100%;
  min-height: 0px;
  ${ displayFlex('flex-start', 'flex-start', 'column') }
`;

export const TopBarOpenButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 15px;
  position: absolute;
  z-index: 99999;
`;

export const TopBarContent = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  background: #fff;
  -webkit-box-shadow: 0px 3px 5px rgba(84,109,141,0.76);
  -moz-box-shadow: 0px 5px 3px rgba(84,109,141,0.76);
  box-shadow: 0px 3px 5px rgba(84,109,141,0.76);
  @media(min-width: 320px) and (max-width: 792px) {
    ${ displayFlex('center', 'center', 'column-reverse') }
  }
`;

export const TopBarTextInformationPart = styled.div`
  width: 70%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  margin-left: 10%;
  flex-wrap: wrap;
  @media(min-width: 855px) and (max-width: 1232px) {
    margin-left: 7%;
  }
  @media(min-width: 320px) and (max-width: 792px) {
    width: 100%;
    margin-left: 0;
  }
  @media(min-width: 320px) and (max-width: 527px) {
    ${ displayFlex('center', 'center', 'column') }
  }
`;

export const TopBarTextInformationPartBlock = styled.div`
  max-width: 200px;
  height: 50px;
  ${ displayFlex('center', 'center', 'column') }
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  text-align: center;
  @media(min-width: 954px) and (max-width: 1232px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media(min-width: 320px) and (max-width: 953px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media(min-width: 320px) and (max-width: 792px) {
    margin-bottom: 15px;
  }
`;

export const TopBarInformationTitle = styled.p`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
  @media(min-width: 954px) and (max-width: 1232px) {
    font-size: 20px;
  }
  @media(min-width: 320px) and (max-width: 953px) {
    font-size: 18px;
  }
`;

export const TopBarInformationValue = styled.p`
  font-weight: 800;
  font-size: 28px;
  margin-top: 0;
  @media(min-width: 954px) and (max-width: 1232px) {
    font-size: 24px;
  }
  @media(min-width: 320px) and (max-width: 953px) {
    font-size: 20px;
  }
  & span {
    font-size: 20px;
    opacity: .3;
    @media(min-width: 954px) and (max-width: 1232px) {
      font-size: 18px;
    }
    @media(min-width: 320px) and (max-width: 953px) {
      font-size: 16px;
    }
  }
`;

export const TopBarRight = styled.div`
  width: 25%;
  min-height: 100px;
  ${ displayFlex('flex-end', 'flex-start', 'row') }
  text-align: right;
  @media(min-width: 320px) and (max-width: 792px) {
    width: 100%;
    ${ displayFlex('center', 'flex-start', 'row') }
    margin-bottom: 0;
    min-height: 60px;
  }
`;

export const TopBarText = styled.p`
  text-transform: uppercase;
  opacity: .3;
  font-size: 18px;
  margin-right: 10px;
  margin-top: 21px;
  @media(min-width: 320px) and (max-width: 953px) {
    font-size: 14px;
  }
`;

export const TopBarSwitch = styled.label`
  width: 50px;
  height: 30px;
  display: inline-block;
  position: relative;
  margin-top: 12.5px;
  margin-right: 5%;
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  & input:checked + span {
    background: -webkit-linear-gradient(60deg, #3CABE6, #2C62E8);
  }
  & input:checked + span:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
  @media(min-width: 320px) and (max-width: 360px) {
    margin-right: 0;
  }
`;

export const TopBarSlider = styled.span`
  background: #EBEBEB;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
  transition: .2s;
  border-radius: 25px;
  &:before {
    position: absolute;
    content: "P";
    ${ displayFlex('center', 'center', 'row') }
    height: 28px;
    width: 28px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: .2s;
    border-radius: 50%;
  }
`;

export const TopBarBottomPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const TopBarBottomTextBox = styled.div`
  height: 30px;
  border: 1px solid #BEBEBE;
  border-radius: 5px;
  background: #fff;
  background: -webkit-linear-gradient(to bottom, #F1F0F0, #FEFEFE);
  background: linear-gradient(to bottom, #F1F0F0, #FEFEFE);
  ${ displayFlex('center', 'center', 'row') }
  margin-left: 5px;
  margin-right: 5px;
  &:first-child {
    cursor: pointer;
    user-select: none;
  }
  &:last-child {
    margin-right: 3%;
  }
  & p {
    font-size: 20px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    color: #BEBEBE;
    letter-spacing: .8px;
    & span {
      text-transform: uppercase;
    }
    @media(min-width: 550px) and (max-width: 953px) {
      font-size: 18px;
    }
    @media(min-width: 400px) and (max-width: 549px) {
      font-size: 14px;
    }
    @media(min-width: 320px) and (max-width: 399px) {
      font-size: 12px;
    }
  }
`;