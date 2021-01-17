import styled from 'styled-components';

export const textGradient = (firstColor, secondColor, numberOfDegrees) => {
  return(
    `
      background: -webkit-linear-gradient(${numberOfDegrees}deg, ${firstColor}, ${secondColor});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  );
};

export const AppBlock = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BigParagraph = styled.p`
  text-transform: uppercase;
  color: #242424;
  font-size: 24px;
`;

export const AppContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background: #fff;
  background: -webkit-linear-gradient(to bottom, #F1F0F0, #FEFEFE);
  background: linear-gradient(to bottom, #F1F0F0, #FEFEFE);
`;