// @format
import React from "react";
import withVariations from "./withVariations";
import Container from "./Container";
import "./style.scss";

const Innocent = props => {
  const { children, ...rest } = props;
  return (
    <div>
      {JSON.stringify(rest)}
      {...children}
    </div>
  );
};
const HocUI = withVariations(Innocent)({ hocInjected: "x" });

const App = () => {
  return (
    <div>
      <div className="hoc-ui">
        <h1>HOC UI</h1>
        <HocUI
          additionalProp="hello"
          className="the-component the-component--with-hoc"
        >
          <div>child</div>
        </HocUI>
        <div>sibling</div>
      </div>
      <div className="container-ui">
        <h1>Container UI</h1>
        <Container
          additionalProp="hello"
          className="the-component the-component--with-container"
        >
          <Innocent>
            <div>child</div>
          </Innocent>
          <div>sibling</div>
        </Container>
      </div>
    </div>
  );
};

export default App;
