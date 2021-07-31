import styled from "styled-components";

import Body from "./components/Body";
import Footer from "./components/Footer";
import FlexContainer from "./components/FlexContainer";

import "./style";

const AppContainer = styled(FlexContainer)`
  flex-direction: column;
  width: calc(100% - 2em);
  height: calc(100% - 2em);
  max-width: 1440px;
  margin: 0 auto;
  padding: 1em;
`;

export default function App() {
  return (
    <AppContainer>
      <Body />
      <Footer />
    </AppContainer>
  );
}
