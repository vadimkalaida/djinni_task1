import React, { useState } from 'react';
import { LeftBar, LeftBarButton, LeftBarMenu, LeftBarMenuTop, LeftBarMenuBottom } from './elements';

const LeftBarComponent = () => {
  const [openMenuIcon, setOpenMenuIcon] = useState(false);

  const openMenuClick = () => {
    setOpenMenuIcon(!openMenuIcon);
  };

  return(
    <LeftBar>
      <LeftBarButton onClick={openMenuClick}>
        <i className={ openMenuIcon ? "fa fa-times" : "fa fa-bars" } aria-hidden="true"></i>
      </LeftBarButton>
      <LeftBarMenu style={{opacity: openMenuIcon ? 1 : 0, zIndex: openMenuIcon ? 999 : -999}}>
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
  );
};

export default LeftBarComponent;
