import styled from 'styled-components';
import { textGradient } from "../../elements";

export const TopBlock = styled.div`
  width: 100%;
  display: inline-block;
`;

export const Header = styled.div`
  width: 96%;
  min-height: 100px;
  background: #5685FD;
  display: inline-block;
  vertical-align: middle;
  float: right;
  @media(min-width: 1000px) and (max-width: 1600px) {
    width: 95%;
    margin-left: 5%;
  }
  @media(min-width: 660px) and (max-width: 999px) {
    width: 93%;
  }
  @media(min-width: 410px) and (max-width: 659px) {
    width: 93%;
  }
  @media(min-width: 320px) and (max-width: 409px) {
    width: 92%;
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
  width: 30%;
  display: flex;
  justify-content: flex-start;
  @media(min-width: 320px) and (max-width: 550px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeaderLogo = styled.p`
  text-transform: uppercase;
  color: #242424;
  font-size: 24px;
  @media(min-width: 320px) and (max-width: 750px) {
    font-size: 20px;
  }
`;

export const HeaderRight = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media(min-width: 320px) and (max-width: 550px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const HeaderSearchInput = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #455376;
  font-size: 22px;
  outline: none;
  padding-left: 15px;
  color: #2C62E8;
  &::placeholder {
    ${textGradient('#73ADF5', '#475261', 60)}
  }
  @media(min-width: 420px) and (max-width: 900px) {
    width: 150px;
    height: 40px;
    font-size: 18px;
  }
  @media(min-width: 320px) and (max-width: 419px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
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
  outline: none;
  font-size: 24px;
  transition: .2s;
  background: #F3F3F3;
  &:hover {
    background: #fff;
  }
  &:active {
    background: #EAEAEA;
  }
  @media(min-width: 320px) and (max-width: 900px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  @media(min-width: 550px) and (max-width: 660px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  @media(min-width: 320px) and (max-width: 419px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
    margin-left: 5px;
    margin-right: 5px;
  }
  & i {
    ${textGradient('#73ADF5', '#475261', 60)}
  }
  
`;