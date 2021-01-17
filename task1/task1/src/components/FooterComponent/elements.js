import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background: #fff;
  background: -webkit-linear-gradient(90deg, #FEFEFE, #F1F0F0);
  background: linear-gradient(90deg, #FEFEFE, #F1F0F0);
`;

export const FooterContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FooterParagraph = styled.div`
  color: #000;
  opacity: .1;
  font-size: 22px;
  @media(min-width: 700px) and (max-width: 1100px) {
    font-size: 20px;
  }
  @media(min-width: 470px) and (max-width: 699px) {
    font-size: 18px;
  }
  @media(min-width: 320px) and (max-width: 469px) {
    font-size: 16px;
  }
`;