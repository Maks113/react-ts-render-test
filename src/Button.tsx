import { useState, useMemo } from 'react';
import * as React from 'react';

const Button: React.FC<any> = (props) => {
  props.renderCounter.current = props.renderCounter.current + 1;
  return (
    <div>
      <button onClick={() => props.callback(Math.random())}> click </button>
    </div>
  );
};

export default Button;
