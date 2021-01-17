import React, { useState } from 'react';
import { TopBar, TopBarOpenButton, TopBarContent, TopBarTextInformationPart, TopBarTextInformationPartBlock, TopBarInformationTitle, TopBarInformationValue,
  TopBarRight, TopBarText, TopBarSwitch, TopBarSlider } from "./elements";

const TopBarComponent = () => {
  const [ topBarIsOpen, setTopBarIsOpen ] = useState(false);

  const topBarOpenButtonFunc = () => {
    setTopBarIsOpen(!topBarIsOpen);
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
          <TopBarSwitch className={'switch'}>
            <input type="checkbox" />
            <TopBarSlider className={'slider round'}></TopBarSlider>
          </TopBarSwitch>
        </TopBarRight>
      </TopBarContent>
    </TopBar>
  );
};

export default TopBarComponent;