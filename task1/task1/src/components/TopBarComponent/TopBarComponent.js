import React, { useState } from 'react';
import { TopBar, TopBarOpenButton, TopBarContent, TopBarTextInformationPart, TopBarTextInformationPartBlock, TopBarInformationTitle, TopBarInformationValue,
  TopBarRight, TopBarText, TopBarSwitch, TopBarSlider, TopBarBottomPart, TopBarBottomTextBox } from "./elements";

const TopBarComponent = ( props ) => {
  const [ topBarIsOpen, setTopBarIsOpen ] = useState(false);
  const [ isOnline, setIsOnline ] = useState(true);

  const topBarOpenButtonFunc = () => {
    setTopBarIsOpen(!topBarIsOpen);
  };

  const topBarChangeStatus = () => {
    setIsOnline(!isOnline);
  };

  return(
    <TopBar>
      <TopBarOpenButton onClick={topBarOpenButtonFunc}>
        <i className={topBarIsOpen ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
      </TopBarOpenButton>

      <TopBarContent style={ {display: topBarIsOpen ? 'flex' : 'none'} }>

        <TopBarTextInformationPart>

          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>new request</TopBarInformationTitle>
            <TopBarInformationValue>{ sessionStorage.getItem('New Request Value') }</TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>processing</TopBarInformationTitle>
            <TopBarInformationValue>{ sessionStorage.getItem('Processing Value') }<span>/{ parseInt(sessionStorage.getItem('Processing Value')) + 2 }</span></TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>rating</TopBarInformationTitle>
            <TopBarInformationValue>{ sessionStorage.getItem('Rating Value') }.{ sessionStorage.getItem('SubRating Value') }</TopBarInformationValue>
          </TopBarTextInformationPartBlock>
          <TopBarTextInformationPartBlock>
            <TopBarInformationTitle>plan</TopBarInformationTitle>
            <TopBarInformationValue>{ sessionStorage.getItem('Plan Value') }</TopBarInformationValue>
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
          <p>Last scan { sessionStorage.getItem('Last Scan Date') }</p>
        </TopBarBottomTextBox>
      </TopBarBottomPart>
    </TopBar>
  );
};

export default TopBarComponent;