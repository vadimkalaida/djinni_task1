import React from 'react';
import { TopBlock, Header, HeaderContainer, HeaderLeft, HeaderRight, HeaderButton } from './elements';
import { BigParagraph } from "../../elements";

const HeaderComponent = () => {
  return(
    <TopBlock>
      <Header>
        <HeaderContainer>
          <HeaderLeft>
            <BigParagraph>Logo here</BigParagraph>
          </HeaderLeft>
          <HeaderRight>
            <HeaderButton><i className="fa fa-search" aria-hidden="true"></i></HeaderButton>
            <HeaderButton><i className="fa fa-bell" aria-hidden="true"></i></HeaderButton>
            <HeaderButton><i className="fa fa-user" aria-hidden="true"></i></HeaderButton>
          </HeaderRight>
        </HeaderContainer>
      </Header>
    </TopBlock>
  );
};

export default HeaderComponent;