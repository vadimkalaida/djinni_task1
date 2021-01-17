import React, { useEffect } from 'react';
import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LeftBarComponent from "./components/LeftBarComponent/LeftBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import TopBarComponent from "./components/TopBarComponent/TopBarComponent";
import { AppBlock, AppContent } from "./elements";

const App = () => {

  useEffect(() => {
    const plansArray = ['Basic', 'Standard', 'Premium', 'Premium+', 'Advanced'];

    sessionStorage.setItem('New Request Value', Math.floor(Math.random() * 10 + 1));

    sessionStorage.setItem('Processing Value', Math.floor(Math.random() * 18 + 1));

    sessionStorage.setItem('Plan Value', plansArray[Math.floor(Math.random() * plansArray.length)]);

    sessionStorage.setItem('Rating Value', Math.floor(Math.random() * 5) + 1);
    if(sessionStorage.getItem('Rating Value') < 5) {
      sessionStorage.setItem('SubRating Value', Math.floor(Math.random() * 10));
    } else {
      sessionStorage.setItem('SubRating Value', 0);
    }
  });

  return (
    <AppBlock>
      <HeaderComponent />
      <AppContent>
        <LeftBarComponent />
        <TopBarComponent />
      </AppContent>
      <FooterComponent />
    </AppBlock>
  );
};

export default App;
