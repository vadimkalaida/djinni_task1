import styled from 'styled-components';
import { displayFlex } from "../../elements";

export const Main = styled.div`
  width: 100%;
  margin-top: 0;
`;

export const MainContainer = styled.div`
  width: 95%;
  margin: auto;
  ${ displayFlex('center', 'center', 'row') }
`;