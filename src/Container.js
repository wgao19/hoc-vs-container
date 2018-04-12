// @format
import React from 'react';

const Container = props => {
  const {children, ...rest} = props;
  const injectedProps = {containerInjected: 'y'};
  return (
    <div>
      {children && children.length
        ? children.map(child =>
            React.cloneElement(child, {...injectedProps, ...rest}),
          )
        : React.cloneElement(children, {...injectedProps, ...rest})}
    </div>
  );
};

export default Container;
