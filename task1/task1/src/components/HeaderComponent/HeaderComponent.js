import React, { useState } from 'react';
import { TopBlock, Header, HeaderContainer, HeaderLeft, HeaderLogo, HeaderRight, HeaderSearchInput, HeaderButton } from './elements';

const HeaderComponent = () => {
  const [ isSearchInputVisible, setIsSearchInputVisible ] = useState(false);
  const [ searchValue, setSearchValue ] = useState('');

  const showSearchInput = () => {
    setIsSearchInputVisible(!isSearchInputVisible);
  };

  const handleSearchInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const searchInGoogle = (e) => {
    if(e.key === 'Enter') {
      window.open(`https://www.google.com/search?sxsrf=ALeKk02oTT4lr2uF2RYjMfaFLdYAyOBMeA%3A1610929527807&source=hp&ei=d9UEYLP9LrmajLsPqr6h6AY&q=${ searchValue }&oq=fdsf&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECc6CAgAEMkDEJECOgUIABCRAjoECAAQQzoICC4QxwEQrwE6BwgAEMkDEEM6BwgAEBQQhwI6AgguUN4KWJ0NYI0UaAFwAHgAgAGgAogB_ASSAQUwLjMuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab&ved=0ahUKEwjzlIuSnKTuAhU5DWMBHSpfCG0Q4dUDCAc&uact=5`, '_blank')
    }
  };

  return(
    <TopBlock>
      <Header>
        <HeaderContainer>
          <HeaderLeft>
            <HeaderLogo>Logo here</HeaderLogo>
          </HeaderLeft>
          <HeaderRight>
            { isSearchInputVisible ? <HeaderSearchInput type="text" name="search" placeholder="search" onChange={handleSearchInputValue} onKeyDown={searchInGoogle}/> : null }
            <HeaderButton onClick={showSearchInput}><i className="fa fa-search" aria-hidden="true"></i></HeaderButton>
            <HeaderButton><i className="fa fa-bell" aria-hidden="true"></i></HeaderButton>
            <HeaderButton><i className="fa fa-user" aria-hidden="true"></i></HeaderButton>
          </HeaderRight>
        </HeaderContainer>
      </Header>
    </TopBlock>
  );
};

export default HeaderComponent;