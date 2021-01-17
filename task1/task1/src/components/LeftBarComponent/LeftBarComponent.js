import React, { useState } from 'react';
import { LeftBar, LeftBarOpenMenuButton, LeftBarButton, LeftBarMenu, LeftBarMenuTop, LeftBarMenuBottom } from './elements';

const LeftBarComponent = () => {
  const [openMenuIcon, setOpenMenuIcon] = useState(false);

  const openMenuClick = () => {
    sessionStorage.setItem('isLeftBarMenuOpened', !openMenuIcon);
    setOpenMenuIcon(!openMenuIcon);

  };

  return(
    <>
      <LeftBarOpenMenuButton onClick={openMenuClick} style={openMenuIcon ? {position: 'fixed', top: 0} : {position: 'absolute'}}>
        <i className={ openMenuIcon ? "fa fa-times" : "fa fa-bars" } aria-hidden="true"></i>
      </LeftBarOpenMenuButton>
      <LeftBar style={{display: openMenuIcon ? 'flex' : 'none'}}>
        <LeftBarMenu>
          <LeftBarMenuTop>
            <LeftBarButton>
              <i className="fa fa-home" aria-hidden="true"></i>
            </LeftBarButton>
            <LeftBarButton>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </LeftBarButton>
            <LeftBarButton>
              <i className="fa fa-shield" aria-hidden="true"></i>
            </LeftBarButton>
            <LeftBarButton>
              <i className="fa fa-star" aria-hidden="true"></i>
            </LeftBarButton>
            <LeftBarButton>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </LeftBarButton>
            <LeftBarButton>
              <i className="fa fa-list" aria-hidden="true"></i>
            </LeftBarButton>
          </LeftBarMenuTop>
          <LeftBarMenuBottom>
            <LeftBarButton>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </LeftBarButton>
          </LeftBarMenuBottom>
        </LeftBarMenu>
      </LeftBar>
    </>
  );
};

export default LeftBarComponent;
