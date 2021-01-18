import React, { useState, useEffect } from 'react';
import { TopBar, TopBarOpenButton, TopBarContent, TopBarTextInformationPart, TopBarTextInformationPartBlock, TopBarInformationTitle, TopBarInformationValue,
  TopBarRight, TopBarText, TopBarSwitch, TopBarSlider, TopBarBottomPart, TopBarBottomTextBox } from "./elements";

const TopBarComponent = ( props ) => {
  const [ topBarIsOpen, setTopBarIsOpen ] = useState(false);
  const [ isOnline, setIsOnline ] = useState(true);
  const [ newRequestValue, setNewRequestValue ] = useState('');
  const [ processingValue, setProcessingValue ] = useState('');
  const [ planValue, setPlanValue ] = useState('');
  const [ ratingValue, setRatingValue ] = useState('');
  const [ subRatingValue, setSubRatingValue ] = useState('');
  const [ lastScanDate, setLastScanDate ] = useState('');

  const topBarOpenButtonFunc = () => {
    setTopBarIsOpen(!topBarIsOpen);
  };

  const topBarChangeStatus = () => {
    setIsOnline(!isOnline);
  };

  const getRandomDate = (startDate, endDate) => {
    let foundDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return `${foundDate.toLocaleString('default', { month: 'short' })} ${foundDate.getDate()} ${foundDate.getFullYear()}`;
  };

  useEffect(() => {
    const plansArray = ['Basic', 'Standard', 'Premium', 'Premium+', 'Advanced'];

    setNewRequestValue(Math.floor(Math.random() * 10 + 1));
    setProcessingValue(Math.floor(Math.random() * 18 + 1));
    setPlanValue(plansArray[Math.floor(Math.random() * plansArray.length)]);
    setRatingValue(Math.floor(Math.random() * 5) + 1);


    if(ratingValue < 5) {
      setSubRatingValue(Math.floor(Math.random() * 10));
    } else {
      setSubRatingValue(0);
    }

    setLastScanDate(getRandomDate(new Date(2020, 0, 1), new Date()));
  }, [ratingValue]);

  return(
    <TopBar>
      <TopBarOpenButton onClick={topBarOpenButtonFunc}>
        <i className={topBarIsOpen ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
      </TopBarOpenButton>

      <TopBarContent style={ {display: topBarIsOpen ? 'flex' : 'none'} }>

        <TopBarTextInformationPart>

          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>new request</TopBarInformationTitle>
            <TopBarInformationValue>{ newRequestValue }</TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>processing</TopBarInformationTitle>
            <TopBarInformationValue>{ processingValue }<span>/{ processingValue + 2 }</span></TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>rating</TopBarInformationTitle>
            <TopBarInformationValue>{ ratingValue }.{ subRatingValue }</TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>plan</TopBarInformationTitle>
            <TopBarInformationValue>{ planValue }</TopBarInformationValue>
          </TopBarTextInformationPartBlock>

        </TopBarTextInformationPart>

        <TopBarRight>
          <TopBarText>switch(basic)</TopBarText>
          <TopBarSwitch>
            <input type="checkbox" />
            <TopBarSlider></TopBarSlider>
          </TopBarSwitch>
        </TopBarRight>
      </TopBarContent>

      <TopBarBottomPart style={{ display: topBarIsOpen ? 'flex' : 'none'}}>
        <TopBarBottomTextBox onClick={topBarChangeStatus}>
          <p>Status: <span style={{ color: isOnline ? '#00FF00' : '#FF0800' }}>{ isOnline ? 'online' : 'offline' }</span></p>
        </TopBarBottomTextBox>
        <TopBarBottomTextBox>
          <p>Last scan { lastScanDate }</p>
        </TopBarBottomTextBox>
      </TopBarBottomPart>
    </TopBar>
  );
};

export default TopBarComponent;