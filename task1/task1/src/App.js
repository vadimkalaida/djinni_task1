import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LeftBarComponent from "./components/LeftBarComponent/LeftBarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { AppBlock, AppContent } from "./elements";

const App = () => {
  return (
    <AppBlock>
      <HeaderComponent />
      <AppContent>
        <LeftBarComponent />
        asdsasd
      </AppContent>
      <FooterComponent />
    </AppBlock>
  );
};

export default App;
