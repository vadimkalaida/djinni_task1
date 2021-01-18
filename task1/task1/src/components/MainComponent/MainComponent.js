import React, { useState, useEffect } from 'react';
import { Main, MainContainer, MainLeftPart, MainNotificationsBlock, MainTitle, MainRightPart, MainRightPartBlock,
  MainRightPartTitle, MainRightPartParagraph, MainRightPartScoreNumber, MainRightPartLine, MainRightPartViewsNumber, MainRightPartEarningsNumber } from "./elements";

const MainComponent = ( ) => {
  const numberOfScores = Math.floor(Math.random() * 100) * 10;
  const numberOfViews = Math.floor(Math.random() * 10000);
  const [ earningsForDays, setEarningsForDays ] = useState(0);

  const getEarningsForDay = () => {
    let maxNumberOfMoneyForDay = 283.24;
    let amountOfDays = new Date().getDate();
    let sumOfMoney = 0;
    for(let i = 0; i < amountOfDays; i++) {
      sumOfMoney += Math.random() * maxNumberOfMoneyForDay;
    }

    setEarningsForDays(sumOfMoney.toFixed(2));
  };

  useEffect(getEarningsForDay, []);

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
            <MainRightPartEarningsNumber>4291.65&euro;</MainRightPartEarningsNumber>
            <MainRightPartLine></MainRightPartLine>
            <MainRightPartParagraph>Your earnings on { new Date().toLocaleString('default', { month: 'long' }) }</MainRightPartParagraph>
            <MainRightPartEarningsNumber>{ earningsForDays }&euro;</MainRightPartEarningsNumber>
          </MainRightPartBlock>
        </MainRightPart>
      </MainContainer>
    </Main>
  );
};

export default MainComponent;