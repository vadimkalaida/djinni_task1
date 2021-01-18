import React from 'react';
import { Main, MainContainer, MainLeftPart, MainNotificationsBlock, MainTitle, MainRightPart, MainRightPartBlock,
  MainRightPartTitle, MainRightPartParagraph, MainRightPartScoreNumber, MainRightPartLine, MainRightPartViewsNumber } from "./elements";

const MainComponent = ( ) => {
  const numberOfScores = Math.floor(Math.random() * 100) * 10;
  const numberOfViews = Math.floor(Math.random() * 10000);


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
            <MainRightPartTitle>Status</MainRightPartTitle>
            <MainRightPartParagraph>Your score</MainRightPartParagraph>
            <MainRightPartScoreNumber>{ numberOfScores }</MainRightPartScoreNumber>
            <MainRightPartLine></MainRightPartLine>
            <MainRightPartParagraph>Profile views this week:</MainRightPartParagraph>
            <MainRightPartViewsNumber>{ numberOfViews }</MainRightPartViewsNumber>
          </MainRightPartBlock>
          <MainRightPartBlock>
            <MainRightPartTitle>Earnings</MainRightPartTitle>
            <MainRightPartParagraph>Total</MainRightPartParagraph>
          </MainRightPartBlock>
        </MainRightPart>
      </MainContainer>
    </Main>
  );
};

export default MainComponent;