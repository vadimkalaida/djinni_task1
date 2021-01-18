import React from 'react';
import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LeftBarComponent from "./components/LeftBarComponent/LeftBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import TopBarComponent from "./components/TopBarComponent/TopBarComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { AppBlock, AppContent } from "./elements";

const App = () => {

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
