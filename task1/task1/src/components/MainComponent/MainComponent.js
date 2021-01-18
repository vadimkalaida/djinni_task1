import React from 'react';
import { Main, MainContainer, MainLeftPart, MainNotificationsBlock, MainTitle, MainRightPart, MainRightPartBlock, MainRightPartParagraph, MainRightPartScoreNumber, MainRightPartLine, MainRightPartViewsNumber } from "./elements";

const MainComponent = () => {
  return(
    <Main>
      <MainContainer>
        <MainLeftPart>
          <MainNotificationsBlock>
            <MainTitle>Latest notifications</MainTitle>
          </MainNotificationsBlock>
        </MainLeftPart>
        <MainRightPart>
          <MainRightPartBlock>
            <MainTitle>Status</MainTitle>
            <MainRightPartParagraph>Your score</MainRightPartParagraph>
            <MainRightPartScoreNumber>{ sessionStorage.getItem('Score') }</MainRightPartScoreNumber>
            <MainRightPartLine></MainRightPartLine>
            <MainRightPartParagraph>Profile views this week:</MainRightPartParagraph>
            <MainRightPartViewsNumber>{ sessionStorage.getItem('Views') }</MainRightPartViewsNumber>
          </MainRightPartBlock>
          <MainRightPartBlock>
            <MainTitle>Earnings</MainTitle>
            <MainRightPartParagraph>Total</MainRightPartParagraph>
          </MainRightPartBlock>
        </MainRightPart>
      </MainContainer>
    </Main>
  );
};

export default MainComponent;