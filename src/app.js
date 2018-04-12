// @format
import React from 'react';
import withVariations from './withVariations';
import Container from './Container';

const UI = props => {
  const {children, ...rest} = props;
  return (
    <div>
      {JSON.stringify(rest)}
      {...children}
    </div>
  );
};
const HocUI = withVariations(UI)({hocInjected: 'x'});

const App = () => {
  return (
    <div>
      <div className="hoc-ui">
        <h1>HOC UI</h1>
        <HocUI additionalProp="hello">
          <div>child</div>
        </HocUI>
        <div>sibling</div>
      </div>
      <div className="container-ui">
        <h1>Container UI</h1>
        <Container additionalProp="hello">
          <UI>
            <div>child</div>
          </UI>
          <div>sibling</div>
        </Container>
      </div>
    </div>
  );
};

export default App;
