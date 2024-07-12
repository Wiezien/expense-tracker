import styled from "styled-components";
import Tracker from "../src/components/Tracker";
import GlobalStyles from "../src/globalStyles";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  );
};

export default App;
