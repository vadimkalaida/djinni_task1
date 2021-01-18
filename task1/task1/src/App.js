import React, { useEffect } from 'react';
import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LeftBarComponent from "./components/LeftBarComponent/LeftBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import TopBarComponent from "./components/TopBarComponent/TopBarComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { AppBlock, AppContent } from "./elements";

const App = () => {


  const getRandomDate = (startDate, endDate) => {
    let foundDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return `${foundDate.toLocaleString('default', { month: 'short' })} ${foundDate.getDate()} ${foundDate.getFullYear()}`;
  };

  sessionStorage.setItem('Last Scan Date', getRandomDate(new Date(2020, 0, 1), new Date()).toString());

  useEffect(() => {
    const plansArray = ['Basic', 'Standard', 'Premium', 'Premium+', 'Advanced'];

    sessionStorage.setItem('New Request Value', (Math.floor(Math.random() * 10 + 1)).toString());

    sessionStorage.setItem('Processing Value', (Math.floor(Math.random() * 18 + 1)).toString());

    sessionStorage.setItem('Plan Value', plansArray[Math.floor(Math.random() * plansArray.length)]);

    sessionStorage.setItem('Rating Value', (Math.floor(Math.random() * 5) + 1).toString());

    if(sessionStorage.getItem('Rating Value') < 5) {
      sessionStorage.setItem('SubRating Value', (Math.floor(Math.random() * 10)).toString());
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
      <MainComponent />
      <FooterComponent />
    </AppBlock>
  );
};

export default App;
