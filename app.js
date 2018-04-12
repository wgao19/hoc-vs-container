// @format
import React from 'react';
import withVariations from './withVariations';
import Container from './Container';

const UI = props => <div>{JSON.stringify(props)}</div>;
const HocUI = withVariations(UI)({hocPropA: "x"});

const App = () => {
  return (
    <div>
      <div className="hoc-ui">
        <h1>HOC UI</h1>
        <HocUI />
      </div>
      <div className="container-ui">
        <h1>Container UI</h1>
        <Container containerPropA="x">
          <UI />
        </Container>
      </div>
    </div>
  );
};

export default App;
