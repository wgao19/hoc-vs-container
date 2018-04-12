// @format
import * as React from 'react';

export default function<T>(WrappedComponent: React.ComponentType<T>) {
  return (variationProps: T): React.ComponentType<T> => {
    return function ComponentWithVariations(props: T) {
       return <WrappedComponent {...props} {...variationProps} />;
     };
   };
}
