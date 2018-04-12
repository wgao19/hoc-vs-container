// @format
import React from 'react';

const Container = props => {
  const { children, ...rest } = props;
  return <div>{React.cloneElement(children, {...rest})}</div>;
};

export default Container;
