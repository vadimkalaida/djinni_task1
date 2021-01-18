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

export const displayFlex = (justifyContentValue, alignItemsValue, flexDirectionValue) => {
  return(
    `
      display: flex;
      justify-content: ${justifyContentValue};
      align-items: ${alignItemsValue};
      flex-direction: ${flexDirectionValue};
    `
  );
};

export const AppBlock = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AppContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;