import { useRef, useMemo } from 'react';
import * as React from 'react';
import Button from './Button';

const ButtonProxy: React.FC<any> = (props) => {
  const renderCounter = useRef(0);

  const btn = useMemo(
    () => <Button renderCounter={renderCounter} callback={props.callback} />,
    [props.callback, renderCounter]
  );

  return (
    <div>
      <div> Button: {renderCounter.current} </div>
      {btn}
    </div>
  );
};

export default ButtonProxy;
