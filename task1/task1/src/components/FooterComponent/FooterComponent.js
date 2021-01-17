import React from "react";
import { Footer, FooterContainer, FooterParagraph } from './elements';

const FooterComponent = () => {
  return(
    <Footer>
      <FooterContainer>
        <FooterParagraph>&#169;{new Date().getFullYear()} | All Rights Reserved.</FooterParagraph>
      </FooterContainer>
    </Footer>
  );
};

export default FooterComponent;