import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LeftBarComponent from "./components/LeftBarComponent/LeftBarComponent";
import { AppBlock, AppContent } from "./elements";

const App = () => {
  return (
    <AppBlock>
      <HeaderComponent />
      <AppContent>
        <LeftBarComponent />
        asdsasd
      </AppContent>
    </AppBlock>
  );
};

export default App;
